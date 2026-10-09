import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden', position: 'relative' }}>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
