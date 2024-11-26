import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Steps } from './components/Steps';
import { Pricing } from './components/Pricing';
import { Diplomas } from './components/Diplomas';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Contact } from './components/Contact';
import { ThankYou } from './components/ThankYou';

function MainLayout({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }: any) {
  return (
    <div className="min-h-screen">
      <Navigation 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <Features />
      <Steps />
      <Pricing scrollToSection={scrollToSection} />
      <Diplomas />
      <Testimonials />
      <ContactForm />
      <Contact />
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <MainLayout 
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
        } />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
