import BackdropText from "@/components/ui/BackdropText";
import LaptopMockup from "@/components/ui/LaptopMockup";
import FeatureItem from "@/components/ui/FeatureItem";
import Image from "next/image";

export default function CoreBanking() {
  const features = [
    "Customer-On Boarding",
    "Managing deposits and withdrawals",
    "Transaction management",
    "Interest Calculation",
    "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
    "CRM Activities",
    "Configuring New Banking Products",
    "Loan disbursal and Loan management",
    "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#000D12] px-5 py-16 sm:px-8 md:px-12 lg:px-16 lg:py-20 xl:px-20 xl:min-h-[1177px]">
      {/* Background CB7 */}
      <BackdropText
        text="CB7"
        opacity={0.05}
        className="left-[-30px] top-[40px] text-[100px] leading-none text-[#00B4FD] sm:text-[180px] md:text-[260px] lg:text-[380px] xl:top-[60px] xl:text-[520px]"
      />

      {/* ===== TOP ROW: Left Content + Top Laptop ===== */}
      <div className="relative z-20 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10 xl:gap-0">
        {/* LEFT CONTENT */}
        <div className="flex w-full max-w-[607px] flex-col gap-4 text-center lg:text-left xl:pt-[76px]">
          <h2
            className="text-[28px] font-normal leading-[120%] tracking-[-0.01em] text-[#E9F4F9] sm:text-[36px] md:text-[44px] lg:text-[48px] xl:text-[53px]"
            style={{ fontFamily: "Archivo" }}
          >
            A complete cloud-based
            <br />
            core banking.
          </h2>

          <p
            className="mx-auto max-w-[327px] text-[14px] leading-[130%] text-[#E9F4F9] opacity-80 sm:text-[16px] lg:mx-0"
            style={{ fontFamily: "Archivo" }}
          >
            Faster time to market with our cloud-based core banking services
          </p>

          <button
            className="mx-auto mt-2 h-[49px] w-[210px] rounded-[10px] text-[15px] uppercase text-white transition-transform hover:scale-105 lg:mx-0"
            style={{
              fontFamily: "Chivo Mono",
              background:
                "linear-gradient(90deg, rgba(0,180,253,1) 0%, rgba(0,58,206,1) 100%)",
            }}
          >
            REQUEST DEMO
          </button>

          <div className="mt-1 flex justify-center lg:justify-start">
            <div className="flex items-center gap-[5px] border-b border-[#00B4FD] pb-[2px]">
              <span
                className="text-[14px] uppercase text-[#00B4FD]"
                style={{ fontFamily: "Chivo Mono" }}
              >
                LEARN MORE
              </span>

              <Image
                src="/icons/arrow.png"
                alt="arrow"
                width={8}
                height={8}
                className="h-[8px] w-[8px]"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* TOP LAPTOP FRAME */}
        <LaptopMockup
          imageSrc="/images/dashboard-top.png"
          imageAlt="Dashboard overview"
          className="xl:-mr-[100px]"
        />
      </div>

      {/* ===== BOTTOM ROW: Bottom Laptop + Right Content ===== */}
      <div className="relative z-20 mt-10 flex flex-col-reverse items-center gap-8 lg:mt-16 lg:flex-row lg:items-start lg:justify-between lg:gap-10 xl:mt-20 xl:gap-0">
        {/* BOTTOM LAPTOP FRAME */}
        <LaptopMockup
          imageSrc="/images/dashboard-bottom.png"
          imageAlt="Dashboard details"
          className="xl:-ml-[100px]"
        />

        {/* RIGHT CONTENT */}
        <div className="flex w-full max-w-[590px] flex-col gap-[14px] text-center lg:text-left">
          <h3
            className="mx-auto max-w-[495px] text-[20px] font-normal leading-[130%] text-[#E9F4F9] sm:text-[23px] md:text-[25px] lg:mx-0 xl:text-[27px]"
            style={{ fontFamily: "Archivo" }}
          >
            Run a more efficient, flexible, and digitally connected corebanking
            system
          </h3>

          <p
            className="text-[14px] font-semibold text-white"
            style={{ fontFamily: "Archivo" }}
          >
            What you will get:
          </p>

          <div className="grid grid-cols-1 gap-x-[29px] gap-y-[10px] sm:grid-cols-2">
            {features.map((item, index) => (
              <FeatureItem
                key={index}
                text={item}
                theme="dark"
                variant="gradient"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}