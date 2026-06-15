import type { Aircraft } from "@/lib/data/aircraft/types";

// Blocco crediti a piè di pagina (attribuzioni modello 3D + fotografie).
// Posizionato in fondo alla scheda, prima del footer globale.
export default function Credits({ aircraft }: { aircraft: Aircraft }) {
  const credit = aircraft.model3dCredit;
  return (
    <section className="relative z-[1] border-t border-line">
      <div className="mx-auto max-w-[1180px] px-6 py-8 font-mono text-[11px] leading-relaxed text-muted2">
        <p className="tracking-[0.18em] uppercase text-muted mb-2.5">Crediti</p>
        {credit && (
          <p>
            Modello 3D: «{credit.author}» — {credit.license} ·{" "}
            <a
              className="underline hover:text-goldbr"
              href={credit.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              fonte
            </a>
          </p>
        )}
        <p className="mt-1">
          Fotografie storiche: Wikimedia Commons — U.S. Air Force / U.S. Navy (pubblico dominio),
          salvo diversa indicazione nelle didascalie.
        </p>
      </div>
    </section>
  );
}
