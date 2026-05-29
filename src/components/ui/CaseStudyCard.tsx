import React from "react";

interface CaseStudyCardProps {
  imageSrc: string;
  imageAlt: string;
  category?: string;
  title: string;
  logoSrc: string;
  logoAlt?: string;
}

export default function CaseStudyCard({
  imageSrc,
  imageAlt,
  category = "Getting Started",
  title,
  logoSrc,
  logoAlt = "Logo",
}: CaseStudyCardProps) {
  return (
    <div className="relative z-20 w-full max-w-[1015px] rounded-[14px] sm:rounded-[16px] lg:rounded-[18px] bg-[#01141B] p-5 sm:p-6 lg:p-8">
      <div className="grid lg:grid-cols-[minmax(280px,420px)_1fr] gap-6 sm:gap-8 lg:gap-10 items-center">
        {/* Case Study Image */}
        <div className="h-[250px] sm:h-[300px] lg:h-[380px] rounded-[10px] sm:rounded-[12px] overflow-hidden bg-[#07193C]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <p
            className="uppercase tracking-[2px] text-[#00B4FD] text-[11px] sm:text-xs mb-4 sm:mb-6"
            style={{ fontFamily: "Chivo Mono" }}
          >
            {category}
          </p>

          <h3
            className="text-white text-[26px] sm:text-[34px] md:text-[42px] lg:text-[56px] leading-[110%] font-light max-w-[500px]"
            style={{ fontFamily: "Archivo" }}
          >
            {title}
          </h3>

          {/* Author/Partner Logo */}
          <div className="flex items-center gap-3 mt-6 sm:mt-8 text-[#6C8799]">
            <img
              src={logoSrc}
              alt={logoAlt}
              className="h-5 sm:h-6 w-auto"
            />
          </div>

          {/* Read More */}
          <button
            className="mt-8 sm:mt-10 lg:mt-12 w-full h-[45px] sm:h-[49px] rounded-[10px] border border-white/30 text-white uppercase text-[13px] sm:text-sm tracking-widest hover:border-[#00B4FD] transition cursor-pointer"
            style={{ fontFamily: "Chivo Mono" }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
