import Button from "@/components/ui/Button";
import BackdropText from "@/components/ui/BackdropText";

export default function CTA() {
  return (
    <section className="w-full bg-[#000D12] overflow-hidden px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-[1280px]">

        {/* CTA CARD */}
        <div
          className="relative overflow-hidden rounded-[16px] sm:rounded-[20px] lg:rounded-[27px] px-6 sm:px-10 md:px-12 lg:px-16 py-10 sm:py-14 md:py-16 lg:py-[64px]"
          style={{
            background:
              "linear-gradient(99.21deg, rgba(3,30,42,1) -12.22%, rgba(0,13,18,1) 59.26%)",
          }}
        >
          {/* CB7 Background */}
          <BackdropText 
            text="CB7"
            stroke
            opacity={0.5}
            className="top-[-80px] sm:top-[-120px] md:top-[-140px] lg:top-[-160px] right-[-40px] sm:right-0 text-[200px] sm:text-[300px] md:text-[400px] lg:text-[520px] xl:text-[572px] leading-[120%]"
          />

          {/* Content Layout */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            {/* LEFT CONTENT */}
            <div className="max-w-[608px]">
              <h2
                className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[53px] font-normal leading-[120%] tracking-[-0.01em] text-[#E9F4F9]"
                style={{ fontFamily: "Archivo" }}
              >
                Take the full advantage of
                <br />
                going paper-less now.
              </h2>

              <p
                className="mt-6 sm:mt-8 text-[14px] sm:text-[15px] md:text-[16px] leading-[130%] text-[#E9F4F9]/80 max-w-[607px]"
                style={{ fontFamily: "Archivo" }}
              >
                CB7 helps your financial institution improve the client
                experience, automate and optimize procedures, simplify banking
                operations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 lg:gap-[40px] w-full sm:w-auto">
              {/* CONTACT US */}
              <Button variant="outline" size="md">
                Contact Us
              </Button>

              {/* REQUEST DEMO */}
              <Button variant="primary" size="md">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}