import Navbar from "@/components/Navbar";
import StarField from "@/components/StarField";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import MouseGlow from "@/components/MouseGlow";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      {/* Global starfield — fixed so it persists across all sections */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <StarField />
      </div>
      <MouseGlow />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Featured />
      <Projects />
      <Stack />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
