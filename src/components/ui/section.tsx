'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

const Section = ({ id, children, className = '', noPadding = false }: SectionProps) => {
  return (
    <section
      id={id}
      className={`min-h-screen w-full bg-black ${!noPadding ? 'py-24' : ''} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;