import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail } from "lucide-react";
import { BRAND, EMAIL, pageMeta } from "@/lib/site";
import { btnDark, PageHero } from "@/components/sections";

export const Route = createFileRoute("/contact")({
  head: () => pageMeta("Contact", `Talk to the ${BRAND} team about promoting your book. Email ${EMAIL}.`),
  component: Contact,
});

export function ContactForm({ subject }: { subject: string }) {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const field = "w-full rounded-sm border bg-card px-4 py-3 text-sm";
  return (
    <form className="grid gap-4" onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject + " – " + f.name)}&body=${encodeURIComponent(f.message + "\n\nFrom: " + f.email)}`; }}>
      <input required placeholder="Your name" className={field} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
      <input required type="email" placeholder="Your email" className={field} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
      <textarea required rows={6} placeholder="Tell us about your book and goals" className={field} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
      <button className={`${btnDark} justify-center`}>Send message</button>
    </form>
  );
}

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact me" title={<>Let’s talk about <em>your book.</em></>} text="Questions, ideas, or ready to begin? Send a message and we’ll get back to you." />
      <section className="container-x grid gap-14 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-3xl">Contact info</h2>
          <a href={`mailto:${EMAIL}`} className="mt-6 flex items-center gap-3 text-lg hover:text-gold"><Mail className="size-5 text-gold" />{EMAIL}</a>
        </div>
        <ContactForm subject="Inquiry" />
      </section>
    </>
  );
}
