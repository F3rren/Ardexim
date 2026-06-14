// Set di icone SVG line (viewBox 24x24) usate in tutto il sito.
// Le sezioni referenziano le icone per nome (stringa) dai dati dell'aereo.

const paths: Record<string, React.ReactNode> = {
  wing: <path d="M3 12h7l2-7 3 14 2-5h4" />,
  radar: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </>
  ),
  missile: <path d="M12 2v20M5 9l7-7 7 7" />,
  crew: (
    <>
      <circle cx="8" cy="9" r="3" />
      <circle cx="16" cy="9" r="3" />
      <path d="M4 20c0-3 8-3 8-3s8 0 8 3" />
    </>
  ),
  carrier: (
    <>
      <path d="M4 17l6-6 4 4 6-8" />
      <path d="M4 21h16" />
    </>
  ),
  engine: (
    <>
      <path d="M3 8h18v8H3z" />
      <path d="M7 8V6M17 8V6M9 16l-2 3M15 16l2 3" />
    </>
  ),
  cannon: <path d="M3 12h14M17 9l4 3-4 3M3 9v6" />,
  seat: (
    <>
      <path d="M6 21V8a6 6 0 0 1 12 0v13" />
      <path d="M6 14h12" />
    </>
  ),
  computer: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 9h8M8 13h5" />
    </>
  ),
  fold: <path d="M4 12h7l3-7M14 5l3 7M4 12c0 4 4 7 8 7s8-3 8-7" />,
  plane: <path d="M4 20l16-8L4 4v6l10 2-10 2z" />,
  star: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  bars: <path d="M3 12h18M3 6h18M3 18h18" />,
  bomb: (
    <>
      <path d="M3 17l6-6 4 4 7-9M14 6h7v7" />
    </>
  ),
  bolt: <path d="M12 2 3 13h6l-2 9 11-13h-6z" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUp: <path d="M12 19V5M5 12l7-7 7 7" />,
  rotate: (
    <>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 4v5h-5" />
    </>
  ),
};

export default function Icon({
  name,
  className = "w-6 h-6",
  strokeWidth = 1.7,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.plane}
    </svg>
  );
}
