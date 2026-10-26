import React from "react";
import { Button } from "./shared";
export default function Subpage({ page }) {
  if (!page) return <section className="not-found" id="page-content"><span className="error-code">404</span><h2>Diese Seite wurde<br /><span>nicht gefunden.</span></h2><Button href="/">Zur Startseite</Button></section>;
  return <article className="legal-page" id="page-content"><span className="eyebrow">Unterseite · Gestaltungsvorlage</span><h2>{page.title}</h2><p className="legal-intro">{page.intro}</p>{page.sections.map(([title,text])=><section key={title}><h3>{title}</h3><p>{text}</p></section>)}<Button href="/">Zur Startseite</Button></article>;
}
