"use client";
import { motion } from "framer-motion";

const STACK = ["Python", "FAISS", "LangChain", "FastAPI", "Docker", "GCP"];

export default function DevCard() {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      className="w-[380px] max-w-full overflow-hidden rounded-[12px] border border-[#1f1f1f] bg-[#0f0f0f]"
      style={{
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.03), 0 24px 60px rgba(0,0,0,0.5)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-[#1a1a1a] bg-[#111] px-4 py-3">
        <div className="flex gap-[5px]">
          <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f56]" />
          <span className="h-[9px] w-[9px] rounded-full bg-[#ffbd2e]" />
          <span className="h-[9px] w-[9px] rounded-full bg-[#27c93f]" />
        </div>
        <span className="ml-1 font-mono text-[11px] text-[#525252]">
          kunal@archon ~
        </span>
      </div>

      {/* Current build */}
      <div className="px-5 py-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#2dd4bf]/70">
          Current Build
        </p>
        <p className="mt-1.5 text-[15px] font-medium text-[#f0f0f0]">
          Archon RAG Pipeline
        </p>
        <p className="mt-1 font-mono text-[10px] text-[#525252]">
          547 docs · hybrid retrieval · gemini-2.0-flash
        </p>
      </div>

      <div className="mx-5 h-px bg-[#1a1a1a]" />

      {/* Stats */}
      <div className="flex px-5 py-4">
        {[
          { l: "Retrieval", v: "412ms" },
          { l: "Uptime", v: "99.9%" },
          { l: "Requests/Day", v: "1,000+" },
        ].map((s, i, arr) => (
          <div
            key={s.l}
            className={`flex-1 ${i < arr.length - 1 ? "mr-4 border-r border-[#1a1a1a] pr-4" : ""}`}
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#404040]">
              {s.l}
            </p>
            <p className="mt-1 text-[18px] font-semibold text-[#e5e5e5]">{s.v}</p>
          </div>
        ))}
      </div>

      <div className="mx-5 h-px bg-[#1a1a1a]" />

      {/* Stack pills */}
      <div className="flex flex-wrap gap-1.5 px-5 py-4">
        {STACK.map((s) => (
          <span
            key={s}
            className="rounded-[4px] border border-[#1f1f1f] bg-white/[0.03] px-2 py-[3px] font-mono text-[10px] text-[#737373]"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center gap-1.5 border-t border-[#1a1a1a] bg-[#0a0a0a] px-5 py-2.5">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2dd4bf]" />
        <span className="font-mono text-[10px] text-[#2dd4bf]/60">
          systems operational
        </span>
      </div>
    </motion.div>
  );
}
