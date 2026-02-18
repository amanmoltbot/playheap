'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  initialValue?: string;
  onSearch?: (query: string) => void;
  placeholder?: string;
  navigateTo?: boolean;
  className?: string;
}

export default function SearchBar({
  initialValue = '',
  onSearch,
  placeholder = 'Search games...',
  navigateTo = false,
  className = '',
}: SearchBarProps) {
  const [value, setValue] = useState(initialValue);
  const router = useRouter();

  // Debounce
  useEffect(() => {
    if (!onSearch) return;
    const timer = setTimeout(() => {
      onSearch(value);
    }, 300);
    return () => clearTimeout(timer);
  }, [value, onSearch]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (navigateTo) {
        router.push(`/games?q=${encodeURIComponent(value)}`);
      } else if (onSearch) {
        onSearch(value);
      }
    },
    [value, navigateTo, onSearch, router]
  );

  return (
    <form onSubmit={handleSubmit} className={`relative flex items-center ${className}`}>
      <div className="relative flex-1">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="search"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-gray-900 border border-gray-700 rounded-full pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-colors"
        />
        {value && (
          <button
            type="button"
            onClick={() => {
              setValue('');
              onSearch?.('');
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
          >
            ×
          </button>
        )}
      </div>
    </form>
  );
}
