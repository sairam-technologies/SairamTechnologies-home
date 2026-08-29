import { Container } from "./Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line/70 bg-paper">
      <div className="grid-fade pointer-events-none absolute inset-0" />
      <Container className="relative py-16 sm:py-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
          {eyebrow}
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.12] tracking-tight text-navy sm:text-5xl md:text-[3.5rem]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/80">{description}</p>
      </Container>
    </section>
  );
}
