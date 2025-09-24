'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Section from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const Registration = () => {
  const [formType, setFormType] = useState<'event' | 'workshop' | null>(null);

  const events = [
    'Hackathon',
    'Code Combat',
    'Project Expo',
    'Design Challenge',
    'Tech Quiz',
  ];

  const workshops = [
    'AI/ML Workshop',
    'Web Development',
    'Blockchain Basics',
    'Cloud Computing',
    'Cybersecurity',
  ];

  const renderForm = () => {
    switch (formType) {
      case 'event':
        return (
          <div className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <Input
              type="text"
              name="college"
              placeholder="College Name"
              required
            />
            <select
              name="event"
              className="w-full p-3 rounded-md border bg-background"
              required
            >
              <option value="">Select Event</option>
              {events.map((event) => (
                <option key={event} value={event}>{event}</option>
              ))}
            </select>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />
            <Button type="submit" className="w-full">Register for Event</Button>
          </div>
        );

      case 'workshop':
        return (
          <div className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <Input
              type="text"
              name="college"
              placeholder="College Name"
              required
            />
            <select
              name="workshop"
              className="w-full p-3 rounded-md border bg-background"
              required
            >
              <option value="">Select Workshop</option>
              {workshops.map((workshop) => (
                <option key={workshop} value={workshop}>{workshop}</option>
              ))}
            </select>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />
            <Button type="submit" className="w-full">Register for Workshop</Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Section id="register" fullWidth={true}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bomber-escort font-bold mb-4 bg-gradient-to-r from-[#61dca3] to-[#2b4539] bg-clip-text text-transparent">Register</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-bomber-escort-expand">
          Join us at PARADOX 2025 by registering for our events and workshops.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Dialog>
          <DialogTrigger asChild>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="cursor-pointer"
              onClick={() => setFormType('event')}
            >
              <Card className="h-full hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-center">Event Registration</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p className="font-bomber-escort-expand">Register for our exciting technical events and competitions.</p>
                  <Button variant="outline" className="mt-4 font-bomber-escort-expand">Register Now</Button>
                </CardContent>
              </Card>
            </motion.div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Event Registration</DialogTitle>
              <DialogDescription>
                Fill in your details to register for an event
              </DialogDescription>
            </DialogHeader>
            <form className="mt-4">
              {renderForm()}
            </form>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="cursor-pointer"
              onClick={() => setFormType('workshop')}
            >
              <Card className="h-full hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-center">Workshop Registration</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p className="font-bomber-escort-expand">Sign up for our hands-on technical workshops.</p>
                  <Button variant="outline" className="mt-4 font-bomber-escort-expand">Register Now</Button>
                </CardContent>
              </Card>
            </motion.div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Workshop Registration</DialogTitle>
              <DialogDescription>
                Fill in your details to register for a workshop
              </DialogDescription>
            </DialogHeader>
            <form className="mt-4">
              {renderForm()}
            </form>
          </DialogContent>
        </Dialog>
      </div>
      </div>
    </Section>
  );
};

export default Registration;