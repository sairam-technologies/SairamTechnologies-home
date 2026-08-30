import { ticker } from "@/lib/site";

export function Marquee() {
  const items = [...ticker, ...ticker];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-navy-2">
      <div className="marquee flex w-max items-center gap-10 py-3 pr-10">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-[13px] font-medium tracking-wide text-cream/75"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-gold" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
