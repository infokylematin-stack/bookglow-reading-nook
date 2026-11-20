import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { BRAND, books, genres, posts, prep, services, steps, img } from "@/lib/site";

export const btnDark = "inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90";
export const btnLight = "inline-flex items-center gap-2 rounded-sm border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-muted";

export function Eyebrow({ children, center }: { children: ReactNode; center?: boolean | undefined }) {
  return <p className={`eyebrow flex items-center gap-3 ${center ? "justify-center" : ""}`}><span className="h-px w-6 bg-gold" />{children}</p>;
}

export function SectionHead({ eyebrow, title, text, center }: { eyebrow: string; title: ReactNode; text?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow center={center}>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-4xl md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-muted-foreground leading-relaxed">{text}</p>}
    </div>
  );
}

export function Books() {
  const [g, setG] = useState("All");
  const list = books.filter((b) => g === "All" || b.genre === g);
  return (
    <section className="container-x py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead eyebrow="A good story is waiting" title="Discover your next read" text="Fresh voices. Hidden gems. Books that stay with you." />
        <Link to="/discover-books" className="text-sm font-medium underline underline-offset-4">Browse all books</Link>
      </div>
      <div className="mt-10 flex flex-wrap gap-2">
        {genres.map((x) => (
          <button key={x} onClick={() => setG(x)} className={`rounded-full border px-4 py-1.5 text-sm ${g === x ? "bg-primary text-primary-foreground" : "bg-card hover:bg-muted"}`}>{x}</button>
        ))}
      </div>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((b) => (
          <article key={b.title} className="group">
            <div className="relative overflow-hidden bg-muted">
              <img src={b.img} alt={`${b.title} book cover`} className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              <span className="absolute left-3 top-3 bg-card px-2.5 py-1 text-xs font-medium">{b.tag}</span>
            </div>
            <p className="eyebrow mt-5">{b.genre}</p>
            <h3 className="mt-2 text-2xl">{b.title}</h3>
            <p className="text-sm text-muted-foreground">by {b.author}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.blurb}</p>
          </article>
        ))}
        {list.length === 0 && <p className="text-muted-foreground">New titles in this genre are coming soon.</p>}
      </div>
      <p className="mt-10 text-xs text-muted-foreground">Illustrative collection · These fictional books and authors demonstrate the discovery experience. Verified listings will replace them.</p>
    </section>
  );
}

export function Services() {
  return (
    <section className="bg-ink py-24 text-ink-foreground">
      <div className="container-x">
        <SectionHead eyebrow="More than promotion" title={<>A whole ecosystem. <br />Built around <em>your book.</em></>} text="From the first impression to the next reader, we support the journey. Thoughtful services that prepare your book, strengthen your presence, and make discovery possible." />
        <div className="mt-14 grid gap-px bg-ink-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([t, d], i) => (
            <div key={t} className="bg-ink p-8">
              <p className="font-serif text-3xl text-gold">0{i + 1}</p>
              <h3 className="mt-6 text-2xl">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-75">{d}</p>
              <Link to="/services" className="mt-6 inline-flex items-center gap-1 text-sm text-gold">Explore service <ArrowUpRight className="size-4" /></Link>
            </div>
          ))}
        </div>
        <Link to="/services" className="mt-10 inline-flex items-center gap-2 text-sm underline underline-offset-4">Explore all author services</Link>
      </div>
    </section>
  );
}

export function Feature() {
  return (
    <section className="container-x grid items-center gap-14 py-24 md:grid-cols-2">
      <img src={img.b1} alt="The Art of Noticing illustrative book cover" className="aspect-[4/5] w-full object-cover" loading="lazy" />
      <div>
        <Eyebrow>From our illustrative collection</Eyebrow>
        <h2 className="mt-5 text-4xl md:text-5xl">A story worth <em>slowing down</em> for.</h2>
        <p className="eyebrow mt-6 text-muted-foreground">The Art of Noticing · Eleanor Reed</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">A gentler way to see the everyday. A reminder that a little attention can turn the ordinary into something extraordinary.</p>
        <blockquote className="mt-8 border-l-2 border-gold pl-6 font-serif text-2xl italic">“Some stories don’t ask you to escape the world. They help you see it differently.”</blockquote>
        <p className="mt-3 text-xs text-muted-foreground">{BRAND} editorial note · Fictional showcase title</p>
        <Link to="/discover-books" className={`${btnDark} mt-8`}>Explore This Book <ArrowRight className="size-4" /></Link>
      </div>
    </section>
  );
}

export function AuthorSpot() {
  return (
    <section className="bg-secondary py-24">
      <div className="container-x grid items-center gap-14 md:grid-cols-2">
        <div>
          <SectionHead eyebrow="Behind the pages" title={<>Meet the minds <br /><em>behind the stories.</em></>} text="Every book begins with a person and a perspective. Our author spotlights make space for the inspirations, questions, and quiet moments behind the work." />
          <div className="mt-10 border-t pt-8">
            <p className="text-xs text-muted-foreground">Illustrative author spotlight</p>
            <h3 className="mt-2 text-3xl">Eleanor Reed</h3>
            <p className="mt-2 text-sm text-muted-foreground">A fictional nature-inspired nonfiction author, created to showcase the {BRAND} author experience.</p>
            <Link to="/for-authors" className="mt-5 inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4">Explore Eleanor’s story</Link>
          </div>
        </div>
        <img src={img.author} alt="Illustrative portrait for the Eleanor Reed author spotlight" className="aspect-[4/5] w-full object-cover" loading="lazy" />
      </div>
    </section>
  );
}

export function Steps() {
  return (
    <section className="container-x py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead eyebrow="A clear path forward" title={<>Your story. <em>Our next steps.</em></>} text="A thoughtful process from first conversation to reader discovery." />
        <Link to="/for-authors" className="text-sm font-medium underline underline-offset-4">For authors</Link>
      </div>
      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(([t, d], i) => (
          <div key={t} className="border-t pt-6">
            <p className="font-serif text-3xl text-gold">0{i + 1}</p>
            <h3 className="mt-4 text-2xl">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Prep() {
  return (
    <section className="bg-sage py-24">
      <div className="container-x grid items-center gap-14 md:grid-cols-2">
        <div className="relative">
          <img src={img.b3} alt="A polished illustrative book" className="aspect-[4/5] w-full object-cover" loading="lazy" />
          <div className="absolute bottom-6 left-6 bg-card p-5"><p className="eyebrow">Your next chapter</p><p className="mt-2 font-serif text-xl">A manuscript with possibility.</p></div>
        </div>
        <div>
          <SectionHead eyebrow="Book preparation & publishing support" title={<>Before it’s discovered, <br /><em>make it ready.</em></>} text="A great book is only the beginning. Give your writing the clarity, care, and presentation it deserves—with support that fits the stage you’re at." />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {prep.map((p) => <li key={p} className="flex items-center gap-2 text-sm"><Check className="size-4 text-gold" />{p}</li>)}
          </ul>
          <Link to="/services" className={`${btnDark} mt-10`}>Prepare Your Book <ArrowRight className="size-4" /></Link>
        </div>
      </div>
    </section>
  );
}

export function Journal() {
  return (
    <section className="bg-secondary py-24">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow="Ideas, insights & good stories" title={<>From the {BRAND} <em>Journal</em></>} text="For the people who write books. And the people who love them." />
          <Link to="/blog" className="text-sm font-medium underline underline-offset-4">Read the journal</Link>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <Link to="/blog" key={p.title} className="group bg-card">
              <img src={p.img} alt="Books and a writer’s notebook in natural light" className="aspect-[3/2] w-full object-cover" loading="lazy" />
              <div className="p-6">
                <p className="eyebrow">{p.cat}</p>
                <h3 className="mt-3 text-2xl group-hover:underline">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.blurb}</p>
                <p className="mt-5 text-xs text-muted-foreground">{p.date} · {p.read}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section className="container-x py-24 text-center">
      <SectionHead center eyebrow="A little glow in your inbox" title={<>Discover more books. <br /><em>Discover more stories.</em></>} text={`Book recommendations, author discoveries, publishing insights, and ${BRAND} updates. All in one thoughtful email.`} />
      {done ? <p className="mt-8 font-medium">Thank you — you’re on the list.</p> : (
        <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mx-auto mt-8 flex max-w-md gap-2">
          <input required type="email" placeholder="Your email address" className="flex-1 rounded-sm border bg-card px-4 py-3 text-sm" />
          <button className={btnDark}>Join the Glow</button>
        </form>
      )}
      <p className="mt-4 text-xs text-muted-foreground">By joining, you agree to receive {BRAND} updates. Unsubscribe anytime. <Link to="/privacy-policy" className="underline">Privacy policy</Link>.</p>
    </section>
  );
}

export function Cta() {
  return (
    <section className="bg-ink py-24 text-center text-ink-foreground">
      <div className="container-x">
        <p className="eyebrow">Your next chapter starts here</p>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl md:text-5xl">Ready to put your book in front of <em>more readers?</em></h2>
        <p className="mx-auto mt-5 max-w-xl opacity-75">Your book has a story to tell. Let’s create more opportunities for the right readers to find it.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/submit-your-book" className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-sm font-medium text-ink">Get Your Book Discovered <ArrowRight className="size-4" /></Link>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm border border-ink-foreground/30 px-6 py-3.5 text-sm">Talk to {BRAND}</Link>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text: string }) {
  return (
    <section className="border-b bg-secondary py-20">
      <div className="container-x"><SectionHead eyebrow={eyebrow} title={title} text={text} /></div>
    </section>
  );
}
