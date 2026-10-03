import type { Metadata } from 'next';
import App from '../../App';

export const metadata: Metadata = {
  title: 'Success Stories & Scoreboard | Ahuja Career Institute',
  description:
    'Verified student achiever records, marks, and official scoreboard of Ahuja Career Institute.',
};

export default function ScoreboardRoute() {
  return <App initialTab="scoreboard" />;
}
