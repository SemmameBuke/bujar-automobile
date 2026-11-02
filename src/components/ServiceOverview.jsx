import React from "react";
import { asset } from "../data/content";
import { SectionHeading, Button, Reveal } from "./shared";
export default function ServiceOverview() {
  return (
    <>
      <section className="overview" aria-label="Leistungsübersicht">
        <picture className="overview-images">
          <source media="(max-width: 809px)" srcSet={asset("bujar-werkstatt-mobil.png")} />
          <img src={asset("bujar-werkstatt-bmw.png")}
            alt="Bujar Automobile in Kreuztal mit schwarzem BMW vor der Werkstatt" loading="lazy" />
        </picture>
        <div className="overview-copy">
          <span className="eyebrow">Leistungen im Überblick</span>
          <h2>Werkstattservice</h2>
          <p>Wartung, Diagnose und Reparatur – für die nächste gute Fahrt.</p>
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
                  <strong>Wartung & Inspektion</strong> — Anstehende Wartungsarbeiten und den nächsten Service besprechen.
                </li>
                <li>
                  <strong>Diagnose</strong> — Auffälligkeiten prüfen und der Ursache auf den Grund gehen.
                </li>
                <li>
                  <strong>Reparatur</strong> — Erforderliche Arbeiten am Fahrzeug gemeinsam abstimmen.
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
                <p>Wartung, Inspektion und Fahrzeugdiagnose: Bei Bujar Automobile besprechen wir persönlich, was Ihr Auto braucht.</p>
              </figcaption>
            </figure>
          </article>
        </Reveal>
        <Reveal>
          <article className="detail-row detail-reverse">
            <div className="detail-copy">
              <SectionHeading
                label="Fahrzeugpflege"
                description="Der vollständige Pflegebereich der Vorlage bleibt als Grundlage für die nächsten Anpassungen erhalten."
              >
                Ihr Auto
                <br />
                zeigt <span>Glanz.</span>
              </SectionHeading>
              <ul className="detail-list">
                {[
                  "Außen- & Innenaufbereitung",
                  "Tiefenreinigung",
                  "Lackaufbereitung",
                  "Keramikversiegelung",
                  "Premium-Fahrzeugwäsche",
                  "Scheinwerferaufbereitung",
                ].map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </div>
            <figure className="detail-visual">
              <img
                src={asset("bujar-werkstatt-klassiker.webp")}
                alt="Schwarzer Ford Mustang in einer Werkstatt mit Bujar-Automobile-Schriftzug"
                loading="lazy"
              />
              <figcaption className="image-glass-card">
                <h3>Fahrzeugpflege mit Blick aufs Detail</h3>
                <p>Fragen zur Pflege von Lack und Innenraum? Besprechen Sie mit Bujar Automobile in Kreuztal die Möglichkeiten für Ihr Fahrzeug.</p>
              </figcaption>
            </figure>
          </article>
        </Reveal>
      </section>
    </>
  );
}
