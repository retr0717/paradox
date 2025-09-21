'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';

const faqs = [
  {
    question: 'What is PARADOX 2025?',
    answer: 'PARADOX 2025 is a national-level technical symposium organized by the Department of Computer Science and Engineering at College of Engineering Kidangoor.',
  },
  {
    question: 'When and where is the event?',
    answer: 'The event will be held at College of Engineering Kidangoor campus from September 21-23, 2025.',
  },
  {
    question: 'Who can participate?',
    answer: 'The event is open to all college students pursuing engineering or related technical courses.',
  },
  {
    question: 'How can I register for events?',
    answer: 'You can register through our online registration portal. Select the events or workshops you wish to participate in and complete the registration form.',
  },
  {
    question: 'Is accommodation provided?',
    answer: 'Yes, accommodation can be arranged for outstation participants on request. Please mention your requirements during registration.',
  },
  {
    question: 'What are the payment methods?',
    answer: 'We accept online payments through UPI, net banking, and major credit/debit cards.',
  },
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Section id="faq">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
                    className="mt-4 text-muted-foreground"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;