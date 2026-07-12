"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import InteractiveTerminal from "./InteractiveTerminal";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const EASE = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: i * 0.1 },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20"
    >
      {/* Multi-layer radial glows */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: [
            "radial-gradient(ellipse 800px 600px at 68% 55%, rgba(45,212,191,0.09) 0%, transparent 70%)",
            "radial-gradient(ellipse 500px 400px at 12% 18%, rgba(124,58,237,0.06) 0%, transparent 68%)",
            "radial-gradient(ellipse 600px 300px at 50% 100%, rgba(45,212,191,0.04) 0%, transparent 70%)",
          ].join(", "),
        }}
      />

      {/* Horizontal seam glow at bottom of hero */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(45,212,191,0.18) 40%, rgba(45,212,191,0.18) 60%, transparent)",
        }}
      />

      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 gap-12 relative z-30">
        <div className="flex w-full max-w-xl flex-col justify-center">
          <motion.span
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#2dd4bf]/15 bg-[#2dd4bf]/[0.05] px-3 py-1 font-mono text-[11px] text-[#2dd4bf]/70"
          >
            <span className="h-1.5 w-1.5 rounded-full animate-pulse bg-[#2dd4bf]" />
            Noida, IN · Building in public
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-7 font-display text-[38px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[44px] lg:text-[58px]"
          >
            Kunal Kaushal
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-4 font-mono text-[12px] uppercase tracking-[0.18em] text-[#2dd4bf]/50"
          >
            Generative AI Developer
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-7 max-w-[460px] text-[16px] leading-[1.7] text-[#f5f5f5]"
          >
            Building RAG pipelines, LLM backends,
            <br className="hidden sm:block" />
            and multi-agent systems that ship.
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-5 sm:gap-6"
          >
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative cursor-pointer overflow-hidden rounded-[6px] border border-[#2dd4bf]/20 bg-[#2dd4bf]/[0.06] px-5 py-2.5 text-[13.5px] font-medium text-[#f5f5f5] transition-all duration-200 hover:border-[#2dd4bf]/40 hover:bg-[#2dd4bf]/[0.1] hover:shadow-[0_0_20px_rgba(45,212,191,0.12)]"
            >
              View Work
            </a>
            
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/Kunal-Kaushal"
                target="_blank"
                rel="noreferrer"
                className="group flex cursor-pointer items-center gap-1.5 text-[13.5px] text-[#f5f5f5] transition-colors duration-200 hover:text-[#2dd4bf]"
              >
                <GithubIcon size={16} />
                GitHub <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex cursor-pointer items-center gap-1.5 text-[13.5px] text-[#f5f5f5] transition-colors duration-200 hover:text-[#2dd4bf]"
              >
                <Mail size={16} strokeWidth={1.5} />
                Contact Me <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↓</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right side: Terminal */}
        <div className="hidden lg:block w-full max-w-[500px]">
          <InteractiveTerminal />
        </div>
      </div>
    </section>
  );
}
