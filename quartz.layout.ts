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

// layout voor losse notitiepagina’s
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),   // publicatiedatum e.d. (optioneel)
    Component.TagList(),
  ],
  left: [
    Component.Explorer(),      // vertrouwde boomstructuur links
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),  // inhoudsopgave (alleen desktop)
    Component.Backlinks(),                               // gerelateerde notities
  ],
}

// layout voor lijsten (tags/folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.Explorer(),
  ],
  right: [],
}