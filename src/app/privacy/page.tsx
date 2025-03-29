"use client";

import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Section from "../../components/ui/Section";

export default function PrivacyPolicy() {
  return (
    <main>
      <Navbar />

      {/* Hero Section with different treatment */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <Section bgColor="white">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
          <h2>1. Introduction</h2>
          <p>
            At CPO.AI, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
          </p>
          
          <h2>2. Information We Collect</h2>
          <p>We may collect several types of information from and about users of our website, including:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, company name, job title, and other information you provide when creating an account or joining our waitlist.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website and services, including IP address, browser type, pages visited, and time spent on pages.</li>
            <li><strong>Device Information:</strong> Information about the devices you use to access our service, including device type, operating system, and browser.</li>
            <li><strong>Game and Product Data:</strong> Information about your gaming products, metrics, and analytics that you provide or that we collect through our integrations.</li>
          </ul>
          
          <h2>3. How We Collect Information</h2>
          <p>We collect information:</p>
          <ul>
            <li>Directly from you when you provide it to us (e.g., when you fill out forms on our website).</li>
            <li>Automatically as you navigate through our site (via cookies and similar technologies).</li>
            <li>From third-party sources and integrations that you authorize (e.g., Slack, analytics platforms).</li>
          </ul>
          
          <h2>4. How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including:</p>
          <ul>
            <li>Providing, maintaining, and improving our services.</li>
            <li>Processing your requests and transactions.</li>
            <li>Personalizing your experience with our service.</li>
            <li>Communicating with you about our services, updates, and promotions.</li>
            <li>Analyzing usage patterns to enhance our website and service offering.</li>
            <li>Protecting our services and users from fraud and abuse.</li>
          </ul>
          
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All data is encrypted in transit and at rest.
          </p>
          <p>
            Despite our best efforts, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security.
          </p>
          
          <h2>6. Data Retention</h2>
          <p>
            We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>
          
          <h2>7. Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
          <ul>
            <li>The right to access and receive a copy of your personal data.</li>
            <li>The right to rectify or update your personal data.</li>
            <li>The right to erase your personal data.</li>
            <li>The right to restrict or object to our processing of your personal data.</li>
            <li>The right to data portability.</li>
            <li>The right to withdraw consent at any time where we rely on consent to process your personal data.</li>
          </ul>
          
          <h2>8. Cookies and Similar Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
          </p>
          
          <h2>9. Third-Party Services</h2>
          <p>
            Our service may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
          </p>
          <p>
            We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
          
          <h2>10. Children's Privacy</h2>
          <p>
            Our service is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13.
          </p>
          
          <h2>11. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any changes.
          </p>
          
          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@cpo.ai">privacy@cpo.ai</a>.
          </p>
        </div>
      </Section>

      <Footer />
    </main>
  );
} 