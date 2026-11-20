import { createFileRoute } from "@tanstack/react-router";
import { BRAND, pageMeta } from "@/lib/site";
import { PageHero, Steps } from "@/components/sections";
import { ContactForm } from "./contact";

export const Route = createFileRoute("/submit-your-book")({
  head: () => pageMeta("Submit Your Book", `Tell ${BRAND} about your story, your readers, and your goals.`),
  component: () => (
    <>
      <PageHero eyebrow="Submit your book" title={<>Get your book <em>discovered.</em></>} text="Tell us about your story, your readers, and your goals." />
      <section className="container-x max-w-2xl py-20"><ContactForm subject="Book submission" /></section>
      <Steps />
    </>
  ),
});
