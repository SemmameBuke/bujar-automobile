import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  asset,
  workshopServices,
  mechanicalServices,
} from "../data/content";
import { SectionHeading, Carousel } from "./shared";
export default function Services() {
  return (
    <section id="services" className="services">
      <div className="service-group">
        <SectionHeading label="Ihre Werkstatt in Kreuztal" description="Vom ersten Anzeichen eines Defekts bis zum planmäßigen Räderwechsel sind wir für Sie da.">
          Reparatur, Wartung
          <br />
          und <span>Reifenservice.</span>
        </SectionHeading>
        <Carousel label="Unsere Schwerpunkte" className="photo-carousel">
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
        </Carousel>
      </div>
      <div className="service-group">
        <SectionHeading
          label="Werkstattservice"
          description="Hier finden Sie einzelne Arbeiten rund um Motor, Bremsen, Elektrik und Räder."
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
