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
    const days = data.getAll("day");
    const details = [
      ["Telefon", data.get("number").trim()],
      ["Gewünschter Service", data.get("service")],
      ["Fahrzeug", data.get("model").trim()],
      ["Mein Anliegen", data.get("details").trim()],
      ["Passende Tage", days.join(", ")],
      ["Tageszeit", data.get("time")],
    ];
    setMessage([
      "Hallo Bujar,",
      `ich möchte einen Werkstatttermin anfragen.\nMein Name ist ${data.get("first").trim()} ${data.get("last").trim()}.`,
      details.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`).join("\n"),
    ].join("\n\n"));
  }
  return (
    <section id="booking" className="contact-section">
      <div className="contact-inner">
        <div className="contact-form">
          <SectionHeading label="Schnellanfrage" description="Was steht bei Ihrem Auto an? Bereiten Sie hier Ihre Nachricht an Bujar vor. Ihren Termin vereinbaren Sie anschließend persönlich.">Werkstatttermin<br />anfragen.</SectionHeading>
          <form onSubmit={submit} onChange={() => setMessage("")}>
            <p className="contact-form-note">* Pflichtfelder</p>
            <div className="form-row">
              <label>Vorname *<input name="first" autoComplete="given-name" required maxLength={80} pattern=".*\S.*" /></label>
              <label>Nachname *<input name="last" autoComplete="family-name" required maxLength={80} pattern=".*\S.*" /></label>
            </div>
            <label>Telefonnummer für Rückfragen *<input name="number" type="tel" autoComplete="tel" required maxLength={40} pattern=".*[0-9].*" /></label>
            <div className="form-row">
              <label>Gewünschter Service *<select name="service" defaultValue="" required>
                <option value="" disabled>Bitte auswählen …</option>
                <option>Diagnose & Reparatur</option><option>Wartung & Inspektion</option><option>Reifen & Räder</option><option>Andere Anfrage</option>
              </select></label>
              <label>Automodell<input name="model" placeholder="z. B. VW Golf VII" maxLength={100} /></label>
            </div>
            <label>Ihr Anliegen<textarea name="details" rows={3} maxLength={600} placeholder="Was ist Ihnen aufgefallen oder welche Arbeiten stehen an?" /></label>
            <fieldset className="contact-days">
              <legend>Welche Tage passen Ihnen?</legend>
              {["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"].map(day => (
                <label key={day}><input type="checkbox" name="day" value={day} />{day}</label>
              ))}
            </fieldset>
            <label>Bevorzugte Tageszeit<select name="time" defaultValue="">
              <option value="">Zeitlich flexibel</option><option>Vormittags</option><option>Nachmittags</option>
            </select></label>
            <p className="contact-form-note"><strong>Fahrzeugschein (optional)</strong><br />Wenn Sie den Fahrzeugschein mitschicken möchten, hängen Sie ein Foto vor dem Senden in WhatsApp oder Ihrem E-Mail-Programm an.</p>
            <button className="submit-button" type="submit">Anfrage vorbereiten</button>
            <p className="contact-form-note">Sie prüfen Ihre Nachricht und senden sie anschließend selbst. Den Termin stimmen Sie persönlich mit uns ab. Informationen zur Verarbeitung finden Sie in unserer <a href={siteUrl("/privacy/")}>Datenschutzerklärung</a>.</p>
            {message && <div className="contact-message-preview" role="status"><p><strong>Ihre Nachricht ist vorbereitet, noch nicht gesendet.</strong></p><pre>{message}</pre><p>Beim Öffnen von WhatsApp werden Ihr Name, Ihre Telefonnummer und der Nachrichtentext im Link an WhatsApp übergeben. Sie können stattdessen E-Mail oder Telefon nutzen.</p><a className="button" href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">In WhatsApp öffnen<ArrowUpRight size={18} /></a><a className="mail-alternative" href={`mailto:${business.email}?subject=Terminanfrage&body=${encodeURIComponent(message)}`}>Alternativ per E-Mail öffnen</a></div>}
          </form>
        </div>
        <div className="contact-info">
          <div className="contact-meta"><div><small>UNSERE SCHWERPUNKTE</small><p>Wartung · Reifen · Reparatur</p></div><div><small>UNSER STANDORT</small><p>Kreuztal · Siegerland</p></div></div>
          <a href={business.maps} target="_blank" rel="noreferrer" className="contact-address"><MapPin size={24} />{business.street}, {business.city}</a>
          <div className="contact-direct">
            <a href={business.phoneHref}><Phone size={20} aria-hidden="true" />{business.phone}</a>
            <a href={`mailto:${business.email}`}><Mail size={20} aria-hidden="true" />{business.email}</a>
          </div>
          <div className="contact-map map-preview"><MapPin size={38} strokeWidth={1.3} /><p>Johannespfad 48<br />57223 Kreuztal</p><a className="map-external-link" href={business.maps} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">Route in Google Maps öffnen ↗</a><small>Öffnet Google Maps in einem neuen Tab. Erst dabei wird eine Verbindung zu Google hergestellt.</small></div>
        </div>
      </div>
    </section>
  );
}
