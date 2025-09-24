'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/section';

const About = () => {
  return (
    <section id="about" className="py-40 relative overflow-hidden w-full scroll-mt-20">
      {/* Background Tracks */}
      <div className="absolute top-[10%] left-0 w-full h-1 bg-gradient-to-r from-[#61dca3] via-transparent to-[#61dca3] opacity-60 animate-pulse" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-[10%] right-0 w-full h-1 bg-gradient-to-l from-[#2b4539] via-transparent to-[#2b4539] opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="w-full">
        <div className="bg-card/50 backdrop-blur-sm border-0 p-8 md:p-12 lg:p-16 shadow-lg shadow-[#61dca3]/10 relative overflow-hidden w-full">
          {/* Identity disc in corner */}
          <div 
            className="absolute -top-5 -right-5 w-20 h-20 rounded-full border-2 border-[#61dca3] opacity-30"
            style={{
              background: 'conic-gradient(from 0deg, rgba(97, 220, 163, 0.3), transparent, rgba(97, 220, 163, 0.3))'
            }}
          />
          
          {/* Main Content */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 bg-gradient-to-r from-[#61dca3] to-[#2b4539] bg-clip-text text-transparent">
              About PARADOX '25
            </h2>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              <p>
                Paradox '25 is the annual flagship technical fest organized by the Department of Computer Science and Engineering at the College of Engineering Kidangoor. Step into the digital grid where innovation and technology converge.
              </p>
              <p>
                This year, we're bringing you cutting-edge workshops, competitive programming challenges, and revolutionary tech showcases that push the boundaries of digital reality. Whether you're a code warrior, digital architect, or tech explorer, PARADOX '25 offers an immersive journey into tomorrow's grid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;