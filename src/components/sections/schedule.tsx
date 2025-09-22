'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const Schedule = () => {
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

  return (
    <section id="schedule" className="w-full min-h-screen bg-black bg-muted/50 relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
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

        <div className="w-full max-w-6xl mx-auto relative">
          {/* Static timeline line with scroll-based gradient focus */}
          <div className="absolute left-4 sm:left-6 md:left-8 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-0.5 sm:w-1 rounded-full overflow-hidden">
            {/* Base gradient line - always visible */}
            <div className="w-full h-full bg-gradient-to-b from-[#2b4539]/40 via-[#61dca3]/40 to-[#61b3dc]/40 rounded-full" />
            
            {/* Focused gradient overlay that moves with scroll */}
            <motion.div
              className="absolute w-full rounded-full"
              style={{
                background: "linear-gradient(to bottom, transparent 0%, #61dca3 20%, #61b3dc 40%, #2b4539 60%, transparent 100%)",
                filter: "drop-shadow(0 0 8px rgba(97, 220, 163, 0.4)) drop-shadow(0 0 12px rgba(97, 220, 163, 0.6))",
                height: "150px"
              }}
              animate={{
                y: ["0%", "calc(100% - 150px)"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </div>
          
          <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-row`}
              >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                className={`absolute left-4 sm:left-6 md:left-8 lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-2 sm:border-3 md:border-4 border-white shadow-lg z-10`}
                style={{
                  background: `linear-gradient(45deg, 
                    ${index < 3 ? '#2b4539' : index < 6 ? '#61dca3' : '#61b3dc'}, 
                    ${index < 3 ? '#61dca3' : index < 6 ? '#61b3dc' : '#2b4539'})`,
                  boxShadow: `0 0 10px ${index < 3 ? '#2b453950' : index < 6 ? '#61dca350' : '#61b3dc50'}, 0 2px 4px -1px rgba(0, 0, 0, 0.1)`
                }}
              />

              {/* Time indicator - desktop only */}
              <div className={`hidden lg:block absolute ${
                index % 2 === 0 ? 'right-1/2 mr-4' : 'left-1/2 ml-4'
              } bg-gradient-to-r from-[#2b4539] to-[#61dca3] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-mono font-semibold shadow-lg`}>
                {item.time}
              </div>

              {/* Content card */}
              <div className={`ml-10 sm:ml-12 md:ml-16 lg:ml-0 ${
                index % 2 === 0 ? 'lg:mr-4 lg:ml-0' : 'lg:ml-4 lg:mr-0'
              } flex-1 max-w-full sm:max-w-md md:max-w-lg lg:max-w-sm xl:max-w-md`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Card gradient background - lighter version */}
                    <div 
                      className="absolute inset-0 opacity-5"
                      style={{
                        background: `linear-gradient(135deg, 
                          ${index < 3 ? '#61dca3' : index < 6 ? '#61b3dc' : '#2b4539'} 0%, 
                          ${index < 3 ? '#61b3dc' : index < 6 ? '#2b4539' : '#61dca3'} 100%)`
                      }}
                    />
                    
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