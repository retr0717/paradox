'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon } from 'lucide-react';
import GlitchText from '@/components/ui/glitch-text';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent pt-20 sm:pt-24 md:pt-32 px-4 sm:px-6 lg:px-8">
      <div className="container relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center w-full"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 sm:mb-8 md:mb-10"
          >
            <GlitchText
              speed={0.08}
              enableShadows={true}
              enableOnHover={true}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[11rem] font-bold font-bomber-escort transition-all duration-300 cursor-target leading-tight sm:leading-tight md:leading-none"
            >
              PARADOX&apos;25
            </GlitchText>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/70 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2 sm:px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            A Technical Symposium by the Department of Computer Science and Engineering
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full max-w-sm sm:max-w-none mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm w-full sm:w-auto min-w-[140px] sm:min-w-[160px] md:min-w-[180px] transition-all duration-300 hover:scale-105"
            >
              Register Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border-white/20 hover:bg-white/10 w-full sm:w-auto min-w-[140px] sm:min-w-[160px] md:min-w-[180px] transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.8,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Scroll to explore</span>
          <ArrowDownIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;