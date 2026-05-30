import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";

interface FeatureItemProps {
  text: string;
  theme?: "dark" | "light";
  variant?: "gradient" | "solid";
  className?: string;
}

export default function FeatureItem({
  text,
  theme = "dark",
  variant = "gradient",
  className = "",
}: FeatureItemProps) {
  // Styles for light and dark themes
  const textStyles =
    theme === "dark"
      ? "text-[13px] sm:text-[14px] leading-[130%] text-[#E9F4F9] opacity-80"
      : "text-[#000D12]/70 text-sm sm:text-base";

  return (
    <div className={`flex items-start gap-3 sm:gap-4 text-left ${className}`}>
      {/* Bullet / Check Icon container */}
      {variant === "gradient" ? (
        <div
          className="flex h-[18.5px] w-[18.5px] shrink-0 items-center justify-center rounded-full mt-[2px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,180,253,1) 0%, rgba(0,58,206,1) 100%)",
          }}
        >
          <Image
            src="/icons/check.png"
            alt="check"
            width={9}
            height={7}
            className="h-[7px] w-[9px]"
            unoptimized
          />
        </div>
      ) : (
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0057FF] flex items-center justify-center flex-shrink-0 mt-0.5">
          <Check size={14} className="text-white" />
        </div>
      )}

      {/* Feature Text */}
      <span className={textStyles} style={{ fontFamily: "Archivo, sans-serif" }}>
        {text}
      </span>
    </div>
  );
}
