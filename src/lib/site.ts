import hero from "@/assets/bookglow-hero.webp.asset.json";
import b1 from "@/assets/book-1.webp.asset.json";
import b2 from "@/assets/book-2.webp.asset.json";
import b3 from "@/assets/book-3.webp.asset.json";
import b4 from "@/assets/book-4.webp.asset.json";
import author from "@/assets/author.webp.asset.json";
import journal from "@/assets/journal.webp.asset.json";

export const BRAND = "Kyla Matin";
export const EMAIL = "Kylamartin@gmail.com";
export const img = { hero: hero.url, author: author.url, journal: journal.url, b1: b1.url, b3: b3.url };

export const books = [
  { title: "The Art of Noticing", author: "Eleanor Reed", genre: "Nonfiction", tag: "Editor's pick", img: b1.url, blurb: "A gentle invitation to slow down, pay attention, and find something extraordinary in the everyday." },
  { title: "A Quiet Kind of Courage", author: "Maya Bennett", genre: "Inspirational", tag: "Hidden gem", img: b2.url, blurb: "Small acts of bravery. A softer kind of strength. A thoughtful companion for starting again." },
  { title: "Where the Light Falls", author: "Julian Hayes", genre: "Romance", tag: "New release", img: b3.url, blurb: "Two strangers return to a mountain town, where an unexpected connection asks them to choose a different future." },
  { title: "The Wild Within", author: "Oliver Finch", genre: "Nonfiction", tag: "Featured", img: b4.url, blurb: "A journey through ancient woodland and the wild spaces that help us feel more like ourselves." },
];
export const genres = ["All", "Romance", "Mystery", "Fantasy", "Children's", "Nonfiction", "Inspirational", "Poetry"];

export const services = [
  ["Book Promotion", "Strategic campaigns designed to put your book in front of relevant audiences."],
  ["Author Visibility", "Help authors build a stronger presence around their work."],
  ["Reader Discovery", "Connect books with audiences interested in relevant genres and themes."],
  ["Book Launch Promotion", "Build awareness before, during, and around your publication date."],
  ["Pinterest Promotion", "Use visual search and reader interests to create additional discovery opportunities."],
  ["Featured Author Campaign", "Give selected authors and their books dedicated visibility opportunities."],
];
export const steps = [
  ["Submit Your Book", "Tell us about your story, your readers, and your goals."],
  ["Choose Your Promotion", "Find the support that fits your book’s next chapter."],
  ["We Build Your Campaign", "Thoughtful positioning, creative, and a clear plan."],
  ["Your Book Gets Discovered", "Create more entry points for relevant readers."],
];
export const prep = ["Editing & proofreading", "Print & ebook formatting", "Manuscript preparation", "Book descriptions", "Author biographies", "Publishing preparation"];

export const posts = [
  { cat: "Book Marketing", title: "Your book is published. Now what?", blurb: "A thoughtful starting point for building visibility after publication—without trying to do everything at once.", date: "October 7, 2026", read: "6 min read", img: journal.url },
  { cat: "Publishing", title: "The small details that make a book description work", blurb: "How to introduce your story without telling the whole story.", date: "October 5, 2026", read: "5 min read", img: hero.url },
  { cat: "Book Discovery", title: "The joy of finding a book you weren’t looking for", blurb: "Go beyond the bestseller list. Your next favourite story might be a little harder to find.", date: "October 3, 2026", read: "4 min read", img: journal.url },
];

export const nav = [
  ["/", "Home"], ["/discover-books", "Discover Books"], ["/for-authors", "For Authors"],
  ["/services", "Services"], ["/about", "About"], ["/blog", "Blog"],
] as const;

export const pageMeta = (title: string, description: string) => ({
  meta: [
    { title: `${title} | ${BRAND}` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | ${BRAND}` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
