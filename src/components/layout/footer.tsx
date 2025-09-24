'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-black/80 backdrop-blur-sm border-t border-white/10 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2b4539]/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#61dca3]/5 via-transparent to-[#61b3dc]/5 pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-[#61dca3]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-24 h-24 bg-gradient-to-br from-[#61b3dc]/10 to-transparent rounded-full blur-2xl" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 text-center sm:text-left">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.h3 
              className="text-xl sm:text-2xl md:text-3xl font-bomber-escort font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#61dca3] to-[#61b3dc] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              PARADOX 2025
            </motion.h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Department of Computer Science and Engineering,
              College of Engineering Kidangoor
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="mx-auto">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a 
                  href="#about" 
                  className="text-muted-foreground hover:text-[#61dca3] transition-colors duration-200 text-sm sm:text-base cursor-target"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#events" 
                  className="text-muted-foreground hover:text-[#61dca3] transition-colors duration-200 text-sm sm:text-base"
                >
                  Events
                </a>
              </li>
              <li>
                <a 
                  href="#schedule" 
                  className="text-muted-foreground hover:text-[#61dca3] transition-colors duration-200 text-sm sm:text-base"
                >
                  Schedule
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Contact</h4>
            <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
              <li className="leading-relaxed">College of Engineering Kidangoor</li>
              <li className="leading-relaxed">Kidangoor South P.O</li>
              <li className="leading-relaxed">Kottayam, Kerala - 686583</li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Follow Us</h4>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-0 lg:space-y-2 xl:space-y-0 xl:space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-[#61dca3] transition-colors duration-200 text-sm sm:text-base"
              >
                Instagram
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-[#61dca3] transition-colors duration-200 text-sm sm:text-base"
              >
                LinkedIn
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-[#61dca3] transition-colors duration-200 text-sm sm:text-base"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <motion.div 
          className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-muted-foreground text-sm sm:text-base">
            © 2025 PARADOX. All rights reserved.
          </p>
          <p className="text-muted-foreground/70 text-xs sm:text-sm mt-2">
            Designed by the PARADOX Team
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;