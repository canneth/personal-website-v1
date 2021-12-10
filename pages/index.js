
import Hero from '@/page-sections/hero-section/Hero';
import AboutMe from '@/page-sections/about-section/AboutMe';
import Skills from '@/page-sections/skills-section/Skills';
import Projects from '@/page-sections/projects-section/Projects';
import ContactMe from '@/page-sections/contact-section/ContactMe';

function MainPage() {
  return (
    <>
      <Hero id='hero-section' />
      <AboutMe id='about-section' />
      <Skills id='skills-section' />
      <Projects id='projects-section' />
      <ContactMe id='contact-section' />
    </>
  );
}

export default MainPage;