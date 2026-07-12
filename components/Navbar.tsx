"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-bg/70 border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Left: Logo */}
        <div className="flex flex-1 items-center justify-start">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex cursor-pointer items-center gap-2 font-display text-sm font-semibold tracking-tight"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf]/80 shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
            <span className="text-[#f5f5f5]">kunal</span>
            <span className="-ml-2 text-[#525252]">.kaushal</span>
          </a>
        </div>

        {/* Center: Links */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          <ul className="flex items-center gap-8 text-sm text-[#737373]">
            {[
              { href: "#about", label: "About" },
              { href: "#work", label: "Projects" },
              { href: "#stack", label: "Skills" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="cursor-pointer transition-colors duration-200 hover:text-[#f5f5f5]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Resume Button & Mobile Toggle */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-[#222] bg-white/[0.03] px-4 py-1.5 text-[13.5px] font-medium text-[#f5f5f5] transition-colors duration-200 hover:border-[#2dd4bf]/40 hover:bg-[#2dd4bf]/10 hover:text-[#2dd4bf]"
          >
            Resume
          </a>
          <button
            className="md:hidden text-[#a3a3a3] transition-colors hover:text-[#f5f5f5]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-16 flex flex-col border-b border-[#141414] bg-[#0a0a0a]/95 px-6 py-6 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-6 text-[15px] text-[#a3a3a3]">
              {[
                { href: "#about", label: "About" },
                { href: "#work", label: "Projects" },
                { href: "#stack", label: "Skills" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="block cursor-pointer transition-colors duration-200 hover:text-[#2dd4bf]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
