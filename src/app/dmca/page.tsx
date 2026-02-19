import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DMCA & Copyright Policy | ArcadeHeap',
  description: 'ArcadeHeap DMCA and copyright takedown policy. Report copyright infringement.',
};

export default function DMCAPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#8b5cf6] transition-colors">Home</Link>
        <span>›</span>
        <span className="text-gray-300">DMCA &amp; Copyright</span>
      </nav>

      <h1 className="text-4xl font-extrabold text-white mb-3">DMCA &amp; Copyright Policy</h1>
      <p className="text-gray-500 text-sm mb-10">Last updated: February 2026</p>

      <div className="space-y-8 text-gray-400 leading-relaxed">
        <section className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
          <h2 className="text-white font-bold text-lg mb-3">Respect for Intellectual Property</h2>
          <p>
            ArcadeHeap respects the intellectual property rights of others and expects our users to do the same. 
            We comply with the Digital Millennium Copyright Act (DMCA) and respond promptly to notices of alleged 
            copyright infringement. All games hosted on ArcadeHeap are either original creations, open-source projects 
            used under their respective licenses, or games for which we have obtained distribution rights.
          </p>
        </section>

        <section className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
          <h2 className="text-white font-bold text-lg mb-3">Filing a DMCA Takedown Notice</h2>
          <p className="mb-4">
            If you believe that content hosted on ArcadeHeap infringes your copyright, please send a written 
            notification to our designated DMCA agent with the following information:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>A physical or electronic signature of the copyright owner or authorized agent.</li>
            <li>Identification of the copyrighted work claimed to have been infringed.</li>
            <li>Identification of the material that is claimed to be infringing, with enough detail to locate it on our site (e.g., the URL of the game page).</li>
            <li>Your contact information: name, address, telephone number, and email address.</li>
            <li>A statement that you have a good faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law.</li>
            <li>A statement, under penalty of perjury, that the information in the notification is accurate and that you are the copyright owner or authorized to act on their behalf.</li>
          </ol>
        </section>

        <section className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
          <h2 className="text-white font-bold text-lg mb-3">Contact Information</h2>
          <p className="mb-2">Send DMCA notices to:</p>
          <p className="text-white font-mono text-sm">
            Email: dmca@arcadeheap.com
          </p>
          <p className="mt-4 text-sm">
            We aim to respond to all valid DMCA takedown requests within 48 hours. Upon receipt of a valid notice, 
            we will remove or disable access to the allegedly infringing material promptly.
          </p>
        </section>

        <section className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
          <h2 className="text-white font-bold text-lg mb-3">Counter-Notification</h2>
          <p>
            If you believe your content was removed in error, you may file a counter-notification with the same 
            contact information above, including: your physical or electronic signature, identification of the removed 
            material and its prior location, a statement under penalty of perjury that the material was removed by 
            mistake, and your consent to the jurisdiction of the federal court in your district.
          </p>
        </section>

        <section className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
          <h2 className="text-white font-bold text-lg mb-3">Repeat Infringers</h2>
          <p>
            ArcadeHeap will terminate access for users or content providers who are repeat infringers of copyright, 
            in appropriate circumstances as determined by ArcadeHeap in its sole discretion.
          </p>
        </section>

        <section className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
          <h2 className="text-white font-bold text-lg mb-3">Open Source Attribution</h2>
          <p>
            Many games on ArcadeHeap are built on open-source projects. We maintain attribution for all open-source 
            games on their respective game pages. If you are the author of an open-source game hosted on our platform 
            and would like us to update attribution or remove your game, please contact us at hello@arcadeheap.com.
          </p>
        </section>
      </div>
    </div>
  );
}
