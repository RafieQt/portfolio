import { Mail, Phone, MessageCircle } from 'lucide-react';
import BrandIcon from './BrandIcon';
import Section from './Section';
import { EMAIL, PHONE, WHATSAPP, GITHUB_URL } from '../data';

const CARD_CLASS =
  'bg-white dark:bg-umber border border-umber/15 dark:border-sage/30 rounded-2xl p-5 flex items-center gap-3.5 no-underline';

export default function Contact() {
  return (
    <Section id="contact" eyebrow="GET IN TOUCH" title="Contact">
      <div className="grid gap-4 max-w-2xl" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        <a href={`mailto:${EMAIL}`} className={CARD_CLASS}>
          <Mail size={20} className="text-terracotta shrink-0" />
          <div className="min-w-0">
            <p className="font-mono text-[11px] text-umber/60 dark:text-cream/60 m-0">EMAIL</p>
            <p className="text-sm m-0 break-all text-umber dark:text-cream">{EMAIL}</p>
          </div>
        </a>
        <a href={`tel:${PHONE}`} className={CARD_CLASS}>
          <Phone size={20} className="text-terracotta shrink-0" />
          <div>
            <p className="font-mono text-[11px] text-umber/60 dark:text-cream/60 m-0">PHONE</p>
            <p className="text-sm m-0 text-umber dark:text-cream">{PHONE}</p>
          </div>
        </a>
        <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className={CARD_CLASS}>
          <MessageCircle size={20} className="text-terracotta shrink-0" />
          <div>
            <p className="font-mono text-[11px] text-umber/60 dark:text-cream/60 m-0">WHATSAPP</p>
            <p className="text-sm m-0 text-umber dark:text-cream">{PHONE}</p>
          </div>
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={CARD_CLASS}>
          <BrandIcon slug="github" size={20} />
          <div>
            <p className="font-mono text-[11px] text-umber/60 dark:text-cream/60 m-0">GITHUB</p>
            <p className="text-sm m-0 text-umber dark:text-cream">RafieQt</p>
          </div>
        </a>
      </div>
    </Section>
  );
}
