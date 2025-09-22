'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/section';

const About = () => {
  return (
    <Section id="about" className="bg-muted/50 flex items-center justify-center py-16 sm:py-20 md:py-24 lg:min-h-screen">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-[#61dca3] to-[#61b3dc] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About PARADOX
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4 sm:px-6 md:px-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            PARADOX is the annual technical symposium organized by the Department of Computer Science 
            and Engineering at College of Engineering Kidangoor. It serves as a platform for students 
            to explore, learn, and showcase their technical skills through various events and workshops.
          </motion.p>
        </div>
      </div>
    </Section>
  );
};

export default About;