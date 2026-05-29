import React from "react";

interface FooterOfficeCardProps {
  city: string;
  address: string | React.ReactNode;
}

export default function FooterOfficeCard({
  city,
  address,
}: FooterOfficeCardProps) {
  return (
    <div>
      <h4 className="text-white text-[18px] mb-4">{city}</h4>
      <p className="text-white/60 text-[16px] leading-[140%]">
        {address}
      </p>
    </div>
  );
}
