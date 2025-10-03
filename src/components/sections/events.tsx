"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Section from "@/components/ui/section";
import ProfileCard from "@/components/ui/ProfileCard";
import eventsData from "@/data/events.json";

const Events = () => {
  const { events } = eventsData;
  const router = useRouter();

  const handleEventClick = (eventId: string) => {
    console.log("Event clicked:", eventId);
    router.push(`/events/${eventId}`);
  };

  return (
    <Section
      id="events"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
      fullWidth={true}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bomber-escort font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-[#61dca3] to-[#2b4539] bg-clip-text text-transparent">
            Events
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6 font-monserrat-extrabold font-bold text-white/10">
            Explore our exciting lineup of technical events and competitions
            designed to challenge your skills and creativity.
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 w-full">
          {events.map((event, index) => (
            <motion.div
              key={event.id || event.title || `event-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full max-w-sm mx-auto"
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
                onCardClick={() => handleEventClick(event.id)}
                onContactClick={() => handleEventClick(event.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Events;
