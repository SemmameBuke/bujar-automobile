import React from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../data/content";
export default function FAQ() {
  return (
    <section
      id="contact"
      className="faq"
      aria-label="Häufige Fragen"
    >
      <div className="faq-list">
        {faqs.map(([question, answer], i) => (
          <details key={question} className="faq-item" open={i === 0}>
            <summary>
              {question}
              <span className="faq-icon">
                <Plus className="plus" size={20} />
                <Minus className="minus" size={20} />
              </span>
            </summary>
            <div className="faq-answer">
              <p>{answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
