import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ImageGallery from "./components/image-gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <About />
        <ImageGallery />
        <Skills />
        <Projects />       
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
