import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="bg-cream dark:bg-umberdark text-umber dark:text-cream min-h-screen transition-colors duration-300 font-body">
        <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
        <main className="max-w-5xl mx-auto px-5 pt-24">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
