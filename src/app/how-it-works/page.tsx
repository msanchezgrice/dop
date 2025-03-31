"use client";

import { 
  FiCpu, 
  FiCheckCircle, 
  FiSlack, 
  FiGithub, 
  FiDatabase,
  FiPieChart,
  FiShield,
  FiHelpCircle
} from "react-icons/fi";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function HowItWorks() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How CPO.AI Works
            </h1>
            <p className="text-xl text-slate-300 mb-10">
              A powerful AI assistant that integrates with your existing tools and workflow to supercharge your gaming product management.
            </p>
            <Button 
              href="/waitlist" 
              size="lg"
              className="bg-white text-blue-600 hover:bg-slate-100"
            >
              Join the Waitlist
            </Button>
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
      <Section bgColor="white">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Simple Integration, Powerful Results
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Getting started with CPO.AI is easy. Here&apos;s how it works:
          </p>
        </div>

        <div className="space-y-24">
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2">1</span>
                Step One
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Connect CPO.AI to Slack
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                Simply install our Slack app to your workspace in just a few clicks. CPO.AI will join your product channels and be ready to assist your team.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-slate-700">No complex setup or training required</p>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-slate-700">Works immediately with your existing Slack channels</p>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-slate-700">Simple slash commands and @mentions to interact</p>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 custom-box-shadow order-1 md:order-2">
              <div className="bg-slate-800 rounded-t-lg p-4 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="ml-4 text-white text-sm">Slack - #product-team</p>
              </div>
              <div className="bg-white p-4 border border-slate-200 rounded-b-lg">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 mr-3 flex-shrink-0 flex items-center justify-center">
                    <FiSlack className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Slackbot</p>
                    <p className="text-slate-600 mt-1">
                      <strong>CPO.AI</strong> has been added to the channel
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-slate-800">Sarah (CPO)</p>
                    <p className="text-slate-600 mt-1">Welcome @cpo-ai! Can you help us analyze this month&apos;s feature performance?</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 mr-3 flex-shrink-0 flex items-center justify-center">
                    <FiCpu className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">CPO.AI</p>
                    <p className="text-slate-600 mt-1">
                      Hi Sarah! I&apos;d be happy to help analyze this month&apos;s feature performance. Would you like me to look at user engagement, retention impact, or revenue contributions?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-xl shadow-lg p-6 custom-box-shadow">
              <div className="bg-slate-100 rounded-lg p-6">
                <h4 className="font-medium text-slate-800 mb-4 flex items-center">
                  <FiDatabase className="mr-2 text-blue-600" /> Connect Your Data Sources
                </h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border border-slate-200 flex items-center">
                    <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center mr-3">
                      <FiPieChart className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Analytics Tools</p>
                      <p className="text-sm text-slate-600">Amplitude, Mixpanel, Google Analytics</p>
                    </div>
                    <div className="ml-auto">
                      <div className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-medium">Connected</div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200 flex items-center">
                    <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center mr-3">
                      <FiGithub className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Development Tools</p>
                      <p className="text-sm text-slate-600">GitHub, JIRA, Linear</p>
                    </div>
                    <div className="ml-auto">
                      <div className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-medium">Connected</div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200 flex items-center">
                    <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center mr-3">
                      <FiDatabase className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Custom Data Sources</p>
                      <p className="text-sm text-slate-600">API, Database, CSV Upload</p>
                    </div>
                    <div className="ml-auto">
                      <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">Add Source</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2">2</span>
                Step Two
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Connect Your Gaming Data Sources
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                CPO.AI integrates with your existing analytics, project management, and development tools to gain a complete understanding of your gaming product.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-slate-700">Secure API connections to all major analytics platforms</p>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-slate-700">GitHub and JIRA integration for development insights</p>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-slate-700">Custom data source support for proprietary systems</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2">3</span>
                Step Three
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Start Asking Questions and Getting Insights
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                Simply interact with CPO.AI in natural language through Slack. Ask questions, request analyses, or get recommendations for your gaming product.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-slate-700">Use natural language to request complex analyses</p>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-slate-700">Get visualizations, recommendations, and action items</p>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-slate-700">AI continuously learns from your product and team</p>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 custom-box-shadow order-1 md:order-2">
              <div className="bg-slate-800 rounded-t-lg p-4 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="ml-4 text-white text-sm">Slack - #product-team</p>
              </div>
              <div className="bg-white p-4 border border-slate-200 rounded-b-lg">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-slate-800">Mark (PM)</p>
                    <p className="text-slate-600 mt-1">@cpo-ai Can you suggest the optimal team structure for our new mobile game project with a 6-month timeline?</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 mr-3 flex-shrink-0 flex items-center justify-center">
                    <FiCpu className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">CPO.AI</p>
                    <p className="text-slate-600 mt-1">
                      Based on your game scope and timeline, I recommend:
                    </p>
                    <div className="mt-3 bg-slate-50 p-3 rounded text-sm">
                      <p className="font-medium text-slate-800">Recommended Team Structure:</p>
                      <ul className="list-disc ml-5 mt-2 space-y-1 text-slate-700">
                        <li>1 Senior PM (you) + 1 Junior PM</li>
                        <li>2 Senior + 3 Mid-level Engineers</li>
                        <li>1 Senior + 1 Mid-level Designer</li>
                        <li>1 QA Lead + 2 QA Testers</li>
                        <li>1 Data Analyst (part-time)</li>
                      </ul>
                      <p className="mt-3 font-medium text-slate-800">Rationale:</p>
                      <p className="text-slate-700">This structure balances velocity and quality, with enough senior talent to guide the team while staying within typical budget constraints for a 6-month mobile project.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bgColor="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to know about CPO.AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start mb-4">
              <div className="text-blue-600 mr-4 mt-1">
                <FiHelpCircle size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Is CPO.AI designed specifically for gaming companies?
                </h3>
                <p className="text-slate-600">
                  Yes, CPO.AI is built from the ground up for gaming product teams. It understands gaming-specific metrics, industry terminology, and the unique challenges of game development and live operations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start mb-4">
              <div className="text-blue-600 mr-4 mt-1">
                <FiHelpCircle size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  How does CPO.AI work with our existing tools?
                </h3>
                <p className="text-slate-600">
                  CPO.AI integrates with popular tools like Amplitude, Mixpanel, GitHub, JIRA, and more through secure API connections. It can also connect to custom data sources through our flexible integration layer.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start mb-4">
              <div className="text-blue-600 mr-4 mt-1">
                <FiHelpCircle size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Is our data secure with CPO.AI?
                </h3>
                <p className="text-slate-600">
                  Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and strict data access controls. Your data is never used to train our models or shared with third parties.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start mb-4">
              <div className="text-blue-600 mr-4 mt-1">
                <FiHelpCircle size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  How much does CPO.AI cost?
                </h3>
                <p className="text-slate-600">
                  We offer flexible pricing tiers based on team size and feature needs. Join our waitlist to receive early access pricing information and special discounts for early adopters.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start mb-4">
              <div className="text-blue-600 mr-4 mt-1">
                <FiHelpCircle size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Does CPO.AI replace product managers?
                </h3>
                <p className="text-slate-600">
                  No, CPO.AI is designed to augment PMs, not replace them. It handles data analysis, generates insights, and makes recommendations, allowing PMs to focus on strategy, creativity, and team leadership.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start mb-4">
              <div className="text-blue-600 mr-4 mt-1">
                <FiHelpCircle size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  How long does it take to set up CPO.AI?
                </h3>
                <p className="text-slate-600">
                  Most teams are up and running with CPO.AI in less than an hour. The Slack integration takes minutes, and our guided setup process makes connecting data sources simple and straightforward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Security Section */}
      <Section bgColor="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Enterprise-Grade Security
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We take the security and privacy of your gaming data seriously. CPO.AI is built with enterprise-grade security from the ground up.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <FiShield className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">End-to-End Encryption</h3>
                  <p className="text-slate-600">All data is encrypted in transit and at rest with bank-level security.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <FiShield className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">SOC 2 Compliance</h3>
                  <p className="text-slate-600">We maintain SOC 2 Type II certification for the highest level of data security.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <FiShield className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Data Access Controls</h3>
                  <p className="text-slate-600">Granular permissions and role-based access ensure data is only accessible to authorized users.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-sm max-w-md">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiShield className="text-blue-600" size={40} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-slate-900 mb-4">Security Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-3 rounded flex flex-col items-center">
                  <div className="font-medium text-slate-800 mb-1">SOC 2</div>
                  <div className="text-xs text-slate-500">Type II Certified</div>
                </div>
                <div className="bg-slate-50 p-3 rounded flex flex-col items-center">
                  <div className="font-medium text-slate-800 mb-1">GDPR</div>
                  <div className="text-xs text-slate-500">Compliant</div>
                </div>
                <div className="bg-slate-50 p-3 rounded flex flex-col items-center">
                  <div className="font-medium text-slate-800 mb-1">CCPA</div>
                  <div className="text-xs text-slate-500">Compliant</div>
                </div>
                <div className="bg-slate-50 p-3 rounded flex flex-col items-center">
                  <div className="font-medium text-slate-800 mb-1">ISO 27001</div>
                  <div className="text-xs text-slate-500">Certified</div>
                </div>
              </div>
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
          Join our exclusive waitlist for early access to CPO.AI and receive special pricing when we launch.
        </p>
        <div className="flex justify-center">
          <Button 
            href="/waitlist" 
            size="lg"
            className="bg-white text-blue-600 hover:bg-slate-100"
          >
            Join the Waitlist
          </Button>
        </div>
      </Section>

      <Footer />
    </main>
  );
} 