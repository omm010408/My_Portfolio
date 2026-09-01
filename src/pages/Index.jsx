import Navbar from "../components/Navbar";
import Hero from "@/components/Hero.jsx";
import Projects from "@/components/Projects.jsx";
import Footer from "@/components/Footer.jsx";
import About from "@/components/About.jsx";
import { useSmoothScroll } from "../hooks/useSmoothScroll"; // Add this line
import Education from "../components/Education";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import SplashCursor from "../components/ui/SplashCursor";
import Certificates from "../components/Certificates";


const Index = () => {
  useSmoothScroll(); // Add this line
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <SplashCursor
          DENSITY_DISSIPATION={5}
          VELOCITY_DISSIPATION={3}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.1}
          SPLAT_FORCE={3500}
          COLOR_UPDATE_SPEED={10}
          SHADING
          RAINBOW_MODE={false}
          COLOR="#D8D0FF"
        />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Certificates></Certificates>
        <Projects />
        <Contact />
       </main>
      <Footer />
    </div>
  );
};

export default Index;