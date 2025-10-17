"use client";

import React from "react";
import { ArrowRight, TrendingUp, Users, DollarSign, Search, Megaphone, FileText, BadgeCheck } from "lucide-react";
import Link from "next/link";

interface MegaMenuProps {
  onClose?: () => void;
}

export default function MegaMenu({ onClose }: MegaMenuProps) {
  return (
    <div
      className="absolute left-0 right-0 top-full z-40 border-b border-gray-200 bg-sky-50 backdrop-blur-sm dark:border-gray-800 dark:bg-sky-900/20"
      onMouseLeave={onClose}
    >
      <div className="container mx-auto px-4 py-6 min-h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          {/* Col 1: Web Development */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-3 flex flex-wrap items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white whitespace-normal break-words">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-200 to-sky-400 shadow-md ring-1 ring-white/50 dark:from-sky-300 dark:to-sky-500">
                <BadgeCheck className="h-4 w-4 text-sky-700 dark:text-sky-900" />
              </span>
              Web Development
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Shopify Development", href: "/services/shopify-development" },
                { name: "Custom Web Apps", href: "/services/web-apps" },
                { name: "Next.js Websites", href: "/services/nextjs-websites" },
                { name: "Landing Page Development", href: "/services/landing-pages" },
                { name: "Website Maintenance", href: "/services/website-maintenance" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="h-4 w-4 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Digital Advertising */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-3 flex flex-wrap items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white whitespace-normal break-words">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-200 to-violet-400 shadow-md ring-1 ring-white/50 dark:from-violet-300 dark:to-violet-500">
                <Megaphone className="h-4 w-4 text-violet-700 dark:text-violet-900" />
              </span>
              Digital Advertising
            </h3>
            <ul className="space-y-2">
              {[
                { name: "PPC Management Services", href: "/services/ppc" },
                { name: "Enterprise PPC Management", href: "/services/enterprise-ppc" },
                { name: "Google Local Services Ads", href: "/services/glsa" },
                { name: "Social Media Advertising", href: "/services/social-ads" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="h-4 w-4 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Content Marketing */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-3 flex flex-wrap items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white whitespace-normal break-words">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-200 to-emerald-400 shadow-md ring-1 ring-white/50 dark:from-emerald-300 dark:to-emerald-500">
                <FileText className="h-4 w-4 text-emerald-700 dark:text-emerald-900" />
              </span>
              Content Marketing
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Digital Marketing Services", href: "/services/digital-marketing" },
                { name: "Content Marketing Services", href: "/services/content-marketing" },
                { name: "Website Copywriting", href: "/services/copywriting" },
                { name: "Social Media Management", href: "/services/social-management" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="h-4 w-4 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Expertise */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-3 flex flex-wrap items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white whitespace-normal break-words">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 to-amber-400 shadow-md ring-1 ring-white/50 dark:from-amber-300 dark:to-amber-500">
                <BadgeCheck className="h-4 w-4 text-amber-700 dark:text-amber-900" />
              </span>
              Expertise
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Our SEO Results", href: "/expertise/seo-results" },
                { name: "Our SEO Case Studies", href: "/expertise/seo-case-studies" },
                { name: "Our OmniSEO Approach", href: "/expertise/omni-seo" },
                { name: "Research: AI", href: "/expertise/research-ai" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="h-4 w-4 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Stats */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="space-y-3">
              <div className="text-4xl font-extrabold text-primary-600 dark:text-primary-400">
                198%
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Increase in organic transactions
              </p>
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 rounded-md bg-gray-50 p-2 dark:bg-gray-800">
                  <TrendingUp className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                  <span className="text-xs text-gray-700 dark:text-gray-200">Growth</span>
                </div>
                <div className="flex items-center gap-2 rounded-md bg-gray-50 p-2 dark:bg-gray-800">
                  <Users className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                  <span className="text-xs text-gray-700 dark:text-gray-200">Clients</span>
                </div>
                <div className="flex items-center gap-2 rounded-md bg-gray-50 p-2 dark:bg-gray-800">
                  <DollarSign className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                  <span className="text-xs text-gray-700 dark:text-gray-200">ROI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}