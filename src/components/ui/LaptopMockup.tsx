import React from "react";
import Image from "next/image";

interface LaptopMockupProps {
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export default function LaptopMockup({
  imageSrc,
  imageAlt,
  className = "",
}: LaptopMockupProps) {
  return (
    <div className={`w-full max-w-[320px] flex-shrink-0 sm:max-w-[450px] md:max-w-[550px] lg:max-w-[480px] xl:max-w-[651px] ${className}`}>
      <div className="relative aspect-[652/461] w-full rounded-t-[10px] border border-[#00B4FD] sm:rounded-t-[12px] xl:rounded-t-[15.77px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="absolute left-[1.6%] top-[1.6%] h-[88.6%] w-[96.8%] object-cover opacity-80"
          unoptimized
        />

        {/* Laptop base */}
        <div className="absolute bottom-0 left-[-8.8%] h-[6.6%] w-[117.6%] translate-y-full rounded-t-[5px] rounded-b-[10px] border border-[#00B4FD] xl:rounded-t-[5.26px] xl:rounded-b-[14.72px]" />
      </div>
      {/* Spacer for laptop base */}
      <div className="h-[30px]" />
    </div>
  );
}
