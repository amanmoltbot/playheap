import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { games, getGameBySlug, getRelatedGames, categories } from '@/data/games';
import GameEmbed from '@/components/GameEmbed';
import GameGrid from '@/components/GameGrid';
import CategoryBadge from '@/components/CategoryBadge';
import ShareButtons from '@/components/ShareButtons';
import { videoGameSchema, breadcrumbSchema } from '@/lib/schema';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return games.map(game => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return { title: 'Game Not Found | ArcadeHeap' };
  return {
    title: `Play ${game.title} Free Online | ArcadeHeap`,
    description: game.description,
    openGraph: {
      title: `Play ${game.title} Free Online | ArcadeHeap`,
      description: game.description,
      images: [
        {
          url: `https://arcadeheap.com${game.thumbnailUrl}`,
          width: 400,
          height: 300,
          alt: `${game.title} - Play Free Online at ArcadeHeap`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: [`https://arcadeheap.com${game.thumbnailUrl}`],
    },
  };
}

export default async function GamePage({ params }: Props) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const related = getRelatedGames(game, 4);
  const categoryLabel = categories.find(c => c.slug === game.category)?.label ?? game.category;

  const schemaData = videoGameSchema(game, categoryLabel);
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: 'https://arcadeheap.com' },
    { name: categoryLabel, url: `https://arcadeheap.com/category/${game.category}` },
    { name: game.title, url: `https://arcadeheap.com/game/${game.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#8b5cf6] transition-colors">Home</Link>
            <span>›</span>
            <Link href={`/category/${game.category}`} className="hover:text-[#8b5cf6] transition-colors">
              {categoryLabel}
            </Link>
            <span>›</span>
            <span className="text-gray-300">{game.title}</span>
          </nav>

          {/* Game title */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Play {game.title} Free Online
          </h1>

          {/* Game embed */}
          <GameEmbed
            gameUrl={game.gameUrl}
            title={game.title}
            slug={game.slug}
            thumbnailUrl={game.thumbnailUrl}
            aspectRatio={game.aspectRatio}
          />

          {/* Game info */}
          <div className="mt-8 bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <CategoryBadge category={game.category} linkable size="md" />
              {game.featured && (
                <span className="bg-[#8b5cf6]/20 text-[#8b5cf6] border border-[#8b5cf6]/30 text-sm font-medium px-3 py-1 rounded-full">
                  ⭐ Featured
                </span>
              )}
              {game.isNew && (
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-sm font-medium px-3 py-1 rounded-full">
                  ✨ New
                </span>
              )}
              {game.mobileSupported === true ? (
                <span className="bg-sky-500/20 text-sky-400 border border-sky-500/30 text-sm font-medium px-3 py-1 rounded-full" title="Works great on mobile and tablet">
                  📱 Mobile Friendly
                </span>
              ) : game.mobileSupported === false ? (
                <span className="bg-gray-700/40 text-gray-400 border border-gray-600/30 text-sm font-medium px-3 py-1 rounded-full" title="Best played on desktop with keyboard/mouse">
                  🖥️ Desktop Only
                </span>
              ) : null}
              <span className="ml-auto text-gray-500 text-sm">
                🆓 Free to Play
              </span>
            </div>

            <h2 className="text-lg font-bold text-white mb-2">About {game.title}</h2>
            <p className="text-gray-400 leading-relaxed mb-6">{game.description}</p>

            <div className="border-t border-gray-700 pt-4 space-y-4">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">🕹️ Controls</h3>
                <p className="text-gray-400 text-sm">{game.controls}</p>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <ShareButtons title={game.title} slug={game.slug} />
              </div>
            </div>
          </div>

          {/* Related games */}
          {related.length > 0 && (
            <div className="mt-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">More {categoryLabel} Games</h2>
                <Link href={`/category/${game.category}`} className="text-[#8b5cf6] hover:text-violet-400 text-sm font-medium">
                  View all →
                </Link>
              </div>
              <GameGrid games={related} cols={4} />
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:w-[300px] flex-shrink-0 space-y-6">
          <div className="sticky top-24">
            {/* Categories list */}
            <div className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-5">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Browse Categories</h3>
              <div className="space-y-1">
                {categories.map(cat => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                      cat.slug === game.category
                        ? 'bg-[#8b5cf6]/20 text-[#8b5cf6]'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {cat.label}
                    <svg className="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related quick links */}
            {related.length > 0 && (
              <div className="mt-6 bg-[#1a1a2e] border border-gray-800 rounded-xl p-5">
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Related Games</h3>
                <div className="space-y-2">
                  {related.map(g => (
                    <Link
                      key={g.slug}
                      href={`/game/${g.slug}`}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0 bg-gray-800">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={g.thumbnailUrl} alt={g.title} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-gray-400 group-hover:text-white text-sm transition-colors line-clamp-1">{g.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
