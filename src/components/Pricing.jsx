import React from "react";
import { ArrowUpRight } from "lucide-react";
import { asset, upgrades } from "../data/content";
import { Button, SectionHeading, Carousel } from "./shared";
export default function Pricing() {
  return (
    <section id="prices" className="pricing">
      <SectionHeading
        className="pricing-heading"
        label="Fahrzeug-Upgrades"
        description="Die gezeigten Fahrzeug-Upgrades sind Beispiele. Fragen Sie das konkrete Angebot bitte direkt bei uns an."
        action={
          <Button
            className="tuning-button"
            href="https://www.ba-performance.de/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zur Tuning-Seite von BA Performance (öffnet in einem neuen Tab)"
          >
            Zur Tuning-Seite
          </Button>
        }
      >
        Mehr aus Ihrem Auto.
        <br />
        Ganz <span>Ihr Stil.</span>
      </SectionHeading>
      <Carousel label="Fahrzeug-Upgrades" className="pricing-carousel">
        {upgrades.map(([title, img]) => (
          <a className="upgrade-card" key={title} href="#booking">
            <div className="upgrade-image">
              <img src={asset(img)} alt={title} loading="lazy" />
              <div>
                <h3>{title}</h3>
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
