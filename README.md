# Schachgemeinschaft Neuss Website

Kleine Eleventy-Version der bestehenden Vereinswebsite. Decap CMS und Login sind noch nicht eingerichtet.

## Lokal starten

Voraussetzung: Node.js ist installiert.

```powershell
npm install
npm start
```

Danach ist die Website normalerweise unter `http://localhost:8080/` erreichbar.

## Produktions-Build

```powershell
npm run build
```

Die fertige statische Website wird im Ordner `_site` erzeugt.

## Spätere News-Beiträge

News werden als Markdown-Dateien unter `src/aktuelles/` angelegt:

```markdown
---
title: "Überschrift der Meldung"
date: 2026-07-02
summary: "Kurzer Einleitungstext"
image: ""
imageAlt: ""
---

Hier steht später der vollständige Text der Meldung.
```

Für ein Bild wird bei `image` später beispielsweise `/assets/uploads/dateiname.jpg` eingetragen. Ohne News-Datei zeigt die Startseite weiterhin den Aufbau-Hinweis.

## Decap CMS vorbereiten

Nach dem lokalen Start ist der vorbereitete Adminbereich unter `http://localhost:8080/admin/` erreichbar.

In `src/admin/config.yml` ist das GitHub-Repository
`eliasthai3-web/schachgemeinschaft-neuss-website` mit dem Branch `main` eingetragen.

Der Adminbereich ist derzeit nur technisch vorbereitet. Für Anmeldung und echtes Speichern werden später benötigt:

- ein GitHub-Repository mit diesem Projekt,
- geeignetes Hosting für die erzeugte Website,
- eine OAuth-/Authentifizierungslösung für den GitHub-Backend-Zugriff.

Lokal wird vorerst nur geprüft, ob Eleventy den Adminbereich und seine Konfiguration korrekt nach `_site/admin/` ausgibt. Ohne eingerichtete Authentifizierung kann Decap CMS noch keine Inhalte laden oder speichern.
