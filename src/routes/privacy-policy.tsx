import { createFileRoute } from "@tanstack/react-router";
import { BRAND, EMAIL, pageMeta } from "@/lib/site";
import { PageHero } from "@/components/sections";

export const Route = createFileRoute("/privacy-policy")({
  head: () => pageMeta("Privacy Policy", `How ${BRAND} handles your information.`),
  component: () => (
    <>
      <PageHero eyebrow="Privacy policy" title="Your privacy matters." text={`${BRAND} only uses the details you share to reply to you and send updates you asked for.`} />
      <section className="container-x max-w-2xl space-y-4 py-20 text-muted-foreground">
        <p>We collect your name and email when you contact us or join our newsletter. We never sell your information.</p>
        <p>You can unsubscribe at any time. For questions, email <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
      </section>
    </>
  ),
});
