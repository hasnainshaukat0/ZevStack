"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  CheckCircle,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Users,
  Clock,
  Target,
  Star,
} from "lucide-react";

function ContactFormCard() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Integrate API/endpoint here
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className="rounded-xl bg-white p-6 text-gray-900 shadow-sm dark:bg-gray-900 dark:text-gray-100">
        <div className="flex items-center gap-2 text-sky-700 dark:text-sky-300">
          <CheckCircle className="h-5 w-5" />
          <span className="font-semibold">Request received</span>
        </div>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          Thanks! Our team will reach out within 24 hours with a tailored Shopify plan.
        </p>
        <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          You can also email us anytime: hello@zevstack.com
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-5 w-5 text-sky-600 dark:text-sky-300" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Get a custom proposal</h3>
      </div>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
        Quick form — get timelines, budget ranges, and a conversion-first plan.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <Label htmlFor="name" className="text-xs">Full name</Label>
            <Input id="name" required placeholder="Your name" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="email" className="text-xs">Work email</Label>
            <Input id="email" type="email" required placeholder="you@company.com" className="mt-1" />
          </div>
        </div>

        <div>
          <Label htmlFor="company" className="text-xs">Company</Label>
          <Input id="company" required placeholder="Company Inc." className="mt-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <Label className="text-xs">Budget</Label>
            <Select required>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lt10k">&lt; $10k</SelectItem>
                <SelectItem value="10-25">$10k – $25k</SelectItem>
                <SelectItem value="25-50">$25k – $50k</SelectItem>
                <SelectItem value="50plus">$50k+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs">Timeline</Label>
            <Select required>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="1-2m">1–2 months</SelectItem>
                <SelectItem value="3-6m">3–6 months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="message" className="text-xs">Project goal</Label>
          <Textarea id="message" placeholder="Briefly describe your goals or challenges..." className="mt-1 min-h-24" />
        </div>

        <div className="flex items-start gap-2">
          <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
          <p className="text-xs text-gray-500 dark:text-gray-400">
            No spam — you’ll get a tailored plan and next steps within 24 hours.
          </p>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white"
        >
          {loading ? "Submitting..." : "Get My Shopify Proposal"}
        </Button>
      </form>
    </div>
  );
}

export default function ShopifyDevelopmentPage() {
  return (
    <main className="min-h-screen px-4 py-16 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800" role="main">

      {/* Hero: Value Proposition + Social Proof */}
      <div className="relative overflow-hidden rounded-2xl bg-transparent p-8">

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-800 ring-1 ring-sky-200 dark:bg-sky-900/30 dark:text-sky-200 dark:ring-sky-800">
              <ShieldCheck className="h-4 w-4" /> Enterprise-grade Shopify Solutions
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Shopify Ecommerce Development Services
            </h1>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Shopify is one of the most popular ecommerce platforms — easy to use, highly flexible, and packed with powerful features. Our enterprise Shopify development services help you fully leverage the platform to drive conversions, speed, and scalability. From custom themes and headless storefronts to app integrations and CRO, we architect persuasive, performance-first experiences that grow revenue.
            </p>

            {/* Trust badges */}
            <div className="mt-5 grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-gray-200 bg-sky-50 p-4 text-center dark:border-gray-800 dark:bg-sky-900/20">
                <TrendingUp className="mx-auto h-6 w-6 text-sky-600 dark:text-sky-400" />
                <p className="mt-1 text-sm text-gray-800 dark:text-sky-100">Avg. +52% CR uplift</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-sky-50 p-4 text-center dark:border-gray-800 dark:bg-sky-900/20">
                <Users className="mx-auto h-6 w-6 text-sky-600 dark:text-sky-400" />
                <p className="mt-1 text-sm text-gray-800 dark:text-sky-100">150+ enterprise clients</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-sky-50 p-4 text-center dark:border-gray-800 dark:bg-sky-900/20">
                <Clock className="mx-auto h-6 w-6 text-sky-600 dark:text-sky-400" />
                <p className="mt-1 text-sm text-gray-800 dark:text-sky-100">Go-live in weeks</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button asChild variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-50 dark:border-sky-800 dark:text-sky-300">
                <Link href="#solutions">Explore Capabilities</Link>
              </Button>
            </div>
          </div>

          {/* Right-side Contact Form (Conversion Focused) */}
          <ContactFormCard />
        </div>
      </div>

      {/* Solutions Tabs */}
      <section id="solutions" aria-labelledby="solutions-title" className="mt-20 md:mt-24 scroll-mt-28 py-8 md:py-16">
        <div className="mb-10 text-center">
          <h2 id="solutions-title" className="text-2xl font-bold text-gray-900 dark:text-white">Solutions tailored to your Shopify goals</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
            Choose the track that fits—custom themes, headless, integrations, or CRO.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 md:p-8 dark:bg-gray-900">
          <Tabs defaultValue="setup" orientation="vertical" className="grid items-start gap-8 md:grid-cols-12">
          {/* Left: Titles (narrow) */}
          <TabsList className="md:col-span-4 flex md:flex-col md:items-stretch gap-3 overflow-x-auto md:overflow-visible bg-transparent p-1 mt-16 md:mt-32">
            <TabsTrigger
              value="theme"
              className="justify-start rounded-xl border border-gray-200 dark:border-gray-800 data-[state=active]:bg-sky-50/60 dark:data-[state=active]:bg-sky-900/20 data-[state=active]:border-sky-200 dark:data-[state=active]:border-sky-800 px-3 py-3 text-left transition-colors duration-200 hover:bg-sky-50/50 dark:hover:bg-sky-800/20"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-800/40">
                  <Sparkles className="h-4 w-4 text-sky-700 dark:text-sky-300" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Custom Themes & UX</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Brand-perfect, conversion-first</div>
                </div>
              </div>
            </TabsTrigger>

            <TabsTrigger
              value="setup"
              className="justify-start rounded-xl border border-gray-200 dark:border-gray-800 data-[state=active]:bg-sky-50/60 dark:data-[state=active]:bg-sky-900/20 data-[state=active]:border-sky-200 dark:data-[state=active]:border-sky-800 px-3 py-3 text-left transition-colors duration-200 hover:bg-sky-50/50 dark:hover:bg-sky-800/20"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-800/40">
                  <ShieldCheck className="h-4 w-4 text-sky-700 dark:text-sky-300" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Store Setup</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Products, payments, shipping</div>
                </div>
              </div>
            </TabsTrigger>

            <TabsTrigger
              value="headless"
              className="justify-start rounded-xl border border-gray-200 dark:border-gray-800 data-[state=active]:bg-sky-50/60 dark:data-[state=active]:bg-sky-900/20 data-[state=active]:border-sky-200 dark:data-[state=active]:border-sky-800 px-3 py-3 text-left transition-colors duration-200 hover:bg-sky-50/50 dark:hover:bg-sky-800/20"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-800/40">
                  <ShieldCheck className="h-4 w-4 text-sky-700 dark:text-sky-300" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Headless Storefronts</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Next.js speed & control</div>
                </div>
              </div>
            </TabsTrigger>

            <TabsTrigger
              value="apps"
              className="justify-start rounded-xl border border-gray-200 dark:border-gray-800 data-[state=active]:bg-sky-50/60 dark:data-[state=active]:bg-sky-900/20 data-[state=active]:border-sky-200 dark:data-[state=active]:border-sky-800 px-3 py-3 text-left transition-colors duration-200 hover:bg-sky-50/50 dark:hover:bg-sky-800/20"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-800/40">
                  <Users className="h-4 w-4 text-sky-700 dark:text-sky-300" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Integrations & Apps</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Payments, CRM, analytics</div>
                </div>
              </div>
            </TabsTrigger>

            <TabsTrigger
              value="seo"
              className="justify-start rounded-xl border border-gray-200 dark:border-gray-800 data-[state=active]:bg-sky-50/60 dark:data-[state=active]:bg-sky-900/20 data-[state=active]:border-sky-200 dark:data-[state=active]:border-sky-800 px-3 py-3 text-left transition-colors duration-200 hover:bg-sky-50/50 dark:hover:bg-sky-800/20"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-800/40">
                  <TrendingUp className="h-4 w-4 text-sky-700 dark:text-sky-300" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">SEO & Analytics</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Search & tracking setup</div>
                </div>
              </div>
            </TabsTrigger>

            <TabsTrigger
              value="cro"
              className="justify-start rounded-xl border border-gray-200 dark:border-gray-800 data-[state=active]:bg-sky-50/60 dark:data-[state=active]:bg-sky-900/20 data-[state=active]:border-sky-200 dark:data-[state=active]:border-sky-800 px-3 py-3 text-left transition-colors duration-200 hover:bg-sky-50/50 dark:hover:bg-sky-800/20"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-800/40">
                  <Target className="h-4 w-4 text-sky-700 dark:text-sky-300" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">CRO & Performance</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">A/B tests, CWV mastery</div>
                </div>
              </div>
            </TabsTrigger>

            <TabsTrigger
              value="maintenance"
              className="justify-start rounded-xl border border-gray-200 dark:border-gray-800 data-[state=active]:bg-sky-50/60 dark:data-[state=active]:bg-sky-900/20 data-[state=active]:border-sky-200 dark:data-[state=active]:border-sky-800 px-3 py-3 text-left transition-colors duration-200 hover:bg-sky-50/50 dark:hover:bg-sky-800/20"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-800/40">
                  <Clock className="h-4 w-4 text-sky-700 dark:text-sky-300" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Maintenance & Support</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Updates, fixes, helpdesk</div>
                </div>
              </div>
            </TabsTrigger>

            <TabsTrigger
              value="migration"
              className="justify-start rounded-xl border border-gray-200 dark:border-gray-800 data-[state=active]:bg-sky-50/60 dark:data-[state=active]:bg-sky-900/20 data-[state=active]:border-sky-200 dark:data-[state=active]:border-sky-800 px-3 py-3 text-left transition-colors duration-200 hover:bg-sky-50/50 dark:hover:bg-sky-800/20"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-800/40">
                  <ShieldCheck className="h-4 w-4 text-sky-700 dark:text-sky-300" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Migration</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">WooCommerce/Magento → Shopify</div>
                </div>
              </div>
            </TabsTrigger>
          </TabsList>

          {/* Right: Content (wide) */}
          <div className="md:col-span-8 md:border-l md:border-gray-200 dark:md:border-gray-800 md:pl-6">
            <TabsContent value="theme" className="mt-0">
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Custom Themes & UX</h3>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  Pixel-perfect storefronts engineered for persuasion, speed, and scale.
                </p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  We build brand-consistent design systems with reusable sections, ensuring faster iterations and long-term maintainability. Accessibility and global readiness (i18n) are baked in.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Design tokens for colors, spacing, and typography</li>
                  <li>Conversion-focused layouts and microcopy</li>
                  <li>Reusable sections, blocks, and meta-objects</li>
                  <li>WCAG-compliant components and interactions</li>
                </ul>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Heuristic-driven UX & IA",
                  "Design systems & theme architecture",
                  "Accessibility & i18n best practices",
                  "Reusable sections & meta-objects",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-lg bg-white p-4 dark:bg-gray-900">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-sky-600 dark:text-sky-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="headless" className="mt-0">
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Headless Storefronts</h3>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  Next.js + Storefront API for extreme performance and complete control.
                </p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  Composable architecture enables clean separation of concerns and faster development at scale, with SEO-first routing and enterprise observability.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>ISR/Edge caching strategies for speed</li>
                  <li>API orchestration and error budgets</li>
                  <li>SEO metadata, canonical routes, and sitemaps</li>
                  <li>Monitoring, logging, and performance dashboards</li>
                </ul>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Storefront API + ISR/Edge caching",
                  "Composable architecture",
                  "SEO-first routing & metadata",
                  "Observability & error budgets",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-lg bg-white p-4 dark:bg-gray-900">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-sky-600 dark:text-sky-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="apps" className="mt-0">
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Integrations & Apps</h3>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  Payments, CRM, analytics and private apps — unified without silos.
                </p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  We streamline your stack with reliable data flows and extend Shopify via public/private apps tailored to your operations.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>ERP/CRM integrations and ETL pipelines</li>
                  <li>Checkout, subscriptions, loyalty, and rewards</li>
                  <li>Custom app development and app hardening</li>
                  <li>Event tracking and attribution frameworks</li>
                </ul>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "ERP/CRM & data pipelines",
                  "Checkout, subscriptions, loyalty",
                  "Private/public app development",
                  "Evented tracking & attribution",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-lg bg-white p-4 dark:bg-gray-900">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-sky-600 dark:text-sky-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cro" className="mt-0">
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">CRO & Performance</h3>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  Simple, measurable improvements in speed and conversions.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Image, script, and theme clean-up</li>
                  <li>Checkout and funnel friction reduction</li>
                  <li>Core Web Vitals quick wins</li>
                  <li>A/B tests on key pages</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="setup" className="mt-0">
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Store Setup</h3>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  End-to-end launch: products, payments, shipping, and policies.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Product collections, variants, and inventory</li>
                  <li>Payment gateways and taxes</li>
                  <li>Shipping rates and delivery zones</li>
                  <li>Legal pages (refund, privacy, terms)</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="seo" className="mt-0">
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">SEO & Analytics</h3>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  Basic search setup and accurate tracking for decision-making.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Meta titles, descriptions, and alt text</li>
                  <li>Search-friendly URLs and sitemaps</li>
                  <li>GA4, Pixel, and conversion tracking</li>
                  <li>Simple dashboards and reporting</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="maintenance" className="mt-0">
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Maintenance & Support</h3>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  Ongoing updates, fixes, and small improvements.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Theme/app updates and compatibility</li>
                  <li>Bug fixes and minor enhancements</li>
                  <li>Security and backup checks</li>
                  <li>Priority support and helpdesk</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="migration" className="mt-0">
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Migration</h3>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  Move to Shopify with clean data and minimal downtime.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Products, customers, and orders import</li>
                  <li>Redirects and SEO continuity</li>
                  <li>App equivalents and replacements</li>
                  <li>Go‑live checklist and QA</li>
                </ul>
              </div>
            </TabsContent>
          </div>
          </Tabs>
        </div>
      </section>

      {/* Enterprise Shopify Ecommerce Development Services */}
      <div className="mt-10 rounded-2xl bg-white p-8 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Enterprise Shopify Ecommerce Development Services
        </h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          We don’t just “build stores”—we engineer persuasive buying journeys. Our team blends behavioral UX, CRO best practices, and speed-focused engineering to turn Shopify’s flexibility into tangible growth. Whether it’s a custom theme, a headless Next.js storefront, or complex app integrations, we design systems that convert, scale, and stay reliable.
        </p>
        <ul className="mt-4 grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
          {[
            "Conversion-first UX flows shaped by buyer psychology",
            "Core Web Vitals optimized for fast, frictionless experiences",
            "Headless architectures (Shopify + Next.js) for performance & control",
            "Enterprise integrations (CRM, analytics, payments) without silos",
            "Governance, QA, and ongoing CRO for compound gains",
            "Rapid launch timelines with predictable delivery",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-sky-600 dark:text-sky-400" />
              <span className="text-gray-700 dark:text-gray-300">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Trust Bar */}
      <div className="mt-10 rounded-xl bg-white p-6 dark:bg-gray-900">
        <p className="mb-4 text-center text-sm text-gray-600 dark:text-gray-300">Trusted by growth-focused teams</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {["Spectra", "Aurora", "Neptune", "Helio", "Vertex", "Nimbus"].map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center rounded-md bg-gray-50 p-3 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>

      {/* Pain → Solution */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-white p-6 dark:bg-gray-900">
          <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Common Pain Points</h2>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {[
              "High traffic, low conversions",
              "Slow storefront, poor UX",
              "Fragmented apps & data silos",
              "Limited customization and scalability",
            ].map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-600" /> {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl bg-white p-6 dark:bg-gray-900">
          <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Our Solution Framework</h2>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {[
              "Behavioral UX + persuasion patterns",
              "Core Web Vitals & render optimizations",
              "Unified integrations & automation",
              "Enterprise-grade code & governance",
            ].map((s) => (
              <li key={s} className="flex items-center gap-2">
                <Target className="h-4 w-4 text-emerald-600" /> {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Capabilities Grid */}
      <div id="capabilities" className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Capabilities that drive outcomes</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Full-stack Shopify excellence — from theme engineering to headless storefronts and automation.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "Custom Themes & UX",
              desc: "Pixel-perfect experiences built on conversion psychology.",
            },
            {
              title: "Headless Storefronts",
              desc: "Next.js powered performance and flexibility at scale.",
            },
            {
              title: "Integrations & Apps",
              desc: "Payments, CRM, analytics — unified for operations.",
            },
            {
              title: "CRO & Performance",
              desc: "A/B tests, heuristics, and Core Web Vitals mastery.",
            },
            {
              title: "Migration & Setup",
              desc: "Seamless replatforming from Woo/Magento and more.",
            },
            {
              title: "Reliability & Support",
              desc: "Governance, monitoring, and ongoing improvements.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-200 to-sky-400 shadow ring-1 ring-white/50 dark:from-sky-300 dark:to-sky-500">
                  <Sparkles className="h-4 w-4 text-sky-700 dark:text-sky-900" />
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{card.title}</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Outcome Metrics */}
      <div className="mt-12 rounded-2xl bg-white p-8 dark:bg-gray-900">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            { label: "Conversion Rate Uplift", value: "+52%" },
            { label: "Avg. Page Speed", value: "< 1s" },
            { label: "NPS (Client Satisfaction)", value: "92" },
            { label: "Time to Launch", value: "3–6 weeks" },
          ].map((m) => (
            <div key={m.label} className="rounded-xl bg-sky-50 p-5 text-center dark:bg-sky-900/20">
              <div className="text-3xl font-extrabold text-sky-700 dark:text-sky-300">{m.value}</div>
              <div className="mt-1 text-xs text-gray-700 dark:text-gray-300">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How we deliver</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            { step: "Discovery", desc: "Goals, data, constraints, success metrics." },
            { step: "Blueprint", desc: "UX flows, IA, tech plan, conversion strategy." },
            { step: "Build", desc: "Themes, integrations, performance tuning." },
            { step: "Launch+", desc: "QA, A/B tests, monitoring, continuous CRO." },
          ].map((s, i) => (
            <div
              key={s.step}
              className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="text-sm font-medium text-sky-700 dark:text-sky-300">Step {i + 1}</div>
              <div className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">{s.step}</div>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {[
          {
            quote:
              "Our CR jumped 60% post-launch. They engineered UX around buyer behavior — not just visuals.",
            name: "Director of E‑commerce, Enterprise Retail",
          },
          {
            quote:
              "The storefront is blazing fast and our ops stack finally works together. Biggest win this year.",
            name: "VP Growth, SaaS‑enabled Brand",
          },
        ].map((t) => (
          <div
            key={t.name}
            className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
          >
            <p className="text-sm text-gray-800 dark:text-gray-200">“{t.quote}”</p>
            <div className="mt-3 text-xs text-gray-600 dark:text-gray-400">— {t.name}</div>
          </div>
        ))}
      </div>

      {/* FAQ (simple) */}
      <div className="mt-12 rounded-2xl bg-white p-8 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">FAQs</h2>
        <div className="mt-4 space-y-3">
          {[
            {
              q: "Can you handle headless architectures?",
              a: "Yes. We build Next.js storefronts on Shopify with best‑practice performance and SEO.",
            },
            {
              q: "Do you migrate from other platforms?",
              a: "We replatform from WooCommerce, Magento, and custom systems with data integrity and minimal downtime.",
            },
            {
              q: "How do you ensure conversion impact?",
              a: "We map behavioral journeys, design persuasive flows, and validate through A/B testing.",
            },
          ].map((f) => (
            <details
              key={f.q}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-800"
            >
              <summary className="cursor-pointer text-sm font-medium text-gray-900 dark:text-white">
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-12 rounded-2xl bg-white p-8 text-center dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ready to build an unfair advantage?</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Share your goals. We’ll respond with a tailored plan, timelines, and investment.
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <Button asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <Button asChild variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-50 dark:border-sky-800 dark:text-sky-300">
            <Link href="#">See Case Studies</Link>
          </Button>
        </div>
      </div>

    </main>
  );
}