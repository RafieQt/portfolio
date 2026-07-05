import {  Download} from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '../data';
import BrandIcon from './BrandIcon';
import port from '../portfolio.jpg'
export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="scroll-mt-24 relative min-h-[75vh] flex items-center py-16 overflow-hidden"
    >
      <Contour />
      <div className="relative flex flex-wrap gap-10 items-center">
        <div className="flex-1 min-w-[320px]">
          <p className="font-mono text-[13px] tracking-[0.12em] text-terracotta mb-2">
            FULL STACK DEVELOPER
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4 text-umber dark:text-cream">
            Taj Uddin Ahmed Rafi
          </h1>
          <p className="text-lg text-umber/70 dark:text-cream/70 max-w-md mb-7">
            I build full-stack web applications -- from civic-issue platforms to delivery
            logistics -- using the MERN stack. Currently seeking internship and entry-level
            opportunities.
          </p>
          <div className="flex flex-wrap gap-3 mb-7">
            <a
              href={RESUME_URL}
              className="inline-flex items-center gap-2 bg-terracotta text-cream rounded-lg px-5 py-3 font-semibold"
            >
              <Download size={16} /> Download Resume
            </a>
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 border border-umber/20 dark:border-sage/40 text-umber dark:text-cream rounded-lg px-5 py-3 font-semibold"
            >
              View Projects
            </button>
          </div>
          <div className="flex gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-umber/20 dark:border-sage/40 flex items-center justify-center text-umber dark:text-cream"
            >
              <BrandIcon slug="github" size={18} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-umber/20 dark:border-sage/40 flex items-center justify-center text-umber dark:text-cream"
            >
              <BrandIcon slug="linkedin" size={18} />
            </a>
          </div>
        </div>

        <div className="flex-none">
          {/* TODO(Rafi): replace this block with
              */}
          <div className="w-56 h-56 rounded-full border-2 border-dashed border-terracotta bg-white dark:bg-umber flex items-center justify-center">
            <img src={port} className="w-full h-full rounded-full object-cover" /> 
          </div>
        </div>
      </div>
    </section>
  );
}

function Contour() {
  return (
    <svg
      viewBox="0 0 800 300"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full opacity-40 dark:opacity-30 pointer-events-none text-sage dark:text-umber"
    >
      <path d="M0,220 C150,180 250,260 400,210 C550,160 650,240 800,190" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0,250 C150,210 250,290 400,240 C550,190 650,270 800,220" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0,190 C150,150 250,230 400,180 C550,130 650,210 800,160" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0,160 C150,120 250,200 400,150 C550,100 650,180 800,130" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
