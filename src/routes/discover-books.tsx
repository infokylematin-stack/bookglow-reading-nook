import { createFileRoute } from "@tanstack/react-router";
import { BRAND, pageMeta } from "@/lib/site";
import { PageHero, Books, Feature, Cta } from "@/components/sections";

export const Route = createFileRoute("/discover-books")({
  head: () => pageMeta("Discover Books", `Fresh voices, hidden gems and books that stay with you — curated by ${BRAND}.`),
  component: () => (
    <>
      <PageHero eyebrow="Discover Books" title={<>Discover your <em>next read.</em></>} text={`Fresh voices, hidden gems and books that stay with you — curated by ${BRAND}.`} />
      <Books /><Feature />
      <Cta />
    </>
  ),
});
