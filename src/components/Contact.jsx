import React, { useState } from "react";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./shared";
import { business } from "../data/content";
import { siteUrl } from "../site";

export default function Contact() {
  const [message, setMessage] = useState("");
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setMessage(`Hallo Bujar,\n\nmein Name ist ${data.get("name").trim()}.\nTelefon: ${data.get("number").trim()}\nAnliegen: ${data.get("service")}\n\nIch möchte gerne einen Termin abstimmen.`);
  }
  return (
    <section id="booking" className="contact-section">
      <div className="contact-inner">
        <div className="contact-form">
          <SectionHeading label="Kontakt" description="Erzählen Sie uns, was Ihr Fahrzeug braucht. Gemeinsam besprechen wir den nächsten Schritt.">Bereit für die<br />nächste gute Fahrt?</SectionHeading>
          <form onSubmit={submit} onChange={() => setMessage("")}>
            <div className="form-row"><label htmlFor="contact-name">Name<input id="contact-name" name="name" placeholder="Ihr Name" autoComplete="name" required maxLength={100} pattern=".*\S.*" /></label><label htmlFor="contact-number">Telefon<input id="contact-number" name="number" type="tel" placeholder="Ihre Telefonnummer" autoComplete="tel" required maxLength={60} pattern=".*\S.*" /></label></div>
            <label htmlFor="contact-service">Leistung<select id="contact-service" name="service" defaultValue="" required><option value="" disabled>Bitte auswählen …</option><option>Wartung & Inspektion</option><option>Reifen & Räder</option><option>Diagnose & Reparatur</option><option>Andere Anfrage</option></select></label>
            <button className="submit-button" type="submit">Anfrage vorbereiten</button>
            <p className="contact-form-note">Sie prüfen Ihre Nachricht und senden sie anschließend selbst. Den Termin stimmen Sie persönlich mit uns ab. Informationen zur Verarbeitung finden Sie in unserer <a href={siteUrl("/privacy/")}>Datenschutzerklärung</a>.</p>
            {message && <div className="contact-message-preview" role="status"><p><strong>Ihre Nachricht ist vorbereitet, noch nicht gesendet.</strong></p><pre>{message}</pre><p>Beim Öffnen von WhatsApp werden Ihr Name, Ihre Telefonnummer und der Nachrichtentext im Link an WhatsApp übergeben. Sie können stattdessen E-Mail oder Telefon nutzen.</p><a className="button" href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">In WhatsApp öffnen<ArrowUpRight size={18} /></a><a className="mail-alternative" href={`mailto:${business.email}?subject=Terminanfrage&body=${encodeURIComponent(message)}`}>Alternativ per E-Mail öffnen</a></div>}
          </form>
        </div>
        <div className="contact-info">
          <div className="contact-meta"><div><small>UNSERE SCHWERPUNKTE</small><p>Wartung · Reifen · Reparatur</p></div><div><small>UNSER STANDORT</small><p>Kreuztal · Siegerland</p></div></div>
          <a href={business.maps} target="_blank" rel="noreferrer" className="contact-address"><MapPin size={24} />{business.street}, {business.city}</a>
          <div className="social-links"><a href={business.phoneHref} aria-label="Bujar anrufen"><Phone size={20} /></a><a href={`mailto:${business.email}`} aria-label="E-Mail an Bujar"><Mail size={20} /></a><a href={business.maps} aria-label="Route zu Bujar" target="_blank" rel="noreferrer"><MapPin size={20} /></a></div>
          <div className="contact-map map-preview"><MapPin size={38} strokeWidth={1.3} /><p>Johannespfad 48<br />57223 Kreuztal</p><a className="map-external-link" href={business.maps} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">Route in Google Maps öffnen ↗</a><small>Öffnet Google Maps in einem neuen Tab. Erst dabei wird eine Verbindung zu Google hergestellt.</small></div>
        </div>
      </div>
    </section>
  );
}
