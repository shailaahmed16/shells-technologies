import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function CTA() {
  return (
    // CTA section: final conversion point before the footer contact details.
    <section id="contact" className="px-5 pb-20 lg:px-8 lg:pb-28">
      <div className="animated-border mx-auto max-w-7xl rounded-[2rem] bg-zinc-950 p-px">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-950/70 via-black to-black px-6 py-14 sm:px-12 lg:px-20 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Let&apos;s build</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Have a big idea?</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
                Tell us what you&apos;re building, where you&apos;re stuck, or what you want to improve. We&apos;ll turn the conversation into a practical next step.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <div className="mb-6 space-y-3 text-sm text-zinc-300">
                {["Remote-first collaboration", "Design + engineering in one team", "SEO and performance from day one"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-violet-400" />
                    {item}
                  </div>
                ))}
              </div>
              <a href="mailto:hello@shellstechnologies.com" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:bg-violet-200">
                hello@shellstechnologies.com <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
