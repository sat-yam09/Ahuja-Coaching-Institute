import type { Metadata } from 'next';
import App from '../../App';

export const metadata: Metadata = {
  title: 'Success Stories & Rankers | Ahuja Career Institute',
  description:
    'Celebrating student achievements, perfect 100/100 board scores, and top JEE & NEET rankers mentored by Ahuja Career Institute.',
};

export default function AchievementsPage() {
  return <App initialTab="scoreboard" />;
}
