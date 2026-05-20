import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const GROUPS = [
  {
    title: "Programming",
    items: ["Python", "C/C++"],
  },
  {
    title: "AI & ML",
    items: ["RAG", "FAISS", "SentenceTransformers", "LangChain", "LLM Integration (Gemini, LLaMA)", "Agentic Workflows"],
  },
  {
    title: "Frameworks",
    items: ["Google ADK", "Gemini Enterprise"],
  },
  {
    title: "Backend Development",
    items: ["REST API Development", "Flask", "FastAPI"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Docker", "GCP (Cloud Run)", "AWS (EC2, S3, IAM)"],
  },
  {
    title: "Databases",
    items: ["SQL", "NoSQL", "SQLite", "Firestore"],
  },
  {
    title: "CS Fundamentals",
    items: ["Data Structures & Algorithms", "Operating Systems"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="border-t border-[#141414] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills."
          description="Grouped by capability — the systems and tooling I reach for in production."
        />
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#2dd4bf]/55">
                {g.title}
              </h3>
              <div className="mt-3 h-px w-full bg-[#1f1f1f]" />
              <ul className="-ml-1 mt-5 flex flex-wrap">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="m-1 cursor-default rounded-[4px] border border-[#222] bg-white/[0.03] px-[10px] py-[3px] font-mono text-[11px] text-[#f5f5f5] transition-colors duration-200 hover:border-[#2dd4bf]/40"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
