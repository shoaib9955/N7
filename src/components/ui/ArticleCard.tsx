import React from "react";

interface ArticleCardProps {
  title: string;
  author: string;
  date: string;
  category?: string;
  featured?: boolean;
  imageSrc?: string;
}

export default function ArticleCard({
  title,
  author,
  date,
  category = "Getting Started",
  featured = false,
  imageSrc,
}: ArticleCardProps) {
  if (featured && imageSrc) {
    return (
      <div className="rounded-[14px] sm:rounded-[16px] lg:rounded-[18px] bg-[#01141B] p-5 sm:p-6 lg:p-8">
        <div className="grid md:grid-cols-[minmax(200px,295px)_1fr] gap-6 sm:gap-8 items-center">
          {/* Image */}
          <div className="w-full h-[200px] sm:h-[240px] md:h-[267px] bg-[#07193C] rounded-[8px] overflow-hidden">
            <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <p
                className="uppercase text-[#00B4FD] mb-3 sm:mb-4 text-[11px] sm:text-[12px] tracking-[2px]"
                style={{ fontFamily: "Chivo Mono" }}
              >
                {category}
              </p>

              <h3
                className="text-[#E9F4F9] max-w-[289px] text-[22px] sm:text-[25px] lg:text-[27px] leading-[120%]"
                style={{ fontFamily: "Archivo" }}
              >
                {title}
              </h3>

              <div
                className="flex gap-4 mt-4 sm:mt-5 text-[#5A91AD] text-[13px] sm:text-[14px]"
                style={{ fontFamily: "Archivo" }}
              >
                <span>{author}</span>
                <span>{date}</span>
              </div>
            </div>

            <button
              className="mt-6 sm:mt-8 h-[44px] sm:h-[48px] rounded-[10px] border border-[#5A91AD] text-[#5A91AD] uppercase text-[13px] sm:text-[14px] transition hover:bg-[#5A91AD]/10 cursor-pointer"
              style={{ fontFamily: "Chivo Mono" }}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[14px] sm:rounded-[16px] lg:rounded-[18px] bg-[#01141B] p-6 sm:p-7 lg:p-8 min-h-[280px] sm:min-h-[300px] lg:min-h-[320px] flex flex-col justify-between">
      <div>
        <p
          className="uppercase text-[#00B4FD] mb-4 sm:mb-5 text-[11px] sm:text-[12px] tracking-[2px]"
          style={{ fontFamily: "Chivo Mono" }}
        >
          {category}
        </p>

        <h3
          className="text-[#E9F4F9] text-[22px] sm:text-[25px] lg:text-[27px] leading-[120%]"
          style={{ fontFamily: "Archivo" }}
        >
          {title}
        </h3>

        <div
          className="flex gap-4 mt-4 sm:mt-5 text-[#5A91AD] text-[13px] sm:text-[14px]"
          style={{ fontFamily: "Archivo" }}
        >
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>

      <button
        className="mt-6 sm:mt-8 h-[44px] sm:h-[48px] rounded-[10px] border border-[#5A91AD] text-[#5A91AD] uppercase text-[13px] sm:text-[14px] transition hover:bg-[#5A91AD]/10 cursor-pointer"
        style={{ fontFamily: "Chivo Mono" }}
      >
        Read More
      </button>
    </div>
  );
}
