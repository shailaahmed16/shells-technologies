"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["Services", "#services"],
  ["Work", "#work"],
  ["Process", "#process"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    // Navigation bar with responsive mobile menu.
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-3 font-semibold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-600 text-sm font-black shadow-lg shadow-violet-600/30">
            S
          </span>
          <span className="text-base sm:text-lg">Shells Technologies</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-sm text-zinc-400 transition hover:text-white">
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-violet-200"
          >
            Start a project <ArrowUpRight size={16} />
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-lg border border-white/10 p-2 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-black px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm text-zinc-300"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
