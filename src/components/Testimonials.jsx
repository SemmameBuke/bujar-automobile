import React from "react";
import { googleReviews, reviews } from "../data/content";
import { SectionHeading } from "./shared";
function Review({ review, duplicate = false }) {
  const { name, initials, rating, quote, url, excerpt } = review;
  return (
    <figure className="review-card">
      <div className="stars" role="img" aria-label={`${rating} von 5 Sternen`}>
        <span aria-hidden="true">{"★ ".repeat(rating).trim()}</span>
      </div>
      <blockquote cite={url}>„{quote}“</blockquote>
      <figcaption>
        <span className="review-avatar" aria-hidden="true">{initials}</span>
        <div>
          <strong>{name}</strong>
          <span>Google-Rezension{excerpt ? " · Auszug" : ""}</span>
        </div>
      </figcaption>
      <a className="review-source" href={url} target="_blank" rel="noopener noreferrer"
        tabIndex={duplicate ? -1 : undefined}
        aria-label={`Rezension von ${name} auf Google lesen (öffnet in einem neuen Tab)`}>
        Auf Google lesen <span aria-hidden="true">↗</span>
      </a>
    </figure>
  );
}
export default function Testimonials() {
  const rows = [reviews.slice(0, 3), reviews.slice(3)];
  return (
    <section className="testimonials">
      <SectionHeading
        label="Kundenstimmen"
        description="Persönliche Erfahrungen mit Bujar Automobile in Kreuztal. Eine Auswahl echter Google-Rezensionen – teilweise als kurzer Auszug."
      >
        Vertrauen, das bleibt.
        <br />
        Erfahrungen, <span>die zählen.</span>
      </SectionHeading>
      <div className="review-summary">
        <div>
          <strong>{googleReviews.rating} / 5</strong>
          <span>aus {googleReviews.count} Google-Bewertungen · Stand: {googleReviews.checkedAt}</span>
        </div>
        <a href={googleReviews.url} target="_blank" rel="noopener noreferrer">
          Alle Google-Bewertungen <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="review-marquee">
        {rows.map((row, i) => (
          <div className={`review-lane lane-${i}`} key={i}>
            {[0, 1, 2, 3].map((copy) => (
              <div className="review-set" key={copy} aria-hidden={copy > 0 ? true : undefined}>
                {row.map((review) => (
                  <Review review={review} key={review.name} duplicate={copy > 0} />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
