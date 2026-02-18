import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | PlayHeap',
  description: 'Read the PlayHeap Terms of Service.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#8b5cf6] transition-colors">Home</Link>
        <span>›</span>
        <span className="text-gray-300">Terms of Service</span>
      </nav>

      <h1 className="text-4xl font-extrabold text-white mb-3">Terms of Service</h1>
      <p className="text-gray-500 text-sm mb-10">Last updated: January 2025</p>

      <div className="space-y-6 text-gray-400 leading-relaxed">
        <div className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
          <h2 className="text-white font-bold text-lg mb-3">1. Acceptance of Terms</h2>
          <p>By accessing and using PlayHeap, you agree to be bound by these Terms of Service. If you do not agree, please discontinue use of our services.</p>
        </div>
        <div className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
          <h2 className="text-white font-bold text-lg mb-3">2. Use of Service</h2>
          <p>PlayHeap is provided for personal, non-commercial entertainment purposes. You agree not to misuse our services, attempt to gain unauthorized access, or use automated tools to scrape our content.</p>
        </div>
        <div className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
          <h2 className="text-white font-bold text-lg mb-3">3. Intellectual Property</h2>
          <p>Games hosted on PlayHeap remain the property of their respective developers. PlayHeap branding and website design are our intellectual property and may not be reproduced without permission.</p>
        </div>
        <div className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
          <h2 className="text-white font-bold text-lg mb-3">4. Disclaimer</h2>
          <p>PlayHeap is provided &quot;as is&quot; without warranties of any kind. We do not guarantee uninterrupted access or that games will always function correctly.</p>
        </div>
        <div className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
          <h2 className="text-white font-bold text-lg mb-3">5. Contact</h2>
          <p>Questions about these terms? Email us at <a href="mailto:hello@playheap.io" className="text-[#8b5cf6] hover:underline">hello@playheap.io</a></p>
        </div>
      </div>
    </div>
  );
}
