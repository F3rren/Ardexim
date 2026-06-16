// Con output statico + basePath, next/image (unoptimized) NON antepone il
// basePath al src delle immagini in /public: lo facciamo manualmente.
// In dev il basePath è vuoto, in produzione (build per Pages) è /Ardexim
// (= nome del repo GitHub). Se rinomini di nuovo il repo, aggiorna qui e in next.config.ts.
export const basePath =
  process.env.NODE_ENV === "production" ? "/Ardexim" : "";

export const asset = (path: string) => `${basePath}${path}`;
