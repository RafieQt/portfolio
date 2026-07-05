import { Mail } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from '../data';
import BrandIcon from './BrandIcon';

export default function Footer() {
  return (
    <footer className="border-t border-umber/15 dark:border-sage/30 mt-10">
      <div className="max-w-5xl mx-auto px-5 py-6 flex flex-wrap justify-between gap-3">
        <p className="font-mono text-[11px] text-umber/60 dark:text-cream/60 m-0">
          &copy; {new Date().getFullYear()} TAJ UDDIN AHMED RAFI
        </p>
        <div className="flex gap-4 text-umber dark:text-cream">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer"><BrandIcon slug="github" size={18} /></a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer"><BrandIcon slug="linkedin" size={16} /></a>
          <a href={`mailto:${EMAIL}`}><Mail size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
