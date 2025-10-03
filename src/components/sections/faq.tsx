'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import faqData from '@/data/faq.json';

const FAQ = () => {
  const { faqs } = faqData;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Section id="faq" fullWidth={true}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bomber-escort font-bold mb-4 bg-gradient-to-r from-[#61dca3] to-[#2b4539] bg-clip-text text-transparent">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-bomber-escort-expand">
          Find answers to common questions about PARADOX 2025.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className="cursor-pointer transition-all"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <span className="text-2xl transition-transform duration-200" style={{
                    transform: expandedIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}>
                    +
                  </span>
                </div>
                {expandedIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 text-muted-foreground font-bomber-escort-expand"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      </div>
    </Section>
  );
};

export default FAQ;