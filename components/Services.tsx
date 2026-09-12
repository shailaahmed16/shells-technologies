import { Bot, Code2, Gauge, Palette, Search, ShieldCheck } from "lucide-react";

const services = [
  { icon: Code2, title: "Web & SaaS Development", text: "Production-ready Next.js products, dashboards, portals, APIs, and business platforms." },
  { icon: Palette, title: "UI/UX & Product Design", text: "Conversion-focused interfaces and design systems that make complex products feel simple." },
  { icon: Search, title: "Technical SEO", text: "Clean architecture, metadata, structured content, Core Web Vitals, and crawl-friendly builds." },
  { icon: Gauge, title: "Performance Engineering", text: "Fast-loading experiences engineered for real users, mobile devices, and measurable growth." },
  { icon: Bot, title: "Automation & AI", text: "Smart workflows, integrations, and AI-assisted experiences that reduce repetitive work." },
  { icon: ShieldCheck, title: "QA & Reliability", text: "Structured testing, responsive QA, accessibility checks, and release-ready quality." },
];

export default function Services() {
  return (
    // Services section: six modular service cards for SEO and conversion clarity.
    <section id="services" className="section-padding border-t border-white/5 bg-[#07070a]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">What we do</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Technology with a sharp creative edge.</h2>
          <p className="mt-5 leading-7 text-zinc-400">From first wireframe to production launch, we combine engineering, design, SEO, and QA into one focused remote team.</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} className="reveal-card rounded-3xl border border-white/10 bg-white/[0.025] p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-violet-500/10 text-violet-300">
                <Icon size={21} />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
