import Section from './Section';
import SkillIcon from './SkillIcon';
import { SKILLS } from '../data';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="WHAT I WORK WITH" title="Skills">
      <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        {SKILLS.map(({ category, items }) => (
          <div
            key={category}
            className="bg-white dark:bg-umber border border-umber/15 dark:border-sage/30 rounded-2xl p-6"
          >
            <p className="font-mono text-xs tracking-wide mb-4 text-umber dark:text-cream">
              {category.toUpperCase()}
            </p>
            <div className="flex flex-col gap-3">
              {items.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3">
                  <SkillIcon name={skill.name} slug={skill.slug} icon={skill.icon} color={skill.color} />
                  <span className="text-sm text-umber dark:text-cream">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
