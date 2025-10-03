// Event types
export interface EventContact {
  name: string
  phone: string
}

export interface EventGuideline {
  title: string
  content: string
}

export interface EventDetails {
  tagline: string
  fullDescription: string
  date: string
  time: string
  venue: string
  prizePool: string
  posterUrl: string
  registrationUrl: string
  contacts: EventContact[]
  guidelines: EventGuideline[]
}

export interface Event {
  id: string
  name: string
  title: string
  handle: string
  status: string
  description: string
  avatarUrl: string
  contactText: string
  details: EventDetails
}

// Schedule types
export interface AdditionalEvent {
  event: string;
  venue: string;
  description?: string;
}

export interface ScheduleItem {
  time: string;
  event: string;
  venue: string;
  description?: string;
  additionalEvents?: AdditionalEvent[];
}

// FAQ types
export interface FAQ {
  question: string;
  answer: string;
}

// Registration types
export interface RegistrationData {
  events: string[];
  workshops: string[];
}

// Data structure types
export interface EventsData {
  events: Event[];
}

export interface ScheduleData {
  schedule: ScheduleItem[];
}

export interface FAQData {
  faqs: FAQ[];
}

export interface RegistrationConfig {
  registration: RegistrationData;
}