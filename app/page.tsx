"use client";

import { useState, useRef } from "react";
import { HeroSection } from "./components/home/hero-section";
import { ServicesGrid } from "./components/home/services-grid";
import { StatsStrip } from "./components/home/stats-strip";
import { CaseStudies } from "./components/home/case-studies";
import { Testimonials } from "./components/home/testimonials";
import { LeadCaptureModal } from "./components/home/lead-capture-modal";
import { FinalCTA } from "./components/home/final-cta";
import { Footer } from "./components/home/footer";
import homeData from "../data/home.json";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const caseStudiesRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleScrollToCaseStudies = () => {
    if (caseStudiesRef.current) {
      caseStudiesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        data={homeData.hero}
        onOpenModal={handleOpenModal}
        onScrollToCaseStudies={handleScrollToCaseStudies}
      />

      {/* Services Grid */}
      <ServicesGrid services={homeData.services} />

      {/* Stats Strip */}
      <StatsStrip stats={homeData.stats} />

      {/* Case Studies */}
      <div ref={caseStudiesRef}>
        <CaseStudies caseStudies={homeData.caseStudies} />
      </div>

      {/* Testimonials */}
      <Testimonials testimonials={homeData.testimonials} />

      {/* Final CTA */}
      <FinalCTA
        data={homeData.finalCTA}
        onOpenModal={handleOpenModal}
      />

      {/* Footer */}
      <Footer data={homeData.footer} />

      {/* Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        modalSteps={homeData.modalSteps}
      />
    </main>
  );
}