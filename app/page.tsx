import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Project from './components/Project';
import Skills from './components/Skill';

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
