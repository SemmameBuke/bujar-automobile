import React from "react";
import { asset, processSteps } from "../data/content";
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
