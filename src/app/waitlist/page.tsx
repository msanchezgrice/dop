"use client";

import { FiShield, FiUsers, FiTrendingUp } from "react-icons/fi";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import WaitlistForm from "@/components/ui/WaitlistForm";

export default function Waitlist() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join the CPO.AI Waitlist
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Be among the first to experience the future of product management for gaming companies.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <Section bgColor="white">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Request Early Access
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Complete the form below to join our exclusive waitlist. We&apos;re rolling out access to gaming companies in batches, with priority given to early sign-ups.
            </p>
            <WaitlistForm />
          </div>
          <div className="md:col-span-2">
            <div className="bg-slate-50 p-6 rounded-xl sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Benefits of Early Access
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
                    <FiTrendingUp className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Priority Onboarding</h4>
                    <p className="text-slate-600">Get personalized onboarding and dedicated support from our team.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
                    <FiUsers className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Influence the Roadmap</h4>
                    <p className="text-slate-600">Early users will help shape the future of CPO.AI with direct input on features.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
                    <FiShield className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Exclusive Pricing</h4>
                    <p className="text-slate-600">Early access members receive special pricing that will be locked in for the lifetime of your account.</p>
                  </div>
                </li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-2">Current Waitlist Status</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-slate-700">Companies on waitlist</span>
                      <span className="text-blue-700 font-medium">100+</span>
                    </div>
                    <div className="w-full bg-blue-200 h-2 rounded-full">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-slate-700">Expected launch</span>
                      <span className="text-blue-700 font-medium">Q2 2025</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mt-2">
                    We&apos;re currently prioritizing gaming companies with 10+ employees for our first batch of beta users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section bgColor="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What Gaming Product Teams Are Saying
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from some of our early testers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 mr-4"></div>
              <div>
                <h4 className="font-semibold text-slate-900">Sarah L.</h4>
                <p className="text-slate-600 text-sm">Director of Product, Mobile RPG Studio</p>
              </div>
            </div>
            <p className="text-slate-700">
              &quot;CPO.AI has transformed how we analyze player data and prioritize features. The insights are incredibly valuable and have helped us increase Day 30 retention by 15%.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 mr-4"></div>
              <div>
                <h4 className="font-semibold text-slate-900">Alex M.</h4>
                <p className="text-slate-600 text-sm">Head of Product, Strategy Game Publisher</p>
              </div>
            </div>
            <p className="text-slate-700">
              &quot;The team structure recommendations and feature prioritization have been spot on. We&apos;re shipping faster and with more confidence knowing our decisions are backed by data.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 mr-4"></div>
              <div>
                <h4 className="font-semibold text-slate-900">Michael T.</h4>
                <p className="text-slate-600 text-sm">CPO, Indie Game Studio</p>
              </div>
            </div>
            <p className="text-slate-700">
              &quot;As a small studio, having an AI PM assistant has been like adding a whole PM team. It&apos;s helped us compete with larger studios by making smarter, data-driven decisions.&quot;
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section bgColor="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Learn more about the waitlist process
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="font-semibold text-slate-900 mb-2">How long is the current waitlist?</h3>
            <p className="text-slate-600">
              We currently have over 100 companies on our waitlist. We&apos;re rolling out access in batches, prioritizing gaming companies that can provide us with valuable feedback during our beta phase.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="font-semibold text-slate-900 mb-2">When will I get access?</h3>
            <p className="text-slate-600">
              We&apos;re aiming to onboard new companies every week. You&apos;ll receive an email with next steps once you&apos;re approved for access. The sooner you join the waitlist, the earlier you&apos;ll get access.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="font-semibold text-slate-900 mb-2">Is there a cost during the beta period?</h3>
            <p className="text-slate-600">
              Early access users will receive a significant discount on our standard pricing, which will be locked in for the lifetime of your account. Specific pricing details will be shared when you&apos;re invited off the waitlist.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="font-semibold text-slate-900 mb-2">What information do I need to provide?</h3>
            <p className="text-slate-600">
              The waitlist form asks for basic information about your company, your role, and the types of games you work on. This helps us understand your needs and provide the most relevant experience when you gain access.
            </p>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
} 