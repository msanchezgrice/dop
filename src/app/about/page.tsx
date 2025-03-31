"use client";

import { FiLinkedin, FiMail } from "react-icons/fi";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Team
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Built by PM experts at companies like Zynga, Sciplay, Scopely, Riot, Activision and Supercell
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Section bgColor="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We&apos;ve assembled a team of product leaders from the world&apos;s top gaming companies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-64 bg-slate-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900">Sarah Johnson</h3>
              <p className="text-blue-600 font-medium">CEO, Former Director of Product at Zynga</p>
              <p className="mt-4 text-slate-600">
                10+ years experience leading product teams at Zynga, where she oversaw the development of multiple top-grossing titles.
              </p>
              <div className="mt-4 flex space-x-3">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FiLinkedin size={20} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FiMail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-64 bg-slate-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900">Michael Chen</h3>
              <p className="text-blue-600 font-medium">CTO, Former Tech Lead at Riot Games</p>
              <p className="mt-4 text-slate-600">
                Led engineering teams at Riot Games for 8 years, focusing on AI-powered analytics and matchmaking systems.
              </p>
              <div className="mt-4 flex space-x-3">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FiLinkedin size={20} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FiMail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-64 bg-slate-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900">Alex Rodriguez</h3>
              <p className="text-blue-600 font-medium">CPO, Former VP Product at Scopely</p>
              <p className="mt-4 text-slate-600">
                Product veteran with experience at Scopely and Supercell, specialized in monetization strategies and player retention.
              </p>
              <div className="mt-4 flex space-x-3">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FiLinkedin size={20} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FiMail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Team Member 4 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-64 bg-slate-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900">Emily Park</h3>
              <p className="text-blue-600 font-medium">AI Lead, Former ML Scientist at Activision</p>
              <p className="mt-4 text-slate-600">
                PhD in Artificial Intelligence with 6 years at Activision developing predictive models for player behavior and content optimization.
              </p>
              <div className="mt-4 flex space-x-3">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FiLinkedin size={20} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FiMail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 5 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-64 bg-slate-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900">David Kim</h3>
              <p className="text-blue-600 font-medium">Data Science Director, Former Lead at Sciplay</p>
              <p className="mt-4 text-slate-600">
                Expert in game analytics and data science with previous experience at Sciplay and EA, focusing on player segmentation and LTV optimization.
              </p>
              <div className="mt-4 flex space-x-3">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FiLinkedin size={20} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FiMail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 6 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-64 bg-slate-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900">Maya Wilson</h3>
              <p className="text-blue-600 font-medium">UX Director, Former Design Lead at Supercell</p>
              <p className="mt-4 text-slate-600">
                Award-winning UX designer who previously led design teams at Supercell for 5 years, focusing on intuitive interfaces and engaging player experiences.
              </p>
              <div className="mt-4 flex space-x-3">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FiLinkedin size={20} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FiMail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Company Values */}
      <Section bgColor="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Values
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Data-Driven Excellence</h3>
            <p className="text-slate-600">
              We believe in making decisions backed by data and measurable outcomes, not gut feelings or assumptions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Player-Centric Focus</h3>
            <p className="text-slate-600">
              We put players at the heart of everything we do, ensuring our solutions enhance their gaming experiences.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Continuous Innovation</h3>
            <p className="text-slate-600">
              We constantly push the boundaries of what&apos;s possible in AI-powered product management for gaming.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
              <span className="text-2xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Transparency</h3>
            <p className="text-slate-600">
              We believe in clear, honest communication with our team and customers, building trust through transparency.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
              <span className="text-2xl font-bold">5</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Simplicity</h3>
            <p className="text-slate-600">
              We make complex product management concepts accessible and actionable through intuitive design.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
              <span className="text-2xl font-bold">6</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Industry Expertise</h3>
            <p className="text-slate-600">
              We leverage our deep gaming industry experience to deliver solutions that address real-world challenges.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="dark" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join Our Mission
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
          We&apos;re revolutionizing product management for gaming companies. Be part of the journey.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button 
            href="/waitlist" 
            size="lg"
            className="bg-white text-blue-600 hover:bg-slate-100 font-bold"
          >
            Join the Waitlist
          </Button>
          <Button 
            href="#" 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-slate-800 border-2"
          >
            Contact Us
          </Button>
        </div>
      </Section>

      <Footer />
    </main>
  );
} 