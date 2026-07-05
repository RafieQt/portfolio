import { GraduationCap, ShieldCheck } from 'lucide-react';
import Section from './Section';
import { EDUCATION, CERTIFICATIONS } from '../data';

export default function Education() {
  return (
    <Section id="education" eyebrow="BACKGROUND" title="Education">
      <div className="flex flex-col border-l-2 border-umber/15 dark:border-sage/30 pl-7">
        {EDUCATION.map((e, i) => (
          <div key={i} className="relative pb-8">
            <span className="absolute -left-[34px] top-1 w-3 h-3 rounded-full bg-terracotta" />
            <div className="flex items-center gap-2 mb-1.5">
              <GraduationCap size={16} className="text-terracotta" />
              <span className="font-mono text-[11px] text-umber/60 dark:text-cream/60">
                {e.time.toUpperCase()}
              </span>
            </div>
            <h3 className="font-display text-lg font-semibold text-umber dark:text-cream mb-1">
              {e.school}
            </h3>
            <p className="text-umber/70 dark:text-cream/70">{e.degree}</p>
          </div>
        ))}

        <div className="relative">
          <span className="absolute -left-[34px] top-1 w-3 h-3 rounded-full border-2 border-terracotta bg-cream dark:bg-umberdark" />
          <div className="flex items-center gap-2 mb-1.5">
            <ShieldCheck size={16} className="text-terracotta" />
            <span className="font-mono text-[11px] text-umber/60 dark:text-cream/60">
              CERTIFICATIONS
            </span>
          </div>
          <p className="text-umber/70 dark:text-cream/70 leading-loose">
            {CERTIFICATIONS.map((c) => (
              <span key={c}>
                {c}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </Section>
  );
}
