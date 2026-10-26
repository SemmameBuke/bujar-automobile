import React from "react";
import { ArrowUpRight } from "lucide-react";
import { asset, upgrades } from "../data/content";
import { SectionHeading, Carousel } from "./shared";
export default function Pricing() {
  return (
    <section id="prices" className="pricing">
      <SectionHeading
        label="Fahrzeug-Upgrades"
        description="Der Preis- und Upgrade-Bereich der Vorlage bleibt vollständig erhalten. Die gezeigten Angebote und Preise sind Beispiele für die weitere Gestaltung."
      >
        Mehr aus Ihrem Auto.
        <br />
        Ganz <span>Ihr Stil.</span>
      </SectionHeading>
      <Carousel label="Upgrades und Beispielpreise" className="pricing-carousel">
        {upgrades.map(([title, price, img]) => (
          <a className="upgrade-card" key={title} href="#booking">
            <div className="upgrade-image">
              <img src={asset(img)} alt={title} loading="lazy" />
              <div>
                <h3>{title}</h3>
                <p>Beispielpreis ab {price} €</p>
              </div>
            </div>
            <span className="upgrade-link">
              {title}
              <ArrowUpRight size={20} />
            </span>
          </a>
        ))}
      </Carousel>
    </section>
  );
}
