// Event types
export interface Event {
  name: string;
  title: string;
  handle: string;
  status: string;
  description: string;
  avatarUrl: string;
  contactText: string;
}

// Schedule types
export interface ScheduleItem {
  time: string;
  event: string;
  venue: string;
  description?: string;
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