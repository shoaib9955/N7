import { ArrowRight } from "lucide-react";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import ArticleCard from "@/components/ui/ArticleCard";

const articles = [
  {
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
];

export default function Insights() {
  return (
    <section className="relative overflow-hidden bg-[#000D12] py-16 sm:py-20 lg:py-28">

      {/* Glow Ellipse */}
      <BackgroundGlow
        position="custom"
        color="gradient"
        opacity={0.1}
        blur="200px"
        size="557px"
        className="left-[5%] top-[10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[557px] lg:h-[557px]"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">

        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 sm:gap-12 lg:gap-16 items-start">

          {/* LEFT */}
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 text-center lg:text-left">
            <h2
              className="max-w-[463px] mx-auto lg:mx-0 text-[#E9F4F9] text-[28px] sm:text-[32px] md:text-[35px] lg:text-[37px] leading-[120%] tracking-[-0.01em]"
              style={{ fontFamily: "Archivo" }}
            >
              Get yourself up-to-speed on all the things happening in fintech
            </h2>

            <button
              className="mx-auto lg:mx-0 w-[190px] h-[49px] rounded-[10px] border border-[#E9F4F9] text-white uppercase text-[14px] sm:text-[15px] transition hover:bg-white hover:text-black"
              style={{ fontFamily: "Chivo Mono" }}
            >
              Insights
            </button>
          </div>

          {/* RIGHT */}
          <div className="space-y-6 sm:space-y-8">

            {/* Featured Card */}
            <ArticleCard
              featured
              imageSrc="/images/insight.png"
              title="How to transition from a traditional to a digital bank"
              author="David Grohl"
              date="17/08/24"
            />

            {/* Bottom Cards */}
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
              {articles.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  author={article.author}
                  date={article.date}
                />
              ))}
            </div>

            {/* Bottom Link */}
            <div className="flex justify-center sm:justify-end">
              <button
                className="flex items-center gap-3 text-[#00B4FD] uppercase text-[13px] sm:text-[14px] transition hover:opacity-80"
                style={{ fontFamily: "Chivo Mono" }}
              >
                Read All Insights
                <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}