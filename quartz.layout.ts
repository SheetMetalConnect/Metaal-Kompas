import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// gedeelde componenten (voor alle pagina's)
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.Flex({
      components: [
        { Component: Component.PageTitle() },              // Site titel "Kompas"
        { Component: Component.Spacer() },
        { Component: Component.Search(), grow: true },     // Grote zoekbalk, altijd zichtbaar
        { Component: Component.Darkmode() },               // Donker/licht schakelaar
        { Component: Component.ReaderMode() },             // Rustige leesstand
      ],
    }),
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "vanenkhuizen.com": "https://vanenkhuizen.com",
      "Sheet Metal Connect": "https://sheetmetalconnect.com",
    },
  }),
}

// layout voor losse notitiepagina’s (docs/defaults + Graph rechts)
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
    Component.Explorer(),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    // ► Minimal, docs-consistent addition:
    Component.DesktopOnly(Component.Graph()),
  ],
}

// layout voor lijsten (tags/folders) — optioneel ook Graph rechts
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.Explorer(),
  ],
  right: [
    // ► Optional but safe default: small graph aids orientation
    Component.DesktopOnly(Component.Graph()),
  ],
}