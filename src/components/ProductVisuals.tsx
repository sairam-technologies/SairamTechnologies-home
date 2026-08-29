export function FamilyRxVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#08201e] p-4 shadow-2xl sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-teal-2" />
          <span className="text-xs font-medium text-white/80">Family-Rx</span>
        </div>
        <span className="rounded-full bg-white/8 px-2 py-0.5 text-[10px] uppercase tracking-wider text-teal-2">
          Family of 4
        </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-white/5 p-3">
          <p className="text-[10px] uppercase tracking-wider text-white/40">
            Latest prescription
          </p>
          <p className="mt-1 text-sm font-medium text-white">Dr. Mehta · Pediatrics</p>
          <p className="text-xs text-white/50">Amoxicillin 250mg · 7 days</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-2/3 rounded-full bg-teal-2" />
          </div>
        </div>
        <div className="rounded-xl bg-white/5 p-3">
          <p className="text-[10px] uppercase tracking-wider text-white/40">
            Lab report
          </p>
          <p className="mt-1 text-sm font-medium text-white">CBC · Aisha, 8</p>
          <p className="text-xs text-amber-200/80">Review with pediatrician</p>
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        {["Aarav", "Aisha", "Priya", "Rohan"].map((name, i) => (
          <div
            key={name}
            className="flex flex-1 flex-col items-center rounded-lg bg-white/5 py-2"
          >
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold ${
                i === 1 ? "bg-teal-2 text-navy" : "bg-white/10 text-white/80"
              }`}
            >
              {name.slice(0, 1)}
            </span>
            <span className="mt-1 text-[10px] text-white/55">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SchoolBusVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1828] p-4 shadow-2xl sm:p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium text-white/80">Live tracking</span>
        <span className="rounded-full bg-amber-400/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-200">
          680 m · approaching
        </span>
      </div>
      <div className="relative h-44 overflow-hidden rounded-xl bg-[#15263d]">
        <svg viewBox="0 0 320 176" className="h-full w-full">
          <path
            d="M0 140 C40 140, 50 90, 90 90 S140 40, 180 55 S240 110, 280 80 L320 70"
            fill="none"
            stroke="#1f3d63"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <path
            d="M0 140 C40 140, 50 90, 90 90 S140 40, 180 55 S240 110, 280 80 L320 70"
            fill="none"
            stroke="#c4a574"
            strokeWidth="2.5"
            strokeDasharray="6 8"
          />
          <circle cx="268" cy="86" r="9" fill="#14b8a6" />
          <rect
            x="248"
            y="72"
            width="22"
            height="14"
            rx="3"
            fill="#e8c56b"
            transform="rotate(-18 259 79)"
          />
          <circle cx="52" cy="128" r="7" fill="#faf8f4" />
          <text x="62" y="132" fill="#faf8f4" fontSize="9" opacity="0.7">
            Home
          </text>
        </svg>
        <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-navy/80 px-3 py-2 text-[11px] text-cream backdrop-blur">
          Voice alert on · arrival chime at 80 m
        </div>
      </div>
    </div>
  );
}
