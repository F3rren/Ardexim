import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Icon from "@/components/ui/Icon";

// Sezione introduttiva della home: spiega cos'è il sito prima di mostrare il catalogo.
// id="intro" → àncora della voce "Cosa offre" in navbar.
const features = [
  {
    icon: "name",
    title: "Schede complete",
    text: "Specifiche, sistemi, armamento, varianti, timeline storica e curiosità per ogni velivolo.",
  },
  {
    icon: "rotate",
    title: "Modelli 3D interattivi",
    text: "Ruota e zooma il modello tridimensionale di ogni aereo, direttamente nel browser.",
  },
  {
    icon: "radar",
    title: "Profilo e confronto",
    text: "Un radar prestazionale su cinque assi e il confronto diretto fra due velivoli.",
  },
  {
    icon: "star",
    title: "Palette per nazione",
    text: "Colori dedicati per Stato d'origine: riconosci a colpo d'occhio chi costruisce cosa.",
  },
] as const;

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative z-[1] mx-auto max-w-[1180px] px-6 pt-[70px] pb-[40px] scroll-mt-24"
    >
      <Reveal>
        <SectionHeader
          eyebrow="Cos'è Ardexim"
          title={
            <>
              Esplora l&apos;aviazione militare,
              <br className="hidden sm:block" /> velivolo per velivolo
            </>
          }
          text="Ardexim è un catalogo interattivo di aerei militari: ogni scheda raccoglie dati tecnici, contesto storico, armamento e un modello 3D navigabile. Niente abbonamenti, niente pubblicità — solo schede curate e fonti aperte."
        />
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.06}>
            <article className="group h-full rounded-[14px] border border-line bg-gradient-to-b from-panel to-bg2 p-5 transition-colors hover:border-gold/40">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-[11px] border border-line bg-bg2 text-goldbr">
                <Icon name={f.icon} className="h-[22px] w-[22px]" strokeWidth={1.6} />
              </span>
              <h3 className="mt-4 font-display font-semibold uppercase tracking-[0.01em] text-[1.15rem]">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
