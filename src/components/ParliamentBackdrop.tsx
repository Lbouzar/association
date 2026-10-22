"use client";

type ParliamentBackdropProps = {
  variant?: "dark" | "light";
};

/**
 * Illustration architecturale originale en élévation frontale
 * inspirée de la silhouette symétrique du Palais du Parlement à Bucarest.
 * Dessin vectoriel original (100 % libre de droits) aux couleurs A2PA (--ivory, --gold, --pine).
 */
export default function ParliamentBackdrop({ variant = "dark" }: ParliamentBackdropProps) {
  const wingColsLeft = Array.from({ length: 14 }, (_, i) => 110 + i * 24);
  const wingColsRight = Array.from({ length: 14 }, (_, i) => 1154 + i * 24);
  const midColsLeft = Array.from({ length: 9 }, (_, i) => 465 + i * 22);
  const midColsRight = Array.from({ length: 9 }, (_, i) => 937 + i * 22);
  const centerColonnade = Array.from({ length: 13 }, (_, i) => 676 + i * 20.5);
  const upperTierCols = Array.from({ length: 17 }, (_, i) => 636 + i * 20.5);

  const isLight = variant === "light";
  const primaryStroke = isLight ? "#1f392b" : "#b1905c";
  const secondaryStroke = isLight ? "#b1905c" : "#f0e1d1";
  const fillTop = isLight ? "#1f392b" : "#b1905c";
  const fillBottom = isLight ? "#e8d5c0" : "#16291f";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      {/* Halo lumineux très subtil derrière le pavillon central */}
      <div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[80%] w-full max-w-[1400px]"
        style={{
          background: isLight
            ? "radial-gradient(ellipse 60% 55% at 50% 70%, rgba(177, 144, 92, 0.06) 0%, transparent 72%)"
            : "radial-gradient(ellipse 60% 52% at 50% 70%, rgba(177, 144, 92, 0.11) 0%, rgba(240, 225, 209, 0.03) 45%, transparent 75%)",
        }}
      />

      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMax slice"
        className={`absolute inset-0 h-full w-full ${
          isLight ? "opacity-[0.18]" : "opacity-[0.38]"
        }`}
        fill="none"
      >
        <defs>
          <linearGradient id={`p-gold-${variant}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={secondaryStroke} stopOpacity={isLight ? "0.28" : "0.52"} />
            <stop offset="50%" stopColor={primaryStroke} stopOpacity={isLight ? "0.22" : "0.42"} />
            <stop offset="100%" stopColor={primaryStroke} stopOpacity={isLight ? "0.08" : "0.14"} />
          </linearGradient>
          <linearGradient id={`p-ivory-${variant}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={secondaryStroke} stopOpacity={isLight ? "0.18" : "0.32"} />
            <stop offset="70%" stopColor={secondaryStroke} stopOpacity={isLight ? "0.10" : "0.18"} />
            <stop offset="100%" stopColor={secondaryStroke} stopOpacity={isLight ? "0.03" : "0.05"} />
          </linearGradient>
          <linearGradient id={`p-fill-${variant}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fillTop} stopOpacity={isLight ? "0.02" : "0.07"} />
            <stop offset="100%" stopColor={fillBottom} stopOpacity={isLight ? "0.01" : "0.15"} />
          </linearGradient>
          <radialGradient id={`p-vignette-${variant}`} cx="50%" cy="64%" r="54%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="72%" stopColor="white" stopOpacity="0.65" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id={`p-mask-${variant}`}>
            <rect width="1600" height="900" fill={`url(#p-vignette-${variant})`} />
          </mask>
        </defs>

        <g mask={`url(#p-mask-${variant})`}>
          {/* Cercles et axes de géométrie architecturale */}
          <line x1="800" y1="110" x2="800" y2="880" stroke={primaryStroke} strokeOpacity="0.28" strokeDasharray="4 6" />
          <circle cx="800" cy="510" r="350" stroke={primaryStroke} strokeOpacity="0.18" strokeWidth="1.1" />
          <circle cx="800" cy="510" r="510" stroke={secondaryStroke} strokeOpacity="0.12" strokeDasharray="3 8" />
          <line x1="220" y1="292" x2="1380" y2="292" stroke={primaryStroke} strokeOpacity="0.1" strokeDasharray="2 10" />

          {/* 1. Pavillon d'honneur supérieur & fronton central */}
          <rect x="700" y="292" width="200" height="38" fill={`url(#p-fill-${variant})`} stroke={`url(#p-gold-${variant})`} strokeWidth="1.6" />
          <path d="M 688 292 L 800 262 L 912 292 Z" fill={`url(#p-fill-${variant})`} stroke={`url(#p-gold-${variant})`} strokeWidth="1.6" />
          <line x1="682" y1="292" x2="918" y2="292" stroke={primaryStroke} strokeOpacity="0.8" strokeWidth="2.2" />
          {/* Drapeau central au sommet */}
          <line x1="800" y1="210" x2="800" y2="262" stroke={secondaryStroke} strokeOpacity="0.7" strokeWidth="1.6" />
          <path d="M 800 212 L 828 219 L 800 227 Z" fill={primaryStroke} fillOpacity="0.65" />
          {Array.from({ length: 9 }, (_, i) => 716 + i * 21).map((x) => (
            <rect key={`t-${x}`} x={x - 4} y="300" width="8" height="22" fill={primaryStroke} fillOpacity="0.12" stroke={`url(#p-ivory-${variant})`} strokeWidth="1.1" />
          ))}

          {/* 2. Gradin supérieur */}
          <rect x="616" y="330" width="368" height="62" fill={`url(#p-fill-${variant})`} stroke={`url(#p-gold-${variant})`} strokeWidth="1.6" />
          <line x1="606" y1="330" x2="994" y2="330" stroke={primaryStroke} strokeOpacity="0.75" strokeWidth="2.4" />
          {upperTierCols.map((x) => (
            <g key={`u-${x}`}>
              <rect x={x - 4.5} y="340" width="9" height="18" fill={secondaryStroke} fillOpacity="0.08" stroke={`url(#p-ivory-${variant})`} strokeWidth="1" />
              <rect x={x - 4.5} y="364" width="9" height="20" fill={secondaryStroke} fillOpacity="0.06" stroke={`url(#p-ivory-${variant})`} strokeWidth="1" />
            </g>
          ))}

          {/* 3. Corps intermédiaire + colonnade centrale */}
          <rect x="440" y="392" width="720" height="92" fill={`url(#p-fill-${variant})`} stroke={`url(#p-gold-${variant})`} strokeWidth="1.5" />
          <line x1="432" y1="392" x2="1168" y2="392" stroke={primaryStroke} strokeOpacity="0.75" strokeWidth="2.4" />
          <rect x="440" y="374" width="74" height="18" fill={`url(#p-fill-${variant})`} stroke={`url(#p-gold-${variant})`} strokeWidth="1.3" />
          <rect x="1086" y="374" width="74" height="18" fill={`url(#p-fill-${variant})`} stroke={`url(#p-gold-${variant})`} strokeWidth="1.3" />
          <rect x="656" y="392" width="288" height="92" fill={`url(#p-fill-${variant})`} stroke={`url(#p-gold-${variant})`} strokeWidth="1.8" />
          {centerColonnade.map((x) => (
            <g key={`c-${x}`}>
              <line x1={x} y1="398" x2={x} y2="478" stroke={`url(#p-gold-${variant})`} strokeWidth="1.6" />
              <rect x={x - 6} y="406" width="12" height="28" rx="6" stroke={`url(#p-ivory-${variant})`} strokeWidth="1" />
              <rect x={x - 6} y="442" width="12" height="30" stroke={`url(#p-ivory-${variant})`} strokeWidth="1" />
            </g>
          ))}
          {[...midColsLeft, ...midColsRight].map((x) => (
            <g key={`m-${x}`}>
              <rect x={x - 4.5} y="404" width="9" height="20" stroke={`url(#p-ivory-${variant})`} strokeWidth="1" />
              <rect x={x - 4.5} y="431" width="9" height="20" stroke={`url(#p-ivory-${variant})`} strokeWidth="1" />
              <rect x={x - 4.5} y="458" width="9" height="18" stroke={`url(#p-ivory-${variant})`} strokeWidth="1" />
            </g>
          ))}

          {/* 4. Grandes ailes monumentales & portique central */}
          <rect x="84" y="484" width="1432" height="136" fill={`url(#p-fill-${variant})`} stroke={`url(#p-gold-${variant})`} strokeWidth="1.6" />
          <line x1="76" y1="484" x2="1524" y2="484" stroke={primaryStroke} strokeOpacity="0.8" strokeWidth="2.6" />
          <line x1="84" y1="552" x2="1516" y2="552" stroke={primaryStroke} strokeOpacity="0.4" strokeWidth="1.2" />
          <rect x="84" y="464" width="92" height="20" fill={`url(#p-fill-${variant})`} stroke={`url(#p-gold-${variant})`} strokeWidth="1.3" />
          <rect x="1424" y="464" width="92" height="20" fill={`url(#p-fill-${variant})`} stroke={`url(#p-gold-${variant})`} strokeWidth="1.3" />

          {[...wingColsLeft, ...wingColsRight].map((x) => (
            <g key={`w-${x}`}>
              <rect x={x - 5} y="496" width="10" height="22" stroke={`url(#p-ivory-${variant})`} strokeWidth="0.95" />
              <rect x={x - 5} y="524" width="10" height="22" stroke={`url(#p-ivory-${variant})`} strokeWidth="0.95" />
              <rect x={x - 5.5} y="562" width="11" height="24" rx="5.5" stroke={`url(#p-ivory-${variant})`} strokeWidth="1" />
              <rect x={x - 5.5} y="592" width="11" height="20" stroke={`url(#p-ivory-${variant})`} strokeWidth="0.95" />
            </g>
          ))}

          {[...midColsLeft, ...midColsRight].map((x) => (
            <g key={`lm-${x}`}>
              <rect x={x - 5} y="496" width="10" height="22" stroke={`url(#p-ivory-${variant})`} strokeWidth="1" />
              <rect x={x - 5} y="524" width="10" height="22" stroke={`url(#p-ivory-${variant})`} strokeWidth="1" />
              <rect x={x - 5.5} y="562" width="11" height="26" rx="5.5" stroke={`url(#p-gold-${variant})`} strokeWidth="1.1" />
              <rect x={x - 5.5} y="594" width="11" height="20" stroke={`url(#p-ivory-${variant})`} strokeWidth="0.95" />
            </g>
          ))}

          <rect x="648" y="484" width="304" height="136" fill={`url(#p-fill-${variant})`} stroke={`url(#p-gold-${variant})`} strokeWidth="1.8" />
          {Array.from({ length: 9 }, (_, i) => 672 + i * 32).map((x) => (
            <g key={`ga-${x}`}>
              <line x1={x - 12} y1="484" x2={x - 12} y2="620" stroke={`url(#p-gold-${variant})`} strokeWidth="1.4" />
              <path d={`M ${x - 8} 620 L ${x - 8} 548 A 8 8 0 0 1 ${x + 8} 548 L ${x + 8} 620`} fill={primaryStroke} fillOpacity="0.1" stroke={`url(#p-gold-${variant})`} strokeWidth="1.3" />
              <rect x={x - 7} y="498" width="14" height="28" stroke={`url(#p-ivory-${variant})`} strokeWidth="1.05" />
            </g>
          ))}

          {/* 5. Soubassement, grand escalier et esplanade */}
          <rect x="52" y="620" width="1496" height="36" fill={`url(#p-fill-${variant})`} stroke={`url(#p-gold-${variant})`} strokeWidth="1.5" />
          <path d="M 610 620 L 990 620 L 1045 695 L 555 695 Z" fill={`url(#p-fill-${variant})`} stroke={`url(#p-gold-${variant})`} strokeWidth="1.5" />
          {[632, 644, 656, 668, 680, 692].map((y, idx) => (
            <line key={`st-${y}`} x1={605 - idx * 8} y1={y} x2={995 + idx * 8} y2={y} stroke={primaryStroke} strokeOpacity={0.5 - idx * 0.05} strokeWidth="1.1" />
          ))}
          <line x1="20" y1="656" x2="1580" y2="656" stroke={primaryStroke} strokeOpacity="0.5" strokeWidth="1.5" />
          <line x1="0" y1="695" x2="1600" y2="695" stroke={primaryStroke} strokeOpacity="0.65" strokeWidth="1.8" />

          {[
            [680, 695, 180, 900],
            [740, 695, 460, 900],
            [800, 695, 800, 900],
            [860, 695, 1140, 900],
            [920, 695, 1420, 900],
          ].map(([x1, y1, x2, y2], idx) => (
            <line key={`p-${idx}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`url(#p-gold-${variant})`} strokeOpacity="0.6" strokeWidth="1.2" />
          ))}
          {[720, 750, 786, 830, 882].map((y) => (
            <line key={`pl-${y}`} x1="100" y1={y} x2="1500" y2={y} stroke={secondaryStroke} strokeOpacity="0.14" strokeWidth="1" />
          ))}
        </g>
      </svg>

      {/* Voile dégradé assurant un rendu feutré, subtil et une lisibilité parfaite du texte Hero */}
      {!isLight && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(31,57,43,0.85) 0%, rgba(31,57,43,0.45) 45%, rgba(31,57,43,0.55) 80%, rgba(31,57,43,0.94) 100%), radial-gradient(circle at 26% 42%, rgba(31,57,43,0.72) 0%, transparent 60%)",
          }}
        />
      )}
    </div>
  );
}
