import SolutionCard from "@/components/ui/SolutionCard";

export default function Solutions() {
  const solutions = [
    {
      icon: "/icons/Vector.png",
      title: "Core Banking CB7",
      description:
        "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    },
    {
      icon: "/icons/Vector-4.png",
      title: "Digital Banking N7",
      description:
        "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    },
    {
      icon: "/icons/Vector-2.png",
      title: "Open Banking",
      description:
        "Our API banking helps you gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    },
    {
      icon: "/icons/Group.png",
      title: "Loan Origination System",
      tag: "NBFC",
      description:
        "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    },
    {
      icon: "/icons/Vector-3.png",
      title: "Loan Management System",
      tag: "NBFC",
      description:
        "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#000D12] py-16 sm:py-20 lg:py-28">
      {/* Blue Glow */}
      <div className="absolute right-0 top-1/2 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] -translate-y-1/2 rounded-full bg-[#00B4FD]/20 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-12 sm:gap-14 lg:gap-16 lg:grid-cols-[420px_1fr]">
          {/* Left Side */}
          <div className="text-center lg:text-left">
            <h2
              className="max-w-[433px] mx-auto lg:mx-0 text-[28px] sm:text-[32px] md:text-[35px] lg:text-[37px] leading-[120%] tracking-[-0.01em] text-[#E9F4F9]"
              style={{ fontFamily: "Archivo" }}
            >
              All of our solutions are tailor-made to your needs
            </h2>

            <button
              className="mt-8 sm:mt-10 rounded-[10px] border border-[#E9F4F9] px-10 sm:px-[59px] py-[15px] text-[14px] sm:text-[15px] uppercase text-white transition hover:bg-white hover:text-black"
              style={{ fontFamily: "Chivo Mono" }}
            >
              Request Demo
            </button>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 md:gap-x-16 lg:gap-x-20 gap-y-12 sm:gap-y-14 lg:gap-y-16">
            {solutions.map((item, index) => (
              <SolutionCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                tag={item.tag}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}