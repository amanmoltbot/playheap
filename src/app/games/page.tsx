import type { Metadata } from 'next';
import GamesContent from '@/components/GamesContent';

export const metadata: Metadata = {
  title: 'All Games | PlayHeap',
  description: 'Browse all free HTML5 games on PlayHeap. Filter by category, search, and sort by popularity. No downloads required — play instantly in your browser.',
};

export default function GamesPage() {
  return <GamesContent />;
}
