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

Fotografie storiche via Wikimedia Commons:
- **F-14 Tomcat — U.S. Navy / U.S. Government, pubblico dominio**: F-111B (1965), prototipi YF-14A (~1972),
  F-14D sul Golfo Persico (2005), F-14A del VF-84 «Jolly Rogers» (1986).
- **F-14 iraniano a Mehrabad (2013)** — foto di **Mohammad Shaltouki**, licenza **CC BY 4.0**.
- **F-15E Strike Eagle — U.S. Air Force, pubblico dominio**: vira da un'aerocisterna, decollo a pieno carico,
  formazione di Desert Storm (1991), sui cieli dell'Afghanistan, in missione sull'Iraq (2004),
  F-15EX Eagle II.

Fonti dati: [Wikipedia (F-14)](https://en.wikipedia.org/wiki/Grumman_F-14_Tomcat),
[Wikipedia (F-15E)](https://en.wikipedia.org/wiki/McDonnell_Douglas_F-15E_Strike_Eagle),
[aereimilitari.org](https://www.aereimilitari.org/Aerei/F-14.htm).

## Crediti modelli 3D

- **F-15E Strike Eagle** — «[F-15E Strike Eagle - Fighter Jet - Free](https://sketchfab.com/3d-models/f-15e-strike-eagle-fighter-jet-free-fff7d75490474e9b964d90cc031c8d01)»
  di **bohmerang** (Sketchfab), licenza **CC BY-NC-SA 4.0**.

> Nota licenza: il modello dell'F-15E è **non commerciale (NC)** e **ShareAlike (SA)**.
> Questo progetto resta gratuito e a scopo divulgativo (uso non commerciale).

## Licenza

Codice: MIT. Immagini: pubblico dominio (U.S. Navy). Contenuti a scopo divulgativo.
