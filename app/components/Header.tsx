'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';
import MegaMenu from './MegaMenu';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showMega, setShowMega] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const isDark =
      theme === 'dark' || (theme === 'system' && systemTheme === 'dark');
    setTheme(isDark ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80 relative">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900 dark:text-white">ZevStack</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.name === 'Services' ? (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setShowMega(true)}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMega((v) => !v);
                  }}
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' || (theme === 'system' && systemTheme === 'dark') ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-full p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mega Menu (desktop) */}
        {showMega && (
          <div className="hidden md:block">
            <MegaMenu onClose={() => setShowMega(false)} />
          </div>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-2 pb-4 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}