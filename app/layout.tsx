import type { Metadata } from "next";
import { Inter, JetBrains_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
const geist = DM_Sans({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  title: "Kunal Kaushal — Generative AI Developer",
  description:
    "GenAI Developer building production-grade RAG pipelines, LLM-powered backends, and multi-agent architectures. Based in Noida, India.",
  openGraph: {
    title: "Kunal Kaushal — Generative AI Developer",
    description:
      "GenAI Developer building production-grade RAG pipelines, LLM-powered backends, and multi-agent architectures.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Kunal Kaushal — Generative AI Developer",
    description:
      "GenAI Developer building production-grade RAG pipelines, LLM-powered backends, and multi-agent architectures.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} ${geist.variable}`}>
      <body className="font-sans bg-bg text-text-primary antialiased">{children}</body>
    </html>
  );
}
