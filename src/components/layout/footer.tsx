'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-background border-t"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PARADOX 2025</h3>
            <p className="text-muted-foreground">
              A technical symposium by the Department of Computer Science and Engineering,
              College of Engineering Kidangoor
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary cursor-target">About</a></li>
              <li><a href="#events" className="text-muted-foreground hover:text-primary">Events</a></li>
              <li><a href="#schedule" className="text-muted-foreground hover:text-primary">Schedule</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>College of Engineering Kidangoor</li>
              <li>Kidangoor South P.O</li>
              <li>Kottayam, Kerala - 686583</li>
              <li>Email: paradox@cek.ac.in</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">Instagram</a>
              <a href="#" className="text-muted-foreground hover:text-primary">LinkedIn</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>© 2025 PARADOX. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;