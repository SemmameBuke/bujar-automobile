import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  asset,
  business,
  workshopServices,
  mechanicalServices,
} from "../data/content";
import { SectionHeading } from "./shared";
export default function Services() {
  return (
    <section id="services" className="services">
      <div className="service-group">
        <SectionHeading label="Ihre Werkstatt in Kreuztal" description="Vom ersten Anzeichen eines Defekts bis zum planmäßigen Räderwechsel sind wir für Sie da.">
          Instandsetzung, Wartung
          <br />
          und <span>Reifenservice.</span>
        </SectionHeading>
        <div className="service-focus"><div className="service-focus-cards">
          {workshopServices.map(([title, text, img]) => (
            <article className="photo-card" key={title}>
              <div className="photo-card-image">
                <img src={asset(img)} alt={title} loading="lazy" />
                <div className="photo-card-copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
              <a className="card-link" href="#booking">
                Jetzt anfragen <ArrowUpRight size={20} />
              </a>
            </article>
          ))}
        </div><aside className="service-advice"><h3>Was fällt Ihnen am Auto auf?</h3><p>Sie müssen die Ursache nicht kennen. Beschreiben Sie uns, wann das Geräusch auftritt oder welche Warnleuchte leuchtet. Gemeinsam mit Bujar klären Sie den nächsten Schritt.</p><a href={business.phoneHref}>Bujar anrufen · {business.phone} ↗</a></aside></div>
      </div>
      <div className="service-group">
        <SectionHeading
          label="Werkstattservice"
          description="Hier finden Sie einzelne Arbeiten rund um Motor, Bremsen, Elektrik und Räder."
        >
          Von der Diagnose
          <br />
          bis zur <span>Instandsetzung.</span>
        </SectionHeading>
        <div id="werkstattleistungen" className="workshop-grid">
          {mechanicalServices.map(([title, text, Icon]) => (
            <a href="#booking" className="workshop-card" key={title} aria-label={title + " anfragen"}>
              <Icon size={30} strokeWidth={1.6} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="workshop-action">Leistung anfragen <ArrowUpRight size={17} aria-hidden="true" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
