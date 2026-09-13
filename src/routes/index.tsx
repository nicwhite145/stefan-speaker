import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, BookOpen, Globe2, Menu, Mic2, Ship, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import bookAsset from "@/assets/heroines-of-horticulture-cover.png.asset.json";
import portraitAsset from "@/assets/stefan-white-portrait.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stefan White | Professional Speaker & Author" },
      { name: "description", content: "Discover Stefan White’s cruise, enrichment and destination talks across history, climate, oceans, horticulture, golf and the arts." },
      { property: "og:title", content: "Stefan White | Professional Speaker & Author" },
      { property: "og:description", content: "An experienced professional speaker bringing history, people, places and the natural world vividly to life." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const expertise = [
  { number: "01", title: "History", text: "Compelling episodes, turning points and overlooked stories from across the centuries." },
  { number: "02", title: "Arts & personalities", text: "The remarkable people, artists and ideas that have shaped cultures around the world." },
  { number: "03", title: "Seas & oceans", text: "Maritime history, ocean challenges and the stories behind the waters we travel." },
  { number: "04", title: "Climate & conservation", text: "Clear, informed perspectives on climate change and the conservation questions of our age." },
  { number: "05", title: "Golf", text: "The history, personalities and psychology behind one of the world’s most enduring games." },
  { number: "06", title: "Horticulture", text: "Pioneering gardeners, social history and the people who transformed our landscapes." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#top" className="font-display text-xl font-semibold text-primary" onClick={closeMenu}>
            Stefan White<span className="text-accent">.</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {[["Experience", "#experience"], ["Expertise", "#expertise"], ["About", "#about"], ["Author", "#author"]].map(([label, href]) => (
              <a key={label} href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{label}</a>
            ))}
            <Button asChild className="h-11 rounded-none px-5 shadow-none"><a href="#contact">Booking enquiries <ArrowRight /></a></Button>
          </nav>
          <Button aria-label={menuOpen ? "Close menu" : "Open menu"} variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-5 md:hidden">
            <div className="flex flex-col gap-1">
              {[["Experience", "#experience"], ["Expertise", "#expertise"], ["About", "#about"], ["Author", "#author"], ["Booking enquiries", "#contact"]].map(([label, href]) => (
                <a key={label} href={href} onClick={closeMenu} className="border-b border-border py-3 font-medium text-foreground">{label}</a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative min-h-[760px] bg-primary pt-20 text-primary-foreground lg:min-h-[760px]">
          <div className="mx-auto grid max-w-7xl lg:min-h-[680px] lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative z-10 flex flex-col justify-center px-5 py-16 lg:px-10 lg:py-24">
              <p className="section-label text-accent">Professional speaker · Author · Explorer</p>
              <h1 className="mt-7 max-w-3xl font-display text-5xl leading-[1.02] font-medium sm:text-6xl lg:text-8xl">
                A lifetime of stories, brought vividly to life.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-primary-foreground/75 lg:text-xl">
                Stefan White is an experienced enrichment and destination speaker whose talks connect people, places, history and the natural world.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-13 rounded-none bg-accent px-6 text-accent-foreground shadow-none hover:bg-accent/90">
                  <a href="#expertise">Explore his expertise <ArrowDown /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-13 rounded-none border-primary-foreground/30 bg-transparent px-6 text-primary-foreground shadow-none hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <a href="#contact">Discuss a booking</a>
                </Button>
              </div>
            </div>
            <div className="relative min-h-[470px] overflow-hidden lg:min-h-full">
              <img src={portraitAsset.url} alt="Stefan White on the deck of a cruise ship" className="absolute inset-0 h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,var(--primary)_115%)] lg:bg-[linear-gradient(90deg,var(--primary)_0%,transparent_30%)]" />
              <div className="absolute bottom-5 right-5 border border-primary-foreground/25 bg-primary/80 px-4 py-3 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.16em] text-primary-foreground/65">Speaking worldwide</p>
                <p className="mt-1 font-display text-lg">Cruise speaker since 2007</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Speaking credentials" className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 lg:grid-cols-4 lg:px-10">
            {[["112", "Enrichment talks"], ["326", "Destination talks"], ["97", "Countries visited"], ["2007", "Cruise speaking since"]].map(([value, label], index) => (
              <div key={label} className={`py-7 lg:py-9 ${index % 2 ? "border-l" : ""} ${index > 1 ? "border-t lg:border-t-0" : ""} lg:border-l lg:first:border-l-0 border-border px-4 lg:px-8`}>
                <p className="font-display text-4xl text-primary lg:text-5xl">{value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-20 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
            <div>
              <p className="section-label">Previous work</p>
              <h2 className="mt-5 font-display text-4xl leading-tight text-primary lg:text-6xl">Experience that holds a room.</h2>
            </div>
            <div>
              <p className="max-w-2xl text-xl leading-8 text-foreground/80">From lecture halls and learned societies to the theatres of international cruise ships, Stefan combines careful research with an engaging, accessible delivery.</p>
              <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
                {[{ icon: Ship, title: "International cruise ships", text: "Enrichment and destination talks developed to complement each ship’s itinerary." }, { icon: Mic2, title: "Universities & societies", text: "Lectures for universities, leading societies and specialist interest groups." }, { icon: Globe2, title: "Public institutions", text: "Engagements include the Royal Horticultural Society and a private members group in the House of Commons." }, { icon: BookOpen, title: "Author & researcher", text: "Original, deeply researched subjects shaped into entertaining stories for broad audiences." }].map(({ icon: Icon, title, text }) => (
                  <article key={title} className="bg-background p-6 lg:p-8">
                    <Icon className="size-6 text-accent" strokeWidth={1.5} />
                    <h3 className="mt-6 font-display text-2xl text-primary">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="scroll-mt-20 bg-primary py-20 text-primary-foreground lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="grid gap-5 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="section-label text-accent">Areas of expertise</p>
                <h2 className="mt-5 font-display text-4xl leading-tight lg:text-6xl">A wide world of subjects.</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-primary-foreground/70 lg:justify-self-end">Every talk is designed to be informative, relevant and entertaining—giving audiences new stories to take away and share.</p>
            </div>
            <div className="mt-12 grid border-t border-primary-foreground/20 md:grid-cols-2 lg:grid-cols-3">
              {expertise.map((item) => (
                <article key={item.title} className="border-b border-primary-foreground/20 py-7 md:px-6 md:odd:border-r lg:border-r lg:px-8 lg:nth-[3n]:border-r-0">
                  <span className="text-xs font-semibold tracking-[0.16em] text-accent">{item.number}</span>
                  <h3 className="mt-6 font-display text-3xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-primary-foreground/65">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
            <div>
              <p className="section-label">About Stefan</p>
              <p className="mt-5 font-display text-3xl leading-snug text-primary">Entrepreneur, expedition leader, traveller and lifelong storyteller.</p>
            </div>
            <div className="space-y-6 text-lg leading-8 text-foreground/75">
              <p>Stefan began his career with Cadbury before organising and leading an expedition from England to Jerusalem and back along the North African coast, circumnavigating the Mediterranean.</p>
              <p>He went on to build Hurley Style into an international giftware business, selling original designs in 30 countries and winning the British Jewellery and Giftware Federation’s Gift of the Year award. After 45 years as an entrepreneur, he became a hotel inspector and then a public speaker.</p>
              <p>A member of the Royal Horticultural Society and elected member of the Royal Historical Society, Stefan brings first-hand experience, deep curiosity and an international perspective to every engagement.</p>
            </div>
          </div>
        </section>

        <section id="author" className="scroll-mt-20 border-y border-border bg-surface py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div className="mx-auto w-full max-w-md overflow-hidden border border-border bg-background p-3 shadow-[0_24px_70px_-38px_var(--shadow-color)]">
              <img src={bookAsset.url} alt="Cover of Heroines of Horticulture by Stefan White" className="w-full" loading="lazy" />
            </div>
            <div>
              <p className="section-label">Author</p>
              <h2 className="mt-5 font-display text-4xl leading-tight text-primary lg:text-6xl"><em>Heroines of Horticulture</em></h2>
              <p className="mt-6 text-lg leading-8 text-foreground/75">Published by Schiffer Books, this landmark book examines 100 pioneering American women gardeners and their contribution to North America’s gardening heritage.</p>
              <p className="mt-5 text-base leading-7 text-muted-foreground">Stefan is also completing the three-volume <em>When Women Saved America</em> and has written <em>The Black Art of Putting</em>, an entertaining exploration of golf’s most psychologically challenging art.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-accent py-20 text-accent-foreground lg:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-10">
            <p className="section-label text-accent-foreground/70">For event organisers</p>
            <h2 className="mt-6 font-display text-4xl leading-tight lg:text-7xl">Bring Stefan’s stories to your audience.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-accent-foreground/75">For cruise programmes, societies, universities and special-interest events, Stefan can shape a talk or series around your audience and itinerary.</p>
            <div className="mx-auto mt-9 max-w-lg border border-accent-foreground/25 bg-accent-foreground/8 p-5">
              <p className="text-sm font-semibold">Booking contact details coming soon</p>
              <p className="mt-1 text-sm text-accent-foreground/65">Add an email address or telephone number here before publishing.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary py-8 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p className="font-display text-xl">Stefan White<span className="text-accent">.</span></p>
          <p className="text-xs uppercase tracking-[0.14em] text-primary-foreground/55">Professional speaker · Author · Worldwide</p>
        </div>
      </footer>
    </div>
  );
}