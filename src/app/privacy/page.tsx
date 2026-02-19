import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | ArcadeHeap',
  description: 'Read the ArcadeHeap Privacy Policy to understand how we collect and use your data.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#8b5cf6] transition-colors">Home</Link>
        <span>›</span>
        <span className="text-gray-300">Privacy Policy</span>
      </nav>

      <h1 className="text-4xl font-extrabold text-white mb-3">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-10">Last updated: February 2026</p>

      <div className="space-y-8 text-gray-400 leading-relaxed">
        {[
          {
            title: '1. Information We Collect',
            content: `We collect minimal information necessary to provide our services. When you use ArcadeHeap, we may automatically collect certain information about your device and usage, including IP address, browser type, pages visited, and time spent on the site. We do not require account creation and do not collect personal information such as names or email addresses unless you contact us directly.`,
          },
          {
            title: '2. Cookies',
            content: `ArcadeHeap uses cookies to improve your gaming experience. These may include session cookies (temporary) and preference cookies (persistent). We also use third-party advertising cookies to display relevant ads. You can control cookies through your browser settings, though disabling them may affect site functionality.`,
          },
          {
            title: '3. How We Use Your Information',
            content: `We use the information we collect to operate and improve ArcadeHeap, analyze site traffic and usage patterns, display advertisements, and respond to your inquiries. We do not sell your personal information to third parties.`,
          },
          {
            title: '4. Third-Party Services',
            content: `ArcadeHeap may include games and content from third-party developers. These games may have their own privacy policies. We also use advertising partners who may collect data to serve relevant ads. Please review the privacy policies of any third-party services you interact with.`,
          },
          {
            title: '5. Advertising',
            content: `We display advertisements to fund our free services. Our advertising partners may use cookies and similar technologies to serve ads based on your interests. You can opt out of interest-based advertising through industry opt-out programs.`,
          },
          {
            title: '6. Children\'s Privacy',
            content: `ArcadeHeap is intended for users aged 13 and older. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.`,
          },
          {
            title: '7. Data Security',
            content: `We implement reasonable security measures to protect your information. However, no internet transmission is 100% secure. We cannot guarantee the absolute security of information transmitted to our site.`,
          },
          {
            title: '8. Changes to This Policy',
            content: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date. Continued use of ArcadeHeap after changes constitutes acceptance of the updated policy.`,
          },
          {
            title: '9. Contact Us',
            content: `If you have questions about this Privacy Policy, please contact us at hello@arcadeheap.com`,
          },
        ].map(section => (
          <section key={section.title} className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
            <h2 className="text-white font-bold text-lg mb-3">{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
