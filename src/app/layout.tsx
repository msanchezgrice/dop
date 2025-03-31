import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata = {
  title: 'HeadOfProduct.io - AI-Powered Product Management for Gaming Companies',
  description: 'HeadOfProduct.io helps gaming product teams make data-driven decisions, prioritize features, and optimize team structure for better games and higher revenue.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
} 