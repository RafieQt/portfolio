// import { Trophy } from 'lucide-react';
import Section from './Section';
import { YOUTUBE_ID } from '../data';

export default function About() {
  return (
    <Section id="about" eyebrow="ABOUT ME" title="The story so far">
      <div className="flex flex-wrap gap-10">
        <div className="flex-1 min-w-[300px] text-umber/70 dark:text-cream/70 leading-relaxed">
          <p className="mb-4">
            I'm a Computer Science undergraduate at American International University, Bangladesh,
            passionate about building full-stack web applications that solve real problems -- from
            civic-tech platforms to logistics workflows. My journey started with Programming Hero's
            Web Development course, and I've since built projects like CitySync and Zapper using the
            MERN stack.
          </p>
          <p className="mb-4">
            I enjoy work that mixes clean architecture with visible, practical impact -- systems that
            make everyday processes (reporting a broken streetlight, delivering a parcel) a little
            smoother. Outside of code, I read, travel, and do 3D modeling. I also competed in the
            TechnoXian World Robotics Championship at university, coordinating my team to a
            runner-up finish.
          </p>
          {/* <div className="flex items-center gap-2 mt-5">
            <Trophy size={18} className="text-terracotta" />
            <span className="font-mono text-xs text-umber/60 dark:text-cream/60">
              TECHNOXIAN WORLD ROBOTICS CHAMPIONSHIP -- RUNNERS-UP
            </span>
          </div> */}
        </div>

        <div className="flex-1 min-w-[280px]">
          <div className="aspect-video rounded-xl border border-umber/15 dark:border-sage/30 bg-white dark:bg-umber flex items-center justify-center">
            {YOUTUBE_ID ? (
              <iframe
                title="Introduction video"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
                className="rounded-xl border-0"
                allowFullScreen
              />
            ) : (
              <p className="font-mono text-xs text-umber/50 dark:text-cream/50 text-center px-5">
                VIDEO INTRODUCTION -- COMING SOON
              </p>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
