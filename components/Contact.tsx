import Reveal from "./Reveal";
import { Mail } from "lucide-react";

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

const LINKS = [
  { label: "Email", href: "mailto:kunalkaushal921h@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/Kunal-Kaushal", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kunal-kaushal-a95479299/", icon: LinkedinIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="relative flex min-h-screen flex-col border-t border-[#141414]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 50% 50%, rgba(45,212,191,0.05) 0%, transparent 60%)",
        }}
      />
      <div className="flex flex-1 items-center justify-center py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#2dd4bf]/55">
              Contact
            </span>
            <h2 className="mt-4 font-display text-[32px] font-semibold tracking-tight sm:text-[40px] md:text-[50px]">
              Let&apos;s build something{" "}
              <span
                className="text-[#2dd4bf]"
                style={{ filter: "drop-shadow(0 0 16px rgba(45,212,191,0.5))" }}
              >
                serious.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-[16px] leading-[1.7] text-[#a3a3a3]">
              If you&apos;re building something serious in AI or need an engineer who can scale systems, let&apos;s talk.
            </p>
            <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex cursor-pointer items-center gap-2 rounded-full border border-[#222] bg-surface/50 px-6 py-2.5 text-[#f5f5f5] transition-all duration-300 hover:-translate-y-1 hover:border-[#2dd4bf]/30 hover:bg-surface/80 hover:shadow-[0_0_20px_rgba(45,212,191,0.1)]"
                  >
                    <l.icon size={16} strokeWidth={1.5} />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
      <footer className="w-full border-t border-[#141414] bg-surface/10 px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-[13px] text-[#737373] sm:flex-row">
          <span className="font-mono">© {new Date().getFullYear()} Kunal Kaushal</span>
          <span className="font-mono">Noida, India</span>
        </div>
      </footer>
    </section>
  );
}
