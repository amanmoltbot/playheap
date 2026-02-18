import Link from 'next/link';

const categoryColors: Record<string, string> = {
  action: 'bg-red-500/20 text-red-400 border-red-500/30',
  puzzle: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  racing: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  sports: 'bg-green-500/20 text-green-400 border-green-500/30',
  shooting: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  adventure: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  strategy: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  arcade: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  multiplayer: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'io-games': 'bg-violet-500/20 text-violet-400 border-violet-500/30',
};

interface CategoryBadgeProps {
  category: string;
  linkable?: boolean;
  size?: 'sm' | 'md';
}

export default function CategoryBadge({ category, linkable = false, size = 'sm' }: CategoryBadgeProps) {
  const colorClass = categoryColors[category] ?? 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  const sizeClass = size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-3 py-1';
  const label = category.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase());

  const className = `inline-block border rounded-full font-medium capitalize transition-opacity hover:opacity-80 ${colorClass} ${sizeClass}`;

  if (linkable) {
    return (
      <Link href={`/category/${category}`} className={className}>
        {label}
      </Link>
    );
  }

  return <span className={className}>{label}</span>;
}
