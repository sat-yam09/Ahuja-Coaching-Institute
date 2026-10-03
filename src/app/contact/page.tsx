import type { Metadata } from 'next';
import App from '../../App';

export const metadata: Metadata = {
  title: 'Contact & Campuses | Ahuja Career Institute',
  description:
    'Contact Ahuja Career Institute campuses at Takshshila Square Maninagar and Avadh Pride Vastral, Ahmedabad. Get directions, telephone contacts, and admissions assistance.',
};

export default function ContactPage() {
  return <App initialTab="contact" />;
}
