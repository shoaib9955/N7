import Button from "@/components/ui/Button";

export default function PaperlessCTA() {
  return (
    <section className="bg-[#000D12] px-4 sm:px-6 md:px-8 lg:px-20 pb-16 sm:pb-20 lg:pb-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="rounded-[14px] sm:rounded-[16px] lg:rounded-[18px] bg-[#000D12] border border-[#021A24] px-6 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-12 md:py-16 lg:py-[57px]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 sm:gap-10 lg:gap-12">
            {/* Left Content */}
            <div className="max-w-[608px] space-y-6 sm:space-y-8">
              <h2
                className="
                  text-white
                  font-normal
                  leading-[120%]
                  tracking-[-1%]
                  text-[32px]
                  sm:text-[36px]
                  md:text-[56px]
                  lg:text-[72px]
                "
                style={{
                  fontFamily: "Archivo, sans-serif",
                }}
              >
                Take the full advantage of
                <br />
                going paper-less now.
              </h2>

              <p
                className="
                  text-[#A4B4BD]
                  text-base
                  md:text-lg
                  leading-[150%]
                  max-w-[540px]
                "
              >
                CB7 helps your financial institution improve the client
                experience, automate and optimize procedures, simplify
                banking operations
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start lg:items-center gap-6 lg:gap-10">
              <Button variant="outline" size="md" className="w-full sm:w-auto min-w-[190px]">
                Contact Us
              </Button>

              <Button variant="primary" size="md" className="w-full sm:w-auto min-w-[190px]">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}