import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import Section from './Section';
import ProjectModal from './ProjectModal';
import { PROJECTS } from '../data';

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <Section id="projects" eyebrow="SELECTED WORK" title="Projects">
      <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {PROJECTS.map((p) => (
          <div
            key={p.id}
            className="bg-white dark:bg-umber border border-umber/15 dark:border-sage/30 rounded-2xl p-6 flex flex-col"
          >
            {p.image ? (
              <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            ) : (
              <div className="w-full h-40 rounded-lg mb-4 border border-dashed border-umber/25 dark:border-sage/40 flex flex-col items-center justify-center gap-1.5 text-umber/40 dark:text-cream/40">
                <ImageIcon size={20} />
                <span className="font-mono text-[10px]">ADD PROJECT IMAGE</span>
              </div>
            )}

            <h3 className="font-display text-xl font-bold mb-2 text-umber dark:text-cream">
              {p.name}
            </h3>
            <p className="text-sm text-umber/70 dark:text-cream/70 mb-4 flex-1">{p.tagline}</p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {p.stack.slice(0, 4).map((s) => (
                <span
                  key={s}
                  className="font-mono text-[10px] border border-umber/20 dark:border-sage/40 rounded-md px-2 py-1 text-umber dark:text-cream"
                >
                  {s}
                </span>
              ))}
            </div>

            <button
              onClick={() => setSelected(p)}
              className="w-full border border-umber/20 dark:border-sage/40 text-umber dark:text-cream rounded-lg py-2.5 font-semibold text-sm"
            >
              Details
            </button>
          </div>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
