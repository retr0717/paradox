'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const sponsors = [
  { name: 'TechCorp', tier: 'Platinum' },
  { name: 'InnovateSoft', tier: 'Gold' },
  { name: 'CloudTech', tier: 'Gold' },
  { name: 'DevCom', tier: 'Silver' },
  { name: 'ByteWorks', tier: 'Silver' },
  { name: 'CodeLabs', tier: 'Silver' },
];

const Sponsors = () => {
  return (
    <Section id="sponsors" className="bg-muted/50" fullWidth={true}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
        <h2 className="text-4xl font-bold mb-4">Our Sponsors</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We are proud to partner with leading companies in the tech industry.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={sponsor.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  {sponsor.name}
                  <span className="text-sm text-primary">{sponsor.tier}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-32 h-32 mx-auto bg-muted rounded-full flex items-center justify-center">
                  Logo
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      </div>
    </Section>
  );
};

export default Sponsors;