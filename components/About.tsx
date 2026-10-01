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
            <div className="mt-4 space-y-5 text-[15px] leading-[1.8] text-[#f5f5f5]">
              <p>
                I&apos;m an AI Engineer building production RAG pipelines, multi-agent systems, and real-time voice agents in Python. Currently at Droisys, developing an in-house recruiting platform combining hybrid search over 5,000+ resumes, an agentic workflow layer, and an AI phone interviewer.
              </p>
              <p>
                Pursuing B.Tech in AI &amp; Machine Learning (2023 - 2027) at GL Bajaj Institute of Technology and Management, focusing on high-performance retrieval architectures, LLMs, and distributed AI agents.
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
                <span className="text-[#f5f5f5]">engineer.py</span>
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
                <span><span className="text-[#ff7b72]">class</span> <span className="text-[#d2a8ff]">AIEngineer</span>:</span>
              </div>
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">5</span>
                <span>    name: <span className="text-[#79c0ff]">str</span> = <span className="text-[#a5d6ff]">&quot;Kunal Kaushal&quot;</span></span>
              </div>
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">6</span>
                <span>    role: <span className="text-[#79c0ff]">str</span> = <span className="text-[#a5d6ff]">&quot;AIML Trainee @ Droisys&quot;</span></span>
              </div>
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">7</span>
                <span>    focus: <span className="text-[#79c0ff]">list</span> = [</span>
              </div>
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">8</span>
                <span>        <span className="text-[#a5d6ff]">&quot;Production RAG &amp; Hybrid Search&quot;</span>,</span>
              </div>
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">9</span>
                <span>        <span className="text-[#a5d6ff]">&quot;Real-Time Voice Agents (Pipecat)&quot;</span>,</span>
              </div>
              <div className="flex">
                <span className="w-6 select-none text-[#525252]">10</span>
                <span>        <span className="text-[#a5d6ff]">&quot;Multi-Agent Systems (ADK/LangGraph)&quot;</span></span>
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
                <span>        <span className="text-[#ff7b72]">return</span> <span className="text-[#a5d6ff]">&quot;AI that scales.&quot;</span></span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
