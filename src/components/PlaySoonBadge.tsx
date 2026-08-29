export function PlaySoonBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1.5 text-[12px] font-medium text-navy ${className}`}
    >
      <PlayMark />
      Soon on Google Play
    </span>
  );
}

function PlayMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3.6 2.8c-.4.2-.6.7-.6 1.3v15.8c0 .6.2 1.1.6 1.3l9.2-9.2L3.6 2.8zm1.7-.8 10 5.8L11.4 12 5.3 2zm10 13.2-10 5.8L11.4 12l3.9 3.2zM16.2 8.2 20.1 10c1.2.7 1.2 2.6 0 3.3l-3.9 1.8-4.3-3.5 4.3-3.4z"
      />
    </svg>
  );
}
