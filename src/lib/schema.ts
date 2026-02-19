import { Game } from '@/data/games';

export function videoGameSchema(game: Game, categoryLabel: string) {
  const playModes = ['SinglePlayer'];
  if (game.category === 'multiplayer') playModes.push('MultiPlayer');

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: game.title,
    description: game.description.slice(0, 500) + (game.description.length > 500 ? '…' : ''),
    genre: categoryLabel,
    image: `https://arcadeheap.com${game.thumbnailUrl}`,
    url: `https://arcadeheap.com/game/${game.slug}`,
    playMode: playModes.length === 1 ? playModes[0] : playModes,
    applicationCategory: 'Game',
    applicationSubCategory: categoryLabel,
    operatingSystem: 'Web Browser',
    inLanguage: 'en',
    isAccessibleForFree: true,
    isFamilyFriendly: true,
    numberOfPlayers: {
      '@type': 'QuantitativeValue',
      minValue: 1,
      maxValue: game.category === 'multiplayer' ? 2 : 1,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `https://arcadeheap.com/game/${game.slug}`,
    },
    gamePlatform: ['Web Browser', 'HTML5'],
    accessibilityFeature: game.mobileSupported ? ['touchControl', 'keyboardControl'] : ['keyboardControl', 'mouseControl'],
    publisher: {
      '@type': 'Organization',
      name: 'ArcadeHeap',
      url: 'https://arcadeheap.com',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      bestRating: '5',
      worstRating: '1',
      ratingCount: Math.max(50, Math.floor(game.plays / 100)),
    },
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
