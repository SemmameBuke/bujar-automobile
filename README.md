# Bujar Tuning — Softwareoptimierung und Umbauten

Live: **https://semmamebuke.github.io/bujar-tuning/**

Statischer Vite-Build der Website von Bujar Automobile in Kreuztal.

- Kaltstart mit anschließender BA-PERFORMANCE-Einblendung, ohne Überspringen-Button.
- Stufe 1, 2 und 3; Stufe 2 und 3 beziehen Umbauten ein.
- Interaktives Audi-RS3-Beispiel mit umschaltbaren PS-/Nm-Kurven und Anfrageübergabe.
- 23 unabhängige Zusatzoptionen in aufklappbaren Gruppen, ohne Preise.
- Häufige Fragen, Standortkarte mit Scan-Kreuz, Abschnittsvideos und Footer-Film.
- Anfrageformular mit lokaler Fahrzeugschein-Vorschau.

## E-Mail-Versand

GitHub Pages stellt nur statische Dateien bereit. Der E-Mail-Versand mit Bildanhang benötigt den separat konfigurierten Node-/SMTP-Server. In dieser Pages-Version zeigt das Formular einen Einrichtungshinweis und das Absenden ist deaktiviert; es wird kein Versand vorgetäuscht. Direkte Kontaktlinks bleiben verfügbar.

## Aktualisieren

Das Quellprojekt befindet sich lokal in `v2-video-compare/`. Dort `npm run build:pages` ausführen und den Inhalt von `dist/` in dieses Repository übernehmen. `.git`, `.nojekyll` und dieses README erhalten.

Direktlinks: `#philosophy`, `#drehmoment`, `#options`, `#faq` und `#contact`.
