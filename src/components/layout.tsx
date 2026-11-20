import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { BRAND, EMAIL, nav } from "@/lib/site";
import { btnDark } from "./sections";

function Logo() {
  return <Link to="/" className="leading-none"><span className="font-serif text-2xl">Kyle <span className="text-gold">Matin</span></span><span className="mt-1 block text-[0.6rem] tracking-[0.5em] text-muted-foreground">MEDIA</span></Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden gap-7 text-sm lg:flex">
          {nav.map(([to, l]) => <Link key={to} to={to} className="py-1 hover:text-gold" activeOptions={{ exact: true }} activeProps={{ className: "border-b border-foreground" }}>{l}</Link>)}
        </nav>
        <Link to="/submit-your-book" className={`${btnDark} hidden lg:inline-flex`}>Get Your Book Discovered <ArrowRight className="size-4" /></Link>
        <button className="lg:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="container-x flex flex-col gap-4 border-t py-6 lg:hidden">
          {nav.map(([to, l]) => <Link key={to} to={to} onClick={() => setOpen(false)}>{l}</Link>)}
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-background py-16 text-sm">
      <div className="container-x grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-muted-foreground">Helping authors and publishers turn great books into discoverable stories.</p>
          <a href={`mailto:${EMAIL}`} className="mt-4 inline-block font-medium hover:text-gold">{EMAIL}</a>
        </div>
        <div className="flex flex-col gap-2">
          <p className="eyebrow mb-2">Explore</p>
          {nav.slice(1).map(([to, l]) => <Link key={to} to={to} className="text-muted-foreground hover:text-foreground">{l}</Link>)}
        </div>
        <div className="flex flex-col gap-2">
          <p className="eyebrow mb-2">Company</p>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
          <Link to="/submit-your-book" className="text-muted-foreground hover:text-foreground">Submit your book</Link>
          <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground">Privacy policy</Link>
        </div>
      </div>
      <p className="container-x mt-12 text-xs text-muted-foreground">© {new Date().getFullYear()} {BRAND} Media. All rights reserved.</p>
    </footer>
  );
}
