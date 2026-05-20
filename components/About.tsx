import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-b border-[#141414] py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        
        {/* Left Column: Text */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#2dd4bf]/80">
              ABOUT
            </span>
            <h2
              className="mt-3 font-display text-[28px] font-semibold tracking-tight sm:text-[34px] md:text-[38px]"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #e8e8e8 50%, rgba(45,212,191,0.8) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Engineering AI workflows from concept to production.
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-[1.8] text-[#f5f5f5]">
              <p>
                I&apos;m a Generative AI Developer specializing in RAG-based systems, multi-agent orchestration, and secure backend architectures. I focus on bridging the gap between experimental LLM models and real-world applications.
              </p>
              <p>
                Currently pursuing my B.Tech in AI &amp; Machine Learning at GL Bajaj Institute, I spend my time architecting solutions like threat analysis dashboards and automated HR agents.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right Column: IDE Snippet */}
        <Reveal delay={0.2} className="flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-[480px] overflow-hidden rounded-xl border border-[#1a1a1a] bg-[#0c0c0c] font-mono text-[12.5px] shadow-[0_10px_40px_rgba(0,0,0,0.3),0_0_0_1px_rgba(45,212,191,0.05)] transition-all duration-300 hover:border-[#2dd4bf]/30 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(45,212,191,0.1)]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#1a1a1a] bg-[#111111] px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="text-[#525252]">core/</span>
                <span className="text-[#f5f5f5]">developer.py</span>
              </div>
            </div>
            
            {/* Code */}
            <div className="p-5 leading-[1.8] text-[#f5f5f5]">
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">1</span>
                <span><span className="text-[#ff7b72]">from</span> dataclasses <span className="text-[#ff7b72]">import</span> dataclass</span>
              </div>
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">2</span>
                <span></span>
              </div>
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">3</span>
                <span><span className="text-[#ff7b72]">@dataclass</span></span>
              </div>
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">4</span>
                <span><span className="text-[#ff7b72]">class</span> <span className="text-[#d2a8ff]">Engineer</span>:</span>
              </div>
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">5</span>
                <span>    name: <span className="text-[#79c0ff]">str</span> = <span className="text-[#a5d6ff]">"Kunal Kaushal"</span></span>
              </div>
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">6</span>
                <span>    headline: <span className="text-[#79c0ff]">str</span> = <span className="text-[#a5d6ff]">"GenAI Developer"</span></span>
              </div>
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">7</span>
                <span>    focus: <span className="text-[#79c0ff]">list</span> = [</span>
              </div>
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">8</span>
                <span>        <span className="text-[#a5d6ff]">"RAG Pipelines"</span>,</span>
              </div>
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">9</span>
                <span>        <span className="text-[#a5d6ff]">"Multi-Agent AI"</span>,</span>
              </div>
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">10</span>
                <span>        <span className="text-[#a5d6ff]">"Backend Architectures"</span></span>
              </div>
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">11</span>
                <span>    ]</span>
              </div>
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">12</span>
                <span></span>
              </div>
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">13</span>
                <span>    <span className="text-[#ff7b72]">def</span> <span className="text-[#d2a8ff]">build</span>(self) -&gt; <span className="text-[#79c0ff]">str</span>:</span>
              </div>
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">14</span>
                <span>        <span className="text-[#ff7b72]">return</span> <span className="text-[#a5d6ff]">"AI that scales."</span></span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
