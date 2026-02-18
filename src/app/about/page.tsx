import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | PlayHeap',
  description: 'Learn about PlayHeap — your ultimate destination for free HTML5 browser games.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#8b5cf6] transition-colors">Home</Link>
        <span>›</span>
        <span className="text-gray-300">About</span>
      </nav>

      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🎮</div>
        <h1 className="text-4xl font-extrabold text-white mb-4">About PlayHeap</h1>
        <p className="text-gray-400 text-lg">
          Your ultimate destination for free HTML5 browser games.
        </p>
      </div>

      <div className="space-y-8 text-gray-400 leading-relaxed">
        <section className="bg-[#1a1a2e] border border-gray-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">Our Mission</h2>
          <p>
            At PlayHeap, we believe gaming should be accessible to everyone — no downloads, no installs, no paywalls.
            Our mission is to bring you high-quality HTML5 games that you can play instantly in your browser,
            on any device, for free.
          </p>
        </section>

        <section className="bg-[#1a1a2e] border border-gray-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">What We Offer</h2>
          <ul className="space-y-3">
            {[
              '🕹️ Free HTML5 games across 10 categories',
              '🚀 Instant play — no downloads or accounts required',
              '📱 Mobile-friendly games for all devices',
              '🔄 New games added regularly',
              '🔒 Safe, family-friendly gaming environment',
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#8b5cf6]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-[#1a1a2e] border border-gray-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
          <p>
            Have a question, suggestion, or want to submit your game? We&apos;d love to hear from you.
          </p>
          <p className="mt-3">
            Email us at:{' '}
            <a href="mailto:hello@playheap.io" className="text-[#8b5cf6] hover:underline">
              hello@playheap.io
            </a>
          </p>
        </section>

        <div className="text-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold px-8 py-3 rounded-full transition-all hover:scale-105"
          >
            🎮 Start Playing
          </Link>
        </div>
      </div>
    </div>
  );
}
