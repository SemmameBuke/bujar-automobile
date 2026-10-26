import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Hero, { VideoIntro } from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import ServiceOverview from "./components/ServiceOverview";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Subpage from "./components/Subpage";
import { legalPages } from "./data/pages";
import { pagePath } from "./site";
import "./styles.css";
function App() {
  const path = pagePath(window.location.pathname);
  const isHome = path === "/" || path === "/index.html";
  const page = legalPages[path.slice(1)];
  useEffect(() => {
    document.title = isHome ? "Bujar Automobile · Ihre Werkstatt in Kreuztal" : `${page?.title || "Seite nicht gefunden"} · Bujar Automobile`;
    if (window.location.hash) {
      requestAnimationFrame(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView());
    }
  }, []);
  return (
    <>
      <a className="skip-link" href={isHome ? "#services" : "#page-content"}>
        Zum Inhalt springen
      </a>
      <Header />
      <main>
        <Hero />
        {isHome ? <>
        <VideoIntro />
        <Services />
        <Process />
        <ServiceOverview />
        <Pricing />
        </> : <Subpage page={page} />}
        {(isHome || page) && <>
        <Testimonials />
        <Team />
        <FAQ />
        </>}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
