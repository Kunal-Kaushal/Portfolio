import Reveal from "./Reveal";
import ArchonDiagram from "./ArchonDiagram";
import { Database } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const STACK = ["Python", "FAISS", "BM25", "LangChain", "Gemini 2.0 Flash"];

export default function Featured() {
  return (
    <section id="work" className="border-t border-[#141414] py-20">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#2dd4bf]/55">
            Featured · 01
          </span>
          <div className="mt-3 flex items-center gap-4">
            <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-lg border border-[#2dd4bf]/20 bg-[#2dd4bf]/[0.05] text-[#2dd4bf]">
              <Database size={22} strokeWidth={1.5} />
            </div>
            <h2 className="font-display text-[34px] font-semibold tracking-tight sm:text-[40px]">
              Archon
            </h2>
          </div>
          <p className="mt-5 max-w-[460px] text-[15px] leading-[1.7] text-[#f5f5f5]">
            A production-ready local RAG pipeline. Chat over 500+ documents via a single command —
            no cloud, no Docker, no setup friction. Hybrid BM25 + FAISS retrieval with Gemini 2.0
            Flash generation.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {STACK.map((s) => (
              <li
                key={s}
                className="rounded-[4px] border border-[#222] bg-white/[0.03] px-[10px] py-[3px] font-mono text-[11px] text-[#f5f5f5]"
              >
                {s}
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/Kunal-Kaushal/Archon"
            target="_blank"
            rel="noreferrer"
            className="group mt-9 inline-flex cursor-pointer items-center gap-2 rounded-md border border-border bg-surface/40 px-4 py-2 text-[13.5px] font-medium text-text-primary transition-colors duration-200 hover:border-text-secondary hover:bg-surface"
          >
            <GithubIcon size={15} />
            View on GitHub
            <span className="ml-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <ArchonDiagram />
        </Reveal>
      </div>
    </section>
  );
}
