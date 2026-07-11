"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      // Fast fake loading sequence
      currentProgress += Math.floor(Math.random() * 8) + 2;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(progressInterval);
        
        // Brief pause at 100% before animating out
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = "";
        }, 300);
      } else {
        setProgress(currentProgress);
      }
    }, 40); // 40ms interval for smooth fast tick

    return () => {
      clearInterval(progressInterval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-10vh" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]"
        >
          {/* Subtle central radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#2dd4bf]/[0.08] blur-[80px] pointer-events-none" />
          
          <div className="relative flex flex-col items-center justify-center gap-6">
            {/* Percentage counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-sm text-[#2dd4bf] tracking-widest"
            >
              {progress}%
            </motion.div>
            
            {/* Minimalist Progress Bar */}
            <div className="h-[2px] w-[200px] overflow-hidden rounded-full bg-[#1a1a1a] sm:w-[280px]">
              <motion.div 
                className="h-full bg-[#2dd4bf]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
