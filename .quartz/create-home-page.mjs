// Creates `index.md` (the Quartz home page) in the vault when the vault has none.
// Usage: node create-home-page.mjs <vault directory> <site title>
import fs from "fs"
import path from "path"

const [vaultDir, title = "Obsidian Science"] = process.argv.slice(2)
const indexPath = path.join(vaultDir, "index.md")
if (fs.existsSync(indexPath)) {
  console.log(`${indexPath} exists; keeping it.`)
  process.exit(0)
}

const ignored = new Set(["Attachements"])
const entries = fs
  .readdirSync(vaultDir, { withFileTypes: true })
  .filter((entry) => !entry.name.startsWith(".") && !ignored.has(entry.name))
  .sort((a, b) => a.name.localeCompare(b.name))

const folders = entries
  .filter((entry) => entry.isDirectory())
  .map((entry) => `- [${entry.name}](${entry.name.replace(/ /g, "-")}/)`)
const notes = entries
  .filter((entry) => entry.isFile() && entry.name.endsWith(".md") && entry.name !== "AGENTS.md")
  .map((entry) => `- [[${entry.name.replace(/\.md$/, "")}]]`)

const content = [
  "---",
  `title: "${title}"`,
  "---",
  "",
  "## Topics",
  "",
  ...folders,
  ...(notes.length > 0 ? ["", "## Notes", "", ...notes] : []),
  "",
].join("\n")

fs.writeFileSync(indexPath, content)
console.log(`Created ${indexPath}.`)
