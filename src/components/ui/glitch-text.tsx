'use client';

import './glitch-text.css';

interface GlitchTextProps {
  children: React.ReactNode;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
  className?: string;
}

const GlitchText = ({ 
  children, 
  speed = 1, 
  enableShadows = true, 
  enableOnHover = true, 
  className = '' 
}: GlitchTextProps) => {
  const inlineStyles = {
    '--after-duration': `${speed * 1.5}s`,
    '--before-duration': `${speed * 1}s`,
    '--after-shadow': enableShadows ? '-3px 0 #2b4539, -6px 0 #61dca3' : 'none',
    '--before-shadow': enableShadows ? '3px 0 #2b4539, 6px 0 #61b3dc' : 'none'
  } as React.CSSProperties;

  const hoverClass = enableOnHover ? 'enable-on-hover' : '';

  return (
    <div className={`glitch ${hoverClass} ${className}`} style={inlineStyles} data-text={children}>
      {children}
    </div>
  );
};

export default GlitchText;
