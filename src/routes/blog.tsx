import { createFileRoute } from "@tanstack/react-router";
import { BRAND, pageMeta } from "@/lib/site";
import { PageHero, Journal, Newsletter, Cta } from "@/components/sections";

export const Route = createFileRoute("/blog")({
  head: () => pageMeta("Blog", `Ideas, insights and good stories for people who write books and people who love them.`),
  component: () => (
    <>
      <PageHero eyebrow="Blog" title={<>The ${BRAND} <em>Journal</em></>} text={`Ideas, insights and good stories for people who write books and people who love them.`} />
      <Journal /><Newsletter />
      <Cta />
    </>
  ),
});
