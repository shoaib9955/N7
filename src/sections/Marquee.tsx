const MarqueeItem = () => (
  <>
    <img
      src="/icons/Vector-6.png"
      alt=""
      className="w-[30px] h-[30px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px] lg:w-[58px] lg:h-[58px] opacity-30 flex-shrink-0"
    />

    <span
      className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[47px] font-medium leading-[120%] flex-shrink-0 whitespace-nowrap"
      style={{
        fontFamily: "Archivo",
        background: "linear-gradient(90deg,#00B4FD 0%,#003ACE 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      N7
    </span>

    <img
      src="/icons/Vector-6.png"
      alt=""
      className="w-[30px] h-[30px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px] lg:w-[58px] lg:h-[58px] opacity-30 flex-shrink-0"
    />

    <span
      className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[47px] font-semibold text-[#000D12] flex-shrink-0 whitespace-nowrap"
      style={{ fontFamily: "Archivo" }}
    >
      Say
    </span>

    <span className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[47px] flex-shrink-0">👋</span>

    <span
      className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[47px] font-semibold text-[#000D12] flex-shrink-0 whitespace-nowrap"
      style={{ fontFamily: "Archivo" }}
    >
      to the new way of banking
    </span>

    <img
      src="/icons/Vector-6.png"
      alt=""
      className="w-[30px] h-[30px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px] lg:w-[58px] lg:h-[58px] opacity-30 flex-shrink-0"
    />

    <span
      className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[47px] font-medium leading-[120%] flex-shrink-0 whitespace-nowrap"
      style={{
        fontFamily: "Archivo",
        background: "linear-gradient(90deg,#00B4FD 0%,#003ACE 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      CB7
    </span>

    <img
      src="/icons/Vector-6.png"
      alt=""
      className="w-[30px] h-[30px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px] lg:w-[58px] lg:h-[58px] opacity-30 flex-shrink-0"
    />
  </>
);

const Marquee = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-4 sm:py-5 lg:py-6">
      <div className="marquee-track flex items-center gap-4 sm:gap-5 lg:gap-6 w-max">
        {/* First copy */}
        <MarqueeItem />
        {/* Duplicate for seamless loop */}
        <MarqueeItem />
      </div>
    </section>
  );
};

export default Marquee;