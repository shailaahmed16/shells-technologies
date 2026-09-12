const steps = [
  ["01", "Discover", "We understand your goals, audience, technical constraints, and the outcome that matters."],
  ["02", "Design", "We shape the information architecture, user experience, visual direction, and product system."],
  ["03", "Build", "Our engineers turn the approved direction into clean, scalable, responsive production code."],
  ["04", "Launch & Grow", "We test, optimize, deploy, measure, and keep improving the experience after launch."],
];

export default function Process() {
  return (
    // Process section: communicates a predictable, transparent delivery model.
    <section id="process" className="section-padding border-y border-white/5 bg-[#08080c]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">How we work</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">Clear process. No mystery.</h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {steps.map(([number, title, text]) => (
            <div key={number} className="rounded-3xl border border-white/10 bg-black/30 p-7">
              <span className="font-mono text-sm text-violet-400">{number}</span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
