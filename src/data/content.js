import { Wrench, Disc3, Droplet, Snowflake, CircleDot, Zap } from "lucide-react";

// Vollständige Vorlage; nicht bestätigte Angebote bleiben als Beispiele erhalten.
export const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;
export const business = { name: "Bujar Automobile", phone: "0178 9882443", phoneHref: "tel:+491789882443", whatsapp: "491789882443", email: "info@bujarautomobile.de", street: "Johannespfad 48", city: "57223 Kreuztal", maps: "https://www.google.com/maps/dir/?api=1&destination=Johannespfad+48%2C+57223+Kreuztal" };
export const intro = "Eine Warnleuchte im Cockpit, der nächste Fahrzeugservice oder der Wechsel auf Winterreifen? Bei Bujar Automobile in Kreuztal kümmern wir uns um Instandsetzungen, Wartung und Reifenservice.";
export const workshopServices = [
  ["Diagnose & Instandsetzung", "Leuchtet eine Warnlampe oder klingt Ihr Auto anders als sonst? Wir prüfen die Ursache und besprechen die Instandsetzung mit Ihnen.", "bujar-werkstatt-nacht.png"],
  ["Wartung & Fahrzeugservice", "Wir klären mit Ihnen, welche Wartungsarbeiten bei Ihrem Kilometerstand anstehen.", "bujar-werkzeuge-detail.png"],
  ["Reifen & Räder", "Steht der saisonale Räderwechsel an? Vereinbaren Sie Ihren Termin für den Reifenservice in Kreuztal.", "bujar-reifenservice.png"],
];
export const mechanicalServices = [
  ["Motor & Instandsetzung", "Auffälligkeiten am Motor prüfen und notwendige Instandsetzungen besprechen.", Wrench],
  ["Bremsenservice", "Zustand der Bremsanlage prüfen und anstehende Arbeiten abstimmen.", Disc3],
  ["Ölwechsel", "Motoröl und Filter als Teil der regelmäßigen Fahrzeugwartung.", Droplet],
  ["Klima & Kühlung", "Klimaanlage und Kühlsystem im Blick behalten.", Snowflake],
  ["Reifen & Räder", "Reifenservice und Räderwechsel für die nächste Saison.", CircleDot],
  ["Elektrische Diagnose", "Elektrischen Störungen und Warnmeldungen auf den Grund gehen.", Zap],
];
export const processSteps = [
  ["Anfrage", "Termin anfragen", "Erzählen Sie uns, was bei Ihrem Fahrzeug ansteht. Wartung, Reifen oder ein konkretes Problem: Ein kurzer Anruf oder eine Nachricht ist der erste Schritt. Den Termin stimmen Sie persönlich mit uns ab.", "bujar-werkzeuge-detail.png", {
    title: "Ihre Werkstatt in Kreuztal",
    text: "Wartung, Fahrzeugservice oder Reifenwechsel: Fragen Sie Ihren Termin bei Bujar Automobile direkt und persönlich an.",
    alt: "Werkzeuge und Werkbank mit Bujar-Automobile-Schriftzug",
  }],
  ["Prüfung", "Das Fahrzeug ansehen", "Was ist Ihnen aufgefallen? Gemeinsam besprechen wir das Anliegen und welche Prüfung sinnvoll ist. So lässt sich der nächste Schritt für Ihr Fahrzeug klären.", "bujar-werkstatt-klassiker.webp", {
    title: "Fahrzeugdiagnose mit Überblick",
    text: "Warnleuchte oder ungewohntes Geräusch? Gemeinsam klären wir, welche Diagnose für Ihr Fahrzeug sinnvoll ist.",
    alt: "Schwarzer Ford Mustang in einer Werkstatt mit Bujar-Automobile-Schriftzug",
  }],
  ["Werkstatt", "Arbeiten abstimmen", "Auf Basis des Fahrzeugzustands sprechen wir über die erforderlichen Arbeiten. Umfang, Fragen zu Teilen und der zeitliche Rahmen gehören ins persönliche Gespräch.", "bujar-werkstatt-nacht.png", {
    title: "Instandsetzungen klar abstimmen",
    text: "Bei Bujar Automobile in Kreuztal besprechen wir nötige Instandsetzungen, passende Teile und den Umfang der Arbeiten.",
    alt: "Schwarzer BMW vor einer Werkzeugwand und ein Fahrzeug auf der Hebebühne",
  }],
  ["Abholung", "Weiter geht die Fahrt", "Zur Abholung können offene Fragen zu den durchgeführten Arbeiten und zur weiteren Wartung besprochen werden. Für Ihre nächste Fahrt und Ihren Alltag mit dem Auto.", "bujar-auto-in-fahrt.png", {
    title: "Gut betreut im Siegerland",
    text: "Auch nach Ihrem Werkstattbesuch sind wir für Fragen zu Wartung, Reifen und dem nächsten Service ansprechbar.",
    alt: "Schwarzer BMW bei einer Fahrt durch die Stadt am Abend",
  }],
];
export const upgrades = [
  ["Motor-Tuning", "tuning-motor.jpg"],
  ["Abgasanlagen", "tuning-abgas.jpg"],
  ["Fahrwerk-Upgrades", "tuning-fahrwerk.jpg"],
  ["Steuergerät-Optimierung", "tuning-steuergeraet.jpg"],
  ["Turbo & Kompressor", "tuning-turbo.jpg"],
  ["Sportbremsen", "tuning-bremsen.jpg"],
];
// Manually checked against the individual Google reviews on 2026-11-01.
// Keep quotes verbatim; excerpt marks identify shortened reviews.
export const googleReviews = {
  url: "https://www.google.com/search?q=Bujar+Automobile%26Reifenservice&si=AE1YtOqiKPb2pdLXAi8quZ9vbH4aVq_aX8-3H9iFBLpRNK95c2-vMQwRYajBQpxLgQ6rEjSOPChriiG971GxQs8FSiOxXFgHJp2vxJ4aNJH8pMCN2maPg3Q%3D",
  rating: "4,8",
  count: 43,
  checkedAt: "01.11.2026",
};
export const reviews = [
  {
    name: "Christoph Frisch", initials: "CF", rating: 5, excerpt: true,
    quote: "Eine absolut empfehlenswerte kleine Werkstatt. Sehr freundlich und kompetente Mitarbeiter.",
    url: "https://share.google/YGerN6QIYFTfxsyiT",
  },
  {
    name: "Heike Schweisfurth", initials: "HS", rating: 5, excerpt: true,
    quote: "Service hervorragend, super nette Leute. Komme gerne wieder. Vielen Dank.",
    url: "https://share.google/8QSycte4tLuxqzsF3",
  },
  {
    name: "Ute Schweisfurth", initials: "US", rating: 5, excerpt: false,
    quote: "Super toller Service. Es wird alles möglich gemacht. Wenn ich ein Problem habe, anrufen und Lösungen erfolgt.",
    url: "https://share.google/jeATm5nw9LcMqghFx",
  },
  {
    name: "Albanita Haj", initials: "AH", rating: 5, excerpt: false,
    quote: "Super Kompetentes Personal, sehr saubere Arbeit und das Preis-Leistungsverhältnis ist super!",
    url: "https://share.google/v1icHCzGaHSYn6cdq",
  },
  {
    name: "Robert Schwarz", initials: "RS", rating: 5, excerpt: false,
    quote: "Kam zum Reifen wechseln. Wurde ruckzuck zu einem vernünftigen Preis erledigt. 1A.",
    url: "https://share.google/xLgUSReSGhmqPCHE8",
  },
  {
    name: "Wolfgang Tillessen", initials: "WT", rating: 5, excerpt: false,
    quote: "Werkstatt schon mehrfach in Anspruch genommen. Sehr guter Service bei hoher Fachkompetenz.",
    url: "https://share.google/BT8su6JW0JDFLsiH9",
  },
];
export const faqs = [
  ["Welche Leistungen bietet Bujar Automobile an?", "Unsere Schwerpunkte sind Diagnose und Instandsetzung, Wartung und Fahrzeugservice sowie Reifenservice. Beschreiben Sie uns Ihr Anliegen, damit wir den passenden Termin mit Ihnen abstimmen können."],
  ["Kann ich einen Termin online anfragen?", "Ja. Das Formular bereitet Ihre Anfrage vor. Sie prüfen den Text und senden ihn anschließend selbst per WhatsApp oder E-Mail. Ein Termin ist erst nach persönlicher Bestätigung vereinbart."],
  ["Kann ich mit meinem Fahrzeug zu Ihnen kommen?", "Nennen Sie uns Marke, Modell und Ihr Anliegen. Im direkten Gespräch klären Sie mit uns, welche Arbeiten für Ihr Fahrzeug möglich sind."],
  ["Wie lange dauert ein Werkstattbesuch?", "Das hängt vom Fahrzeug und den erforderlichen Arbeiten ab. Fragen Sie den zeitlichen Rahmen bitte bei der Terminabstimmung an."],
  ["Sind individuelle Fahrzeug-Upgrades möglich?", "Der Upgrade-Bereich zeigt derzeit Beispiele aus der Vorlage. Ob eine bestimmte Arbeit angeboten wird, klären Sie bitte persönlich mit Bujar."],
];
