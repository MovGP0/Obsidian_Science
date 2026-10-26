import path from "path"
import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import {
  ObsidianMarkdownCompat,
  ObsidianPluginBlocks,
  ObsidianPluginRuntime,
  readPreambleMacros,
} from "./quartz/plugins/vault/obsidian"

/**
 * Quartz configuration for the Obsidian Science vault.
 *
 * The publish workflow (.github/workflows/publish-quartz.yml) copies this file into a Quartz
 * checkout and builds with `--directory` pointing at the vault.
 */

// Directory of the Obsidian vault. It contains `.obsidian` and `preamble.sty`.
const vaultDir = path.resolve(process.env.OBSIDIAN_VAULT ?? "content")

// Obsidian community plugins whose code block or post processors render note content in
// reading mode. They run unmodified in the browser through `obsidian-runtime.js`.
// Editor-only plugins (Latex Suite, Advanced Tables, Git, ...) have no effect on the site.
// Other content plugins are covered at build time:
// - Extended MathJax: `preamble.sty` is loaded as MathJax macros (see Latex below).
// - Front Matter Title: Quartz uses the `title` property natively.
// - Admonition: Quartz renders `> [!type]` callouts natively.
const renderPlugins = ["graphs", "image-captions"]

const macros = readPreambleMacros(path.join(vaultDir, "preamble.sty"))

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Obsidian Science",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: process.env.QUARTZ_BASE_URL ?? "movgp0.github.io/Obsidian_Science",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      ".agents",
      ".beads",
      ".codex",
      ".github",
      ".quartz",
      "**/.temp",
      "**/.history",
      "AGENTS.md",
      "*.base",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      ObsidianMarkdownCompat(),
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      ObsidianPluginBlocks({ vaultDir, plugins: renderPlugins }),
      // MathJax matches Obsidian's renderer (\color[RGB]{...}, mhchem, ...). It runs before syntax
      // highlighting, which would otherwise strip a trailing `{:k}` from inline math as a
      // language hint (e.g. `$A_{:k}$`).
      Plugin.Latex({ renderEngine: "mathjax", mathJaxOptions: { tex: { macros } as object } }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      ObsidianPluginRuntime({ vaultDir, plugins: renderPlugins, macros }),
    ],
  },
}

export default config
