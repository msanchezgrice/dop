"use client";

import React from "react";
import { 
  FiBarChart2, 
  FiCheckCircle, 
  FiUsers, 
  FiTrendingUp, 
  FiLayers, 
  FiCalendar,
  FiSearch,
  FiDollarSign,
  FiActivity,
  FiPieChart,
  FiClipboard,
  FiCode
} from "react-icons/fi";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";
import FeatureStackRanking from "../../components/ui/FeatureStackRanking";

export default function Features() {
  return (
    <main>
      <Navbar />

      {/* Hero Section with different treatment */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-blue-800 to-indigo-900"></div>
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')", 
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for Gaming Product Teams
            </h1>
            <p className="text-xl text-slate-300 mb-10">
              CPO.AI brings the power of artificial intelligence to your product management workflow, helping you make better decisions and ship better games.
            </p>
            <Button 
              href="/waitlist" 
              size="lg"
              variant="secondary"
              className="font-bold"
            >
              Join the Waitlist
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <Section bgColor="white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Core Feature
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Data Analysis & Insights
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              CPO.AI continuously analyzes your gaming metrics, player behavior, and KPIs to provide actionable insights for your product team.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-4 bg-blue-100 rounded-full p-1 mt-1">
                  <FiCheckCircle className="text-blue-600" size={18} />
                </div>
                <div>
                  <p className="font-medium text-slate-800">Real-time Performance Dashboard</p>
                  <p className="text-slate-600">Monitor KPIs in real-time with custom dashboards tailored to gaming products</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 bg-blue-100 rounded-full p-1 mt-1">
                  <FiCheckCircle className="text-blue-600" size={18} />
                </div>
                <div>
                  <p className="font-medium text-slate-800">Player Behavior Analysis</p>
                  <p className="text-slate-600">Understand player segments, retention patterns, and engagement metrics</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 bg-blue-100 rounded-full p-1 mt-1">
                  <FiCheckCircle className="text-blue-600" size={18} />
                </div>
                <div>
                  <p className="font-medium text-slate-800">Anomaly Detection</p>
                  <p className="text-slate-600">Get instant alerts when metrics deviate from expected patterns</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium text-slate-800 mb-4 flex items-center">
                <FiBarChart2 className="mr-2 text-blue-600" /> Daily Metrics Analysis
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Day 7 Retention</span>
                    <span className="text-red-500 flex items-center">-3% <FiTrendingUp className="ml-1 transform rotate-180" /></span>
                  </div>
                  <p className="text-sm text-slate-600">Current: 32% (Target: 35%)</p>
                  <div className="w-full bg-slate-200 h-2 rounded-full mt-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">ARPDAU</span>
                    <span className="text-green-500 flex items-center">+2.5% <FiTrendingUp className="ml-1" /></span>
                  </div>
                  <p className="text-sm text-slate-600">Current: $0.42 (Target: $0.40)</p>
                  <div className="w-full bg-slate-200 h-2 rounded-full mt-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '105%' }}></div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-slate-700">
                  <p><strong>Insight:</strong> The drop in Day 7 retention appears to be correlated with the difficulty spike at level 5. Consider revisiting the difficulty curve.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Feature Stack Ranking Section */}
      <Section bgColor="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            AI-Powered Feature Prioritization
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our intelligent stack ranking algorithm helps you decide which features to build next based on development cost, potential upside, and strategic alignment.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <FeatureStackRanking />
        </div>
      </Section>

      {/* Feature Grid */}
      <Section bgColor="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Complete Suite of PM Tools for Gaming Companies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            CPO.AI brings all the tools you need to manage your gaming products effectively in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="text-blue-600 w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
              <FiTrendingUp size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Feature Prioritization</h3>
            <p className="text-slate-600 mb-4">AI-powered stack ranking of feature ideas based on estimated development cost, ROI, and strategic alignment.</p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-slate-700">
                <FiCheckCircle className="mr-2 text-green-500" size={14} /> T-shirt sizing automation
              </li>
              <li className="flex items-center text-sm text-slate-700">
                <FiCheckCircle className="mr-2 text-green-500" size={14} /> Development cost estimation
              </li>
              <li className="flex items-center text-sm text-slate-700">
                <FiCheckCircle className="mr-2 text-green-500" size={14} /> Smart priority scoring
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="text-blue-600 w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
              <FiUsers size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Team Structure Optimization</h3>
            <p className="text-slate-600 mb-4">Get recommendations on optimal team structures, roles, and resource allocation for your gaming projects.</p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-slate-700">
                <FiCheckCircle className="mr-2 text-green-500" size={14} /> Team composition analysis
              </li>
              <li className="flex items-center text-sm text-slate-700">
                <FiCheckCircle className="mr-2 text-green-500" size={14} /> Skill gap identification
              </li>
              <li className="flex items-center text-sm text-slate-700">
                <FiCheckCircle className="mr-2 text-green-500" size={14} /> Resource allocation suggestions
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="text-blue-600 w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
              <FiClipboard size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Post-Mortems & Retrospectives</h3>
            <p className="text-slate-600 mb-4">Generate insightful post-mortems to learn from past releases and continuously improve your processes.</p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-slate-700">
                <FiCheckCircle className="mr-2 text-green-500" size={14} /> Automated data gathering
              </li>
              <li className="flex items-center text-sm text-slate-700">
                <FiCheckCircle className="mr-2 text-green-500" size={14} /> Root cause analysis
              </li>
              <li className="flex items-center text-sm text-slate-700">
                <FiCheckCircle className="mr-2 text-green-500" size={14} /> Actionable improvement plans
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Gaming Specific Features */}
      <Section bgColor="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Specialized for Gaming Companies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            CPO.AI is built specifically for the gaming industry, with features tailored to your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
            <FiActivity className="text-blue-600 mb-4" size={28} />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Player Engagement Analysis</h3>
            <p className="text-slate-600">
              Deep analysis of player engagement patterns across different segments, platforms, and game modes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
            <FiDollarSign className="text-blue-600 mb-4" size={28} />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Monetization Optimization</h3>
            <p className="text-slate-600">
              Identify optimal price points, bundle offers, and monetization strategies based on player behavior.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
            <FiSearch className="text-blue-600 mb-4" size={28} />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Competitive Analysis</h3>
            <p className="text-slate-600">
              Track competitor games, features, and trends to identify market opportunities and threats.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
            <FiPieChart className="text-blue-600 mb-4" size={28} />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Player Segmentation</h3>
            <p className="text-slate-600">
              Advanced player segmentation to target features and content to the right audience segments.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
            <FiBarChart2 className="text-blue-600 mb-4" size={28} />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Progression Analysis</h3>
            <p className="text-slate-600">
              Analyze player progression through game levels, identifying bottlenecks and drop-off points.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
            <FiUsers className="text-blue-600 mb-4" size={28} />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Community Feedback Analysis</h3>
            <p className="text-slate-600">
              Gather and analyze player feedback from forums, social media, and reviews to identify trends.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="dark" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Upgrade Your Gaming Product Team?
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
          Join our exclusive waitlist for early access to CPO.AI and receive special pricing when we launch.
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