import type { NextConfig } from "next";

// In produzione (build/export per GitHub Pages) il sito è servito sotto
// https://f3rren.github.io/Ardexim/, quindi serve basePath/assetPrefix.
// In sviluppo restiamo su http://localhost:3000 (nessun prefisso).
// `repo` deve combaciare col nome del repo GitHub (vedi anche src/lib/basePath.ts).
const isProd = process.env.NODE_ENV === "production";
const repo = "Ardexim";

const nextConfig: NextConfig = {
  output: "export", // genera un sito statico in ./out
  trailingSlash: true, // URL con slash finale → routing statico affidabile su Pages
  images: {
    unoptimized: true, // l'export statico non ha l'optimizer server-side
  },
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}` : undefined,
  // Permette di aprire il dev server da altri dispositivi in LAN (solo sviluppo).
  // Aggiungi qui altri IP/host se cambi rete.
  allowedDevOrigins: ["192.168.178.146"],
};

export default nextConfig;
