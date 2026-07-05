import { useEffect } from 'react';
import { X, ExternalLink, Image as ImageIcon } from 'lucide-react';
import BrandIcon from './BrandIcon';
import project1 from '../assets/project1.png';

export default function ProjectModal({ project, onClose }) {
  // Close on Escape, and lock background scroll while open
  useEffect(() => {
    if (!project) return;

    const onKey = (e) => e.key === 'Escape' && onClose();
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-cream dark:bg-umberdark border border-umber/15 dark:border-sage/30 rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-7 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 w-8 h-8 rounded-full border border-umber/20 dark:border-sage/40 flex items-center justify-center text-umber dark:text-cream"
        >
          <X size={16} />
        </button>

        {project.image || project1 ? (
          <img
            src={project.image || project1}
            alt={project.name}
            className="w-full h-44 object-cover rounded-xl mb-5"
          />
        ) : (
          <div className="w-full h-44 rounded-xl mb-5 border border-dashed border-umber/25 dark:border-sage/40 flex flex-col items-center justify-center gap-2 text-umber/40 dark:text-cream/40">
            <ImageIcon size={22} />
            <span className="font-mono text-[10px]">ADD PROJECT IMAGE</span>
          </div>
        )}

        <h3 className="font-display text-2xl font-bold mb-1 text-umber dark:text-cream">
          {project.name}
        </h3>
        <p className="text-umber/70 dark:text-cream/70 mb-4">{project.tagline}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[10px] border border-umber/20 dark:border-sage/40 rounded-md px-2 py-1 text-umber dark:text-cream"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mb-6 flex-wrap">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-terracotta text-cream rounded-lg px-4 py-2 text-sm font-semibold"
          >
            <ExternalLink size={14} /> Live Project
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-umber/20 dark:border-sage/40 text-umber dark:text-cream rounded-lg px-4 py-2 text-sm font-semibold"
          >
            <BrandIcon slug="github" size={14} /> Client Repo
          </a>
        </div>

        <div className="space-y-5">
          <div>
            <p className="font-mono text-[11px] text-terracotta mb-1">DESCRIPTION</p>
            <p className="text-sm text-umber/70 dark:text-cream/70 leading-relaxed">
              {project.description}
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-terracotta mb-1">CHALLENGES</p>
            <p className="text-sm text-umber/70 dark:text-cream/70 leading-relaxed">
              {project.challenges}
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-terracotta mb-1">FUTURE IMPROVEMENTS</p>
            <p className="text-sm text-umber/70 dark:text-cream/70 leading-relaxed">
              {project.improvements}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
