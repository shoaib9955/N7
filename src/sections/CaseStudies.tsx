import { ArrowLeft, ArrowRight } from "lucide-react";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

export default function CaseStudies() {
  return (
    <section className="relative overflow-hidden bg-[#000D12] py-16 sm:py-20 lg:py-24 xl:py-32">
      {/* Background Glow */}
      <BackgroundGlow
        position="custom"
        color="gradient"
        opacity={0.1}
        blur="200px"
        size="600px"
        className="left-[-100px] sm:left-[-150px] top-[120px] w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px]"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
        {/* Heading */}
        <h2
          className="text-center text-white text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] leading-[120%] font-light mb-10 sm:mb-14 lg:mb-20"
          style={{ fontFamily: "Archivo" }}
        >
          Our Case Studies
        </h2>

        {/* Slider Wrapper */}
        <div className="relative flex justify-center items-center">
          {/* Left Hidden Card */}
          <div className="hidden xl:block absolute left-[60px] top-[35px] w-[1015px] h-[438px] rounded-[18px] bg-[#01141B] opacity-20" />

          {/* Right Hidden Card */}
          <div className="hidden xl:block absolute right-[60px] top-[35px] w-[1015px] h-[438px] rounded-[18px] bg-[#01141B] opacity-20" />

          {/* Main Card */}
          <CaseStudyCard
            imageSrc="/images/insight.png"
            imageAlt="Zoomerr"
            category="Getting Started"
            title="How we help brand reach out to more people"
            logoSrc="/images/logo.png"
            logoAlt="Zoomerr"
          />
        </div>

        {/* Navigation */}
        <div className="mt-10 sm:mt-12 lg:mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-12">
          {/* Controls */}
          <div className="flex items-center gap-5 sm:gap-[31px]">
            {/* Prev */}
            <button className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full border border-[#00B4FD] flex items-center justify-center hover:bg-[#00B4FD]/10 transition">
              <ArrowLeft
                size={16}
                className="text-[#00B4FD] sm:w-[18px] sm:h-[18px]"
              />
            </button>

            {/* Indicators */}
            <div className="flex items-center gap-2">
              <div className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-full border border-[#0B4B63]" />

              <div className="w-[32px] sm:w-[40px] h-[10px] sm:h-[12px] rounded-full bg-[#0F6D8E]" />

              <div className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-full border border-[#0B4B63]" />

              <div className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-full border border-[#0B4B63]" />
            </div>

            {/* Next */}
            <button className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full border border-[#00B4FD] flex items-center justify-center hover:bg-[#00B4FD]/10 transition">
              <ArrowRight
                size={16}
                className="text-[#00B4FD] sm:w-[18px] sm:h-[18px]"
              />
            </button>
          </div>

          {/* View All */}
          <button className="group flex flex-col gap-[3px]">
            <div className="flex items-center gap-[14px]">
              <span
                className="text-[#00B4FD] uppercase text-[13px] sm:text-[14px]"
                style={{ fontFamily: "Chivo Mono" }}
              >
                View All
              </span>

              <ArrowRight
                size={14}
                className="text-[#00B4FD]"
              />
            </div>

            <div className="h-[1px] w-full bg-[#00B4FD]" />
          </button>
        </div>
      </div>
    </section>
  );
}