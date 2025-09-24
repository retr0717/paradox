'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useRef, useEffect, useState } from 'react';

const Schedule = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  type ScheduleItem = {
    time: string;
    event: string;
    venue: string;
    description?: string;
  };

  const schedule: ScheduleItem[] = [
    { time: '09:00 AM', event: 'Opening Ceremony', venue: 'Main Auditorium', description: 'Welcome to PARADOX 2025' },
    { time: '10:00 AM', event: 'Keynote Speech', venue: 'Main Auditorium', description: 'Future of Technology' },
    { time: '11:30 AM', event: 'Hackathon Kickoff', venue: 'Tech Hub', description: '24-hour coding challenge begins' },
    { time: '12:30 PM', event: 'Code Combat', venue: 'Lab 1', description: 'Competitive programming event' },
    { time: '02:00 PM', event: 'Tech Talk: AI & Future', venue: 'Seminar Hall', description: 'Industry experts discuss AI trends' },
    { time: '03:30 PM', event: 'Design Challenge', venue: 'Creative Studio', description: 'UI/UX design competition' },
    { time: '04:30 PM', event: 'Project Presentations', venue: 'Exhibition Hall', description: 'Teams showcase their innovations' },
    { time: '05:30 PM', event: 'Award Ceremony', venue: 'Main Auditorium', description: 'Recognizing the best projects' },
    { time: '06:00 PM', event: 'Closing Ceremony', venue: 'Main Auditorium', description: 'Celebrating achievements' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const timelineItems = timelineRef.current.querySelectorAll('[data-timeline-item]');
      const sectionTop = sectionRef.current?.offsetTop || 0;
      const scrollTop = window.scrollY + window.innerHeight / 2;
      
      timelineItems.forEach((item, index) => {
        const itemTop = (item as HTMLElement).offsetTop + sectionTop;
        const itemHeight = (item as HTMLElement).offsetHeight;
        
        if (scrollTop >= itemTop && scrollTop < itemTop + itemHeight) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="schedule" 
      className="w-full min-h-screen bg-black bg-muted/50 relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-[#2b4539]/5 to-[#61dca3]/10 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="w-full px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-[#61dca3] to-[#61b3dc] bg-clip-text text-transparent">
            Event Schedule
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6">
            Plan your PARADOX experience with our comprehensive event timeline.
          </p>
        </motion.div>

        <div ref={timelineRef} className="w-full mx-auto relative">
          {/* Enhanced timeline line with scroll-based gradient focus */}
          <div className="hidden md:block absolute left-4 sm:left-6 md:left-8 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-1 lg:w-1.5 rounded-full overflow-hidden">
            {/* Base gradient line - always visible */}
            <div className="w-full h-full bg-gradient-to-b from-[#2b4539]/30 via-[#61dca3]/30 to-[#61b3dc]/30 rounded-full" />
            
            {/* Progress-based gradient fill */}
            <motion.div
              className="absolute top-0 left-0 w-full rounded-full"
              style={{
                background: "linear-gradient(to bottom, #61dca3, #2b4539, #61dca3)",
                filter: "drop-shadow(0 0 8px rgba(97, 220, 163, 0.6)) drop-shadow(0 0 16px rgba(97, 220, 163, 0.4))",
                height: useTransform(lineProgress, [0, 100], ["0%", "100%"])
              }}
            />
            
            {/* Active section glow effect */}
            <motion.div
              className="absolute w-full rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(97, 220, 163, 0.8) 0%, rgba(43, 69, 57, 0.6) 30%, transparent 70%)",
                filter: "blur(4px)",
                height: "120px",
                top: `${(activeIndex / Math.max(schedule.length - 1, 1)) * 100}%`,
                transform: "translateY(-50%)"
              }}
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                data-timeline-item
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-row`}
              >
              {/* Enhanced Timeline dot with active state - hidden on mobile */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  scale: activeIndex === index ? [1, 1.3, 1] : 1,
                  boxShadow: activeIndex === index 
                    ? [
                        `0 0 10px ${index < 5 ? '#61dca3' : '#2b4539'}50`,
                        `0 0 20px ${index < 5 ? '#61dca3' : '#2b4539'}80`,
                        `0 0 10px ${index < 5 ? '#61dca3' : '#2b4539'}50`
                      ]
                    : `0 0 8px ${index < 5 ? '#2b4539' : '#61dca3'}30`
                }}
                transition={{
                  scale: activeIndex === index 
                    ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    : { duration: 0.4, delay: index * 0.1 + 0.3 },
                  boxShadow: activeIndex === index 
                    ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    : { duration: 0.3 }
                }}
                className={`hidden md:block absolute left-4 sm:left-6 md:left-8 lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full border-2 sm:border-3 md:border-4 ${
                  activeIndex === index ? 'border-white/90' : 'border-white/70'
                } shadow-lg z-10 transition-all duration-300`}
                style={{
                  background: activeIndex === index 
                    ? `linear-gradient(45deg, 
                        ${index < 5 ? '#61dca3' : '#2b4539'}, 
                        ${index < 5 ? '#2b4539' : '#61dca3'})` 
                    : `linear-gradient(45deg, 
                        ${index < 5 ? '#2b4539' : '#61dca3'}, 
                        ${index < 5 ? '#61dca3' : '#2b4539'})`,
                }}
              />

              {/* Time indicator - desktop only */}
              <div className={`hidden lg:block absolute ${
                index % 2 === 0 ? 'right-1/2 mr-4' : 'left-1/2 ml-4'
              } bg-gradient-to-r from-[#2b4539] to-[#61dca3] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-mono font-semibold shadow-lg`}>
                {item.time}
              </div>

              {/* Content card - centered on mobile, positioned on desktop */}
              <div className={`w-full md:ml-10 lg:ml-0 ${
                index % 2 === 0 ? 'lg:mr-4 lg:ml-0' : 'lg:ml-4 lg:mr-0'
              } flex-1 max-w-full sm:max-w-md md:max-w-lg lg:max-w-sm xl:max-w-md mx-auto lg:mx-0`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  animate={{
                    scale: activeIndex === index ? 1.02 : 1,
                    y: activeIndex === index ? -2 : 0
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    duration: 0.3
                  }}
                >
                  <Card className={`relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    activeIndex === index 
                      ? 'shadow-xl ring-2 ring-[#61dca3]/30 md:ring-[#61dca3]/30 ring-[#61dca3]/50' 
                      : ''
                  }`}>
                    {/* Card gradient background - enhanced for active state, more prominent on mobile */}
                    <motion.div 
                      className="absolute inset-0"
                      animate={{
                        opacity: activeIndex === index ? [0.15, 0.25, 0.15] : [0.05, 0.08, 0.05]
                      }}
                      transition={{ 
                        duration: activeIndex === index ? 2 : 0.3,
                        repeat: activeIndex === index ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                      style={{
                        background: `linear-gradient(135deg, 
                          ${index < 5 ? '#61dca3' : '#2b4539'} 0%, 
                          ${index < 5 ? '#2b4539' : '#61dca3'} 100%)`
                      }}
                    />
                    
                    {/* Mobile-specific glow effect for active card */}
                    {activeIndex === index && (
                      <motion.div
                        className="md:hidden absolute inset-0 rounded-lg"
                        animate={{
                          boxShadow: [
                            `inset 0 0 20px ${index < 5 ? 'rgba(97, 220, 163, 0.3)' : 'rgba(43, 69, 57, 0.3)'}`,
                            `inset 0 0 40px ${index < 5 ? 'rgba(97, 220, 163, 0.5)' : 'rgba(43, 69, 57, 0.5)'}`,
                            `inset 0 0 20px ${index < 5 ? 'rgba(97, 220, 163, 0.3)' : 'rgba(43, 69, 57, 0.3)'}`
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                    
                    <CardContent className="p-4 sm:p-5 md:p-6 relative z-10">
                      {/* Mobile/Tablet time */}
                      <div className="lg:hidden mb-3">
                        <span className="bg-gradient-to-r from-[#2b4539] to-[#61dca3] text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-mono font-semibold">
                          {item.time}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 text-foreground">{item.event}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm md:text-base mb-2 flex items-center gap-2">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {item.venue}
                      </p>
                      {item.description && (
                        <p className="text-xs sm:text-sm md:text-base text-muted-foreground/80 leading-relaxed">{item.description}</p>
                      )}
                      
                      {/* Progress indicator */}
                      <div className="mt-3 sm:mt-4 flex items-center gap-2">
                        <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${((index + 1) / schedule.length) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                            className="h-full bg-gradient-to-r from-[#61dca3] to-[#61b3dc] rounded-full"
                          />
                        </div>
                        <span className="text-xs text-muted-foreground font-mono">
                          {index + 1}/{schedule.length}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative gradient orbs - responsive */}
        <div className="absolute -top-6 sm:-top-8 md:-top-10 -left-6 sm:-left-8 md:-left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#61dca3]/20 to-[#61b3dc]/20 rounded-full blur-lg sm:blur-xl" />
        <div className="absolute top-1/4 sm:top-1/3 -right-6 sm:-right-8 md:-right-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#61b3dc]/15 to-[#2b4539]/15 rounded-full blur-lg sm:blur-xl" />
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/4 w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 bg-gradient-to-br from-[#2b4539]/20 to-[#61dca3]/20 rounded-full blur-lg sm:blur-xl" />
      </div>
      </motion.div>
    </section>
  );
};

export default Schedule;