"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Laugh, X, RefreshCw, Mail, ArrowUp } from "lucide-react";

import { useEffect, useRef, useState } from "react";
import { useJoke } from "@/lib/useJoke";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const NUDGE_KEY = "joke-nudge-seen";

export default function Footer() {
  const { joke, loading, error, fetchJoke } = useJoke();
  const [open, setOpen] = useState(false);
  const [nudge, setNudge] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const openedRef = useRef(false);

  // Scroll Progress Logic
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${Math.round((totalScroll / windowHeight) * 100)}`;
      setScrollProgress(Number(scroll) || 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const runJoke = () => {
    setOpen(true);
    setNudge(false);
    openedRef.current = true;
    localStorage.setItem(NUDGE_KEY, "1");
    fetchJoke();
  };

  // Nudge logic
  useEffect(() => {
    let clicked = false;
    let hideTimer: ReturnType<typeof setTimeout>;

    const onClick = () => {
      clicked = true;
    };
    window.addEventListener("pointerdown", onClick, { once: true });

    const showTimer = setTimeout(() => {
      if (!clicked && !openedRef.current && !localStorage.getItem(NUDGE_KEY)) {
        setNudge(true);
        hideTimer = setTimeout(() => setNudge(false), 7000);
      }
    }, 5000);

    return () => {
      window.removeEventListener("pointerdown", onClick);
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {/* Nudge Bubble */}
      <AnimatePresence>
        {nudge && !open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: [0, -4, 0], scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{
              opacity: { duration: 0.25 },
              scale: { duration: 0.25 },
              y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
            }}
            className="fixed bottom-[60px] left-5 z-50 rounded-[6px] border border-[#2dd4bf]/20 bg-[#141414] px-3 py-2 text-[12px] shadow-lg font-mono"
          >
            <button
              onClick={() => setNudge(false)}
              aria-label="Dismiss"
              className="absolute top-1.5 right-1.5 text-[#a3a3a3] hover:text-[#2dd4bf]"
            >
              <X size={12} />
            </button>
            <p className="text-[#2dd4bf] pr-4">👀 did you miss me?</p>
            <p className="text-[#a3a3a3]">there&apos;s a joke down here ↙</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Joke Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-[60px] left-5 z-50 w-72 overflow-hidden rounded-[8px] border border-[#1a1a1a] bg-[#0c0c0e] text-[12px] shadow-2xl font-mono"
          >
            <div className="flex items-center gap-2 px-3 py-2 border-b border-[#1a1a1a] bg-[#141414]">
              <span className="text-[#a3a3a3]">joke.sh</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="ml-auto text-[#a3a3a3] hover:text-[#2dd4bf]"
              >
                <X size={13} />
              </button>
            </div>
            <div className="p-3 space-y-2 leading-relaxed">
              {loading && <p className="text-[#a3a3a3] animate-pulse">fetching...</p>}
              {error && <p className="text-red-400">&gt; api unreachable, retry.</p>}
              {!loading && !error && joke && (
                <>
                  <p className="text-[#a3a3a3]">&gt; {joke.setup}</p>
                  <p className="text-[#2dd4bf]">&gt; {joke.punchline}</p>
                </>
              )}
              {!loading && (
                <button
                  onClick={fetchJoke}
                  className="inline-flex items-center gap-1 pt-1 text-[#a3a3a3] hover:text-[#2dd4bf] transition-colors"
                >
                  <RefreshCw size={11} /> another
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Elements (Always Visible) */}
      <div className="fixed bottom-5 left-5 z-[100]">
        <motion.button
          onClick={runJoke}
          animate={nudge && !open ? { rotate: [0, -6, 6, -6, 6, 0] } : { rotate: 0 }}
          transition={nudge && !open ? { duration: 0.6, repeat: Infinity, repeatDelay: 1.2 } : { duration: 0.2 }}
          className="inline-flex items-center gap-2 rounded-[4px] border border-[#2dd4bf]/30 bg-[#111111]/90 backdrop-blur-md px-3 py-2 text-[11px] font-medium text-[#2dd4bf] transition-colors hover:border-[#2dd4bf]/60 hover:bg-[#2dd4bf]/[0.1] hover:shadow-[0_0_15px_rgba(45,212,191,0.2)]"
        >
          <Laugh size={14} /> tell me a joke
        </motion.button>
      </div>

      <div className="fixed bottom-5 right-5 z-[100] flex items-center gap-2 font-mono">
        <div className="flex items-center gap-2 rounded-[4px] border border-[#1a1a1a] bg-[#111111]/90 backdrop-blur-md px-2.5 py-2 min-w-[75px]">
          <div className="h-1 flex-1 bg-[#1a1a1a] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#2dd4bf] rounded-full transition-all duration-100 ease-out" 
              style={{ width: `${scrollProgress}%` }} 
            />
          </div>
          <span className="w-8 text-right text-[10px] text-[#2dd4bf]">{scrollProgress}%</span>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="flex items-center justify-center rounded-[4px] border border-[#2dd4bf]/30 bg-[#111111]/90 backdrop-blur-md p-2 text-[#2dd4bf] hover:bg-[#2dd4bf]/20 hover:border-[#2dd4bf]/60 transition-colors shadow-[0_0_10px_rgba(45,212,191,0.1)]"
        >
          <ArrowUp size={15} />
        </button>
      </div>

      {/* Standard Footer (End of Page) */}
      <footer className="relative z-10 w-full border-t border-[#141414] px-5 py-8 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#737373]">
          <p>
            <span className="text-[#2dd4bf]">~</span>/kunal{" "}
            <span className="text-[#737373]/60">
              · © {new Date().getFullYear()}
            </span>
          </p>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-[#737373]/60">
              <span className="text-[#737373]">Noida, India</span> · IST
            </span>
            <div className="flex items-center gap-4 text-[#737373]">
              <a href="https://github.com/Kunal-Kaushal" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[#2dd4bf] transition-colors">
                <GithubIcon size={16} />
              </a>
              <a href="https://linkedin.com/in/kunal-kaushal" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[#2dd4bf] transition-colors">
                <LinkedinIcon size={16} />
              </a>
              <a href="mailto:hi@kunalkaushal.com" aria-label="Email" className="hover:text-[#2dd4bf] transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
