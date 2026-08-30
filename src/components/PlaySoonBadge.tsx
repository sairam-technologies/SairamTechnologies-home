type Tone = "on-light" | "on-dark";

export function PlaySoonBadge({
  className = "",
  tone = "on-light",
}: {
  className?: string;
  tone?: Tone;
}) {
  const caption = tone === "on-dark" ? "text-cream/50" : "text-muted";

  return (
    <span className={`inline-flex flex-col items-start gap-1.5 ${className}`}>
      <GooglePlayBadge tone={tone} />
      <span
        className={`text-[11px] font-medium uppercase tracking-[0.16em] ${caption}`}
      >
        Coming soon
      </span>
    </span>
  );
}

export function GooglePlayBadge({
  tone = "on-light",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const dark = tone === "on-light";
  const bg = dark ? "#000000" : "#FFFFFF";
  const ink = dark ? "#FFFFFF" : "#202124";
  const muted = dark ? "#FFFFFF" : "#5F6368";
  const stroke = dark ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.12)";

  return (
    <svg
      viewBox="0 0 162 48"
      className={`h-11 w-auto ${className}`}
      role="img"
      aria-label="Get it on Google Play"
    >
      <rect width="162" height="48" rx="8" fill={bg} />
      <rect
        x="0.5"
        y="0.5"
        width="161"
        height="47"
        rx="7.5"
        fill="none"
        stroke={stroke}
      />
      <g transform="translate(10 10) scale(1.166)">
        <PlayMark />
      </g>
      <text
        x="44"
        y="18"
        fill={muted}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="7.5"
        letterSpacing="0.6"
      >
        GET IT ON
      </text>
      <text
        x="44"
        y="35"
        fill={ink}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="16"
        fontWeight="600"
      >
        Google Play
      </text>
    </svg>
  );
}

export function GooglePlayIcon({
  className = "h-5 w-5",
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <PlayMark />
    </svg>
  );
}

function PlayMark() {
  return (
    <>
      <path
        fill="#00D4F5"
        d="M3.61 1.81 13.79 12 3.61 22.19a1 1 0 0 1-.61-.92V2.73c0-.5.25-.9.61-.92Z"
      />
      <path
        fill="#00F076"
        d="M5.86 2.66 16.8 9l-2.3 2.3-8.64-8.64Z"
      />
      <path
        fill="#FFCE00"
        d="m14.5 12.71 2.3 2.3-10.94 6.33 8.64-8.63Z"
      />
      <path
        fill="#FF3A44"
        d="m17.7 10.4 2.81 1.63a1 1 0 0 1 0 1.73l-2.81 1.63L15.21 12l2.49-2.5Z"
      />
    </>
  );
}
