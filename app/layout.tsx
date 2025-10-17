import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import Providers from "./providers";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZevStack - AI-Powered Digital Solutions for Enterprise Growth',
  description: 'Transform your business with cutting-edge digital marketing, AI automation, and premium web development. Trusted by 150+ enterprise clients for 10x growth.',
  keywords: 'digital marketing, AI automation, web development, enterprise solutions, business growth',
  authors: [{ name: 'ZevStack Agency' }],
  creator: 'ZevStack',
  publisher: 'ZevStack',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zevstack.com',
    siteName: 'ZevStack',
    title: 'ZevStack - AI-Powered Digital Solutions for Enterprise Growth',
    description: 'Transform your business with cutting-edge digital marketing, AI automation, and premium web development.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ZevStack - AI-Powered Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@zevstack',
    creator: '@zevstack',
    title: 'ZevStack - AI-Powered Digital Solutions for Enterprise Growth',
    description: 'Transform your business with cutting-edge digital marketing, AI automation, and premium web development.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}