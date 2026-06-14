# Catalogo Aerei Militari

Catalogo interattivo di aerei militari, costruito con **Next.js**. La home è un
**glossario** ricercabile; ogni aereo ha una **pagina dedicata** con specifiche,
storia, armamento, varianti, galleria storica e un **modello 3D interattivo**.

Primo aereo completo: **Grumman F-14 Tomcat**. Il progetto è pensato per crescere:
aggiungere un aereo = aggiungere un file dati (+ eventuale modello 3D).

🔗 **Live (GitHub Pages):** https://f3rren.github.io/f14-tomcat/

## Stack

- [Next.js](https://nextjs.org/) (App Router) + **TypeScript**, export statico (`output: 'export'`)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [react-three-fiber](https://r3f.docs.pmnd.rs/) + [drei](https://github.com/pmndrs/drei) — modello 3D
- [Framer Motion](https://www.framer.com/motion/) — reveal, parallax, count-up
- [Zustand](https://zustand.docs.pmnd.rs/) — stato condiviso (geometria alare)

## Sviluppo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # export statico in ./out
```

## Architettura

```
src/
  app/
    page.tsx                 # catalogo / glossario aerei
    aerei/[slug]/page.tsx    # pagina dettaglio (statica via generateStaticParams)
  components/  catalog · layout · sections · three · ui
  lib/
    data/aircraft/           # registro aerei (un file per aereo)
    store/                   # stato geometria alare
public/images/aircraft/<slug>/   # immagini self-hostate
```

### Aggiungere un aereo

1. Creare `src/lib/data/aircraft/<slug>.ts` con i dati (interfaccia `Aircraft`).
2. Registrarlo in `src/lib/data/aircraft/index.ts`.
3. (Opzionale) aggiungere un modello 3D in `src/components/three/models/` e mapparlo nel registry.

## Deploy

Push su `main` → GitHub Actions (`.github/workflows/deploy.yml`) builda l'export e
pubblica su GitHub Pages. `basePath`/`assetPrefix` valgono `/f14-tomcat` solo in produzione.

## Crediti immagini

Fotografie storiche: **U.S. Navy, pubblico dominio**, via Wikimedia Commons.
Fonti dati: [Wikipedia](https://en.wikipedia.org/wiki/Grumman_F-14_Tomcat),
[aereimilitari.org](https://www.aereimilitari.org/Aerei/F-14.htm).

## Licenza

Codice: MIT. Immagini: pubblico dominio (U.S. Navy). Contenuti a scopo divulgativo.
