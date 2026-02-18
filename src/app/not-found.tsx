import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-32 text-center">
      <div className="text-8xl mb-6" aria-hidden="true">🕹️</div>
      <h1 className="text-4xl font-extrabold text-white mb-4">Game Not Found</h1>
      <p className="text-gray-400 mb-8 text-lg">
        Oops! That page doesn&apos;t exist. Maybe the game you&apos;re looking for moved or was removed.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold px-8 py-3 rounded-full transition-all hover:scale-105 shadow-lg shadow-[#8b5cf6]/30"
        >
          Back to Home
        </Link>
        <Link
          href="/games"
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-full transition-all hover:scale-105"
        >
          Browse All Games
        </Link>
      </div>
    </div>
  );
}
