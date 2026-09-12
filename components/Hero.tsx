import { ArrowRight, Code2, Layers3, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    // Hero section: positioning the company as a premium remote technology partner.
    <section className="noise grid-bg relative overflow-hidden pt-32 sm:pt-36 lg:pt-44">
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-700/20 blur-3xl" />
      <div className="absolute right-0 top-72 h-64 w-64 rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 lg:grid-cols-2 lg:px-8 lg:pb-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-200">
            <Sparkles size={14} />
            Remote IT & Design Studio
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Build bold.
            <br />
            <span className="gradient-text">Ship fast.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            Shells Technologies helps ambitious businesses turn ideas into
            high-performance websites, SaaS products, brand systems, and
            scalable digital experiences.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-6 py-3.5 text-sm font-bold shadow-xl shadow-violet-600/20 transition hover:bg-violet-500"
            >
              Start a project
              <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-bold transition hover:bg-white/10"
            >
              Explore our work
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-zinc-500">
            <span>● Product Engineering</span>
            <span>● UI/UX Design</span>
            <span>● Technical SEO</span>
          </div>
        </div>

        <div className="float relative mx-auto w-full max-w-xl">
          <div className="animated-border rounded-3xl bg-zinc-950 p-1">
            <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#09090c]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>
                <span className="font-mono text-[10px] text-zinc-600">shells-studio.tsx</span>
              </div>

              <div className="grid min-h-[360px] grid-cols-5 font-mono text-xs sm:min-h-[420px] sm:text-sm">
                <div className="col-span-1 border-r border-white/5 bg-white/[0.02] px-3 py-5 text-right text-zinc-700">
                  {Array.from({ length: 17 }, (_, i) => <div key={i}>{i + 1}</div>)}
                </div>
                <div className="col-span-4 space-y-1 px-5 py-5 text-zinc-300">
                  <p><span className="text-violet-400">import</span> {"{"} Rocket {"}"} <span className="text-violet-400">from</span> &quot;lucide-react&quot;;</p>
                  <p className="pt-3"><span className="text-violet-400">const</span> studio = {"{"}</p>
                  <p className="pl-5">name: <span className="text-green-400">&quot;Shells Technologies&quot;</span>,</p>
                  <p className="pl-5">mode: <span className="text-green-400">&quot;remote&quot;</span>,</p>
                  <p className="pl-5">quality: <span className="text-orange-300">&quot;pixel-perfect&quot;</span>,</p>
                  <p className="pl-5">stack: [</p>
                  <p className="pl-10 text-cyan-300">&quot;Next.js&quot;, &quot;TypeScript&quot;,</p>
                  <p className="pl-10 text-cyan-300">&quot;Tailwind&quot;, &quot;Cloud&quot;</p>
                  <p className="pl-5">],</p>
                  <p>{"};"}</p>
                  <p className="pt-3"><span className="text-violet-400">export default</span> studio;</p>
                  <div className="mt-7 flex items-center gap-2 rounded-xl border border-violet-400/20 bg-violet-500/5 p-3 text-violet-200">
                    <Code2 size={16} />
                    <span>Build systems that feel effortless.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-white/10 bg-black/90 p-4 shadow-2xl sm:block">
            <div className="flex items-center gap-3">
              <Layers3 className="text-violet-400" size={20} />
              <div>
                <p className="text-xs font-semibold">Design → Code</p>
                <p className="text-[11px] text-zinc-500">One integrated team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
