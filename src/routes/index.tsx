import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, BookOpen, Feather, Megaphone, ShieldCheck, Sparkles } from "lucide-react";
import { BRAND, img, pageMeta } from "@/lib/site";
import { AuthorSpot, Books, btnDark, btnLight, Cta, Eyebrow, Feature, Journal, Newsletter, Prep, SectionHead, Services, Steps, Team } from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => pageMeta("Great Books Deserve to Be Discovered", `${BRAND} Media helps authors and publishers turn great books into discoverable stories.`),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden border-b">
        <img src={img.hero} alt="An editorial collection of beautifully designed books" className="absolute inset-0 h-full w-full object-cover object-right" />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="container-x relative py-28 md:py-36">
          <Eyebrow><Sparkles className="size-3.5" /> A brighter chapter for your book</Eyebrow>
          <h1 className="mt-6 max-w-xl text-5xl md:text-7xl">Great Books Deserve to Be <em>Discovered.</em></h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{BRAND} Media helps authors and publishers turn great books into discoverable stories through strategic promotion, professional book support, and reader-focused visibility.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/submit-your-book" className={btnDark}>Get Your Book Discovered <ArrowRight className="size-4" /></Link>
            <Link to="/discover-books" className={btnLight}>Explore Featured Books <ArrowUpRight className="size-4" /></Link>
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground"><ShieldCheck className="size-4 text-gold" /> Thoughtful promotion. Real possibilities. No empty promises.</p>
        </div>
      </section>
      <div className="border-b">
        <div className="container-x flex flex-wrap items-center justify-between gap-6 py-6 text-sm">
          <span className="text-xs uppercase text-muted-foreground">One platform. Your book’s next chapter.</span>
          {[[BookOpen, "Book Discovery"], [Feather, "Author Visibility"], [Megaphone, "Strategic Promotion"], [ShieldCheck, "Publishing Support"]].map(([I, t]) => {
            const Icon = I as typeof BookOpen;
            return <span key={t as string} className="flex items-center gap-2"><Icon className="size-4 text-gold" />{t as string}</span>;
          })}
        </div>
      </div>
      <section className="container-x py-24">
        <SectionHead center eyebrow="Good books. Meaningful connections." title={<>Books are everywhere. <br />The <em>right books</em> are harder to find.</>} text="Behind every book is a voice worth hearing. We bring stories out of the noise and into the places readers are looking—helping authors be seen and readers find something that stays with them." />
      </section>
      <Books /><Services /><Feature /><AuthorSpot /><Steps /><Prep /><Team /><Journal /><Newsletter /><Cta />
    </>
  );
}
