import Link from 'next/link';
import { categories } from '@/data/games';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="ArcadeHeap" className="w-8 h-8" />
              <span className="text-xl font-extrabold text-white">
                Arcade<span className="text-[#8b5cf6]">Heap</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Your ultimate destination for free HTML5 games. Play instantly — no downloads, no installs.
            </p>
            {/* Contact */}
            <p className="text-gray-600 text-sm">
              Contact: hello@arcadeheap.com
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Pages</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/games', label: 'All Games' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-500 hover:text-[#8b5cf6] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories — first half */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Categories</h3>
            <ul className="space-y-2">
              {categories.slice(0, 5).map(cat => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} className="text-gray-500 hover:text-[#8b5cf6] text-sm transition-colors">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories — second half */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">&nbsp;</h3>
            <ul className="space-y-2">
              {categories.slice(5).map(cat => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} className="text-gray-500 hover:text-[#8b5cf6] text-sm transition-colors">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              {[
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
                { href: '/dmca', label: 'DMCA & Copyright' },
                { href: '/about', label: 'About Us' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-500 hover:text-[#8b5cf6] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} ArcadeHeap.com — All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Play free HTML5 games online — no download required.
          </p>
        </div>
      </div>
    </footer>
  );
}
