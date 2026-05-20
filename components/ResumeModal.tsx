"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 z-[101] flex flex-col overflow-hidden rounded-xl border border-[#222] bg-[#0a0a0a] shadow-2xl md:inset-10"
          >
            <div className="flex items-center justify-between border-b border-[#222] bg-[#111] px-4 py-3">
              <span className="font-mono text-sm text-[#f5f5f5]">resume.pdf</span>
              <button
                onClick={onClose}
                className="rounded-md p-1.5 text-[#737373] transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 bg-[#1a1a1a]">
              <iframe
                src="/resume.pdf"
                className="h-full w-full border-none"
                title="Resume"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
