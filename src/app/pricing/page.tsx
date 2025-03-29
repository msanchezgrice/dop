"use client";

import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";
import { FiCheck, FiX } from "react-icons/fi";

export default function PricingPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Everything you need to optimize your game's product management
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Section bgColor="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Choose the Plan That's Right for You
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Whether you're an indie studio or a major publisher, we have a plan that fits your needs.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Starter</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">$199</span>
                  <span className="text-slate-600">/month</span>
                </div>
                <p className="text-slate-600 mb-6">
                  Perfect for indie studios and small teams just getting started.
                </p>
                <Button href="/waitlist" className="w-full justify-center">
                  Join Waitlist
                </Button>
              </div>
              <div className="border-t border-slate-200 p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-3" size={18} />
                    <span className="text-slate-700">Metrics Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-3" size={18} />
                    <span className="text-slate-700">Feature Prioritization</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-3" size={18} />
                    <span className="text-slate-700">Slack Integration</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-3" size={18} />
                    <span className="text-slate-700">1 Analytics Integration</span>
                  </li>
                  <li className="flex items-start">
                    <FiX className="text-slate-400 mt-1 mr-3" size={18} />
                    <span className="text-slate-400">Team Structure Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <FiX className="text-slate-400 mt-1 mr-3" size={18} />
                    <span className="text-slate-400">API Access</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-xl shadow-xl border-2 border-blue-600 overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
                MOST POPULAR
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Professional</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">$499</span>
                  <span className="text-slate-600">/month</span>
                </div>
                <p className="text-slate-600 mb-6">
                  For growing teams that need more advanced capabilities.
                </p>
                <Button href="/waitlist" className="w-full justify-center bg-blue-600 hover:bg-blue-700 text-white">
                  Join Waitlist
                </Button>
              </div>
              <div className="border-t border-slate-200 p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-3" size={18} />
                    <span className="text-slate-700">Metrics Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-3" size={18} />
                    <span className="text-slate-700">Feature Prioritization</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-3" size={18} />
                    <span className="text-slate-700">Team Structure Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-3" size={18} />
                    <span className="text-slate-700">Slack Integration</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-3" size={18} />
                    <span className="text-slate-700">3 Analytics Integrations</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-3" size={18} />
                    <span className="text-slate-700">API Access</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">Custom</span>
                </div>
                <p className="text-slate-600 mb-6">
                  For large studios and publishers with custom requirements.
                </p>
                <Button href="/waitlist" variant="outline" className="w-full justify-center">
                  Contact Us
                </Button>
              </div>
              <div className="border-t border-slate-200 p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-3" size={18} />
                    <span className="text-slate-700">Everything in Professional</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-3" size={18} />
                    <span className="text-slate-700">Unlimited Analytics Integrations</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-3" size={18} />
                    <span className="text-slate-700">Advanced Security Features</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-3" size={18} />
                    <span className="text-slate-700">Dedicated Account Manager</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-3" size={18} />
                    <span className="text-slate-700">Custom Integrations</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-3" size={18} />
                    <span className="text-slate-700">SLA & Priority Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section bgColor="light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">Do you offer a free trial?</h3>
              <p className="text-slate-600">
                Yes, we offer a 14-day free trial on our Starter and Professional plans. You can cancel at any time during your trial with no charges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">Can I change plans later?</h3>
              <p className="text-slate-600">
                Absolutely. You can upgrade, downgrade, or cancel your plan at any time. Changes to your subscription will take effect immediately.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-slate-600">
                We accept all major credit cards, including Visa, Mastercard, and American Express. For Enterprise plans, we also offer invoice-based payment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">Do you offer discounts for startups?</h3>
              <p className="text-slate-600">
                Yes, we offer special pricing for startups and indie game studios. Contact our sales team to learn more about our startup program.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="dark" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Gaming Product Management?
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
          Join our exclusive waitlist for early access to CPO.AI and receive 20% off for the first year.
        </p>
        <div className="flex justify-center">
          <Button 
            href="/waitlist" 
            size="lg"
            variant="secondary"
            className="font-bold"
          >
            Join the Waitlist
          </Button>
        </div>
      </Section>

      <Footer />
    </main>
  );
} 