import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { siteUrl } from "../site";

export function Button({
  children,
  href = "/#booking",
  className = "",
  ...props
}) {
  return (
    <a className={`button ${className}`} href={siteUrl(href)} {...props}>
      <span>{children}</span>
      <ArrowUpRight size={19} strokeWidth={1.7} />
    </a>
  );
}
export function SectionHeading({
  label,
  children,
  description,
  className = "",
}) {
  return (
    <header className={`section-heading ${className}`}>
      <span className="eyebrow">{label}</span>
      <h2>{children}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
export function Reveal({ children, className = "", ...props }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} {...props}>
      {children}
    </div>
  );
}
export function Carousel({ children, label, className = "", auto = true }) {
  const ref = useRef(null);
  const [paused, setPaused] = useState(false);
  const [position, setPosition] = useState(0);
  function move(direction) {
    const el = ref.current;
    const distance = el.firstElementChild?.getBoundingClientRect().width || 390;
    const max = el.scrollWidth - el.clientWidth;
    const next =
      direction > 0 && el.scrollLeft >= max - 4
        ? 0
        : direction < 0 && el.scrollLeft <= 4
          ? max
          : el.scrollLeft + direction * (distance + 1);
    el.scrollTo({
      left: next,
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }
  useEffect(() => {
    if (
      !auto ||
      paused ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const timer = setInterval(() => {
      if (
        ref.current?.getBoundingClientRect().top < innerHeight &&
        ref.current?.getBoundingClientRect().bottom > 0
      )
        move(1);
    }, 4500);
    return () => clearInterval(timer);
  }, [auto, paused]);
  return (
    <div
      className={`carousel ${className}`}
      aria-label={label}
      aria-roledescription="Karussell"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <div
        ref={ref}
        className="carousel-track"
        onScroll={() => setPosition(ref.current.scrollLeft)}
        tabIndex={0}
        aria-label={`${label}, horizontal scrollen`}
        onKeyDown={(e) => {
          if (["ArrowLeft", "ArrowRight"].includes(e.key)) {
            e.preventDefault();
            move(e.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        {children}
      </div>
      <div className="carousel-controls">
        <button
          type="button"
          aria-label={`Zurück: ${label}`}
          onClick={() => move(-1)}
        >
          <ArrowLeft size={18} />
        </button>
        <span className="carousel-progress">
          <i
            style={{
              width: `${Math.max(15, Math.min(100, 20 + (position / (ref.current?.scrollWidth || 1)) * 100))}%`,
            }}
          />
        </span>
        <button
          type="button"
          aria-label={`Weiter: ${label}`}
          onClick={() => move(1)}
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
