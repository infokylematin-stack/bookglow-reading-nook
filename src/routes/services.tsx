import { createFileRoute } from "@tanstack/react-router";
import { BRAND, pageMeta } from "@/lib/site";
import { PageHero, Services, Prep, Cta } from "@/components/sections";

export const Route = createFileRoute("/services")({
  head: () => pageMeta("Services", `Book promotion, author visibility and publishing support from ${BRAND}.`),
  component: () => (
    <>
      <PageHero eyebrow="Services" title={<>A whole ecosystem. <em>Built around your book.</em></>} text={`Book promotion, author visibility and publishing support from ${BRAND}.`} />
      <Services /><Prep />
      <Cta />
    </>
  ),
});
