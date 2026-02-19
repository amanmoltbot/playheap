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
            content: `We collect minimal information necessary to provide our services. When you use ArcadeHeap, we may automatically collect certain information about your device and usage, including IP address, browser type, operating system, pages visited, referring URLs, and time spent on the site. We do not require account creation and do not collect personal information such as names or email addresses unless you contact us directly.`,
          },
          {
            title: '2. Cookies & Tracking Technologies',
            content: `ArcadeHeap and our third-party partners use cookies, web beacons, and similar technologies to improve your experience and serve relevant advertisements. These include:

• Session cookies (temporary, deleted when you close your browser)
• Preference cookies (remember your settings across visits)
• Analytics cookies (help us understand how visitors use our site)
• Advertising cookies (used by Google and other ad partners to serve relevant ads)

Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website and other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to ArcadeHeap and/or other sites on the Internet.

You may opt out of personalized advertising by visiting Google's Ad Settings at https://adssettings.google.com. You may also opt out of third-party vendor cookies by visiting the Network Advertising Initiative opt-out page at https://optout.networkadvertising.org.

You can control cookies through your browser settings. Note that disabling cookies may affect site functionality and ad experience.`,
          },
          {
            title: '3. How We Use Your Information',
            content: `We use the information we collect to: operate and improve ArcadeHeap; analyze site traffic and usage patterns; display advertisements; personalize your experience; ensure site security; and respond to your inquiries. We do not sell your personal information to third parties.`,
          },
          {
            title: '4. Third-Party Advertising',
            content: `We use Google AdSense and the Google Ad Placement API to display advertisements on ArcadeHeap. Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie and other advertising cookies enables it to serve ads based on your visits to ArcadeHeap and other websites on the Internet.

For more information about how Google uses your data when you use our site, please visit: https://policies.google.com/technologies/partner-sites

You may opt out of personalized advertising by:
• Visiting Google's Ad Settings: https://adssettings.google.com
• Visiting the Digital Advertising Alliance's opt-out page: https://optout.aboutads.info
• Using the NAI opt-out tool: https://optout.networkadvertising.org

Our advertising partners may also collect data through their own cookies and tracking technologies. We recommend reviewing their respective privacy policies.`,
          },
          {
            title: '5. Third-Party Games & Content',
            content: `ArcadeHeap hosts games from third-party developers and open-source projects. These games run within sandboxed iFrames on our site. While we take precautions to ensure game safety, third-party games may have their own data collection practices. We encourage you to review the source and licenses of individual games where available.`,
          },
          {
            title: '6. Data Security',
            content: `We implement reasonable security measures to protect your information, including HTTPS encryption, Content Security Policy headers, and sandboxed game environments. However, no internet transmission is 100% secure. We cannot guarantee the absolute security of information transmitted to our site.`,
          },
          {
            title: '7. Children\'s Privacy',
            content: `ArcadeHeap is intended for a general audience and is not specifically directed at children under 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will delete it promptly. If you believe a child has provided us with personal information, please contact us at hello@arcadeheap.com.

Where required by law, we tag our content appropriately for child-directed regulations and limit ad serving accordingly.`,
          },
          {
            title: '8. Your Rights',
            content: `Depending on your location, you may have the following rights regarding your personal information:

• Right to access — request a copy of the data we hold about you
• Right to deletion — request deletion of your data
• Right to opt out of sale — we do not sell personal information, but you may opt out of personalized advertising as described above
• Right to non-discrimination — we will not discriminate against you for exercising your privacy rights

California residents: Under the California Consumer Privacy Act (CCPA), you have the right to know what personal information is collected, request deletion, and opt out of the sale of personal information. We do not sell personal information. To exercise your rights, contact us at hello@arcadeheap.com.

European residents: Under GDPR, you have additional rights including data portability, the right to rectification, and the right to restrict processing. Contact us at hello@arcadeheap.com to exercise these rights.`,
          },
          {
            title: '9. Data Retention',
            content: `We retain automatically collected data (such as server logs and analytics) for up to 26 months. Cookie data is retained according to individual cookie lifespans. We do not retain personal information beyond what is necessary for the purposes described in this policy.`,
          },
          {
            title: '10. Changes to This Policy',
            content: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date. Continued use of ArcadeHeap after changes constitutes acceptance of the updated policy.`,
          },
          {
            title: '11. Contact Us',
            content: `If you have questions about this Privacy Policy, wish to exercise your data rights, or have concerns about our data practices, please contact us at:

Email: hello@arcadeheap.com
DMCA inquiries: dmca@arcadeheap.com`,
          },
        ].map(section => (
          <section key={section.title} className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-6">
            <h2 className="text-white font-bold text-lg mb-3">{section.title}</h2>
            <p className="whitespace-pre-line">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
