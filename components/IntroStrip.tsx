const CELLS = [
  {
    label: "Who",
    text: "B.Tech AI/ML at GL Bajaj (2027). I build GenAI systems that go beyond demos — RAG pipelines, agent orchestration, cloud-deployed backends.",
  },
  {
    label: "What",
    text: "Production RAG systems. LLM-powered backends. Multi-agent architectures. Deployed on GCP and AWS. No toy projects.",
    bordered: true,
  },
  {
    label: "Stack",
    text: "Python · FAISS · LangChain · Gemini · FastAPI · Docker · GCP Cloud Run · AWS",
  },
];

export default function IntroStrip() {
  return (
    <section
      className="relative border-b border-[#141414]"
      style={{
        background: "linear-gradient(180deg, rgba(45,212,191,0.02) 0%, #0a0a0a 60%)",
        borderTop: "1px solid rgba(45,212,191,0.1)",
      }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 px-6 md:grid-cols-3 md:px-20">
        {CELLS.map((c, i) => (
          <div
            key={c.label}
            className={`py-10 ${
              i === 1
                ? "border-y border-[#141414] md:border-x md:border-y-0 md:px-12"
                : i === 0
                ? "md:pr-12"
                : "md:pl-12"
            }`}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#2dd4bf]/60">
              {c.label}
            </p>
            <p className="mt-3 text-[14px] leading-[1.7] text-[#f5f5f5]">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
