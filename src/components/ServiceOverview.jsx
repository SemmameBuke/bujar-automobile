import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { asset } from "../data/content";
import { SectionHeading, Button, Reveal } from "./shared";
const gallery = [
  "vM2WraLU93YBYWtTElCmgAMRQ.jpg",
  "do5mE5sch45uvLPFvuw3uoKqYk.jpg",
  "do5mE5sch45uvLPFvuw3uoKqYk.jpg",
  "rYAmdDDhk5Tmm6FalDWlMWEX80.jpg",
  "MamUsvVkllZI4ucuNSUMNTzWFk.jpg",
];
export default function ServiceOverview() {
  const [slide, setSlide] = useState(0),
    [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const t = setInterval(
      () => setSlide((s) => (s + 1) % gallery.length),
      6000,
    );
    return () => clearInterval(t);
  }, [paused]);
  return (
    <>
      <section
        className="overview"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
        }}
        aria-label="Leistungsübersicht"
      >
        <div className="overview-images">
          {gallery.map((img, i) => (
            <img
              key={`${img}-${i}`}
              className={slide === i ? "active" : ""}
              src={asset(img)}
              alt="Werkstattmotiv aus der Gestaltungsvorlage"
              loading="lazy"
            />
          ))}
        </div>
        <div className="overview-copy">
          <span className="eyebrow">Leistungen im Überblick</span>
          <h2>Werkstattservice</h2>
          <p>
            Wartung, Diagnose und Reparatur – für die nächste gute Fahrt.
          </p>
          <Button href="#mechanical">Leistungen entdecken</Button>
        </div>
        <div className="slideshow-controls">
          <button
            type="button"
            aria-label="Vorheriges Werkstattbild"
            onClick={() =>
              setSlide((slide + gallery.length - 1) % gallery.length)
            }
          >
            <ArrowLeft />
          </button>
          <div>
            {gallery.map((_, i) => (
              <button
                type="button"
                key={i}
                className={slide === i ? "active" : ""}
                aria-label={`Werkstattbild anzeigen ${i + 1}`}
                aria-pressed={slide === i}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Nächstes Werkstattbild"
            onClick={() => setSlide((slide + 1) % gallery.length)}
          >
            <ArrowRight />
          </button>
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
            <img
              src={asset("bwxO6O7UHCMh9GJBCs6fWKRNrA.jpg")}
              alt="Werkstattmotiv mit Fahrzeugen"
              loading="lazy"
            />
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
            <img
              src={asset("vM2WraLU93YBYWtTElCmgAMRQ.jpg")}
              alt="Motiv zur Fahrzeugpflege"
              loading="lazy"
            />
          </article>
        </Reveal>
      </section>
    </>
  );
}
