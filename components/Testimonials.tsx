const testimonials = [
  ["“They turned a rough product idea into a polished experience that finally felt ready for customers.”", "Founder", "B2B SaaS"],
  ["“The combination of design, development, and technical SEO saved us from coordinating three different vendors.”", "Marketing Lead", "Technology"],
  ["“Fast communication, clean implementation, and an eye for the details that most teams miss.”", "Product Manager", "Digital Platform"],
];

export default function Testimonials() {
  return (
    // Testimonials section: adds trust signals without overwhelming the page.
    <section className="section-padding bg-black">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">Client perspective</p>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map(([quote, role, industry]) => (
            <figure key={quote} className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">
              <blockquote className="text-lg leading-8 text-zinc-200">{quote}</blockquote>
              <figcaption className="mt-7 border-t border-white/10 pt-5 text-xs text-zinc-500">
                <span className="font-semibold text-zinc-300">{role}</span> · {industry}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
