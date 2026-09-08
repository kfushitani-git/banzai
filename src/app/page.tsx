"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import SeminarSection from "@/components/SeminarSection";
import HandsOnSection from "@/components/HandsOnSection";
import CurriculumSection from "@/components/CurriculumSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import AiDiagnosisModal from "@/components/AiDiagnosisModal";
import FloatingWidgets from "@/components/FloatingWidgets";
import InstructorSection from "@/components/InstructorSection";
import { SEMINAR_FORM_URL } from "@/lib/site";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isDiagnosisModalOpen, setIsDiagnosisModalOpen] = useState(false);
  const [diagnosisData, setDiagnosisData] = useState<{
    workTimeSaved?: string;
    recommendedPlan?: string;
    focusArea?: string;
    companyScale?: string;
  } | null>(null);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleOpenSeminar = () => {
    if (typeof window !== "undefined") {
      window.open(SEMINAR_FORM_URL, "_blank", "noopener,noreferrer");
    }
  };

  const handleOpenDiagnosis = () => {
    setIsDiagnosisModalOpen(true);
  };

  const handleApplyWithDiagnosis = (result: {
    workTimeSaved: string;
    recommendedPlan: string;
    focusArea: string;
    companyScale: string;
  }) => {
    setDiagnosisData(result);
    setIsDiagnosisModalOpen(false);
    setIsBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col selection:bg-red-100 selection:text-red-950">
      {/* Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenDiagnosis={handleOpenDiagnosis}
      />

      {/* Hero Section (Okayama & Google Workspace Focus) */}
      <HeroSection
        onOpenBooking={handleOpenBooking}
        onOpenDiagnosis={handleOpenDiagnosis}
      />

      {/* Instructor Certification & Track Record (Google AI Professional & 6 Companies / 60 Trained) */}
      <InstructorSection />

      {/* Problem / Pain Points */}
      <PainPointsSection />

      {/* Free intro seminar (9/24) */}
      <SeminarSection onOpenSeminar={handleOpenSeminar} />

      {/* Hands-on Onsite Training Values (Okayama Office Dispatch) */}
      <HandsOnSection
        onOpenBooking={handleOpenBooking}
      />

      {/* Curriculum (Google Workspace + Claude Code) */}
      <CurriculumSection />

      {/* Pricing & Subsidies (Masked Pricing & 2 Plans) */}
      <PricingSection
        onOpenBooking={handleOpenBooking}
      />

      {/* 4-Step Process */}
      <ProcessSection />

      {/* FAQ */}
      <FaqSection />

      {/* Final Closing CTA */}
      <FinalCtaSection
        onOpenBooking={handleOpenBooking}
        onOpenDiagnosis={handleOpenDiagnosis}
      />

      {/* Footer (FUSHITANI Co., Ltd.) */}
      <Footer />

      {/* Floating Seminar Banner & Diagnosis Button (Fixed Bottom-Right) */}
      <FloatingWidgets
        onOpenDiagnosisModal={handleOpenDiagnosis}
        onOpenSeminar={handleOpenSeminar}
      />

      {/* 30-Sec Interactive AI Diagnosis Modal */}
      <AiDiagnosisModal
        isOpen={isDiagnosisModalOpen}
        onClose={() => setIsDiagnosisModalOpen(false)}
        onApplyWithDiagnosis={handleApplyWithDiagnosis}
      />

      {/* Consultation Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        type="booking"
        initialData={diagnosisData}
      />
    </main>
  );
}
