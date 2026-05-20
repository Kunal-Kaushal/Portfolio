import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14">
      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#2dd4bf]/80">
        {eyebrow}
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
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-[#f5f5f5]">{description}</p>
      )}
    </Reveal>
  );
}
