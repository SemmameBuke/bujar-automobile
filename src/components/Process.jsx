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
        {processSteps.map(([tag, title, text, img], i) => (
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
              <img
                className="process-photo"
                src={asset(img)}
                alt={title}
                loading="lazy"
              />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
