'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Section id="contact" className="bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Have questions? Get in touch with our team.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="p-0">Department of CSE</Button>
                </HoverCardTrigger>
                <HoverCardContent>
                  <p>College of Engineering Kidangoor</p>
                  <p>Kidangoor South P.O</p>
                  <p>Kottayam, Kerala - 686583</p>
                </HoverCardContent>
              </HoverCard>
              <div>
                <p className="text-muted-foreground">Email: paradox@cek.ac.in</p>
                <p className="text-muted-foreground">Phone: +91 XXX XXX XXXX</p>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary">Instagram</a>
                <a href="#" className="text-muted-foreground hover:text-primary">LinkedIn</a>
                <a href="#" className="text-muted-foreground hover:text-primary">Twitter</a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full min-h-[150px] p-3 rounded-md border bg-background"
            />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;