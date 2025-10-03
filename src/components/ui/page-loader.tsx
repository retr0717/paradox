'use client';

import { motion } from 'framer-motion';

interface PageLoaderProps {
  isVisible: boolean;
  eventName?: string;
}

const PageLoader = ({ isVisible, eventName }: PageLoaderProps) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[9999]"
    >
      <div className="flex flex-col items-center justify-center space-y-8 p-8">
        {/* Main loading animation */}
        <div className="relative">
          {/* Outer rotating ring */}
          <motion.div
            className="w-24 h-24 rounded-full border-2 border-[#61dca3]/20"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
          
          {/* Middle rotating ring */}
          <motion.div
            className="absolute inset-2 w-20 h-20 rounded-full border-2 border-[#2b4539]/40"
            animate={{ rotate: -360 }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
          
          {/* Inner spinning ring */}
          <motion.div
            className="absolute inset-4 w-16 h-16 rounded-full border-2 border-transparent border-t-[#61dca3] border-r-[#61dca3]"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
          
          {/* Center pulsing core */}
          <motion.div
            className="absolute inset-8 bg-gradient-to-br from-[#61dca3] to-[#2b4539] rounded-full"
            animate={{ 
              scale: [0.8, 1.3, 0.8],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          
          {/* Glowing effect */}
          <motion.div
            className="absolute inset-0 w-24 h-24 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(97, 220, 163, 0.3) 0%, rgba(43, 69, 57, 0.2) 30%, transparent 70%)",
              filter: "blur(8px)"
            }}
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>
        
        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-4"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bomber-escort-expand text-[#61dca3] font-bold"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            Loading Event
          </motion.h2>
          
          {eventName && (
            <motion.p 
              className="text-lg md:text-xl text-white/80 font-bomber-escort"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {eventName}
            </motion.p>
          )}
          
          <motion.div 
            className="text-sm text-white/60 font-bomber-escort-expand"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.6 
            }}
          >
            Preparing event details...
          </motion.div>
        </motion.div>
        
        {/* Loading progress dots */}
        <div className="flex space-x-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-[#61dca3] rounded-full"
              animate={{ 
                scale: [0.8, 1.4, 0.8],
                opacity: [0.4, 1, 0.4] 
              }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.15 
              }}
            />
          ))}
        </div>
        
        {/* Subtle background pattern animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#61dca3]/20 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`
              }}
              animate={{ 
                y: [-20, 20, -20],
                opacity: [0.1, 0.5, 0.1]
              }}
              transition={{ 
                duration: 3 + i * 0.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PageLoader;