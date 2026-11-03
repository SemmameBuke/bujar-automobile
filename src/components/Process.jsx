import React from "react";
import { asset, business, processSteps } from "../data/content";
import { SectionHeading, Reveal } from "./shared";
export default function Process() {
  return (
    <section id="process" className="process">
      <SectionHeading
        label="Unser Ablauf"
        description="Von Ihrer Anfrage bis zur Abholung: ein klarer Ablauf rund um Ihr Fahrzeug."
      >
        Klare Schritte.
        <br />
        Persönlicher <span>Service.</span>
      </SectionHeading>
      <div className="process-list">
        {processSteps.map(([tag, title, text, img, caption], i) => (
          <Reveal key={tag}>
            <article className={`process-card ${i % 2 ? "reverse" : ""}`}>
              <div className="process-copy">
                <span className="eyebrow">{tag}</span>
                <div>
                  <h3>
                    0{i + 1} — {title}
                  </h3>
                  <p>{text}</p>
                </div>
                {tag === "Anfrage" && (
                  <aside className="appointment-note" aria-label="Für den ersten Anruf">
                    <h4>Für den ersten Anruf</h4>
                    <ul>
                      <li>Welches Modell fahren Sie?</li>
                      <li>Was steht an oder was ist Ihnen aufgefallen?</li>
                      <li>Wann passt Ihnen ein Werkstatttermin?</li>
                    </ul>
                    <a href={business.phoneHref}>Bujar anrufen · {business.phone}</a>
                  </aside>
                )}
                {tag === "Prüfung" && (
                  <aside className="appointment-note" aria-label="Hinweise für die Diagnose">
                    <h4>Was hilft bei der Diagnose?</h4>
                    <ul>
                      <li>Was hören, sehen oder spüren Sie?</li>
                      <li>Wann fällt es auf – beim Starten, Lenken oder Bremsen?</li>
                      <li>Tritt es bei jeder Fahrt auf oder nur gelegentlich?</li>
                    </ul>
                  </aside>
                )}
                {tag === "Werkstatt" && (
                  <aside className="appointment-note" aria-labelledby="repair-priorities">
                    <h4 id="repair-priorities">Was hat Vorrang?</h4>
                    <dl className="repair-priorities">
                      <dt>Jetzt erledigen</dt>
                      <dd>Bujar erklärt, welche Arbeiten für die sichere Weiterfahrt nötig sind.</dd>
                      <dt>Für später planen</dt>
                      <dd>Was noch Zeit hat, können Sie beim nächsten Service einplanen.</dd>
                    </dl>
                  </aside>
                )}
                {tag === "Abholung" && (
                  <aside className="appointment-note" aria-labelledby="pickup-location">
                    <h4 id="pickup-location">Hier holen Sie Ihr Auto ab</h4>
                    <address className="pickup-address">
                      <strong>{business.name}</strong><br />
                      {business.street}<br />
                      {business.city}
                    </address>
                    <a href={business.maps} target="_blank" rel="noopener noreferrer">Route in Google Maps öffnen ↗</a>
                  </aside>
                )}
              </div>
              <figure className="process-visual">
                <img
                  className="process-photo"
                  src={asset(img)}
                  alt={caption.alt}
                  loading="lazy"
                />
                <figcaption className="image-glass-card">
                  <h4>{caption.title}</h4>
                  <p>{caption.text}</p>
                </figcaption>
              </figure>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
