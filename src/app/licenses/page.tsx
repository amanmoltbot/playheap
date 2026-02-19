import type { Metadata } from 'next';
import Link from 'next/link';
import { games } from '@/data/games';

export const metadata: Metadata = {
  title: 'Game Licenses & Attribution | ArcadeHeap',
  description: 'Complete licensing information and attribution for all games hosted on ArcadeHeap. We respect intellectual property rights and open-source licenses.',
};

export default function LicensesPage() {
  const originalGames = games.filter(g => g.author === 'ArcadeHeap');
  const thirdPartyGames = games.filter(g => g.author && g.author !== 'ArcadeHeap');

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#8b5cf6] transition-colors">Home</Link>
        <span>›</span>
        <span className="text-gray-300">Licenses & Attribution</span>
      </nav>

      <h1 className="text-4xl font-extrabold text-white mb-3">Game Licenses & Attribution</h1>
      <p className="text-gray-400 mb-10 leading-relaxed">
        ArcadeHeap is committed to respecting intellectual property rights. Below is a complete list of all games
        hosted on our platform, along with their licensing information and attribution. We maintain monetization
        rights for all games listed — either through original ownership or through open-source licenses that
        explicitly permit commercial use and distribution.
      </p>

      {/* Ownership Declaration */}
      <div className="bg-[#1a1a2e] border border-[#8b5cf6]/30 rounded-xl p-6 mb-10">
        <h2 className="text-white font-bold text-lg mb-2">📋 Licensing Declaration</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          ArcadeHeap operates as a game hosting platform. All original games listed below were designed and
          developed in-house by the ArcadeHeap team and are owned by ArcadeHeap. Third-party games are hosted
          under their respective open-source licenses, all of which permit commercial use, distribution, and
          monetization. This page serves as our licensing documentation in compliance with Google AdSense
          H5 Games Ads requirements.
        </p>
      </div>

      {/* Original Games */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-2">🎮 Original Games by ArcadeHeap</h2>
        <p className="text-gray-500 text-sm mb-6">
          The following {originalGames.length} games were designed and developed in-house by the ArcadeHeap team.
          All rights are owned by ArcadeHeap. These games are released under the MIT License.
        </p>
        <div className="bg-[#1a1a2e] border border-gray-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-gray-500">
                <th className="text-left px-4 py-3 font-medium">Game</th>
                <th className="text-left px-4 py-3 font-medium">License</th>
                <th className="text-left px-4 py-3 font-medium">Owner</th>
              </tr>
            </thead>
            <tbody>
              {originalGames.map(game => (
                <tr key={game.slug} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                  <td className="px-4 py-2.5">
                    <Link href={`/game/${game.slug}`} className="text-[#8b5cf6] hover:text-violet-400">
                      {game.title}
                    </Link>
                  </td>
                  <td className="px-4 py-2.5 text-gray-400">{game.license || 'MIT'}</td>
                  <td className="px-4 py-2.5 text-gray-400">ArcadeHeap</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Third-Party Games */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-2">🌐 Open-Source & Third-Party Games</h2>
        <p className="text-gray-500 text-sm mb-6">
          The following {thirdPartyGames.length} games are open-source projects created by independent developers.
          We host these games under their respective licenses, which explicitly permit distribution and commercial use.
          We are grateful to these developers for making their work available to the community.
        </p>
        <div className="bg-[#1a1a2e] border border-gray-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-gray-500">
                <th className="text-left px-4 py-3 font-medium">Game</th>
                <th className="text-left px-4 py-3 font-medium">Author</th>
                <th className="text-left px-4 py-3 font-medium">License</th>
                <th className="text-left px-4 py-3 font-medium">Source</th>
              </tr>
            </thead>
            <tbody>
              {thirdPartyGames.map(game => (
                <tr key={game.slug} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                  <td className="px-4 py-2.5">
                    <Link href={`/game/${game.slug}`} className="text-[#8b5cf6] hover:text-violet-400">
                      {game.title}
                    </Link>
                  </td>
                  <td className="px-4 py-2.5 text-gray-400">
                    {game.sourceUrl ? (
                      <a href={game.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        {game.author}
                      </a>
                    ) : game.author}
                  </td>
                  <td className="px-4 py-2.5 text-gray-400">{game.license}</td>
                  <td className="px-4 py-2.5">
                    {game.sourceUrl ? (
                      <a href={game.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-[#8b5cf6] hover:text-violet-400">
                        GitHub ↗
                      </a>
                    ) : <span className="text-gray-600">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* GPL Notice */}
      <section className="mb-12">
        <div className="bg-[#1a1a2e] border border-yellow-500/20 rounded-xl p-6">
          <h3 className="text-white font-bold mb-2">⚠️ GPL-Licensed Games</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            The following games are licensed under the GNU General Public License v3.0. In compliance with
            the GPL, the source code for these games is available at the links below. If we have made any
            modifications, the modified source is also available.
          </p>
          <ul className="text-sm space-y-2">
            {thirdPartyGames.filter(g => g.license?.includes('GPL')).map(game => (
              <li key={game.slug} className="text-gray-400">
                <strong className="text-white">{game.title}</strong> by {game.author} —
                License: {game.license} —
                {game.sourceUrl && (
                  <a href={game.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-[#8b5cf6] hover:text-violet-400 ml-1">
                    Source Code ↗
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <div className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
        <h3 className="text-white font-bold mb-2">Questions?</h3>
        <p className="text-gray-400 text-sm">
          If you are the author of a game hosted on ArcadeHeap and have questions about licensing, attribution,
          or would like your game removed, please contact us at{' '}
          <a href="mailto:hello@arcadeheap.com" className="text-[#8b5cf6] hover:underline">hello@arcadeheap.com</a>.
          For copyright concerns, see our <Link href="/dmca" className="text-[#8b5cf6] hover:underline">DMCA policy</Link>.
        </p>
      </div>
    </div>
  );
}
