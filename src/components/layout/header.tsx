'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const menuItems = [
    { title: 'About', href: '/#about' },
    { title: 'Events', href: '/#events' },
    { title: 'Schedule', href: '/#schedule' },
  ];

  const handleMobileMenuClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // If we're on the home page, scroll to section
    if (pathname === '/') {
      const sectionId = href.replace('/#', '#');
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home page with anchor
      router.push(href);
    }
  };

  const handleNavClick = (href: string) => {
    // If we're on the home page, scroll to section
    if (pathname === '/') {
      const sectionId = href.replace('/#', '#');
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home page with anchor
      router.push(href);
    }
  };

  const handleRegisterClick = () => {
    if (pathname === '/') {
      const eventsSection = document.querySelector('#events');
      if (eventsSection) {
        eventsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push('/#events');
    }
  };

  return (
    <motion.header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 mt-2 sm:mt-4 md:mt-6 rounded-lg sm:rounded-xl md:rounded-2xl ${
        isScrolled 
          ? 'bg-black/20 backdrop-blur-md border border-white/5 shadow-sm' 
          : 'bg-black/5 backdrop-blur-[2px] border border-white/5'
      }`}
      style={{ width: 'min(96%, 900px)' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="cursor-target no-underline flex items-center"
          >
            <img 
              src="/pdox.png" 
              alt="PARADOX 2025" 
              className="h-6 sm:h-7 md:h-8 lg:h-9 w-auto object-contain transition-all duration-300 hover:scale-105"
            />
          </Link>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="px-4 py-2 cursor-target text-sm xl:text-base hover:text-white/80 transition-all duration-200 rounded-lg hover:bg-white/5 font-bomber-escort-expand bg-transparent border-none text-white"
                    >
                      {item.title}
                    </button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Register Button */}
          <Button 
            onClick={handleRegisterClick}
            className="hidden md:flex bg-gradient-to-r from-blue-500/20 to-violet-500/20 hover:from-blue-500/30 hover:to-violet-500/30 backdrop-blur-md border border-white/20 transition-all duration-300 cursor-target text-sm px-4 py-2 whitespace-nowrap shadow-lg hover:shadow-blue-500/25 hover:scale-105"
          >
            Register Now
          </Button>

          {/* Mobile Register Button - Show only on sm screens */}
          <Button 
            onClick={handleRegisterClick}
            className="md:hidden sm:flex hidden bg-gradient-to-r from-blue-500/20 to-violet-500/20 hover:from-blue-500/30 hover:to-violet-500/30 backdrop-blur-md border border-white/20 transition-all duration-300 cursor-target text-xs px-3 py-1.5 whitespace-nowrap shadow-md"
          >
            Register
          </Button>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm"
                className="lg:hidden p-1.5 sm:p-2 text-white hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-200 shadow-sm"
              >
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[320px] sm:w-[380px] bg-black/10 backdrop-blur-md border-l border-white/5 shadow-lg p-0 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.08) 0%, rgba(43,69,57,0.05) 50%, rgba(97,220,163,0.03) 100%)',
                backdropFilter: 'blur(20px) saturate(120%)',
                borderImage: 'linear-gradient(180deg, rgba(97,220,163,0.1), rgba(97,179,220,0.08), rgba(43,69,57,0.1)) 1'
              }}
            >
              <div className="flex flex-col h-full relative">
                {/* Background overlay for extra glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/2 via-transparent to-black/5 pointer-events-none" />
                
                {/* Mobile Header */}
                <div className="relative z-10 flex items-center justify-between p-6 pb-4 border-b border-white/10 bg-black/5 backdrop-blur-sm">
                  <img 
                    src="/pdox.png" 
                    alt="PARADOX 2025" 
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2.5 text-white hover:bg-white/5 rounded-xl transition-all duration-200 border border-white/5 backdrop-blur-sm hover:border-white/10"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 relative z-10 p-6 pt-8">
                  <ul className="space-y-3">
                    {menuItems.map((item, index) => (
                      <li key={item.title}>
                        <motion.button
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                          onClick={() => handleMobileMenuClick(item.href)}
                          className="group block w-full text-left px-6 py-4 text-lg font-medium text-white/90 hover:text-white rounded-2xl transition-all duration-300 border border-white/5 hover:border-white/10 relative overflow-hidden backdrop-blur-sm font-bomber-escort-expand"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(97,220,163,0.02) 50%, rgba(97,179,220,0.02) 100%)',
                          }}
                        >
                          {/* Hover gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#61dca3]/5 via-[#61b3dc]/5 to-[#2b4539]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Content */}
                          <span className="relative z-10 flex items-center justify-between">
                            {item.title}
                            <svg className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile Register Button */}
                <div className="relative z-10 p-6 pt-4 border-t border-white/10 bg-black/5 backdrop-blur-sm">
                  <Button
                    className="w-full py-4 text-base font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-sm border border-white/10 relative overflow-hidden group"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleRegisterClick();
                    }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(97,220,163,0.08) 0%, rgba(97,179,220,0.08) 100%)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#61dca3]/10 via-[#61b3dc]/10 to-[#2b4539]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Button content */}
                    <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90 group-hover:from-white group-hover:to-white transition-all duration-300">
                      Register Now
                    </span>
                  </Button>                  {/* Additional mobile info */}
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className="text-center text-white/60 text-sm mt-4 px-2 font-bomber-escort-expand"
                  >
                    Join PARADOX 2025 • CSE Department
                  </motion.p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;