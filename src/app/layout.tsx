import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './black-theme.css';
import './force-black.css';
import './force-white-text.css';
import './viewport.css';
import './fix-viewport.css';
import './cursor-target.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import LetterGlitch from '@/components/ui/letter-glitch';
import TargetCursor from '@/components/ui/target-cursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PARADOX 2025 - Tech Symposium',
  description: 'PARADOX 2025 - A Technical Symposium by Department of Computer Science and Engineering, College of Engineering Kidangoor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-white min-h-screen w-full overflow-x-hidden antialiased`} style={{ margin: 0, padding: 0, backgroundColor: 'transparent' , marginLeft: 0.4}}>
        <TargetCursor 
          spinDuration={2}
          hideDefaultCursor={true}
        />
        {/* Background Layer */}
        <div className="fixed inset-0 w-full h-full bg-transparent" style={{ zIndex: 0 }}>
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
            glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
          />
        </div>

        {/* Smoke Overlay */}
        <div className="fixed inset-0 w-full h-full bg-black/20 sm:bg-black/25 md:bg-black/30" style={{ zIndex: 0.5 }}></div>

        {/* Content Layer */}
        <div className="relative min-h-screen w-full bg-transparent" style={{ zIndex: 1 }}>
          <Header />
          <main className="relative w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
