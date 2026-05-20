import Reveal from "./Reveal";

const EDUCATION = [
  {
    school: "GL Bajaj Institute of Technology and Management",
    degree: "B.Tech in AI & Machine Learning",
    date: "2023 — Present",
  },
  {
    school: "Delhi World Public School Noida Extension",
    degree: "12th Grade (Senior Secondary)",
    date: "2023",
  },
  {
    school: "Delhi World Public School Noida Extension",
    degree: "10th Grade (Secondary)",
    date: "2021",
  },
];

export default function Education() {
  return (
    <section id="education" className="border-t border-[#141414] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#2dd4bf]/55">
            Education
          </span>
          <h2 className="mt-4 font-display text-[32px] font-semibold tracking-tight sm:text-[38px]">
            My Academic Journey.
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-[1px] bg-[#2dd4bf]/10 md:left-[23px]" />

          <div className="space-y-10">
            {EDUCATION.map((edu, i) => (
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
                          {edu.degree}
                        </h3>
                        <p className="mt-1 text-[14px] text-[#a3a3a3]">
                          {edu.school}
                        </p>
                      </div>
                      <span className="shrink-0 font-mono text-[12px] text-[#2dd4bf]/70">
                        {edu.date}
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
