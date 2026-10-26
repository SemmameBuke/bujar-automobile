import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  asset,
  careServices,
  mechanicalServices,
  intro,
} from "../data/content";
import { SectionHeading, Carousel, Reveal } from "./shared";
export default function Services() {
  return (
    <section id="services" className="services">
      <div className="service-group">
        <SectionHeading label="Fahrzeugpflege · Vorlagenbereich" description="Die Bildkarten der ursprünglichen Vorlage sind wieder da. Welche Pflegeleistungen künftig angeboten werden, stimmen wir im nächsten Schritt ab.">
          Ihr Fahrzeug
          <br />
          in <span>Bestform.</span>
        </SectionHeading>
        <Carousel label="Fahrzeugpflege" className="photo-carousel">
          {careServices.map(([title, text, img]) => (
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
        </Carousel>
      </div>
      <div className="service-group">
        <SectionHeading
          label="Werkstattservice"
          description="Wartung, Inspektion, Reifen und Reparaturen: Hier finden Sie die Leistungsbereiche der ursprünglichen Vorlage zur weiteren Abstimmung."
        >
          Guter Service.
          <br />
          Bis ins <span>Detail.</span>
        </SectionHeading>
        <Carousel label="Werkstattleistungen" className="icon-carousel">
          {mechanicalServices.map(([title, text, img]) => (
            <a href="#booking" className="icon-card" key={title}>
              <img src={asset(img)} alt="" loading="lazy" />
              <h3>{title}</h3>
              <p>{text}</p>
            </a>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
