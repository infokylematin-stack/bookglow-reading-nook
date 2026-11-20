import { createFileRoute } from "@tanstack/react-router";
import { BRAND, pageMeta } from "@/lib/site";
import { PageHero, Team, Cta } from "@/components/sections";

export const Route = createFileRoute("/about")({
  head: () => pageMeta("About", `${BRAND} Media brings stories out of the noise and into the places readers are looking.`),
  component: () => (
    <>
      <PageHero eyebrow="About" title={<>Good books. <em>Meaningful connections.</em></>} text={`${BRAND} Media brings stories out of the noise and into the places readers are looking.`} />
      <Team />
      <Cta />
    </>
  ),
});
