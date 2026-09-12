const technologies = ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "MongoDB", "Figma", "GitHub", "AWS", "SEO", "AI"];

export default function TechStack() {
  return (
    // Technology marquee: a lightweight visual break that reinforces technical credibility.
    <section className="overflow-hidden border-y border-white/5 bg-black py-6">
      <div className="flex min-w-max animate-[marquee_28s_linear_infinite] gap-3">
        {[...technologies, ...technologies].map((tech, index) => (
          <span key={`${tech}-${index}`} className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-zinc-400">
            {tech}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
