import { createFileRoute } from "@tanstack/react-router";
import { BRAND, pageMeta } from "@/lib/site";
import { PageHero, Steps, AuthorSpot, Prep, Cta } from "@/components/sections";

export const Route = createFileRoute("/for-authors")({
  head: () => pageMeta("For Authors", `A thoughtful process from first conversation to reader discovery with ${BRAND}.`),
  component: () => (
    <>
      <PageHero eyebrow="For Authors" title={<>Your story. <em>Our next steps.</em></>} text={`A thoughtful process from first conversation to reader discovery with ${BRAND}.`} />
      <Steps /><AuthorSpot /><Prep />
      <Cta />
    </>
  ),
});
