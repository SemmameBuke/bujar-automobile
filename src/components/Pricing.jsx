import React from "react";
import { ArrowUpRight } from "lucide-react";
import { asset, upgrades } from "../data/content";
import { Button, SectionHeading } from "./shared";

const tuningUrl = "https://www.ba-performance.de/";

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
            href={tuningUrl}
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
      <div className="upgrade-grid">
        {upgrades.map(([title, img]) => (
          <a
            className="upgrade-card"
            key={title}
            href={tuningUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={title + " bei BA Performance (öffnet in einem neuen Tab)"}
          >
            <img src={asset(img)} alt="" loading="lazy" />
            <h3>{title}</h3>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}
