import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | ArcadeHeap',
  description: 'Read the ArcadeHeap Terms of Service.',
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing and using ArcadeHeap, you agree to be bound by these Terms of Service. If you do not agree, please discontinue use of our services.',
  },
  {
    title: '2. Use of Service',
    content: 'ArcadeHeap is provided for personal, non-commercial entertainment purposes. You agree not to misuse our services, attempt to gain unauthorized access, or use automated tools to scrape our content.',
  },
  {
    title: '3. Age Requirements',
    content: 'You must be at least 13 years of age to use ArcadeHeap. If you are under 18, you represent that your parent or guardian has reviewed and agreed to these Terms. We do not knowingly collect personal information from children under 13 in compliance with COPPA and similar regulations.',
  },
  {
    title: '4. Intellectual Property',
    content: 'Games hosted on ArcadeHeap remain the property of their respective developers. Original games created by ArcadeHeap are our intellectual property. Open-source games are hosted under their respective licenses, which are documented on our Licenses & Attribution page. ArcadeHeap branding and website design are our intellectual property and may not be reproduced without permission.',
  },
  {
    title: '5. Advertising',
    content: 'ArcadeHeap displays advertisements via Google AdSense and the Google Ad Placement API. By using our services, you consent to the display of ads during your experience, including interstitial ads shown at natural break points in gameplay such as between levels and at game-over screens. You may opt out of personalized advertising through Google\'s Ad Settings at https://adssettings.google.com.',
  },
  {
    title: '6. Third-Party Games & Content',
    content: 'ArcadeHeap hosts games from third-party developers and open-source projects. These games run within sandboxed iframe environments on our site. We do not guarantee the functionality, safety, or suitability of third-party games. Each game\'s license and attribution is displayed on its respective game page and on our Licenses page. Third-party games remain the intellectual property of their respective creators.',
  },
  {
    title: '7. Disclaimer of Warranties',
    content: 'ArcadeHeap is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee uninterrupted access, that games will always function correctly, or that the site will be free of errors or vulnerabilities.',
  },
  {
    title: '8. Limitation of Liability',
    content: 'To the maximum extent permitted by applicable law, ArcadeHeap and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, loss of profits, or business interruption, arising out of or related to your use of our services. Our total liability for any claim shall not exceed the amount you have paid to us in the 12 months preceding the claim, or $100 USD, whichever is less.',
  },
  {
    title: '9. Indemnification',
    content: 'You agree to indemnify, defend, and hold harmless ArcadeHeap, its operators, affiliates, and licensors from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorney\'s fees) arising out of or in any way connected with your access to or use of our services, or your violation of these Terms.',
  },
  {
    title: '10. Termination',
    content: 'We may terminate or suspend your access to ArcadeHeap at any time, without prior notice, for any reason, including if we believe you have violated these Terms. Upon termination, your right to use the service ceases immediately. Provisions that by their nature should survive termination shall survive.',
  },
  {
    title: '11. Governing Law & Jurisdiction',
    content: 'These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.',
  },
  {
    title: '12. Modifications',
    content: 'We reserve the right to modify these Terms at any time. Changes will be effective when posted on this page with an updated "Last updated" date. Your continued use of ArcadeHeap after changes constitutes acceptance of the modified Terms. We encourage you to review this page periodically.',
  },
  {
    title: '13. Contact',
    content: '', // handled separately for the link
  },
];

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#8b5cf6] transition-colors">Home</Link>
        <span>›</span>
        <span className="text-gray-300">Terms of Service</span>
      </nav>

      <h1 className="text-4xl font-extrabold text-white mb-3">Terms of Service</h1>
      <p className="text-gray-500 text-sm mb-10">Effective Date: February 19, 2026 · Last updated: February 19, 2026</p>

      <div className="space-y-6 text-gray-400 leading-relaxed">
        {sections.slice(0, -1).map((section) => (
          <div key={section.title} className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
            <h2 className="text-white font-bold text-lg mb-3">{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
        <div className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
          <h2 className="text-white font-bold text-lg mb-3">13. Contact</h2>
          <p>Questions about these terms? Email us at <a href="mailto:hello@arcadeheap.com" className="text-[#8b5cf6] hover:underline">hello@arcadeheap.com</a></p>
        </div>
      </div>
    </div>
  );
}
