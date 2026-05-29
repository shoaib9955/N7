import React from "react";

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
  tag?: string;
}

export default function SolutionCard({
  icon,
  title,
  description,
  tag,
}: SolutionCardProps) {
  return (
    <div className="max-w-full sm:max-w-[270px]">
      <div className="mb-6 flex items-center justify-between">
        <img
          src={icon}
          alt={title}
          className="h-[40px] w-[40px] sm:h-[47px] sm:w-[47px] object-contain"
        />

        {tag && (
          <span
            className="text-[13px] sm:text-[14px] uppercase text-[#E9F4F9]/60"
            style={{ fontFamily: "Chivo Mono" }}
          >
            {tag}
          </span>
        )}
      </div>

      <h3
        className="mb-4 sm:mb-6 text-[20px] sm:text-[22px] font-normal leading-[120%] text-[#E9F4F9]"
        style={{ fontFamily: "Archivo" }}
      >
        {title}
      </h3>

      <p
        className="text-[14px] sm:text-[16px] leading-[130%] text-[#E9F4F9]/70"
        style={{ fontFamily: "Archivo" }}
      >
        {description}
      </p>

      <div className="mt-6 sm:mt-8 flex items-center gap-[5px] group cursor-pointer w-max">
        <div className="relative">
          <span
            className="uppercase text-[13px] sm:text-[14px] text-[#00B4FD] group-hover:text-[#003ACE] transition-colors"
            style={{ fontFamily: "Chivo Mono" }}
          >
            Learn More
          </span>
          <div className="absolute left-0 -bottom-[4px] w-[32.58px] h-[1px] bg-[#00B4FD] group-hover:bg-[#003ACE] transition-colors" />
        </div>
        <span className="text-[#00B4FD] text-sm group-hover:text-[#003ACE] group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  );
}
