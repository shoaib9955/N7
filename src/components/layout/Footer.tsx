import { ArrowRight } from "lucide-react";
import FooterOfficeCard from "@/components/ui/FooterOfficeCard";

const solutions = [
  "Core Banking CB7",
  "Digital Banking N7",
  "Open Banking",
  "Loan Origination System",
  "Loan Management System",
  "Digital Transformation",
];

const bankingLinks = [
  "About Us",
  "Solutions",
  "Contact",
  "Company",
  "Careers",
  "Insights",
  "Core Team",
  "Brand Center",
];

export default function Footer() {
  return (
    <footer className="relative bg-[#000D12] overflow-hidden">
      {/* Blue Glow */}
      <div className="absolute left-[120px] bottom-[-150px] w-[500px] h-[500px] rounded-full bg-[#013ACF]/10 blur-[120px]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[53px] pt-20 lg:pt-[90px] pb-10">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-16 lg:gap-[70px]">
          {/* LOGO */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/images/logo1.png"
              alt="N7"
              className="w-[240px] md:w-[320px] lg:w-[405px] h-auto"
            />
          </div>

          {/* ADDRESSES */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-[70px]">
            <FooterOfficeCard
              city="London"
              address={
                <>
                  Linktia Infosystems Ltd – CB7,
                  <br />
                  26 Main Road Sundridge,
                  TN14 6EP,
                  <br />
                  England, United Kingdom.
                </>
              }
            />

            <FooterOfficeCard
              city="Dubai"
              address={
                <>
                  Linktia Infosystems Ltd –
                  CB7, Jumeirah Business Center 5
                  Cluster W, Jumeirah Lakes Towers,
                  Dubai, United Arab Emirates
                </>
              }
            />

            <FooterOfficeCard
              city="Pune"
              address={
                <>
                  Linktia Infosystems Ltd –
                  CB7, Nirmal, Anand Nagar,
                  Suncity Road, Pune,
                  Maharashtra, 411041, India
                </>
              }
            />
          </div>
        </div>

        {/* BOTTOM LINKS */}
        <div className="mt-16 lg:mt-[90px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[420px_1fr] gap-16 lg:gap-[70px]">
          <div />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-[70px]">
            {/* SOLUTIONS */}
            <div>
              <h4 className="text-white text-[18px] mb-6">Solutions</h4>

              <div className="space-y-4">
                {solutions.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="group flex items-center justify-between text-white/60 hover:text-[#00B4FD] transition-colors"
                  >
                    <span className="text-[16px]">{item}</span>

                    <ArrowRight
                      size={16}
                      className="text-[#00B4FD]"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* N7 BANKING */}
            <div>
              <h4 className="text-white text-[18px] mb-6">N7 Banking</h4>

              <div className="space-y-4">
                {bankingLinks.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="group flex items-center justify-between text-white/60 hover:text-[#00B4FD] transition-colors"
                  >
                    <span className="text-[16px]">{item}</span>

                    <ArrowRight
                      size={16}
                      className="text-[#00B4FD]"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* SOCIALS */}
            <div>
              <h4 className="text-white text-[18px] mb-6">Our Socials</h4>

              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center justify-between text-white/60 hover:text-[#00B4FD]"
                >
                  <span className="text-[16px]">LinkedIn</span>
                  <ArrowRight size={16} className="text-[#00B4FD]" />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between text-white/60 hover:text-[#00B4FD]"
                >
                  <span className="text-[16px]">X</span>
                  <ArrowRight size={16} className="text-[#00B4FD]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 lg:mt-[80px] text-center">
          <p
            className="text-white/30 text-[14px] leading-[130%] max-w-[780px] mx-auto"
            style={{
              fontFamily: "Archivo, sans-serif",
            }}
          >
            Copyright © 2022 by Linktia Infosystems Limited —
            [CB7 and N7 as Commercial Brand] —
            [Registered under the Companies Act 2006 in England and Wales |
            Number of Incorporation 13100992]
          </p>
        </div>
      </div>
    </footer>
  );
}