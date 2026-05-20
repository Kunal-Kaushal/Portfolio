import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import StarField from "@/components/StarField";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import MouseGlow from "@/components/MouseGlow";

export default function Page() {
  return (
    <main className="relative">
      {/* Global starfield — fixed so it persists across all sections */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <StarField />
      </div>
      <MouseGlow />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Featured />
      <Projects />
      <Stack />
      <Education />
      <Contact />
    </main>
  );
}
