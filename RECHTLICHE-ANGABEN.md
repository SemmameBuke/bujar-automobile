# Kundendaten vor Veröffentlichung

Stand: 2. November 2026. Die Rechtstexte sind Entwürfe mit sichtbaren Platzhaltern. Keine Zusicherung von Rechtssicherheit. Keine Veröffentlichung als fertiges Impressum oder fertige Datenschutzerklärung, bevor die offenen Punkte geklärt sind.

## Vom Betrieb ausfüllen lassen

- Vollständiger Name des Inhabers oder rechtlicher Unternehmensträger:
- Genaue Firmierung und Rechtsform:
- Bei Gesellschaften: vertretungsberechtigte Personen:
- Ladungsfähige Anschrift bestätigen: Johannespfad 48, 57223 Kreuztal.
- Telefon und E-Mail bestätigen: 0178 9882443, info@bujarautomobile.de.
- USt-IdNr. und/oder Wirtschafts-Identifikationsnummer, soweit vorhanden (keine persönliche Steuernummer):
- Handelsregister/anderes Register, Gericht und Nummer, soweit eingetragen:
- Zuständige Handwerkskammer, gegebenenfalls Aufsichtsbehörde:
- Berufsbezeichnung, Verleihungsstaat und berufsrechtliche Regelungen, soweit einschlägig:
- Verbraucherschlichtung: Pflicht zur Teilnahme? Freiwillige Bereitschaft? Gegebenenfalls Stelle, Anschrift und Website. Nicht ungeprüft „nicht bereit und nicht verpflichtet“ behaupten.
- Datenschutzbeauftragter benannt bzw. Benennungspflicht geprüft? Gegebenenfalls Kontaktdaten:
- Welche E-Mail-, Telefon- und WhatsApp-/Business-Anbieter bzw. Konfigurationen werden tatsächlich genutzt?
- Wer bearbeitet Anfragen, wann werden sie gelöscht, welche Aufbewahrungspflichten greifen?

## Nach Wahl des Hostings ergänzen

- Anbieter und Anschrift, Infrastruktur/CDN, Rollen und gegebenenfalls Auftragsverarbeitungsvertrag.
- Tatsächliche Server-Protokolldaten und Speicherfristen.
- Empfänger, Drittlandübermittlungen und konkret anwendbare Garantien.
- Hosting-Verhalten hinsichtlich Cookies und Browserzugriffen prüfen.
- Falls GitHub Pages als endgültiger Hoster geplant ist: Vertragsbedingungen und Nutzungsgrenzen für geschäftliche Angebote prüfen. Die Hostingentscheidung ist noch offen; kein Anbieter wurde in die Erklärung hineinerfunden.

## Technisch im aktuellen Website-Code umgesetzt

- Impressum unter `/impressum/`, Datenschutz unter `/privacy/`, direkte Links im Footer.
- Klar sichtbare Entwurfskennzeichnung und gekennzeichnete offene Angaben.
- Keine eingebettete Google-Karte: nur externer Routenlink.
- Formular bereitet Nachrichten lokal vor, ohne Formularserver.
- Hinweis vor WhatsApp: Eingaben werden bereits beim Öffnen über den Link an WhatsApp übergeben.
- Datenschutzhinweis unmittelbar am Formular.
- Lokale Schrift-, Bild- und Videodateien; keine externen Widgets, keine Analytics und keine eigenen Marketing-Cookies im geprüften Code.
- Die bisherige fiktive AGB-Seite enthält jetzt nur Hinweise zur Terminanfrage. Keine erfundenen Storno-, Haftungs- oder Zahlungsregeln.

## Vor Freigabe zusätzlich klären

- Nutzungsrechte an Framer-Template, Schriftdateien, verbliebenen Stockmedien und neu gelieferten Bildern nachweisen. Rechte am Inhaberfoto und an erkennbaren Personen prüfen.
- Verwendung der Kundenrezensionen mit Namen/Quellen auf eigener Website einschließlich datenschutzrechtlicher Grundlage prüfen; öffentliche Sichtbarkeit allein ist keine pauschale Nutzungsfreigabe.
- Unbestätigte Fahrzeugzahlen, Erfahrungsjahre und Leistungs-/Garantieversprechen entfernen oder belegen.
- Im Betrieb tatsächlich bestehende AGB nur nach eigener fachlicher Prüfung verwenden.
- Für endgültige öffentliche Nutzung fachliche rechtliche Prüfung der ausgefüllten Angaben und tatsächlichen Technik einholen.

## Bearbeitung

Kundendaten zentral in `src/data/legal.js` eintragen. Offene Absätze der Datenschutzerklärung konkret ausarbeiten; nicht bloß die Markierungen löschen. Entwurfskennzeichnung erst nach vollständiger Prüfung entfernen. Anschließend Build und veröffentlichte Unterseiten testen.

## Grundlagen

- https://www.gesetze-im-internet.de/ddg/__5.html
- https://www.gesetze-im-internet.de/vsbg/__36.html
- https://www.gesetze-im-internet.de/ttdsg/__25.html
- https://www.ldi.nrw.de/kontakt
- https://www.docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
