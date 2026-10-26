/**
 * Bridges the Obsidian vault configuration into Quartz.
 *
 * - `readPreambleMacros` turns the vault-root `preamble.sty` (Extended MathJax plugin) into
 *   MathJax macros so that the semantic quantity macros render at build time.
 * - `ObsidianMarkdownCompat` fixes differences between Obsidian's and Quartz's Markdown parsing.
 * - `ObsidianPluginBlocks` keeps code blocks that belong to an Obsidian plugin (e.g. `graph`,
 *   `graph3d`) unhighlighted so that the plugin can render them in the browser.
 * - `ObsidianPluginRuntime` publishes the enabled render plugins (their unmodified `main.js`,
 *   `styles.css`, `data.json`, and bundled assets) together with a small Obsidian API shim
 *   that runs them on every page.
 */
import fs from "fs"
import path from "path"
import { visit } from "unist-util-visit"
import { Root, Code, Image } from "mdast"
import { findAndReplace } from "mdast-util-find-and-replace"
import { QuartzEmitterPlugin, QuartzTransformerPlugin } from "../types"
import { FilePath, FullSlug, joinSegments, QUARTZ, slugifyFilePath } from "../../util/path"
import { glob } from "../../util/glob"
import { write } from "../emitters/helpers"

export type MathJaxMacros = Record<string, string | [string, number]>

const RUNTIME_DIR = "static/obsidian"

/** Returns the content of the group that starts at `src[start] === "{"` and the index after it. */
function readGroup(src: string, start: number): [string, number] {
  let depth = 0
  for (let i = start; i < src.length; i++) {
    const ch = src[i]
    if (ch === "\\") {
      i++
    } else if (ch === "{") {
      depth++
    } else if (ch === "}") {
      depth--
      if (depth === 0) {
        return [src.slice(start + 1, i), i + 1]
      }
    }
  }
  throw new Error(`Unbalanced braces in LaTeX preamble at offset ${start}`)
}

/** Parses `\newcommand`/`\renewcommand`/`\def`-free preambles into MathJax macro definitions. */
export function readPreambleMacros(preamblePath: string): MathJaxMacros {
  if (!fs.existsSync(preamblePath)) {
    return {}
  }

  const src = fs
    .readFileSync(preamblePath, "utf8")
    .replace(/^\uFEFF/, "")
    .split(/\r?\n/)
    .map((line) => line.replace(/(^|[^\\])%.*$/, "$1"))
    .join("\n")

  const macros: MathJaxMacros = {}
  const commandPattern = /\\(?:re)?newcommand\*?\s*/g
  let match: RegExpExecArray | null
  while ((match = commandPattern.exec(src)) !== null) {
    let i = match.index + match[0].length
    let name: string
    if (src[i] === "{") {
      ;[name, i] = readGroup(src, i)
    } else {
      const nameMatch = /^\\[A-Za-z]+/.exec(src.slice(i))
      if (!nameMatch) continue
      name = nameMatch[0]
      i += name.length
    }

    let argCount = 0
    const argMatch = /^\s*\[(\d)\]/.exec(src.slice(i))
    if (argMatch) {
      argCount = Number(argMatch[1])
      i += argMatch[0].length
    }

    while (/\s/.test(src[i])) i++
    if (src[i] !== "{") continue
    const [body, end] = readGroup(src, i)
    commandPattern.lastIndex = end

    const key = name.trim().replace(/^\\/, "")
    macros[key] = argCount > 0 ? [body, argCount] : body
  }

  return macros
}

/** Applies `transform` to the parts of a Markdown document outside fenced code blocks. */
function mapOutsideCode(src: string, transform: (text: string) => string): string {
  const lines = src.split("\n")
  const chunks: { code: boolean; text: string }[] = []
  let fence: string | null = null
  for (const line of lines) {
    const marker = /^[ \t>]*(`{3,}|~{3,})/.exec(line)?.[1]
    const code = fence !== null || marker !== undefined
    if (fence === null && marker) {
      fence = marker
    } else if (fence !== null && marker && marker[0] === fence[0] && marker.length >= fence.length) {
      fence = null
    }
    const last = chunks[chunks.length - 1]
    if (last && last.code === code) last.text += `\n${line}`
    else chunks.push({ code, text: line })
  }

  return chunks.map(({ code, text }) => (code ? text : transform(text))).join("\n")
}

/**
 * Obsidian keeps the alias of a wikilink as plain text, e.g. the caption in
 * `![[figure.svg|**Fig. 1.1** Description]]`. Quartz detects wikilinks only after the Markdown
 * parser has split emphasis, code and math out of the text, which breaks such links. Escaping
 * these characters keeps the alias in one text node; the parser removes the escapes again.
 * Image embeds whose alias contains brackets are handled by `imageEmbedRegex` below.
 */
function escapeWikilinkAliases(text: string): string {
  return text.replace(
    /(!?\[\[[^\[\]|\n]*\|)(.*?)(\]\])/g,
    (_match, head: string, alias: string, tail: string) =>
      head + alias.replace(/(^|[^\\])(?=[*_`$<~=])/g, "$1\\") + tail,
  )
}

/**
 * Obsidian renders `$$...$$` as display math even when the delimiters share a line with the
 * formula. remark-math needs them on their own lines, otherwise the formula is parsed as inline
 * math within a paragraph. This moves the delimiters onto separate lines and keeps blockquote
 * and callout prefixes (`> `).
 */
function normalizeDisplayMath(text: string): string {
  return text.replace(/\$\$([\s\S]+?)\$\$/g, (match, body: string, offset: number) => {
    const lineStart = text.lastIndexOf("\n", offset - 1) + 1
    const lineEnd = text.indexOf("\n", offset + match.length)
    const prefix = /^[ \t]*(?:>[ \t]?)*/.exec(text.slice(lineStart))![0]
    const before = text.slice(lineStart + prefix.length, offset)
    const after = text.slice(offset + match.length, lineEnd < 0 ? undefined : lineEnd)
    if (!body.includes("\n") && (before.trim() !== "" || after.trim() !== "")) {
      // `$$x$$` inside running text stays as it is.
      return match
    }

    const inner = body.replace(/^[ \t]*\n?/, "").replace(/\n[ \t>]*$/, "").trimEnd()
    const head = before.trim() === "" ? "" : `\n${prefix}`
    const tail = after.trim() === "" ? "" : `\n${prefix}`
    const firstLinePrefix = body.startsWith("\n") ? "" : prefix
    return `${head}$$\n${firstLinePrefix}${inner}\n${prefix}$$${tail}`
  })
}

// `![[image.ext|caption]]`; unlike Quartz's wikilink pattern, the caption may contain brackets.
const imageEmbedRegex =
  /!\[\[([^\[\]|#\n]+\.(?:png|jpe?g|gif|bmp|svg|webp))\|([^\n]*?)\]\](?!\])/gi

/** Compatibility fixes for Obsidian Markdown. Runs before ObsidianFlavoredMarkdown. */
export const ObsidianMarkdownCompat: QuartzTransformerPlugin = () => ({
  name: "ObsidianMarkdownCompat",
  textTransform(_ctx, src) {
    return mapOutsideCode(src.toString().replace(/\r\n/g, "\n"), (text) =>
      normalizeDisplayMath(escapeWikilinkAliases(text)),
    )
  },
  markdownPlugins() {
    return [
      () => (tree: Root) => {
        findAndReplace(tree, [
          imageEmbedRegex,
          (_value: string, fp: string, alias: string) => {
            const size = /^(.*?)\|\s*(\d+)(?:x(\d+))?$/.exec(alias)
            return {
              type: "image",
              url: slugifyFilePath(fp.trim() as FilePath),
              data: {
                hProperties: {
                  width: size?.[2] ?? "auto",
                  height: size?.[3] ?? "auto",
                  alt: (size?.[1] ?? alias).trim(),
                },
              },
            } as Image
          },
        ])
      },
    ]
  },
})

interface PluginInfo {
  id: string
  dir: string
  manifest: Record<string, unknown>
  languages: string[]
}

function readPlugins(vaultDir: string, pluginIds: string[]): PluginInfo[] {
  const pluginsDir = path.join(vaultDir, ".obsidian/plugins")
  const communityPluginsPath = path.join(vaultDir, ".obsidian/community-plugins.json")
  const enabled: string[] = fs.existsSync(communityPluginsPath)
    ? JSON.parse(fs.readFileSync(communityPluginsPath, "utf8").replace(/^\uFEFF/, ""))
    : []

  return pluginIds
    .filter((id) => {
      const available = enabled.includes(id) && fs.existsSync(path.join(pluginsDir, id, "main.js"))
      if (!available) {
        console.warn(`[ObsidianPlugins] Skipping "${id}": plugin is not installed and enabled.`)
      }
      return available
    })
    .map((id) => {
      const dir = path.join(pluginsDir, id)
      const manifest = JSON.parse(
        fs.readFileSync(path.join(dir, "manifest.json"), "utf8").replace(/^\uFEFF/, ""),
      )
      const main = fs.readFileSync(path.join(dir, "main.js"), "utf8")
      const languages = [
        ...main.matchAll(/registerMarkdownCodeBlockProcessor\(\s*["'`]([^"'`]+)["'`]/g),
      ].map((m) => m[1])
      return { id, dir, manifest, languages }
    })
}

interface Options {
  /** Directory of the Obsidian vault (contains `.obsidian`). */
  vaultDir: string
  /** IDs of the community plugins that render note content in reading mode. */
  plugins: string[]
}

/**
 * Replaces code blocks handled by an Obsidian plugin with placeholders. The placeholder keeps
 * the original source so that the plugin's code block processor receives it unchanged.
 */
export const ObsidianPluginBlocks: QuartzTransformerPlugin<Options> = (opts) => {
  const plugins = readPlugins(opts!.vaultDir, opts!.plugins)
  const languages = new Set(plugins.flatMap((plugin) => plugin.languages))

  return {
    name: "ObsidianPluginBlocks",
    markdownPlugins() {
      return [
        () => (tree: Root, file) => {
          visit(tree, "code", (node: Code, index, parent) => {
            if (!parent || index === undefined || !node.lang || !languages.has(node.lang)) {
              return
            }

            parent.children[index] = {
              type: "obsidianPluginBlock",
              data: {
                hName: "div",
                hProperties: {
                  className: ["obsidian-plugin-block"],
                  "data-obsidian-language": node.lang,
                  "data-obsidian-source": node.value,
                  "data-obsidian-path": file.data.relativePath ?? "",
                },
              },
            } as any
          })
        },
      ]
    },
  }
}

/** Publishes the enabled plugins and the runtime that executes them in the browser. */
export const ObsidianPluginRuntime: QuartzEmitterPlugin<Options & { macros: MathJaxMacros }> = (
  opts,
) => {
  const plugins = readPlugins(opts!.vaultDir, opts!.plugins)

  return {
    name: "ObsidianPluginRuntime",
    externalResources() {
      const runtime = fs.readFileSync(
        joinSegments(QUARTZ, "plugins", "vault", "obsidian-runtime.js"),
        "utf8",
      )
      return {
        css: plugins
          .filter((plugin) => fs.existsSync(path.join(plugin.dir, "styles.css")))
          .map((plugin) => ({
            content: fs.readFileSync(path.join(plugin.dir, "styles.css"), "utf8"),
            inline: true,
          })),
        js: [{ loadTime: "afterDOMReady", contentType: "inline", script: runtime }],
      }
    },
    async *emit(ctx) {
      const files: Record<string, string> = {}
      const vaultFiles = await glob("**", ctx.argv.directory, ctx.cfg.configuration.ignorePatterns)
      for (const fp of vaultFiles) {
        files[fp] = slugifyFilePath(fp)
      }

      const pluginEntries = []
      for (const plugin of plugins) {
        const pluginFiles = (await glob("**", plugin.dir, ["**/*.ts", "**/*.map"])).filter(
          (fp) => fp !== "data.json",
        )
        for (const fp of pluginFiles) {
          const dest = joinSegments(
            ctx.argv.output,
            RUNTIME_DIR,
            "plugins",
            plugin.id,
            fp,
          ) as FilePath
          await fs.promises.mkdir(path.dirname(dest), { recursive: true })
          await fs.promises.copyFile(path.join(plugin.dir, fp), dest)
          yield dest
        }

        const dataPath = path.join(plugin.dir, "data.json")
        pluginEntries.push({
          id: plugin.id,
          manifest: plugin.manifest,
          data: fs.existsSync(dataPath)
            ? JSON.parse(fs.readFileSync(dataPath, "utf8").replace(/^\uFEFF/, ""))
            : null,
          files: pluginFiles,
        })
      }

      yield write({
        ctx,
        slug: joinSegments(RUNTIME_DIR, "manifest") as FullSlug,
        ext: ".json",
        content: JSON.stringify({ plugins: pluginEntries, files, macros: opts!.macros }),
      })
    },
  }
}
