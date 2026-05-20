import type { Metadata } from "next";
import { Inter, JetBrains_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
const geist = DM_Sans({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kunalkaushal.tech"),
  title: "Kunal Kaushal — Generative AI Developer",
  description:
    "GenAI Developer building production-grade RAG pipelines, LLM-powered backends, and multi-agent architectures. Based in Noida, India.",
  openGraph: {
    title: "Kunal Kaushal — Generative AI Developer",
    description:
      "GenAI Developer building production-grade RAG pipelines, LLM-powered backends, and multi-agent architectures.",
    url: "https://kunalkaushal.tech",
    siteName: "Kunal Kaushal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kunal Kaushal — GenAI Developer",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunal Kaushal — Generative AI Developer",
    description:
      "GenAI Developer building production-grade RAG pipelines, LLM-powered backends, and multi-agent architectures.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} ${geist.variable} overflow-x-hidden`}>
      <body className="font-sans bg-bg text-text-primary antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
