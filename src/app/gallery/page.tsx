import type { Metadata } from 'next';
import App from '../../App';

export const metadata: Metadata = {
  title: 'Campus & Event Gallery | Ahuja Career Institute',
  description:
    'Experience campus life at Ahuja Career Institute. Explore felicitation events, classroom infrastructure, science labs, and student achievements.',
};

export default function GalleryPage() {
  return <App initialTab="gallery" />;
}
