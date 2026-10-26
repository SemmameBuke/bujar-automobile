import React from "react";
import { asset, business } from "../data/content";
import { SectionHeading, Reveal, Button } from "./shared";

export default function Team() {
  return (
    <section id="team" className="team owner-section">
      <SectionHeading label="Der Inhaber" description="Ein Name. Ein Gesicht. Ihr Ansprechpartner bei Bujar Automobile in Kreuztal.">
        Der Mensch<br />hinter <span>der Werkstatt.</span>
      </SectionHeading>
      <Reveal>
        <article className="owner-profile">
          <img src={asset("bujar-inhaber.avif")} alt="Bujar, Inhaber, bei der Arbeit an einem Rad in seiner Werkstatt." width="1086" height="546" loading="lazy" />
          <div className="owner-profile-copy">
            <div><h3>Bujar</h3><p className="owner-role">Inhaber · Bujar Automobile</p></div>
            <div><p>Hinter Bujar Automobile steht Bujar. Als Inhaber ist er das Gesicht der Werkstatt in Kreuztal. Ob Wartung, Reifen oder eine Reparatur: Der erste Schritt ist ein persönliches Gespräch über Ihr Fahrzeug.</p><Button href={business.phoneHref}>Mit Bujar sprechen</Button></div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
