import { Check } from "lucide-react";
import BackdropText from "@/components/ui/BackdropText";
import FeatureItem from "@/components/ui/FeatureItem";
import Image from "next/image";

export default function MobileBanking() {
  return (
    <section className="relative bg-[#E9F4F9] overflow-hidden">
      {/* Background N7 */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none">
        <BackdropText
          text="N7"
          stroke
          strokeColor="rgba(0, 87, 255, 0.18)"
          opacity={1}
          className="text-[200px] sm:text-[300px] md:text-[400px] lg:text-[500px] mt-5 sm:mt-8 lg:mt-10 leading-none"
        />
      </div>

     <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-20 xl:py-24">
        {/* ===================== FIRST ROW ===================== */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* LEFT */}
          <div className="max-w-[440px] w-full">
            <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] leading-[1.05] sm:leading-[1.08] tracking-[-1px] sm:tracking-[-2px] text-[#000D12]">
              Digital banking
              <br />
              out-of-the-box
            </h2>

            <p className="mt-4 sm:mt-6 text-[14px] sm:text-[16px] md:text-[18px] leading-[160%] text-[#000D12]/70">
              N7 helps your financial institution improve the client
              experience, automate and optimize procedures
            </p>

            <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <button className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 rounded-xl text-white font-medium text-sm sm:text-base bg-gradient-to-r from-[#00B4FD] to-[#003ACE]">
                REQUEST DEMO
              </button>

              <button className="text-[#0057FF] uppercase text-xs sm:text-sm tracking-wider border-b border-[#0057FF] pb-1">
                Learn More →
              </button>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex justify-center order-first lg:order-none">
            <Image
              src="/images/mobile-1.png"
              alt="Mobile Banking"
              width={340}
              height={600}
              className="w-[200px] sm:w-[260px] md:w-[300px] lg:w-[320px] xl:w-[340px] object-contain"
              unoptimized
            />
          </div>

          {/* RIGHT */}
          <div className="max-w-[303px] w-full">
            <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-medium text-[#000D12]">
              Fully compliant with regulatory requirement
            </h3>

            <p className="mt-4 sm:mt-6 md:mt-8 text-[#000D12]/70 leading-[170%] text-sm sm:text-base">
              The governance of risk management with regulations is
              achieved by our risk management framework that is fully
              integrated to work with digital bank’s operational-risk
              protocols and procedures.
            </p>

            <div className="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-6">
              {[
                "Pre-integrated Security System",
                "Fully Compliant With Regulatory Requirement",
                "Digitally Connected Core",
              ].map((item) => (
                <FeatureItem
                  key={item}
                  text={item}
                  theme="light"
                  variant="solid"
                />
              ))}
            </div>
          </div>
        </div>

        {/* ===================== SECOND ROW ===================== */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-20 items-center mt-12 sm:mt-16 md:mt-20 lg:mt-32 xl:mt-44">
          <div className="hidden md:block" />

          <div className="max-w-[303px] w-full">
            <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-medium text-[#000D12]">
              No legacy IT systems
            </h3>

            <p className="mt-4 sm:mt-6 md:mt-8 text-[#000D12]/70 leading-[170%] text-sm sm:text-base">
              Our Digital Banking solution and multilayered approach
              help financial institutions take advantage of digital
              transformation by ensuring customer trust and regulatory
              compliance.
            </p>

            <div className="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-6">
              {[
                "Adaptive & Intelligent API monetization",
                "Ambient User Experience",
                "Cloud-native With lower TCO",
              ].map((item) => (
                <FeatureItem
                  key={item}
                  text={item}
                  theme="light"
                  variant="solid"
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center order-first md:order-none">
            <Image
              src="/images/mobile-2.png"
              alt="Mobile Banking"
              width={340}
              height={600}
              className="w-[200px] sm:w-[260px] md:w-[300px] lg:w-[320px] xl:w-[340px] object-contain"
              unoptimized
            />
          </div>
        </div>

        {/* ===================== THIRD ROW ===================== */}
        {/* ===================== THIRD ROW ===================== */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-20 items-center mt-12 sm:mt-16 md:mt-20 lg:mt-32 xl:mt-44">

  {/* Empty column like row 2 */}
  <div className="hidden md:block" />

  {/* PHONE 3 - CENTER COLUMN */}
  <div className="flex justify-center order-first md:order-none">
    <Image
      src="/images/mobile-3.png"
      alt="Profile Mobile"
      width={320}
      height={600}
      className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[320px] object-contain"
      unoptimized
    />
  </div>

  {/* RIGHT CONTENT */}
  <div className="max-w-[303px] w-full">
    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-medium text-[#000D12]">
      No traditional branches
    </h3>

    <p className="mt-4 sm:mt-6 md:mt-8 text-[#000D12]/70 leading-[170%] text-sm sm:text-base">
      Our Digital Banking out-of-the-box helps you to accelerate
      innovation while reducing risks and optimising operational
      costs for a seamless branchless experience.
    </p>

    <div className="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-5 md:space-y-6">
      {[
        "Branchless & Paperless Banking",
        "Digital Transformation Capability",
        "Optimized, Adoptable and Scalable",
      ].map((item) => (
        <FeatureItem
          key={item}
          text={item}
          theme="light"
          variant="solid"
        />
      ))}
    </div>
  </div>
</div>
        {/* ===================== CTA SECTION ===================== */}
        <div className="mt-16 sm:mt-24 md:mt-32 lg:mt-44 pb-12 sm:pb-16 lg:pb-20">
          <div className="relative rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[28px] overflow-hidden bg-gradient-to-r from-[#031E2A] to-[#000D12] px-6 sm:px-10 md:px-12 lg:px-16 py-10 sm:py-14 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
            {/* Background N7 */}
            <BackdropText
              text="N7"
              opacity={0.03}
              className="inset-0 flex items-center justify-center text-[150px] sm:text-[250px] md:text-[320px] lg:text-[420px] text-white leading-none"
            />

            <div className="relative z-10 max-w-[620px] w-full text-center lg:text-left">
              <h2 className="text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-[1.1] sm:leading-[1.15]">
                Take the full advantage of
                <br />
                going paper-less now.
              </h2>

              <p className="mt-4 sm:mt-6 md:mt-8 text-white/70 text-sm sm:text-base md:text-lg leading-[170%]">
                N7 helps your financial institution improve the client
                experience, automate and optimize procedures, simplify
                banking operations.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 w-full sm:w-auto">
              <button className="border border-white rounded-xl px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-white uppercase text-sm sm:text-base">
                Contact Us
              </button>

              <button className="rounded-xl px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-white bg-gradient-to-r from-[#00B4FD] to-[#003ACE] uppercase text-sm sm:text-base">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}