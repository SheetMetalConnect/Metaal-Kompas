import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Kompas",
    pageTitleSuffix: " · vanenkhuizen.com",
    enableSPA: true,
    enablePopovers: true,
    analytics: { provider: "plausible" },
    locale: "nl-NL",
    baseUrl: "kompas.vanenkhuizen.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",  // robuuste koppen
        body: "Source Sans Pro",      // goed leesbaar voor lange tekst
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#FFFFFF",     // Witte achtergrond (rustig, herkenbaar)
          lightgray: "#E5E9F0", // zachte surfaces
          gray: "#D8DEE9",      // scheidingslijnen
          darkgray: "#3B4252",  // body-tekst (donker)
          dark: "#2E3440",      // headers/icons
          secondary: "#5E81AC", // linkkleur
          tertiary: "#88C0D0",  // hover/visited
          highlight: "rgba(94,129,172,0.15)",
          textHighlight: "#EBCB8B88",
        },
        darkMode: {
          light: "#2E3440",     // donkere achtergrond
          lightgray: "#3B4252",
          gray: "#434C5E",
          darkgray: "#D8DEE9",  // lichte body-tekst
          dark: "#ECEFF4",      // lichte headers/icons
          secondary: "#88C0D0",
          tertiary: "#8FBCBB",
          highlight: "rgba(136,192,208,0.15)",
          textHighlight: "#BF616A88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "git", "filesystem"] }),
      Plugin.SyntaxHighlighting({ theme: { light: "github-light", dark: "github-dark" }, keepBackground: false }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config