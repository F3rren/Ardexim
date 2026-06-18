// Blocco crediti a piè di pagina (attribuzione fotografie).
// Il credito del modello 3D è mostrato direttamente nel viewer (vedi ModelViewer.tsx),
// così l'autore risalta subito sopra il modello stesso.
export default function Credits() {
  return (
    <section className="relative z-[1] border-t border-line">
      <div className="mx-auto max-w-[1180px] px-6 py-8 font-mono text-[11px] leading-relaxed text-muted2">
        <p className="tracking-[0.18em] uppercase text-muted mb-2.5">Crediti</p>
        <p>
          Fotografie storiche: Wikimedia Commons — U.S. Air Force / U.S. Navy (pubblico dominio),
          salvo diversa indicazione nelle didascalie.
        </p>
      </div>
    </section>
  );
}
