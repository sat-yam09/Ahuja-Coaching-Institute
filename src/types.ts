export type PageTab = 'home' | 'courses' | 'about' | 'faculty' | 'achievements' | 'scoreboard' | 'gallery' | 'contact';

export interface Course {
  id: string;
  title: string;
  tag: string;
  category: 'JEE' | 'NEET' | 'Board' | 'Junior' | 'Science Board' | 'Commerce Board' | 'JEE/NEET' | 'Junior Foundation';
  targetExam: string;
  shortDesc: string;
  badge: string;
  stats: {
    stat1: string;
    stat2: string;
    stat3: string;
  };
  facultyHead: string;
  timings: string;
  testingFrequency: string;
  syllabus: {
    subject: string;
    topics: string[];
  }[];
  features: string[];
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  category: 'Science Board' | 'Junior Division' | 'JEE/NEET' | 'Leadership';
  experience: string;
  education: string;
  bio: string;
  avatarUrl: string;
  specialization: string[];
  achievements: string[];
}

export interface ResultStudent {
  id: string;
  name: string;
  score: string;
  exam: string;
  category: 'JEE' | 'NEET' | 'Board';
  year: string;
  avatarUrl: string;
  instituteBranch: string;
  quote?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'Parent' | 'Student';
  quote: string;
  examOrChildExam: string;
  avatarUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Smart Rooms' | 'Labs' | 'Events' | 'Student Life';
  imageUrl: string;
  description: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  timing: string;
  isMainBranch?: boolean;
  whatsappLink: string;
  mapsUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

