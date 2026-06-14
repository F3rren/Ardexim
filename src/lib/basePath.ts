// Con output statico + basePath, next/image (unoptimized) NON antepone il
// basePath al src delle immagini in /public: lo facciamo manualmente.
// In dev il basePath è vuoto, in produzione (build per Pages) è /f14-tomcat.
export const basePath =
  process.env.NODE_ENV === "production" ? "/f14-tomcat" : "";

export const asset = (path: string) => `${basePath}${path}`;
