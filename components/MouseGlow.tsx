"use client";
import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const updateMousePosition = (ev: MouseEvent) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      animationFrameId = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.background = `radial-gradient(500px circle at ${ev.clientX}px ${ev.clientY}px, rgba(45,212,191,0.035), transparent 50%)`;
        }
      });
    };
    
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(500px circle at -1000px -1000px, rgba(45,212,191,0.035), transparent 50%)`;
    }

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
    />
  );
}
