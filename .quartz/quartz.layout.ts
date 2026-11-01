import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import type { Options } from "./quartz/components/Explorer"

// Quartz sends this function to the browser. Keep it independent of module variables.
export const explorerSort: Options["sortFn"] = (a, b) =>
{
  if (a.isFolder !== b.isFolder)
  {
    return a.isFolder ? -1 : 1
  }

  const nameA = a.isFolder ? a.slugSegment : (a.data?.filePath.split("/").pop() ?? a.slugSegment)
  const nameB = b.isFolder ? b.slugSegment : (b.data?.filePath.split("/").pop() ?? b.slugSegment)
  return nameA.localeCompare(nameB, "en", { numeric: true, sensitivity: "base" })
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({ sortFn: explorerSort }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({ sortFn: explorerSort }),
  ],
  right: [],
}
