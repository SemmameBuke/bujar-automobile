import React from "react";
import { business } from "../data/content";
import { siteUrl } from "../site";
export default function Footer() {
  const links = [
    ["Startseite", siteUrl("/#hero")],
    ["Leistungen", siteUrl("/#services")],
    ["Ablauf", siteUrl("/#process")],
    ["Preise", siteUrl("/#prices")],
    ["Kontakt", siteUrl("/#booking")],
    ["Über Bujar", siteUrl("/#team")],
    ["Telefon", business.phoneHref],
    ["E-Mail", `mailto:${business.email}`],
    ["Anfahrt", business.maps],
    ["Impressum", siteUrl("/impressum/")],
    ["Datenschutz", siteUrl("/privacy/")],
    ["Terminhinweise", siteUrl("/terms/")],
  ];
  return (
    <footer className="footer">
      <nav className="footer-row" aria-label="Fußnavigation">
        {links.map(([label, href]) => (
          <a key={label} href={href} target={href === business.maps ? "_blank" : undefined} rel={href === business.maps ? "noreferrer" : undefined}>{label}</a>
        ))}
      </nav>
    </footer>
  );
}
