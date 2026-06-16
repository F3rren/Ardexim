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
public/models/<NAZIONE>/         # modelli 3D (GLB), una cartella per Stato (USA, RUS, …)
```

### Aggiungere un aereo

1. Creare `src/lib/data/aircraft/<slug>.ts` con i dati (interfaccia `Aircraft`).
2. Registrarlo in `src/lib/data/aircraft/index.ts`.
3. (Opzionale) mettere il GLB in `public/models/<NAZIONE>/` e indicarne il percorso nel campo `model3d`.
4. La palette colore segue il campo `country` (vedi `src/lib/theme/nations.ts`): aggiungere lì la nazione per un nuovo accento.

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
- **Su-57 Felon**: T-50 «52» (2013) — *Alan Wilson*, **CC BY-SA 2.0**; T-50 al MAKS 2013 — *Doomych*,
  **pubblico dominio**; Su-57 al forum Army-2022 — *Boevaya mashina*, **CC BY-SA 3.0**;
  Su-57 al salone di Zhuhai 2024 — *N509FZ*, **CC BY-SA 4.0**.
- **Eurofighter Typhoon**: velivolo di sviluppo DA2 — *kitmasterbloke*, **CC BY 2.0**; Typhoon F2 RAF (2006) —
  *Arpingstone*, **pubblico dominio**; Typhoon dell'Aeronautica Militare italiana — *kevinmcgill*, **CC BY-SA 2.0**;
  Typhoon tedesco TaktLwG 74 (2024) — *U.S. Air Force*, **pubblico dominio**.
- **F-16 Fighting Falcon**: prototipo YF-16 — *Balon Greyjoy*, **CC0**; F-16A danese, F-16C in Guerra del Golfo (1991)
  e shot in volo — *U.S. Air Force*, **pubblico dominio**; F-16I «Sufa» israeliano (2016) — *Israeli Air Force*, **CC BY 4.0**.
- **B-2 Spirit**: in volo, test su Edwards, rifornimento in volo, decollo e operazione «Midnight Hammer» (2025) —
  *U.S. Air Force*, **pubblico dominio**.
- **Dassault Rafale**: Rafale in volo — *Clemens Vasters*, **CC BY 2.0**; dimostratore Rafale A a Farnborough (1986) —
  *Dick Gilbert*, **CC BY 2.0**; lancio del Rafale M da portaerei — *U.S. Navy*, **pubblico dominio**;
  Rafale C al Paris Air Show 2025 — *Kilyann Le Hen*, **CC BY 4.0**.
- **F-35 Lightning II**: F-35A in volo, trio A/B/C su Eglin (2014), F-35B in atterraggio verticale, F-35 italiani
  e display a Dubai (2023) — *U.S. Air Force / U.S. Navy*, **pubblico dominio**.
- **F-22 Raptor**: in volo, prototipo YF-22, scia di vapore, preparazione al volo di combattimento e al crepuscolo —
  *U.S. Air Force / Department of Defense*, **pubblico dominio**.
- **F/A-18 Super Hornet**: F/A-18F in volo — *Chris Phutully*, **CC BY 2.0**; lancio dell'F/A-18E, ponte di volo,
  EA-18G Growler e formazione — *U.S. Navy*, **pubblico dominio**.
- **MiG-29 Fulcrum**: MiG-29 in volo — *Alan Wilson*, **CC BY-SA 2.0**; MiG-29 in manovra (MAKS) — *Vitaly V. Kuzmin*,
  **CC BY-SA 4.0**; MiG-29 tedesco con F-15C (2003) — *U.S. Air Force*, **pubblico dominio**; MiG-29 polacco —
  *Mark Kent*, **CC BY-SA 2.0**; MiG-29 ucraino — *Min. Difesa Ucraina*, **CC BY 4.0**.
- **A-10 Thunderbolt II**: in volo, «gun run» col GAU-8, Desert Storm (1991), missione in Afghanistan e A-10C —
  *U.S. Air Force*, **pubblico dominio**.
- **YF-23 Black Widow II**: prototipo in volo (NASA) e i due prototipi in formazione/volo — *NASA / U.S. Air Force*,
  **pubblico dominio**; esemplare in museo — *James St. John*, **CC BY 2.0**.
- **MiG-35 Fulcrum-F**: MiG-35 ai saloni MAKS 2009/2011/2019 — *Vitaly V. Kuzmin* (CC BY-SA 4.0), *A. Ermakov*
  (CC BY-SA 4.0), *Nockson* (CC BY-SA 3.0).
- **Su-35 Flanker-E**: Su-35 in volo — *Aleksandr Markin* (CC BY-SA 2.0); al MAKS — *Vitaly V. Kuzmin* (CC BY-SA 4.0);
  Su-35S russo — *Aeroprints.com* (CC BY-SA 3.0); con Su-34 e T-50 — *Alex Beltyukov* (CC BY-SA 3.0); scorta a un
  Tu-95 — *Min. Difesa Giappone* (CC BY 4.0).
- **Saab JAS 39 Gripen**: Gripen svedese — *simon butler* (CC BY 2.0); decollo — *Nathan150* (CC BY 2.0); Gripen E —
  *Rhk111* (CC BY-SA 4.0); Gripen ceco — *Milan Nykodym* (CC BY-SA 2.0); con un B-52 su Stoccolma (2025) —
  *F. Fouganthin* (CC BY 4.0).
- **Mitsubishi F-2**: F-2 in volo — *Jerry Gunner* (CC BY 2.0); F-2 della JASDF — *航空自衛隊/JASDF* (CC BY 4.0);
  formazioni JASDF (anche al tramonto) — *U.S. DoD / Min. Difesa Giappone* (pubblico dominio).

Fonti dati: [Wikipedia (F-14)](https://en.wikipedia.org/wiki/Grumman_F-14_Tomcat),
[Wikipedia (F-15E)](https://en.wikipedia.org/wiki/McDonnell_Douglas_F-15E_Strike_Eagle),
[Wikipedia (Su-57)](https://en.wikipedia.org/wiki/Sukhoi_Su-57),
[Wikipedia (Typhoon)](https://en.wikipedia.org/wiki/Eurofighter_Typhoon),
[eurofighter.com](https://www.eurofighter.com/),
[aereimilitari.org](https://www.aereimilitari.org/Aerei/F-14.htm).

## Crediti modelli 3D

- **F-14 Tomcat** — «[F-14 Tomcat - Fighter Jet - Free](https://sketchfab.com/3d-models/f-14-tomcat-fighter-jet-free-497f77c311b5411d9b567d8707a81c33)»
  di **bohmerang** (Sketchfab), licenza **CC BY-NC-SA 4.0**.
- **F-15E Strike Eagle** — «[F-15E Strike Eagle - Fighter Jet - Free](https://sketchfab.com/3d-models/f-15e-strike-eagle-fighter-jet-free-fff7d75490474e9b964d90cc031c8d01)»
  di **bohmerang** (Sketchfab), licenza **CC BY-NC-SA 4.0**.
- **Su-57 Felon** — «[Sukhoi Su-57 Felon - Fighter Jet - Free](https://sketchfab.com/3d-models/sukhoi-su-57-felon-fighter-jet-free-59995d6f34ba4bb7990195be3a745fc5)»
  di **bohmerang** (Sketchfab), licenza **CC BY-NC-SA 4.0**.
- **Eurofighter Typhoon** — «[Eurofighter Typhoon - Fighter Jet - Free](https://sketchfab.com/3d-models/eurofighter-typhoon-fighter-jet-free-992bcc8987964ca09d55410330aa8579)»
  di **bohmerang** (Sketchfab), licenza **CC BY-NC-SA 4.0**.
- **F-16 Fighting Falcon** — «[F-16 Fighting Falcon - Fighter Jet - Free](https://sketchfab.com/3d-models/f-16-fighting-falcon-fighter-jet-free-f0b00989e5634764848ef2c235c64db5)»
  di **bohmerang** (Sketchfab), licenza **CC BY-NC-SA 4.0**.
- **B-2 Spirit** — «[Northrop Grumman B-2 Spirit - FREE](https://sketchfab.com/3d-models/northrop-grumman-b-2-spirit-free-9cd6b00813c04401a5427ae71b7a0cdc)»
  di **bohmerang** (Sketchfab), licenza **CC BY-NC-SA 4.0**.
- **Dassault Rafale (M)** — «[Dassault Rafale (M) - Fighter Jet - Free](https://sketchfab.com/3d-models/dassault-rafale-m-fighter-jet-free-0abf2465adb04bc8bc638688fa54ce21)»
  di **bohmerang** (Sketchfab), licenza **CC BY-NC-SA 4.0**.
- **F-35 Lightning II** — «[F-35 Lightning II - Fighter Jet - Free](https://sketchfab.com/3d-models/f-35-lightning-ii-fighter-jet-free-b1ab1c0090e34b0fbfe667e706023e6d)»
  di **bohmerang** (Sketchfab), licenza **CC BY-NC-SA 4.0**.
- **F-22 Raptor** — «[F-22 Raptor - Fighter Jet - Free](https://sketchfab.com/3d-models/f-22-raptor-fighter-jet-free-508de5c48845456bb033fb267ebe1d1e)»
  di **bohmerang** (Sketchfab), licenza **CC BY-NC-SA 4.0**.
- **F/A-18F Super Hornet** — «[Boeing F/A-18F Super Hornet - Free](https://sketchfab.com/3d-models/boeing-fa-18f-super-hornet-free-447caa975f534554a83f70f0877b73fb)»
  di **bohmerang** (Sketchfab), licenza **CC BY-NC-SA 4.0**.
- **MiG-29 Fulcrum** — «[MiG-29 - Fighter Jet - Free](https://sketchfab.com/3d-models/mig-29-fighter-jet-free-0a21787096244220b246ec8747e7b09c)»
  di **bohmerang** (Sketchfab), licenza **CC BY-NC-SA 4.0**.
- **A-10 Thunderbolt II** — «[A-10 Thunderbolt II - Free](https://sketchfab.com/3d-models/a-10-thunderbolt-ii-free-f297968397534b59bd41fe989497ffcb)»
  di **bohmerang** (Sketchfab), licenza **CC BY-NC-SA 4.0**.
- **YF-23 Black Widow II** — «[YF-23 Black Widow II - Fighter Jet - FREE](https://sketchfab.com/3d-models/yf-23-black-widow-ii-fighter-jet-free-f61b51dbfb684db6acf14435bac8cd3c)»
  di **bohmerang** (Sketchfab), licenza **CC BY-NC-SA 4.0**.
- **MiG-35 Fulcrum-F** — «[MiG-35 - Fighter Jet - Free](https://sketchfab.com/3d-models/mig-35-fighter-jet-free-1dcea306e8a14ed4ab4d11a819cb6676)»
  di **bohmerang** (Sketchfab), licenza **CC BY-NC-SA 4.0**.
- **Su-35 Flanker-E** — «[Sukhoi Su-35 - Fighter Jet - Free](https://sketchfab.com/3d-models/sukhoi-su-35-fighter-jet-free-3213a404e5cb4fb68f778b9acae5109c)»
  di **bohmerang** (Sketchfab), licenza **CC BY-NC-SA 4.0**.
- **Saab JAS 39 Gripen** — «[Saab JAS 39 Gripen - Fighter Jet - Free](https://sketchfab.com/3d-models/saab-jas-39-gripen-fighter-jet-free-03d4f4f0f7e94f469299ba7db4c707c4)»
  di **bohmerang** (Sketchfab), licenza **CC BY-NC-SA 4.0**.
- **Mitsubishi F-2** — «[Mitsubishi F-2 - Fighter Jet - Free](https://sketchfab.com/3d-models/mitsubishi-f-2-fighter-jet-free-d3d7244554974f499b106e6c11fe3aaf)»
  di **bohmerang** (Sketchfab), licenza **CC BY-NC-SA 4.0**.

> Nota licenza: i modelli 3D sono **non commerciali (NC)** e **ShareAlike (SA)**.
> Questo progetto resta gratuito e a scopo divulgativo (uso non commerciale).

## Licenza

Codice: MIT. Immagini: pubblico dominio (U.S. Navy). Contenuti a scopo divulgativo.
