import { notFound } from 'next/navigation'
import { EventDetails } from '@/components/sections/event-details'
import eventsData from '@/data/events.json'
import { Event } from '@/types/data'

interface PageProps {
  params: {
    eventId: string
  }
}

// Generate static params for all events
export async function generateStaticParams() {
  return eventsData.events.map((event: Event) => ({
    eventId: event.id,
  }))
}

export default async function EventPage({ params }: PageProps) {
  const event = eventsData.events.find((event: Event) => event.id === params.eventId)

  if (!event) {
    notFound()
  }

  return <EventDetails event={event} />
}

// Generate metadata for each event
export async function generateMetadata({ params }: PageProps) {
  const event = eventsData.events.find((event: Event) => event.id === params.eventId)

  if (!event) {
    return {
      title: 'Event Not Found',
    }
  }

  return {
    title: `${event.name} - PARADOX 2025`,
    description: event.details.fullDescription,
    openGraph: {
      title: `${event.name} - PARADOX 2025`,
      description: event.details.fullDescription,
      images: [event.details.posterUrl],
    },
  }
}