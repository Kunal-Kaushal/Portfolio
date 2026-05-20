export default function ArchonDiagram() {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-[#1f1f1f] bg-surface/60 p-6 transition-all duration-200 hover:-translate-y-[3px] hover:border-[#2a2a2a] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
      <div className="overflow-x-auto">
        <svg viewBox="0 0 560 380" className="h-auto w-full font-mono">
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="#737373" />
          </marker>
        </defs>
        {/* Top row: Documents → Chunker → Embedder → FAISS */}
        {[
          { x: 10, y: 40, w: 110, label: "Documents" },
          { x: 145, y: 40, w: 100, label: "Chunker" },
          { x: 270, y: 40, w: 110, label: "Embedder" },
          { x: 405, y: 20, w: 130, label: "FAISS Index", accent: true },
          { x: 405, y: 80, w: 130, label: "BM25 Index", accent: true },
        ].map((b, i) => (
          <g key={i}>
            <rect
              x={b.x}
              y={b.y}
              width={b.w}
              height={36}
              rx={6}
              fill="#0c0c0c"
              stroke={b.accent ? "rgba(45,212,191,0.45)" : "rgba(45,212,191,0.2)"}
            />
            <text
              x={b.x + b.w / 2}
              y={b.y + 22}
              textAnchor="middle"
              fontSize="12"
              fill="#f5f5f5"
              fontFamily="ui-monospace, monospace"
            >
              {b.label}
            </text>
          </g>
        ))}
        {/* connectors top row */}
        <line x1="120" y1="58" x2="145" y2="58" stroke="#737373" strokeWidth="1" markerEnd="url(#arr)" />
        <line x1="245" y1="58" x2="270" y2="58" stroke="#737373" strokeWidth="1" markerEnd="url(#arr)" />
        <line x1="380" y1="58" x2="405" y2="38" stroke="#737373" strokeWidth="1" markerEnd="url(#arr)" />
        <line x1="380" y1="58" x2="405" y2="98" stroke="#737373" strokeWidth="1" markerEnd="url(#arr)" />

        {/* divider */}
        <line x1="20" y1="170" x2="540" y2="170" stroke="#1f1f1f" strokeDasharray="3 4" />

        {/* Bottom row: Query → Hybrid → Reranker → Gemini → Response */}
        {[
          { x: 10, y: 210, w: 90, label: "Query" },
          { x: 120, y: 210, w: 160, label: "Hybrid Retriever" },
          { x: 300, y: 210, w: 100, label: "Reranker" },
          { x: 10, y: 290, w: 200, label: "Gemini 2.0 Flash", accent: true },
          { x: 230, y: 290, w: 130, label: "Response" },
        ].map((b, i) => (
          <g key={i}>
            <rect
              x={b.x}
              y={b.y}
              width={b.w}
              height={36}
              rx={6}
              fill="#0c0c0c"
              stroke={b.accent ? "rgba(45,212,191,0.45)" : "rgba(45,212,191,0.2)"}
            />
            <text
              x={b.x + b.w / 2}
              y={b.y + 22}
              textAnchor="middle"
              fontSize="12"
              fill="#f5f5f5"
              fontFamily="ui-monospace, monospace"
            >
              {b.label}
            </text>
          </g>
        ))}
        <line x1="100" y1="228" x2="120" y2="228" stroke="#737373" strokeWidth="1" markerEnd="url(#arr)" />
        <line x1="280" y1="228" x2="300" y2="228" stroke="#737373" strokeWidth="1" markerEnd="url(#arr)" />
        <line x1="350" y1="246" x2="350" y2="285" stroke="#737373" strokeWidth="1" />
        <line x1="350" y1="285" x2="110" y2="285" stroke="#737373" strokeWidth="1" />
        <line x1="110" y1="285" x2="110" y2="290" stroke="#737373" strokeWidth="1" markerEnd="url(#arr)" />
        <line x1="210" y1="308" x2="230" y2="308" stroke="#737373" strokeWidth="1" markerEnd="url(#arr)" />

        {/* feed back from FAISS/BM25 into Hybrid */}
        <path
          d="M470,116 C470,170 200,160 200,210"
          stroke="#737373"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3 4"
          markerEnd="url(#arr)"
        />

        <text x="20" y="200" fontSize="10" fill="#737373" fontFamily="ui-monospace, monospace">
          INDEX TIME
        </text>
        <text x="20" y="365" fontSize="10" fill="#737373" fontFamily="ui-monospace, monospace">
          QUERY TIME
        </text>
        </svg>
      </div>
    </div>
  );
}
