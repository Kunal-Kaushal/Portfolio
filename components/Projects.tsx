"use client";
import { motion } from "framer-motion";
import { Shield, Users, FileText } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const PROJECTS = [
  {
    name: "Sentinel SOC Dashboard",
    desc: "RAG-based threat analysis over 10,000+ security logs with multi-stage kill chain correlation and persistent attack memory.",
    stack: ["Python", "FastAPI", "RAG", "LLaMA 3.1", "FAISS", "SQLite"],
    href: "https://github.com/Kunal-Kaushal/Sentinel-SOC",
    icon: Shield,
  },
  {
    name: "Multi-Agent Leave Management",
    desc: "5 specialized agents orchestrated via Google ADK — automating HR workflows end-to-end with ~80% time saved.",
    stack: ["Python", "Google ADK", "Gemini 2.0", "Firestore", "SendGrid"],
    href: "https://github.com/Kunal-Kaushal/Leave-Management-System",
    icon: Users,
  },
  {
    name: "GenAI Resume Analyzer",
    desc: "Cloud-deployed analyzer on GCP Cloud Run handling 1,000+ requests/day with 99.9% uptime and sub-2s latency.",
    stack: ["Python", "GCP Cloud Run", "Flask"],
    href: "https://github.com/Kunal-Kaushal/GenAI-Resume-Analyzer",
    icon: FileText,
  },
];

export default function Projects() {
  return (
    <section className="border-t border-[#141414] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work."
          description="Production systems built around retrieval, agents, and cloud-deployed inference."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <motion.a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="group flex h-full cursor-pointer flex-col rounded-xl border border-[#1a1a1a] bg-surface/50 p-8 transition-all duration-200 hover:border-[#2dd4bf]/20 hover:bg-surface hover:shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(45,212,191,0.06)]"
              >
                <div className="flex flex-col">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-[#2dd4bf]/20 bg-[#2dd4bf]/[0.05] text-[#2dd4bf]">
                    <p.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-[18px] font-semibold tracking-tight">
                      {p.name}
                    </h3>
                    <span className="text-[#525252] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-[14px] leading-[1.7] text-[#f5f5f5]">
                  {p.desc}
                </p>
                <ul className="mt-6 flex flex-wrap gap-1.5 pt-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-[4px] border border-[#222] bg-white/[0.03] px-[10px] py-[3px] font-mono text-[11px] text-[#f5f5f5]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-2 text-[13px] text-[#737373] transition-colors duration-200 group-hover:text-[#f5f5f5]">
                  <GithubIcon size={14} />
                  <span>View on GitHub</span>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
