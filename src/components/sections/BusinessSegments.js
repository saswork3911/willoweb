import { AuroraTextEffect } from "../lightswind/aurora-text-effect";
import Image from "next/image";
export default function BusinessSegments() {
  const segments = [
    {
      title: "Crop Protection",
      description:
        "Revolutionary formulations that maximize crop yields while minimizing environmental impact.",
      icon: "fas fa-seedling",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600"
    },
    {
      title: "Precision Agriculture",
      description: "AI-powered insights and IoT solutions for data-driven farming decisions.",
      icon: "fas fa-microchip",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600"
    },
    {
      title: "Biosciences R&D",
      description: "Pioneering research in plant biology and sustainable chemistry.",
      icon: "fas fa-flask",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600"
    }
  ];

  return (
    <section className="py-10 sm:py-10 md:py-10 lg:py-[50px] px-4 sm:px-6 md:px-12 lg:px-10 bg-white">
      <div className="text-center mb-12 md:mb-16 lg:mb-20">
        <div className="font-montserrat font-semibold text-xs tracking-[2px] md:tracking-[3px] uppercase text-[#A8D166] mb-3 md:mb-4">
          OUR EXPERTISE
        </div>
        <h2 className="font-montserrat font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight md:leading-[72px] text-[#1A4D2E] tracking-[-0.5px] md:tracking-[-1px] lg:tracking-[-1.5px] mb-4 md:mb-6 px-4">
          {/* Integrated Business Ecosystem */}
          <div className="bg-white">
            <AuroraTextEffect
              text="Integrated Business Ecosystem"
              className="bg-white"
              fontSize="clamp(3rem, 5vw, 4rem)"
              colors={{
                // first: "bg-cyan-400",
                second: "bg-yellow-400",
                third: "bg-green-400",
                // fourth: "bg-purple-500"
              }}
              blurAmount="blur-lg"
            />
          </div>
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-6 md:leading-8 text-[#666] max-w-full md:max-w-[700px] mx-auto px-4">
          Delivering cutting-edge solutions across the agricultural value chain with innovation at our core
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr] gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
        {segments.map((segment, index) => (
          <div
            key={index}
            className={`relative rounded-2xl overflow-hidden h-[350px] sm:h-[400px] md:h-[500px] lg:h-[375px] cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_24px_64px_rgba(26,77,46,0.25)] shadow-[0_16px_48px_rgba(26,77,46,0.15)] group ${index === 0 ? "md:col-span-2 xl:col-span-1" : ""
              }`}
          >
            <Image
              src={segment.image}
              alt={segment.title}
              width={600}
              height={400}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,77,46,0.8)] to-[rgba(26,77,46,0.3)] group-hover:from-[rgba(168,209,102,0.4)] group-hover:to-[rgba(26,77,46,0.9)] transition-all duration-500" />

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12 text-white z-[2]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[rgba(168,209,102,0.2)] border-2 border-[#A8D166] rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 transition-all duration-500 group-hover:bg-[#A8D166] group-hover:rotate-[360deg]">
                <i
                  className={`${segment.icon} text-lg sm:text-xl md:text-2xl lg:text-[32px] text-[#A8D166] group-hover:text-[#1A4D2E] transition-colors duration-500`}
                ></i>
              </div>

              <h3 className="font-montserrat font-bold text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-6 md:leading-8 lg:leading-10 mb-2 sm:mb-3 md:mb-4">
                {segment.title}
              </h3>

              <p className="text-xs sm:text-sm md:text-base leading-4 sm:leading-5 md:leading-[26px] opacity-90 mb-3 sm:mb-4 md:mb-6">
                {segment.description}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 font-montserrat font-bold text-xs sm:text-sm md:text-base text-[#F4B942] group-hover:gap-4 transition-all duration-300"
              >
                Explore Solutions
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-[#A8D166] to-[#1A4D2E] p-6 sm:p-8 md:p-12 lg:p-12 text-center rounded-2xl md:rounded-3xl shadow-[0_24px_64px_rgba(26,77,46,0.2)]">
        <h2 className="font-montserrat font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-tight md:leading-[56px] text-white mb-6 md:mb-8 px-4">
          Delivering Excellence Across Every Touchpoint
        </h2>
        <button className="inline-flex items-center gap-2 md:gap-3 py-3 sm:py-4 md:py-[22px] px-6 sm:px-8 md:px-12 bg-[#F4B942] text-[#1A4D2E] border-none rounded-xl font-montserrat font-bold text-sm sm:text-base md:text-lg cursor-pointer transition-all duration-500 shadow-[0_8px_32px_rgba(244,185,66,0.4)] hover:scale-[1.08] hover:shadow-[0_12px_48px_rgba(244,185,66,0.6)]">
          View All Solutions
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
}
