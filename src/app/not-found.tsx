import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
        404
      </p>
      <h1 className="font-display mt-4 text-4xl tracking-tight sm:text-5xl">
        This page is not on the map.
      </h1>
      <p className="mt-4 max-w-md text-ink/75">
        The address may have moved, or it was never published. The rest of the
        site is still here.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </Container>
  );
}
