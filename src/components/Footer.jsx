import React from "react";
import { business } from "../data/content";
import { siteUrl } from "../site";
export default function Footer() {
  return <footer className="footer"><div className="footer-top"><div className="footer-contact"><span>RUFEN SIE UNS AN</span><a href={business.phoneHref}>{business.phone}</a><a className="footer-email" href={`mailto:${business.email}`}>{business.email}</a></div><div className="footer-links"><nav aria-label="Fußnavigation">{[["Startseite","/#hero"],["Leistungen","/#services"],["Ablauf","/#process"],["Preise","/#prices"],["Kontakt","/#booking"]].map(([text,href])=><a key={text} href={siteUrl(href)}>{text}</a>)}</nav><nav aria-label="Unterseiten">{[["Bedingungen","/terms/"],["Datenschutz","/privacy/"],["404","/404/"]].map(([text,href])=><a key={text} href={siteUrl(href)}>{text}</a>)}</nav><nav aria-label="Weitere Kontaktwege"><a href={siteUrl("/#team")}>Über Bujar</a><a href={business.phoneHref}>Telefon</a><a href={`mailto:${business.email}`}>E-Mail</a><a href={business.maps} target="_blank" rel="noreferrer">Anfahrt</a></nav></div></div><div className="footer-wordmark" aria-label="Bujar Automobile">Bujar<span>Automobile</span></div></footer>;
}
