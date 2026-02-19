import { Game } from '@/data/games';

export function videoGameSchema(game: Game, categoryLabel: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: game.title,
    description: game.description,
    genre: categoryLabel,
    image: `https://arcadeheap.com${game.thumbnailUrl}`,
    url: `https://arcadeheap.com/game/${game.slug}`,
    playMode: 'SinglePlayer',
    applicationCategory: 'Game',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    gamePlatform: 'Web Browser',
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ArcadeHeap',
    url: 'https://arcadeheap.com',
    description: 'Play free HTML5 games online. No downloads, no installs. Action, puzzle, racing, shooting, and more.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://arcadeheap.com/games?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
