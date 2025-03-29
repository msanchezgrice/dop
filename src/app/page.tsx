"use client";

import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import { FiCheckCircle, FiBarChart2, FiUsers, FiTrendingUp } from "react-icons/fi";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI-Powered Product Management for Gaming Companies
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                CPO.AI helps gaming product teams make data-driven decisions, prioritize features, and optimize team structure for better games and higher revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  href="/waitlist" 
                  size="lg"
                  variant="secondary"
                  className="font-bold"
                >
                  Join the Waitlist
                </Button>
                <Button 
                  href="/features" 
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10"
                >
                  Explore Features
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl p-4 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                    alt="Gaming Analytics Dashboard" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <Section bgColor="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Gaming Companies Choose CPO.AI
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Purpose-built for gaming product managers, our AI assistant helps you make better decisions faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-5">
              <FiBarChart2 className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Data-Driven Insights
            </h3>
            <p className="text-slate-600">
              Transform your game data into actionable insights. Understand player behavior, retention patterns, and monetization opportunities.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-5">
              <FiTrendingUp className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Feature Prioritization
            </h3>
            <p className="text-slate-600">
              AI-powered stack ranking of feature ideas based on development cost, potential impact, and strategic alignment.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-5">
              <FiUsers className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Team Structure Optimization
            </h3>
            <p className="text-slate-600">
              Get recommendations on the optimal team structure for your gaming projects based on scope, timeline, and available resources.
            </p>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section bgColor="light">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Seamless Integration with Your Workflow
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              CPO.AI connects with your existing tools and adapts to your team's workflow, providing insights and recommendations when you need them.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-4 bg-green-100 rounded-full p-1 mt-1">
                  <FiCheckCircle className="text-green-600" size={18} />
                </div>
                <div>
                  <p className="font-medium text-slate-800">Slack Integration</p>
                  <p className="text-slate-600">Chat with CPO.AI directly in your team's Slack channels</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 bg-green-100 rounded-full p-1 mt-1">
                  <FiCheckCircle className="text-green-600" size={18} />
                </div>
                <div>
                  <p className="font-medium text-slate-800">Analytics Connections</p>
                  <p className="text-slate-600">Connects to Amplitude, Mixpanel, and other analytics tools</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 bg-green-100 rounded-full p-1 mt-1">
                  <FiCheckCircle className="text-green-600" size={18} />
                </div>
                <div>
                  <p className="font-medium text-slate-800">PM Tool Integration</p>
                  <p className="text-slate-600">Works with JIRA, Linear, Notion, and other PM tools</p>
                </div>
              </li>
            </ul>
            <div className="mt-8">
              <Button href="/how-it-works">Learn How It Works</Button>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
              alt="Integration Workflow" 
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section bgColor="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Trusted by Gaming Companies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Product teams from studios of all sizes use CPO.AI to make better decisions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 mr-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Sarah L." className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Sarah L.</h4>
                <p className="text-slate-600 text-sm">Director of Product, Mobile RPG Studio</p>
              </div>
            </div>
            <p className="text-slate-700">
              "CPO.AI has transformed how we analyze player data and prioritize features. The insights are incredibly valuable and have helped us increase Day 30 retention by 15%."
            </p>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 mr-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Alex M." className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Alex M.</h4>
                <p className="text-slate-600 text-sm">Head of Product, Strategy Game Publisher</p>
              </div>
            </div>
            <p className="text-slate-700">
              "The team structure recommendations and feature prioritization have been spot on. We're shipping faster and with more confidence knowing our decisions are backed by data."
            </p>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 mr-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Michael T." className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Michael T.</h4>
                <p className="text-slate-600 text-sm">CPO, Indie Game Studio</p>
              </div>
            </div>
            <p className="text-slate-700">
              "As a small studio, having an AI PM assistant has been like adding a whole PM team. It's helped us compete with larger studios by making smarter, data-driven decisions."
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bgColor="dark" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Upgrade Your Gaming Product Team?
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
          Join our exclusive waitlist for early access to CPO.AI and receive special pricing when we launch in Q2 2025.
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