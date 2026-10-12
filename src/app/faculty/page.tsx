import type { Metadata } from 'next';
import App from '../../App';

export const metadata: Metadata = {
  title: 'Expert Faculty & Mentors | Ahuja Career Institute',
  description:
    'Meet our senior subject faculties in Physics, Chemistry, Mathematics, Biology, and Commerce. Experienced mentors guiding JEE Main, NEET UG, and Gujarat & CBSE Board toppers in Ahmedabad.',
};

export default function FacultyPageRoute() {
  return <App initialTab="faculty" />;
}
