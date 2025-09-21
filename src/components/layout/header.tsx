'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const menuItems = [
    { title: 'About', href: '#about' },
    { title: 'Events', href: '#events' },
    { title: 'Schedule', href: '#schedule' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 mt-6 rounded-2xl ${
        isScrolled 
          ? 'bg-black/25 backdrop-blur-md border border-white/5' 
          : 'bg-black/10 backdrop-blur-[2px]'
      }`}
      style={{ width: 'min(85%, 900px)' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400 cursor-target no-underline">PARADOX 2025</Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    href={item.href}
                    className="px-3 py-2 cursor-target"
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-all duration-300 cursor-target">
            Register Now
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;