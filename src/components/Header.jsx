import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./shared";
import { siteUrl } from "../site";
const links = [
  ["Leistungen", "/#services"],
  ["Ablauf", "/#process"],
  ["Preise", "/#prices"],
  ["FAQ", "/#contact"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className={`site-header ${open ? "menu-open" : ""}`}>
      <nav className="nav-shell" aria-label="Hauptnavigation">
        <a
          className="brand"
          href={siteUrl("/#hero")}
          aria-label="Bujar Automobile – Startseite"
          onClick={() => setOpen(false)}
        >
          <span className="bujar-brand">bujar<span>.</span></span>
        </a>
        <div className="desktop-links">
          {links.map(([text, href]) => (
            <a key={href} href={siteUrl(href)}>
              {text}
            </a>
          ))}
        </div>
        <Button className="nav-book">Termin anfragen</Button>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-links"
          aria-label="Mobile Navigation"
        >
          {links.map(([text, href]) => (
            <a key={href} href={siteUrl(href)} onClick={() => setOpen(false)}>
              {text}
            </a>
          ))}
          <Button onClick={() => setOpen(false)}>Termin anfragen</Button>
        </nav>
      )}
    </header>
  );
}
