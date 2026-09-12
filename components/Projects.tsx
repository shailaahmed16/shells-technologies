const projects = [
  {
    title: "Nova Commerce",
    category: "SaaS / E-commerce",
    description: "A high-performance commerce platform with analytics, customer accounts, and a streamlined checkout experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    title: "Orbit Analytics",
    category: "Data / Dashboard",
    description: "A modern business intelligence dashboard that turns operational data into clear, actionable decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
    tags: ["React", "Charts", "API"],
  },
  {
    title: "Vertex Studio",
    category: "Brand / Product",
    description: "A bold digital identity and responsive product site designed to position a technology company for growth.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=85",
    tags: ["UI/UX", "Figma", "SEO"],
  },
];

export default function Projects() {
  return (
    // Projects section: visual case studies with technology tags and business outcomes.
    <section id="work" className="section-padding bg-[#050507]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">Selected work</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Projects built to move the needle.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-zinc-500">A snapshot of the product, design, and engineering work this studio is built for.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-200">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
