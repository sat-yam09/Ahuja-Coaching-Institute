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
  category: 'JEE' | 'NEET' | 'Board' | 'Foundation';
  year: string;
  avatarUrl: string;
  instituteBranch: string;
  school?: string;
  standeeUrl?: string;
  subject?: string;
  quote?: string;
}

export interface StandeeTopper {
  id: string;
  name: string;
  exam: string;
  score: string;
  school?: string;
  branch?: string;
  standeeUrl: string;
  type: 'Junior' | 'Senior';
  tag: string;
}

export interface PosterAsset {
  id: string;
  title: string;
  subtitle: string;
  category: 'Mega Results' | 'Admissions Pamphlet' | 'Branch Campaign';
  imageUrl: string;
  downloadUrl?: string;
  year: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'Parent' | 'Student';
  quote: string;
  examOrChildExam: string;
  avatarUrl: string;
}

export interface GoogleReview {
  id: string;
  authorName: string;
  authorPhotoUrl: string;
  rating: number;
  relativeTimeDescription: string;
  text: string;
  branch: string;
  tag: string;
  mapsUrl?: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Smart Rooms' | 'Labs' | 'Events' | 'Student Life' | 'Print Media & Campaigns';
  imageUrl: string;
  description: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  secondaryPhone?: string;
  landline?: string;
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

