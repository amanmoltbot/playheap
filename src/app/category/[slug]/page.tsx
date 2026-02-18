import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { categories, getGamesByCategory, categoryEmoji } from '@/data/games';
import GameGrid from '@/components/GameGrid';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map(cat => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find(c => c.slug === slug);
  if (!cat) return { title: 'Category Not Found | PlayHeap' };
  return {
    title: `Free ${cat.label} Games — Play Online | PlayHeap`,
    description: `Play the best free ${cat.label.toLowerCase()} games online. No downloads required. Hundreds of ${cat.label.toLowerCase()} games at PlayHeap.io`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = categories.find(c => c.slug === slug);
  if (!cat) notFound();

  const catGames = getGamesByCategory(slug);
  const emoji = categoryEmoji[slug] ?? '🎮';

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#8b5cf6] transition-colors">Home</Link>
        <span>›</span>
        <span className="text-gray-300">{cat.label}</span>
      </nav>

      {/* Hero section */}
      <div className="bg-gradient-to-r from-[#1a1a2e] to-[#0d0d1a] border border-gray-800 rounded-2xl p-8 mb-8">
        <div className="text-5xl mb-3">{emoji}</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          {cat.label} Games
        </h1>
        <p className="text-gray-400">
          Play {catGames.length} free {cat.label.toLowerCase()} games online — no download required.
        </p>
      </div>

      {/* Games grid */}
      {catGames.length > 0 ? (
        <GameGrid games={catGames} cols={4} />
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">{emoji}</div>
          <h2 className="text-2xl font-bold text-white mb-2">Coming Soon</h2>
          <p className="text-gray-500 mb-6">
            We&apos;re adding new {cat.label.toLowerCase()} games all the time.
          </p>
          <Link href="/" className="bg-[#8b5cf6] text-white px-6 py-2 rounded-full hover:bg-[#7c3aed] transition-colors">
            Back to Home
          </Link>
        </div>
      )}

      {/* Other categories */}
      <div className="mt-16">
        <h2 className="text-xl font-bold text-white mb-6">More Categories</h2>
        <div className="flex flex-wrap gap-3">
          {categories
            .filter(c => c.slug !== slug)
            .map(c => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="flex items-center gap-2 bg-[#1a1a2e] hover:bg-[#1e1e3a] border border-gray-800 hover:border-[#8b5cf6]/50 text-gray-300 hover:text-white rounded-full px-4 py-2 text-sm font-medium transition-all"
              >
                {categoryEmoji[c.slug] ?? '🎮'} {c.label}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
