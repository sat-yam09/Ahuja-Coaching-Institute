import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ahuja Career Institute | Premier Coaching for JEE, NEET & Boards',
  description:
    'Comprehensive coaching for CBSE, GSEB, ICSE, JEE and NEET with expert faculty, personalized mentoring, and a proven track record of success since 1998.',
  keywords: [
    'Ahuja Career Institute',
    'JEE Coaching Ahmedabad',
    'NEET Coaching Ahmedabad',
    'CBSE Coaching',
    'GSEB Coaching',
    'IIT JEE Preparation',
    'Medical Entrance Coaching',
  ],
  authors: [{ name: 'Ahuja Career Institute' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#DC2626',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#111827] antialiased selection:bg-red-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
