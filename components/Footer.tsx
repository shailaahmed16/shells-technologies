import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    // Footer: contact details, navigation, social links, and copyright.
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2">
          <a href="#" className="text-xl font-bold">Shells Technologies<span className="text-violet-500">.</span></a>
          <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
            Remote IT & design studio building digital products, SaaS platforms, and high-performance web experiences.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Navigate</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-500">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contact us</h3>
          <a href="mailto:hello@shellstechnologies.com" className="mt-4 flex items-center gap-2 text-sm text-zinc-500 hover:text-white">
            <Mail size={16} /> hello@shellstechnologies.com
          </a>
          <div className="mt-5 flex gap-2">
            <a aria-label="GitHub" href="#" className="rounded-lg border border-white/10 p-2 text-zinc-500 hover:text-white"><Github size={17} /></a>
            <a aria-label="LinkedIn" href="#" className="rounded-lg border border-white/10 p-2 text-zinc-500 hover:text-white"><Linkedin size={17} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 px-5 py-6 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Shells Technologies. All rights reserved. Designed by Shells Technologies.
      </div>
    </footer>
  );
}
