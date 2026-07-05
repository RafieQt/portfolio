/**
 * Shared wrapper for every page section.
 *
 * `scroll-mt-24` offsets anchor scrolling so content doesn't hide under the
 * sticky navbar, and the generous `py-24 min-h-[70vh]` gives every section --
 * even short ones like About -- enough room that fast scrolling can't skip
 * past it before the scroll-spy hook registers it.
 */
export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-24 min-h-[70vh] flex flex-col justify-center">
      {eyebrow && (
        <p className="font-mono text-[13px] tracking-[0.12em] text-terracotta mb-2">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="font-display text-3xl font-bold mb-8 text-umber dark:text-cream">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
