'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/section';
import ProfileCard from '@/components/ui/ProfileCard';

const Events = () => {
  const events = [
    {
      name: 'Hackathon',
      title: 'Coding Challenge',
      handle: 'hackathon',
      status: 'Coming Soon',
      description: '24-hour coding challenge to build innovative solutions',
      avatarUrl: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&h=600&auto=format',
      contactText: 'Register Now',
    },
    {
      name: 'Tech Talks',
      title: 'Expert Sessions',
      handle: 'techtalks',
      status: 'Registration Open',
      description: 'Engaging sessions by industry experts',
      avatarUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&auto=format',
      contactText: 'Join Session',
    },
    {
      name: 'Code Combat',
      title: 'Competitive Programming',
      handle: 'codecombat',
      status: 'Live',
      description: 'Competitive programming challenges',
      avatarUrl: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=800&h=600&auto=format',
      contactText: 'Compete Now',
    },
    {
      name: 'Project Expo',
      title: 'Innovation Showcase',
      handle: 'projectexpo',
      status: 'Coming Soon',
      description: 'Showcase your innovative projects',
      avatarUrl: 'https://images.unsplash.com/photo-1525422847952-7f91db09a364?w=800&h=600&auto=format',
      contactText: 'Submit Project',
    },
    {
      name: 'Design Challenge',
      title: 'UI/UX Competition',
      handle: 'designchallenge',
      status: 'Registration Open',
      description: 'UI/UX design competition',
      avatarUrl: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&h=600&auto=format',
      contactText: 'Start Design',
    },
    {
      name: 'Tech Quiz',
      title: 'Knowledge Test',
      handle: 'techquiz',
      status: 'Coming Soon',
      description: 'Test your technical knowledge',
      avatarUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&auto=format',
      contactText: 'Take Quiz',
    },
  ];

  return (
    <Section id="events">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Events</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore our exciting lineup of technical events and competitions designed 
          to challenge your skills and creativity.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
        {events.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProfileCard
              name={event.name}
              title={event.title}
              handle={event.handle}
              status={event.status}
              contactText={event.contactText}
              avatarUrl={event.avatarUrl}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log(`Event clicked: ${event.name}`)}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Events;