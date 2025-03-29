"use client";

import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Section from "../../components/ui/Section";

export default function TermsOfService() {
  return (
    <main>
      <Navbar />

      {/* Hero Section with different treatment */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <Section bgColor="white">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
          <h2>1. Introduction</h2>
          <p>
            Welcome to CPO.AI. These Terms of Service govern your use of our website and services. By accessing or using CPO.AI, you agree to be bound by these Terms.
          </p>
          
          <h2>2. Definitions</h2>
          <p>
            <strong>"Service"</strong> refers to the CPO.AI website and AI-powered product management assistant for gaming companies.
          </p>
          <p>
            <strong>"User," "You," and "Your"</strong> refer to the individual or organization accessing or using the Service.
          </p>
          <p>
            <strong>"Company," "We," "Us," and "Our"</strong> refer to CPO.AI and its operators.
          </p>
          
          <h2>3. Use of Service</h2>
          <p>
            You may use our Service only as permitted by law and according to these Terms. You agree not to:
          </p>
          <ul>
            <li>Use the Service for any illegal purpose or in violation of any laws</li>
            <li>Violate the intellectual property rights of others</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Interfere with the proper working of the Service</li>
            <li>Use the Service to transmit harmful code or materials</li>
          </ul>
          
          <h2>4. Account Terms</h2>
          <p>
            When you create an account with us, you guarantee that the information you provide is accurate, complete, and current. Inaccurate information may result in the immediate termination of your account.
          </p>
          <p>
            You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device. You agree to accept responsibility for all activities that occur under your account.
          </p>
          
          <h2>5. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are owned by CPO.AI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
          
          <h2>6. User Content</h2>
          <p>
            You retain all rights to any content you submit, post, or display on or through the Service. By submitting content to the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your content in any existing or future media.
          </p>
          
          <h2>7. Termination</h2>
          <p>
            We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including a breach of these Terms.
          </p>
          
          <h2>8. Limitation of Liability</h2>
          <p>
            In no event shall CPO.AI, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses resulting from your access to or use of (or inability to access or use) the Service.
          </p>
          
          <h2>9. Warranty Disclaimer</h2>
          <p>
            The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
          
          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice before the new terms take effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          
          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>
          
          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:legal@cpo.ai">legal@cpo.ai</a>.
          </p>
        </div>
      </Section>

      <Footer />
    </main>
  );
} 