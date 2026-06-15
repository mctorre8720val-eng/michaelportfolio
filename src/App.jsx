import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection";

export default function App() {
  return (
    <>
      <Navbar />
      
      {/* Hero fades in instantly upon page load */}
      <FadeInSection>
        <Hero />
      </FadeInSection>

      {/* These sections fade in dynamically as you scroll down */}
      <FadeInSection>
        <About />
      </FadeInSection>

      <FadeInSection>
        <Projects />
      </FadeInSection>

      <FadeInSection>
        <Contact />
      </FadeInSection>

      <Footer />
    </>
  );
}