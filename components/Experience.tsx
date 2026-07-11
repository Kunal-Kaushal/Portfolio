import Reveal from "./Reveal";

type ExperienceItem = {
  company: string;
  role: string;
  date: string;
  location: string;
  description?: string;
};

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Droisys",
    role: "AI Intern",
    date: "June 2026 — Present",
    location: "Noida, Sector 63",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-[#141414] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#2dd4bf]/55">
            Experience
          </span>
          <h2 className="mt-4 font-display text-[32px] font-semibold tracking-tight sm:text-[38px]">
            Where I&apos;ve Worked.
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-[1px] bg-[#2dd4bf]/10 md:left-[23px]" />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative pl-12 md:pl-20">
                  {/* Timeline node */}
                  <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-bg md:left-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#2dd4bf] shadow-[0_0_10px_rgba(45,212,191,0.4)]" />
                  </div>

                  <div className="group rounded-xl border border-[#1a1a1a] bg-surface/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2dd4bf]/20 hover:bg-surface/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-[#f5f5f5]">
                          {exp.role} <span className="text-[#2dd4bf]">@ {exp.company}</span>
                        </h3>
                        <p className="mt-1 font-mono text-[13px] text-[#a3a3a3]">
                          {exp.location}
                        </p>
                        {exp.description && (
                          <p className="mt-4 text-[14.5px] leading-relaxed text-[#a3a3a3]">
                            {exp.description}
                          </p>
                        )}
                      </div>
                      <span className="shrink-0 font-mono text-[12px] text-[#2dd4bf]/70">
                        {exp.date}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
