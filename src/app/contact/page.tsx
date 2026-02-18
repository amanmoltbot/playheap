import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | PlayHeap',
  description: 'Get in touch with the PlayHeap team.',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#8b5cf6] transition-colors">Home</Link>
        <span>›</span>
        <span className="text-gray-300">Contact</span>
      </nav>

      <div className="text-center mb-10">
        <div className="text-5xl mb-4">💌</div>
        <h1 className="text-4xl font-extrabold text-white mb-3">Contact Us</h1>
        <p className="text-gray-400">Got a question or want to submit your game? We&apos;d love to hear from you.</p>
      </div>

      <div className="space-y-4">
        <div className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
          <h2 className="text-white font-bold mb-2">📧 Email</h2>
          <a href="mailto:hello@playheap.io" className="text-[#8b5cf6] hover:underline">hello@playheap.io</a>
        </div>
        <div className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
          <h2 className="text-white font-bold mb-2">🎮 Submit a Game</h2>
          <p className="text-gray-400 text-sm">Are you a developer with an HTML5 game you&apos;d like to list on PlayHeap? Send us a link to your game along with a description and thumbnail.</p>
        </div>
        <div className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
          <h2 className="text-white font-bold mb-2">🤝 Partnerships & Advertising</h2>
          <p className="text-gray-400 text-sm">Interested in advertising or partnership opportunities? Reach out to us and we&apos;ll get back to you within 48 hours.</p>
        </div>
      </div>
    </div>
  );
}
