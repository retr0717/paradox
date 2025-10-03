'use client';

import { useEffect } from 'react';
import About from '@/components/sections/about';
import Events from '@/components/sections/events';
import Hero from '@/components/sections/hero';
import Schedule from '@/components/sections/schedule';

export default function Home() {
  useEffect(() => {
    // Disable scroll restoration first
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Always start at top immediately
    window.scrollTo(0, 0);
    
    // Check if coming back from an event page
    const fromEventPage = sessionStorage.getItem('fromEventPage');
    
    if (fromEventPage === 'true') {
      // Clear the flag immediately
      sessionStorage.removeItem('fromEventPage');
      // Only then scroll to events section after a slight delay
      setTimeout(() => {
        const eventsSection = document.querySelector('#events');
        if (eventsSection) {
          eventsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
    
    // Clean up any leftover flags on fresh loads
    if (!fromEventPage || fromEventPage !== 'true') {
      sessionStorage.removeItem('fromEventPage');
    }
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Events />
      <Schedule />
    </div>
  );
}
