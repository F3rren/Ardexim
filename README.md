# F-14 Tomcat — Scheda tecnica interattiva

Sito vetrina single-page dedicato al **Grumman F-14 Tomcat**: specifiche, storia,
armamento, impiego operativo e una galleria storica. Tema tattico/HUD, dark mode.

🔗 **Demo:** apri `index.html` in un browser (oppure pubblicala con GitHub Pages).

## Caratteristiche

- **Modello 3D interattivo** del Tomcat (Three.js) ruotabile col mouse, con ali a
  geometria variabile che seguono lo slider e postbruciatore che si accende in supersonico.
- **Geometria alare variabile** sincronizzata tra modello 3D e blueprint 2D (20°→68°).
- **Galleria storica in stile Apple** con parallax scroll-linked (`animation-timeline: view()`).
- Sezioni: panoramica, sistemi & componenti, specifiche (F-14D), armamento, impiego
  operativo, varianti, timeline storica e dati utili.
- **Accessibile e responsive**: rispetto di `prefers-reduced-motion`, focus states,
  contrasto AA, layout a 375 / 768 / 1024 / 1440 px, navigazione mobile.

## Stack

- HTML + CSS + JavaScript vanilla, **single file** (zero build).
- [Three.js](https://threejs.org/) via CDN (caricamento progressivo, con fallback se offline).
- Tipografia: Oswald · Share Tech Mono · Inter (Google Fonts).

## Crediti immagini

Le fotografie storiche provengono da **Wikimedia Commons** e sono opere della
**U.S. Navy in pubblico dominio**:

- General Dynamics F-111B (1965)
- Prototipi YF-14A in formazione (~1972)
- F-14D sul Golfo Persico (2005)

Fonti dei dati: [Wikipedia — Grumman F-14 Tomcat](https://en.wikipedia.org/wiki/Grumman_F-14_Tomcat),
[aereimilitari.org](https://www.aereimilitari.org/Aerei/F-14.htm).

## Roadmap

- [ ] Porting a **React / Next.js** (componenti, `next/image`, react-three-fiber, SSG/SEO).

## Licenza

Codice: MIT. Le immagini restano di pubblico dominio (U.S. Navy). Contenuti a scopo
informativo/divulgativo.
