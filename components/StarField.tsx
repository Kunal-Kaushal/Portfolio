"use client";
import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;
    const stars: Star[] = [];
    const COUNT = 160;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let currentScrollY = window.scrollY;
    const onScroll = () => {
      currentScrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    for (let i = 0; i < COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.4,
        opacity: Math.random() * 0.6 + 0.25,
        speed: Math.random() * 0.1 + 0.025,
        twinkleSpeed: Math.random() * 0.018 + 0.004,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 1;

      stars.forEach((star) => {
        const twinkle =
          star.opacity *
          (0.65 + 0.35 * Math.sin(t * star.twinkleSpeed + star.twinkleOffset));

        // Parallax effect: slower stars drift less
        let renderY = star.y - currentScrollY * (star.speed * 2.5);
        renderY = ((renderY % canvas.height) + canvas.height) % canvas.height;

        // Optimization: fillRect is significantly faster than arc for small shapes
        ctx.fillStyle = `rgba(255,255,255,${twinkle})`;
        ctx.fillRect(star.x, renderY, star.r * 2, star.r * 2);

        star.y -= star.speed;
      });
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
