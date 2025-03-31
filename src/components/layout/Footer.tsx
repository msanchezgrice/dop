import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { NAV_LINKS, SITE_NAME, SUPPORT_EMAIL, SOCIAL_LINKS } from '@/utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">{SITE_NAME}</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              AI-powered project management assistant that helps teams stay organized and productive.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href={SOCIAL_LINKS.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <FiTwitter className="h-5 w-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">GitHub</span>
                <FiGithub className="h-5 w-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">LinkedIn</span>
                <FiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/docs" className="text-base text-gray-500 hover:text-gray-900">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-base text-gray-500 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-base text-gray-500 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-base text-gray-500 hover:text-gray-900">
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-base text-gray-500 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href={`mailto:${SUPPORT_EMAIL}`} 
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {SUPPORT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 text-center">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 