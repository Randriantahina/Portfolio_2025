import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Project from './components/Project';
import Skills from './components/Skill';
import Navbar from './components/Navbar';
import About from './components/About';
import PageLoader from './components/ui/PageLoader';
import ScrollToTop from './components/ui/ScrollToTop';
import SoundEffects from './components/ui/SoundEffects';

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      <ScrollToTop />
      <SoundEffects />
    </>
  );
}
