import React from 'react';
import './globals.css';

export const metadata = {
  title: 'CPO.AI - AI-Powered Product Management for Gaming Companies',
  description: 'CPO.AI helps gaming product teams make data-driven decisions, prioritize features, and optimize team structure for better games and higher revenue.',
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
      </body>
    </html>
  );
} 