import type { Metadata } from 'next';
import App from '../../App';

export const metadata: Metadata = {
  title: 'About Us | Ahuja Career Institute',
  description:
    'Discover our 27+ year legacy of academic excellence, Late Rajkumar Ahuja Sir’s founding vision, expert faculty, and campuses in Maninagar and Vastral, Ahmedabad.',
};

export default function AboutPage() {
  return <App initialTab="about" />;
}
