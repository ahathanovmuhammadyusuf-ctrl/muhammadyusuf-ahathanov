import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { AutomotiveWorld } from './sections/AutomotiveWorld';
import { InstagramReelsSection } from './sections/InstagramReelsSection';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-[#090D16] text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
          {/* Top navigation */}
          <Navbar />

          {/* Main content flow */}
          <main className="flex-1">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <AutomotiveWorld />
            <InstagramReelsSection />
            <Contact />
          </main>

          {/* Site footer */}
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
