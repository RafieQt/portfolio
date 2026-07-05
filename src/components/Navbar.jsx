import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS } from '../data';
import { useScrollSpy } from '../hooks/useScrollSpy';

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(NAV_ITEMS.map((n) => n.id), 100);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-cream/95 dark:bg-umberdark/95 backdrop-blur border-b border-umber/15 dark:border-sage/30">
      <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('home')}
          className="font-display text-xl font-bold text-umber dark:text-cream"
        >
          Rafi<span className="text-terracotta">.</span>
        </button>

        <nav className="hidden md:flex gap-7">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-mono text-[13px] tracking-wide pb-1 border-b-2 transition-colors ${
                activeId === item.id
                  ? 'text-terracotta border-terracotta'
                  : 'text-umber/60 dark:text-cream/60 border-transparent'
              }`}
            >
              {item.label.toUpperCase()}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            className="w-9 h-9 rounded-full border border-umber/20 dark:border-sage/40 flex items-center justify-center text-umber dark:text-cream"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden w-9 h-9 rounded-lg border border-umber/20 dark:border-sage/40 flex items-center justify-center text-umber dark:text-cream"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-umber/15 dark:border-sage/30 px-5 py-3 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left font-mono text-[13px] py-2 ${
                activeId === item.id ? 'text-terracotta' : 'text-umber dark:text-cream'
              }`}
            >
              {item.label.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
