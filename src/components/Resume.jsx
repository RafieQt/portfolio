import { Download } from 'lucide-react';
import Section from './Section';
import { RESUME_URL } from '../data';

export default function Resume() {
  return (
    <Section id="resume" eyebrow="CV" title="Resume">
      <div className="bg-white dark:bg-umber border border-umber/15 dark:border-sage/30 rounded-2xl p-8 max-w-md text-center">
        <p className="text-umber/70 dark:text-cream/70 mb-6">
          View or download my latest resume below.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="border border-umber/20 dark:border-sage/40 text-umber dark:text-cream rounded-lg px-5 py-3 font-semibold"
          >
            View Resume
          </a>
          <a
            href={RESUME_URL}
            download
            className="inline-flex items-center gap-2 bg-terracotta text-cream rounded-lg px-5 py-3 font-semibold"
          >
            <Download size={16} /> Download PDF
          </a>
        </div>
      </div>
    </Section>
  );
}
