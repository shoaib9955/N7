import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#000D12] min-h-screen">

      {/* Background Glow */}
      <div
        className="absolute right-[5%] sm:right-[10%] top-[10%] sm:top-[15%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full opacity-50"
        style={{
          background:
            "linear-gradient(103.43deg,#00B4FD -1.02%,#003ACE 83.53%)",
          filter: "blur(120px)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">

        {/* Hero */}
        <div className="pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-[140px] pb-[60px] sm:pb-[80px] md:pb-[100px] lg:pb-[120px]">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">

            {/* LEFT CONTENT */}
            <div>

              <h1
                className="
                  font-['Archivo']
                  font-medium
                  text-white
                  leading-[120%]
                  tracking-[-1%]
                  text-[32px] sm:text-[42px] md:text-[52px] lg:text-[67px]
                  max-w-[610px]
                "
              >
                The new foundation
                <br />
                of modern banking
              </h1>

              <p
                className="
                  mt-4 sm:mt-6
                  text-[#E9F4F9]
                  opacity-80
                  text-[14px] sm:text-[15px] md:text-[16px]
                  leading-[130%]
                  max-w-[356px]
                "
              >
                We drive innovation and growth, provide seamless
                customer experience and operational excellence
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10">

                <Button variant="primary" size="sm" className="sm:px-[51px]">
                  Request Demo
                </Button>

                <Button variant="outline" size="sm" className="sm:px-[51px]">
                  Contact Us
                </Button>

              </div>

              {/* Trusted */}
              <div className="mt-12 sm:mt-16 md:mt-20">

                <p
                  className="
                    text-white
                    opacity-70
                    text-[14px] sm:text-[15px] md:text-[16px]
                    font-medium
                    mb-4 sm:mb-5
                  "
                >
                  Trusted By:
                </p>

                <img
                  src="/images/Row.png"
                  alt="trusted"
                  className="
                    w-full
                    max-w-[400px] sm:max-w-[520px]
                    object-contain
                  "
                />

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="flex justify-center lg:justify-end order-first lg:order-none mt-8 lg:mt-0">

              <div
                className="
                  relative
                  w-full
                  max-w-[562px]
                  h-[250px] sm:h-[280px] md:h-[320px] lg:h-[301px]
                "
              >

                {/* Girl Image */}
                <img
                  src="/images/girl.png"
                  alt="girl"
                  className="
                    absolute
                    left-[10%] sm:left-[15%]
                    top-0
                    w-[60%] sm:w-[65%]
                    max-w-[280px] sm:max-w-[320px] md:max-w-[362px]
                    rounded-[20px] sm:rounded-[25px] md:rounded-[31px]
                    z-10
                  "
                />

                {/* Left Card */}
                <img
                  src="/images/HOME1.png"
                  alt="hero1"
                  className="
                    absolute
                    left-0
                    bottom-[5%] sm:bottom-[10%]
                    w-[40%] sm:w-[45%]
                    max-w-[180px] sm:max-w-[220px] md:max-w-[254px]
                    rounded-[10px] sm:rounded-[12px]
                    z-20
                    shadow-2xl
                  "
                />

                {/* Right Card */}
                <img
                  src="/images/HOME2.png"
                  alt="hero2"
                  className="
                    absolute
                    right-0
                    top-[3%] sm:top-[5%]
                    w-[30%] sm:w-[35%]
                    max-w-[140px] sm:max-w-[170px] md:max-w-[199px]
                    rounded-[9px] sm:rounded-[11px]
                    z-20
                    shadow-2xl
                  "
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}