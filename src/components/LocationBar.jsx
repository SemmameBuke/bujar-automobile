import React from "react";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { business } from "../data/content";

export default function LocationBar() {
  return (
    <section id="standort" className="location-bar" aria-label="Standort und Anfahrt">
      <div className="location-address">
        <MapPin size={24} strokeWidth={1.7} aria-hidden="true" />
        <div>
          <strong>{business.name} · Kreuztal</strong>
          <address>{business.street}, {business.city}</address>
        </div>
      </div>
      <div className="location-actions">
        <a href={business.maps} target="_blank" rel="noopener noreferrer">Route planen <ArrowUpRight size={16} aria-hidden="true" /></a>
        <a href={business.phoneHref}><Phone size={16} aria-hidden="true" /> Werkstatt anrufen</a>
      </div>
    </section>
  );
}
