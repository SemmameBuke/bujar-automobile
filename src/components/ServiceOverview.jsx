import React from "react";
import { asset } from "../data/content";
import { SectionHeading, Button, Reveal } from "./shared";
export default function ServiceOverview() {
  return (
    <>
      <section className="overview" aria-label="Leistungsübersicht">
        <picture className="overview-images">
          <img src={asset("bujar-werkstatt-winter.png")}
            alt="Silberner BMW vor der verschneiten Werkstatt von Bujar Automobile in Kreuztal" loading="lazy" />
        </picture>
        <div className="overview-copy">
          <span className="eyebrow">Leistungen im Überblick</span>
          <h2>Werkstattservice</h2>
          <p>Wartung, Diagnose und Instandsetzung – für die nächste gute Fahrt.</p>
          <Button href="#mechanical">Leistungen entdecken</Button>
        </div>
      </section>
      <section className="service-details" id="mechanical">
        <Reveal>
          <article className="detail-row">
            <div className="detail-copy">
              <SectionHeading
                label="Werkstattservice"
                description="Wartung und Diagnose helfen dabei, den Zustand Ihres Fahrzeugs besser einzuschätzen."
              >
                Ihr Auto
                <br />
                läuft <span>weiter.</span>
              </SectionHeading>
              <ul className="detail-list">
                <li>
                  <strong>Wartung & Fahrzeugservice</strong> — Anstehende Wartungsarbeiten und den nächsten Service besprechen.
                </li>
                <li>
                  <strong>Diagnose</strong> — Auffälligkeiten prüfen und der Ursache auf den Grund gehen.
                </li>
                <li>
                  <strong>Instandsetzung</strong> — Erforderliche Arbeiten am Fahrzeug gemeinsam abstimmen.
                </li>
                <li>
                  <strong>Reifen & Räder</strong> — Fragen zu Reifen und dem saisonalen Räderwechsel klären.
                </li>
              </ul>
            </div>
            <figure className="detail-visual">
              <img
                src={asset("bujar-werkstatt-rotes-akzentlicht.png")}
                alt="Moderne Autowerkstatt mit rotem Akzentlicht und einem BMW auf der Hebebühne"
                loading="lazy"
              />
              <figcaption className="image-glass-card">
                <h3>Ihr Werkstattservice in Kreuztal</h3>
                <p>Wartung, Fahrzeugservice und Fahrzeugdiagnose: Bei Bujar Automobile besprechen wir persönlich, was Ihr Auto braucht.</p>
              </figcaption>
            </figure>
          </article>
        </Reveal>
        <Reveal>
          <article className="detail-row detail-reverse">
            <div className="detail-copy">
              <SectionHeading
                label="Reifenservice"
                description="Beim Wechsel zwischen Sommer- und Winterrädern lohnt sich ein Blick auf Profil und Zustand. Fragen Sie uns, ob Ihre Reifen für die nächste Saison bereit sind."
              >
                Zeit für den<br /><span>Räderwechsel?</span>
              </SectionHeading>
              <Button href="#booking">Reifenservice anfragen</Button>
              <p className="care-teaser">Auf Wunsch bereiten wir auch den Innenraum und Lack Ihres Fahrzeugs auf. <a href="#booking">Details anfragen</a></p>
            </div>
            <figure className="detail-visual">
              <img
                src={asset("bujar-werkstatt-klassiker.webp")}
                alt="Schwarzer Ford Mustang in einer Werkstatt mit Bujar-Automobile-Schriftzug"
                loading="lazy"
              />
              <figcaption className="image-glass-card">
                <h3>Reifenservice in Kreuztal</h3>
                <p>Für die Terminabstimmung hilft uns eine kurze Angabe: Möchten Sie komplette Räder wechseln lassen oder brauchen Sie neue Reifen?</p>
              </figcaption>
            </figure>
          </article>
        </Reveal>
      </section>
    </>
  );
}
