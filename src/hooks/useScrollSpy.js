import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently "active" while scrolling.
 *
 * Instead of relying on IntersectionObserver ratios (which can skip short
 * sections when scrolling fast), this checks each section's position against
 * the current scroll offset directly -- so every section gets picked up
 * reliably, in order, no matter how tall it is.
 *
 * @param {string[]} ids - section ids, in top-to-bottom page order
 * @param {number} offset - px from the top of the viewport that counts as "reached" (roughly navbar height + a little breathing room)
 */
export function useScrollSpy(ids, offset = 120) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }

      // If we've scrolled to (or near) the bottom of the page, force the
      // last section active -- handles short final sections cleanly.
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;
      if (atBottom) current = ids[ids.length - 1];

      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ids, offset]);

  return activeId;
}
