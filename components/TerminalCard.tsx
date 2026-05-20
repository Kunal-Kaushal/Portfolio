"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TerminalCard() {
  const [text, setText] = useState("");
  
  const codeLines = [
    'kunal@system:~$ boot',
    '',
    '[✓] AI systems initialized',
    '[✓] Retrieval pipeline loaded',
    '[✓] Agents connected',
    '[✓] Ready for deployment',
    '',
    'kunal@system:~$ status',
    '',
    '> building things that think'
  ];

  const fullText = codeLines.join('\n');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 25);
    return () => clearInterval(timer);
  }, [fullText]);

  const renderLines = () => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      const isLast = index === lines.length - 1;
      
      let content;
      if (line.startsWith('kunal@system:~$')) {
        const cmd = line.slice('kunal@system:~$'.length);
        content = (
          <>
            <span className="text-[#2dd4bf]/70">kunal@system:~$</span>
            <span className="text-[#e5e5e5]">{cmd}</span>
          </>
        );
      } else if (line.startsWith('[✓]')) {
        const rest = line.slice('[✓]'.length);
        content = (
          <>
            <span className="text-[#2dd4bf]">[✓]</span>
            <span className="text-[#f5f5f5]">{rest}</span>
          </>
        );
      } else {
        content = <span className="text-[#e5e5e5]">{line}</span>;
      }

      return (
        <div key={index} className="min-h-[1.7em]">
          {content}
          {isLast && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, ease: "linear", repeat: Infinity }}
              className="inline-block h-[14px] w-[8px] bg-[#2dd4bf]/70 ml-1 align-middle"
            />
          )}
        </div>
      );
    });
  };

  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      className="w-[400px] max-w-full overflow-hidden rounded-[12px] font-mono"
      style={{
        background: "rgba(10,10,10,0.65)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(45,212,191,0.12)",
        boxShadow: "0 10px 40px rgba(0,0,0,0.25), 0 0 0 1px rgba(45,212,191,0.06), 0 0 40px rgba(45,212,191,0.05)",
      }}
    >
      {/* Window Header */}
      <div className="flex items-center gap-2 border-b border-white/[0.04] bg-white/[0.02] px-4 py-3">
        <div className="flex gap-[6px]">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="ml-2 text-[12px] text-[#525252]">kunal@system ~</span>
      </div>

      {/* Terminal Content */}
      <div className="px-5 py-6 text-[13px] leading-[1.7] h-[300px]">
        {renderLines()}
      </div>
    </motion.div>
  );
}
