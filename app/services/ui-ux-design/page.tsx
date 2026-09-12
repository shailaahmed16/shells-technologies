import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "UI/UX Design Services",
  description: "Conversion-focused UI/UX design for websites, SaaS products, dashboards, and digital experiences with clean systems and responsive interfaces.",
  alternates: { canonical: "/services/ui-ux-design" },
  openGraph: {
    title: "UI/UX Design Services | Shells Technologies",
    description: "Conversion-focused UI/UX design for websites, SaaS products, dashboards, and digital experiences with clean systems and responsive interfaces.",
    url: `${siteConfig.url}/services/ui-ux-design`,
    type: "website",
  },
};

// Focused service landing page targeting a specific search intent.
export default function ServicePage() {
  const benefits = [
    "Responsive, accessible and conversion-focused interfaces",
    "SEO-ready technical architecture and clean semantic markup",
    "Performance-first implementation for real users",
    "Clear handoff, maintainable code and scalable foundations",
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "UI/UX Design",
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    url: `${siteConfig.url}/services/ui-ux-design`,
    description: "Conversion-focused UI/UX design for websites, SaaS products, dashboards, and digital experiences with clean systems and responsive interfaces.",
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="section-padding mx-auto max-w-6xl">
        <Link href="/#services" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white">
          <ArrowLeft size={16} /> Back to services
        </Link>
        <div className="mt-16 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-300">UI/UX Design</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">UI/UX Design Services</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">Conversion-focused UI/UX design for websites, SaaS products, dashboards, and digital experiences with clean systems and responsive interfaces.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">Figma</span><span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">Design Systems</span><span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">Prototyping</span><span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">UX Research</span>
          </div>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <CheckCircle2 className="text-purple-300" />
              <p className="mt-4 text-zinc-300">{benefit}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-3xl border border-purple-400/20 bg-purple-500/10 p-8 sm:p-12">
          <h2 className="text-3xl font-bold">Have a project in mind?</h2>
          <p className="mt-3 text-zinc-300">Tell us what you are building and we’ll help shape the right technical direction.</p>
          <Link href="/#contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black">
            Start a project <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
