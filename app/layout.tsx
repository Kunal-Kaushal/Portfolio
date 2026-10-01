import type { Metadata } from "next";
import { Inter, JetBrains_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
const geist = DM_Sans({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kunalkaushal.tech"),
  title: "Kunal Kaushal - AI Engineer",
  description:
    "AI Engineer building production RAG pipelines, multi-agent systems, and real-time voice agents in Python. AIML Trainee at Droisys.",
  openGraph: {
    title: "Kunal Kaushal - AI Engineer",
    description:
      "AI Engineer building production RAG pipelines, multi-agent systems, and real-time voice agents in Python.",
    url: "https://kunalkaushal.tech",
    siteName: "Kunal Kaushal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kunal Kaushal - AI Engineer",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunal Kaushal - AI Engineer",
    description:
      "AI Engineer building production RAG pipelines, multi-agent systems, and real-time voice agents in Python.",
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
