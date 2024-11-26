import { Hero } from './Hero';
import { Features } from './Features';
import { Steps } from './Steps';
import { Contact } from './Contact';

export function Layout() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <Hero scrollToSection={scrollToSection} />
      <Features />
      <Steps />
      <Contact />
    </main>
  );
}