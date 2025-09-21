'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      title: 'Theme',
      description: 'Exploring the intersection of technology and innovation',
    },
    {
      title: 'Mission',
      description: 'Fostering creativity and technical excellence in future engineers',
    },
    {
      title: 'Vision',
      description: 'Creating a platform for students to showcase their technical prowess',
    },
  ];

  return (
    <Section id="about" className="bg-muted/50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About PARADOX
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          PARADOX is the annual technical symposium organized by the Department of Computer Science 
          and Engineering at College of Engineering Kidangoor. It serves as a platform for students 
          to explore, learn, and showcase their technical skills through various events and workshops.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default About;