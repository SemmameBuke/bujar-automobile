import React, { useEffect, useRef, useState } from "react";
import { asset, intro } from "../data/content";
import { Button } from "./shared";
import { siteUrl } from "../site";
function Stat({ value, suffix, label }) {
  const [count, setCount] = useState(value);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let start;
    let id;
    const tick = (t) => {
      start ??= t;
      const p = Math.min((t - start) / 1200, 1);
      setCount(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [value]);
  return (
    <div className="stat">
      <strong>
        {count}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}
export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-center">
        <div className="hero-service-label">
          <ul aria-label="Werkstattleistungen">
            {["Wartung", "Reparaturen", "Diagnose", "Fahrzeugservice"].map(service => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <p>Persönlicher Service. Gute Fahrt. Tag für Tag.</p>
        </div>
        <h1>
          Die Werkstatt Ihres <em>Vertrauens.</em>
        </h1>
        <p>{intro}</p>
        <Button href="/#services">Leistungen entdecken</Button>
      </div>
      <div className="hero-bottom">
        <div className="hero-stats" aria-label="Bujar Automobile in Zahlen">
          <Stat value={10} suffix="k+" label="Gewartete Fahrzeuge" />
          <Stat value={5} suffix="★" label="Kundenbewertung" />
          <Stat value={15} suffix="+" label="Jahre Erfahrung" />
        </div>
        <div className="hero-services">
          {[
            ["Ölwechsel", "kxfdK0IiIFTkYRJVvgEZ0U8w0sc.png"],
            ["Diagnose", "XQzWc1W99j0uThGAnSuRRbekc54.png"],
            ["Reparaturen", "fnXCuOjcYv5fiagAlwYO7o9Xc80.png"],
            ["Upgrades", "ZJaBreEdIYTdikhgLjvvLDMFX48.png"],
          ].map(([label, img]) => (
            <a key={label} href={siteUrl("/#services")}>
              <span>
                <img src={asset(img)} alt="" />
              </span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
export function VideoIntro() {
  const ref = useRef(null);
  useEffect(() => {
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const p = Math.max(
          0,
          Math.min(1, -rect.top / (rect.height - innerHeight)),
        );
        el.style.setProperty("--progress", p);
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
    };
  }, []);
  return (
    <section
      className="video-intro"
      ref={ref}
      aria-label="Willkommen bei Bujar Automobile"
    >
      <div className="video-sticky">
        <div className="intro-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={asset("bwxO6O7UHCMh9GJBCs6fWKRNrA.jpg")}
          >
            <source
              src={asset("qW5wUY382W1T3B1ihBhoNeNReJ8.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="intro-title">
          <h2>Aus guten Ideen</h2>
          <span>Bujar Automobile</span>
          <h2>wird gute Fahrt</h2>
        </div>
      </div>
    </section>
  );
}
