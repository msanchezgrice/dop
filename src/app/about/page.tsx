"use client";

import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"></div>
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')", 
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About CPO.AI
            </h1>
            <p className="text-xl text-slate-300">
              We're building the future of product management for gaming companies
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section bgColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-slate-600">
              CPO.AI exists to help gaming product teams make better decisions, prioritize effectively, and deliver exceptional player experiences through the power of AI.
            </p>
          </div>

          <div className="prose prose-lg mx-auto prose-slate">
            <p>
              We believe that product managers in the gaming industry face unique challenges that generic PM tools don't address. Through our specialized AI assistant, we're empowering product teams to truly understand their players, optimize their roadmaps, and build games that delight and engage.
            </p>
            <p>
              Our team combines deep expertise in gaming, product management, and artificial intelligence to create an assistant that truly understands the nuances of the gaming industry.
            </p>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section bgColor="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Our Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Led by industry veterans from the world's top gaming companies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-24 h-24 rounded-full bg-blue-100 mx-auto mb-4 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Sarah Johnson" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">Sarah Johnson</h3>
            <p className="text-slate-600 mb-3">CEO & Co-Founder</p>
            <p className="text-slate-500 text-sm">Former VP of Product at Zynga</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-24 h-24 rounded-full bg-blue-100 mx-auto mb-4 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="David Chen" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">David Chen</h3>
            <p className="text-slate-600 mb-3">CTO & Co-Founder</p>
            <p className="text-slate-500 text-sm">Former Principal Engineer at Riot Games</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-24 h-24 rounded-full bg-blue-100 mx-auto mb-4 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Maria Rodriguez" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">Maria Rodriguez</h3>
            <p className="text-slate-600 mb-3">Chief Product Officer</p>
            <p className="text-slate-500 text-sm">Former Director of Product at Scopely</p>
          </div>
        </div>
      </Section>

      {/* Companies Section */}
      <Section bgColor="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Team Experience From
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our team brings experience from industry-leading companies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 justify-items-center items-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900">Zynga</h3>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900">Riot Games</h3>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900">Scopely</h3>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900">Electronic Arts</h3>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="dark" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join Us on Our Mission
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
          Be among the first to experience how CPO.AI can transform your gaming product management.
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