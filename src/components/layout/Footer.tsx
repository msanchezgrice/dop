"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FiMail } from 'react-icons/fi';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { APP_NAME, CONTACT_EMAIL, TWITTER_URL, LINKEDIN_URL } from '@/utils/constants';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real app, you'd send the email to your backend
    // For demo purposes, we'll just show success state
    setIsSubscribed(true);
    setError(null);
  };
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <span className="text-blue-600 font-bold text-2xl">{APP_NAME}</span>
            </Link>
            <p className="text-slate-300 mb-6 max-w-md">
              AI-powered product management assistant helping gaming companies make data-driven decisions.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="mb-6">
                <label htmlFor="email-subscription" className="block text-sm font-medium text-slate-300 mb-2">
                  Subscribe to our newsletter
                </label>
                <div className="flex">
                  <input
                    id="email-subscription"
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-slate-600 bg-slate-800 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Subscribe
                  </button>
                </div>
                {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
              </form>
            ) : (
              <div className="mb-6 p-4 bg-slate-800 rounded-md text-slate-300 border border-slate-700">
                Thanks for subscribing! We'll keep you updated with the latest news.
              </div>
            )}
            
            <div className="flex space-x-4">
              <a href={TWITTER_URL} className="text-slate-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} />
              </a>
              <a href={LINKEDIN_URL} className="text-slate-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={20} />
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-300 hover:text-white">
                <FiMail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="/features" className="text-slate-300 hover:text-white">Features</Link></li>
              <li><Link href="/pricing" className="text-slate-300 hover:text-white">Pricing</Link></li>
              <li><Link href="/how-it-works" className="text-slate-300 hover:text-white">How It Works</Link></li>
              <li><Link href="/waitlist" className="text-slate-300 hover:text-white">Join Waitlist</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-300 hover:text-white">About Us</Link></li>
              <li><Link href="/terms" className="text-slate-300 hover:text-white">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-slate-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 