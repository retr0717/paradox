'use client';

import About from '@/components/sections/about';
import Events from '@/components/sections/events';
import Hero from '@/components/sections/hero';
import Schedule from '@/components/sections/schedule';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Events />
      <Schedule />
    </div>
  );
}
