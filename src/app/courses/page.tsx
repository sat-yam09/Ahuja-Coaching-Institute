import type { Metadata } from 'next';
import App from '../../App';

export const metadata: Metadata = {
  title: 'Courses & Programs | Ahuja Career Institute',
  description:
    'Comprehensive coaching programs for Std 6th to 10th Foundation, 11th & 12th Science and Commerce Boards, JEE Main/Advanced, and NEET UG.',
};

export default function CoursesPage() {
  return <App initialTab="courses" />;
}
