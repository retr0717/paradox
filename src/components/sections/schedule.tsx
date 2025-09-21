'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Schedule = () => {
  type ScheduleItem = {
    time: string;
    event: string;
    venue: string;
  };

  type Schedule = {
    [key: number]: ScheduleItem[];
  };

  const [activeDay, setActiveDay] = useState(1);

  const schedule: Schedule = {
    1: [
      { time: '09:00 AM', event: 'Opening Ceremony', venue: 'Main Auditorium' },
      { time: '10:00 AM', event: 'Keynote Speech', venue: 'Main Auditorium' },
      { time: '11:30 AM', event: 'Hackathon Kickoff', venue: 'Tech Hub' },
      { time: '02:00 PM', event: 'Tech Talk: AI & Future', venue: 'Seminar Hall' },
      { time: '04:00 PM', event: 'Project Expo Setup', venue: 'Exhibition Hall' },
    ],
    2: [
      { time: '09:00 AM', event: 'Code Combat', venue: 'Lab 1' },
      { time: '10:30 AM', event: 'Design Challenge', venue: 'Creative Studio' },
      { time: '02:00 PM', event: 'Tech Quiz', venue: 'Seminar Hall' },
      { time: '04:00 PM', event: 'Hackathon Continues', venue: 'Tech Hub' },
    ],
    3: [
      { time: '09:00 AM', event: 'Project Presentations', venue: 'Exhibition Hall' },
      { time: '11:00 AM', event: 'Hackathon Final Sprint', venue: 'Tech Hub' },
      { time: '03:00 PM', event: 'Award Ceremony', venue: 'Main Auditorium' },
      { time: '04:30 PM', event: 'Closing Ceremony', venue: 'Main Auditorium' },
    ],
  };

  return (
    <Section id="schedule" className="bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Event Schedule</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Plan your PARADOX experience with our comprehensive event schedule.
        </p>
      </motion.div>

      <div className="flex justify-center gap-4 mb-8">
        {[1, 2, 3].map((day) => (
          <Button
            key={day}
            variant={activeDay === day ? 'default' : 'outline'}
            onClick={() => setActiveDay(day)}
          >
            Day {day}
          </Button>
        ))}
      </div>

      <motion.div
        key={activeDay}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        {schedule[activeDay].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center gap-6">
                  <div className="text-primary font-mono">{item.time}</div>
                  <div>
                    <h3 className="font-semibold">{item.event}</h3>
                    <p className="text-muted-foreground">{item.venue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Schedule;