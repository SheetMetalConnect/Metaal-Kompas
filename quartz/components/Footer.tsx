import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
// Use hardcoded Quartz version to avoid confusion with project version
const quartzVersion = "4.5.1"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg, fileData }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{quartzVersion}</a> © {year}
          <br />
          <small style="opacity: 0.7; font-size: 0.8em;">Educationeel • Geen rechten ontleend • Fouten gegarandeerd 😊</small>
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        {fileData?.slug && (
          <ul>
            <li>
              <a href={`https://github.com/SheetMetalConnect/Metaal-Kompas/tree/v4/content/${fileData.slug}.md`}>
                Verbeter deze pagina
              </a>
            </li>
          </ul>
        )}
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
