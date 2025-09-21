'use client';

import { Space_Grotesk } from 'next/font/google';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon } from 'lucide-react';
import GlitchText from '@/components/ui/glitch-text';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['700']
});

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent pt-32">
      <div className="container relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <GlitchText
              speed={0.08}
              enableShadows={true}
              enableOnHover={true}
              className={`text-8xl md:text-[11rem] font-bold ${spaceGrotesk.className} transition-all duration-300 cursor-target`}
            >
              PARADOX&apos;25
            </GlitchText>
          </motion.div>

          <motion.p
            className="text-xl md:text-3xl text-white/70 max-w-3xl mx-auto mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            A Technical Symposium by the Department of Computer Science and Engineering
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button size="lg" className="text-lg px-10 py-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm">
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-white/20 hover:bg-white/10">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.8,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <ArrowDownIcon className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;