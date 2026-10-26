import React from "react";
import { asset, reviewers, reviewQuote } from "../data/content";
import { SectionHeading } from "./shared";
function Review({ person }) {
  const [name, role, img] = person;
  return (
    <figure className="review-card">
      <div className="stars" aria-label="5 von 5 Sternen – Beispielbewertung">
        ★ ★ ★ ★ ★
      </div>
      <blockquote>{reviewQuote}</blockquote>
      <figcaption>
        <img src={asset(img)} alt="" loading="lazy" />
        <div>
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </figcaption>
    </figure>
  );
}
export default function Testimonials() {
  const row1 = [
      reviewers[0],
      reviewers[1],
      reviewers[1],
      reviewers[2],
      reviewers[3],
    ],
    row2 = [reviewers[1], reviewers[1], reviewers[1], reviewers[4]];
  return (
    <section className="testimonials">
      <SectionHeading
        label="Kundenstimmen · Vorlagenbeispiele"
        description="Dieser Bereich bleibt für echte Kundenstimmen erhalten. Die folgenden Personen und Aussagen stammen aus der Gestaltungsvorlage und sind keine Bewertungen von Bujar Automobile."
      >
        Vertrauen, das bleibt.
        <br />
        Erfahrungen, <span>die zählen.</span>
      </SectionHeading>
      <div className="review-marquee">
        {[row1, row2].map((row, i) => (
          <div className={`review-lane lane-${i}`} key={i}>
            <div className="review-set">
              {row.map((p, j) => (
                <Review person={p} key={j} />
              ))}
            </div>
            <div className="review-set" aria-hidden="true">
              {row.map((p, j) => (
                <Review person={p} key={j} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
