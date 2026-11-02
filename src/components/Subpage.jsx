import React from "react";
import { Button } from "./shared";
export default function Subpage({ page }) {
  if (!page) return <section className="not-found" id="page-content"><span className="error-code">404</span><h2>Diese Seite wurde<br /><span>nicht gefunden.</span></h2><Button href="/">Zur Startseite</Button></section>;
  return (
    <article className="legal-page" id="page-content">
      <span className="eyebrow">{page.draft ? "Entwurf · Betriebsangaben fehlen" : "Informationen"}</span>
      <h1>{page.title}</h1>
      <p className="legal-intro">{page.intro}</p>
      <nav className="legal-toc" aria-label="Inhaltsverzeichnis">
        {page.sections.map(([title], i) => <a key={title} href={`#legal-${i}`}>{title}</a>)}
      </nav>
      {page.sections.map(([title, text], i) => (
        <section key={title} id={`legal-${i}`}>
          <h2>{title}</h2><p>{text}</p>
        </section>
      ))}
      {page.links && <section><h2>Weiterführende Informationen</h2><ul>
        {page.links.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noopener noreferrer">{label} ↗</a></li>)}
      </ul></section>}
      <Button href="/">Zur Startseite</Button>
    </article>
  );
}
