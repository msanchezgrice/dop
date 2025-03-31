"use client";

import { FiCheck, FiInfo } from "react-icons/fi";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function Pricing() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Powerful AI product management that fits your budget
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Section bgColor="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
            <p className="text-slate-600 mb-4">For small teams just getting started</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">$199</span>
              <span className="text-slate-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Up to 5 team members</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Basic analytics and insights</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Feature prioritization</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Slack integration</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Email support</span>
              </li>
            </ul>
            <Button href="/waitlist" className="w-full" size="lg">
              Join Waitlist
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-xl p-8 border-2 border-blue-600 shadow-xl relative transition-transform duration-300 hover:scale-105">
            <div className="absolute top-0 right-0 bg-blue-600 text-white py-1 px-3 rounded-bl-lg rounded-tr-lg text-xs font-bold">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Professional</h3>
            <p className="text-slate-600 mb-4">For growing product teams</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">$199</span>
              <span className="text-slate-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Up to 15 team members</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Advanced analytics and insights</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Feature prioritization and planning</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Team structure recommendations</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Slack and Jira integrations</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Priority support</span>
              </li>
            </ul>
            <Button href="/waitlist" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
              Join Waitlist
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
            <p className="text-slate-600 mb-4">For larger organizations</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">Custom</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Unlimited team members</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Custom analytics dashboards</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Advanced PM org design</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Custom integrations</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Dedicated account manager</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-700">24/7 premium support</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-700">On-premises deployment option</span>
              </li>
            </ul>
            <Button href="/waitlist" className="w-full" variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-slate-600 mb-8">All plans include our core AI-powered product management features, secure data handling, and regular updates.</p>
          <div className="flex items-center justify-center">
            <FiInfo className="text-blue-600 mr-2" />
            <p className="text-slate-700">Early waitlist members receive 20% off for the first year!</p>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section bgColor="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to know about our pricing
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Can I change plans later?</h3>
            <p className="text-slate-600">
              Yes, you can upgrade or downgrade your plan at any time. Changes will take effect on your next billing cycle.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Do you offer a free trial?</h3>
            <p className="text-slate-600">
              We don&apos;t currently offer a free trial, but we do offer a 30-day money-back guarantee for new customers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">What payment methods do you accept?</h3>
            <p className="text-slate-600">
              We accept all major credit cards and can also arrange invoicing for Enterprise customers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Is there a setup fee?</h3>
            <p className="text-slate-600">
              No, there are no setup fees or hidden costs. The price you see is what you pay.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Do you offer discounts for startups?</h3>
            <p className="text-slate-600">
              Yes, we offer special startup packages. Contact our sales team to learn more.
            </p>
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
            className="bg-white text-blue-600 hover:bg-slate-100 font-bold"
          >
            Join the Waitlist
          </Button>
        </div>
      </Section>

      <Footer />
    </main>
  );
} 