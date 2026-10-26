# Bujar Automobile – vollständige deutsche Vorlage

Die ursprüngliche GarageSix-Struktur ist auf ausdrücklichen Wunsch wiederhergestellt. Alle Hauptbereiche bleiben für die schrittweise Bearbeitung erhalten. Nur die frühere Teamvorstellung ist als eigener Inhaberbereich mit Bujars echtem Foto gestaltet.

## Starten und bauen

`npm run dev` startet Vite. `npm run build` erstellt die Website einschließlich der statischen Unterseiten in `dist`. `npm run preview` zeigt den Produktionsbuild.

## GitHub Pages

Repository: https://github.com/SemmameBuke/bujar-automobile

GitHub-Pages-Adresse: https://semmamebuke.github.io/bujar-automobile/

- `main` enthält weiterhin das bisherige Tuning-Konzept.
- `werkstatt-website` ist der Standardbranch und enthält den bearbeitbaren Quellcode dieser vollständigen Werkstatt-Website.
- `gh-pages` enthält ausschließlich den fertigen Produktionsbuild. GitHub Pages verwendet diesen Branch mit dem Ordner `/`.

Für Aktualisierungen im Branch `werkstatt-website` zuerst `npm ci` und `npm run build:pages` ausführen. Den Inhalt von `dist/` einschließlich `.nojekyll` in den Branch `gh-pages` übernehmen, committen und pushen. Quellcode-Änderungen ebenfalls in `werkstatt-website` committen und pushen. Der Build berücksichtigt das Repository-Unterverzeichnis bei Bildern, Schriften, Navigation und Unterseiten. Der normale Build ohne `:pages` bleibt für eine eigene Domain geeignet.

## Enthaltene Bereiche

Hero mit drei Kennzahlen und vier Service-Icons, Video-Intro, beide Leistungs-Slider, vier Ablaufabschnitte mit Bildern, Werkstattgalerie, zwei Leistungsvertiefungen, Preis-/Upgrade-Slider, beide Bewertungsreihen, Bujar, FAQ, Kontaktformular, Standortkarte und vollständiger Footer.

Die Unterseiten `/terms`, `/privacy` und `/404` sind lokal vorhanden und im Footer verlinkt. Die rechtlichen Unterseiten sind ausdrücklich Gestaltungsvorlagen, keine freigegebenen Rechtstexte.

## Bearbeitung

- `src/data/content.js`: Texte, Listen, Vorlagenbeispiele und bestätigte Kontaktdaten.
- `src/data/pages.js`: Inhalte der Unterseiten.
- `src/components/`: unabhängig bearbeitbare Abschnitte.
- `src/components/Team.jsx`: ausschließlich Bujar und sein Originalfoto.
- `src/styles.css`: ursprüngliches Layout mit Ergänzungen für deutsche Texte und den Inhaberbereich.
- `public/assets/bujar-inhaber.avif`: unverändertes Foto des Nutzers.

## Aktuelle Inhalte

Bestätigt sind Bujar als Inhaber, sein Foto, Johannespfad 48 in 57223 Kreuztal, 0178 9882443, info@bujarautomobile.de und die Schwerpunkte Wartung/Inspektion, Reifen/Räder und Diagnose/Reparatur. Die restlichen Vorlagenbereiche werden bewusst nicht gelöscht. Nicht bestätigte Kennzahlen, Preise, Angebote und Kundenstimmen sind als Beispiele erkennbar und können später ersetzt werden.

Das Formular erstellt lokal einen Nachrichtentext. Der Besucher sendet selbst in WhatsApp oder seinem E-Mail-Programm. Keine automatische Zustellungs- oder Terminbestätigung. Die Google-Karte wird erst per Klick geladen.

Vorlagenmedien bleiben erhalten; ihre ursprünglichen Nutzungsbedingungen gelten weiterhin. Die vorherige reduzierte Version bleibt im Git-Verlauf erhalten.
