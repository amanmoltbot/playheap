'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-32 text-center">
      <div className="text-8xl mb-6" aria-hidden="true">⚠️</div>
      <h1 className="text-4xl font-extrabold text-white mb-4">Something went wrong</h1>
      <p className="text-gray-400 mb-8 text-lg">
        An unexpected error occurred. Please try again or go back to the homepage.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={reset}
          className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold px-8 py-3 rounded-full transition-all hover:scale-105 shadow-lg shadow-[#8b5cf6]/30"
        >
          Try Again
        </button>
        <a
          href="/"
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-full transition-all hover:scale-105"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
