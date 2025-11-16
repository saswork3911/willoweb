export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden flex items-center pt-10 md:pt-10">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full md:w-[65%] h-1/2 md:h-full md:transform md:skew-x-[-8deg] md:translate-x-[-5%] md:origin-top-left overflow-hidden z-[1]">
        <div className="absolute inset-0 md:transform md:skew-x-[8deg] md:translate-x-[5%] scale-110 md:origin-top-left">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://www.piindustries.com/wp-content/uploads/2025/06/home-hero-vid-mobile.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(26,77,46,0.3)] to-[rgba(168,209,102,0.2)]" />
        </div>
      </div>

      {/* Green Panel */}
      <div className="absolute top-auto bottom-0 md:top-0 md:bottom-auto md:-right-14  w-full md:w-1/2 h-1/2 md:h-full bg-[#1A4D2E] md:transform md:skew-x-[-10deg] md:translate-x-[8%] md:origin-top-right z-[2]" />

      {/* Content */}
      <div className="relative z-[3] mx-4 sm:mx-6 md:ml-auto md:mr-[60px] max-w-full md:max-w-[700px] py-8 sm:py-10 md:py-20 px-4 sm:px-6 md:px-[40px] md:transform md:skew-x-[10deg]">
        <div className="inline-block py-2 md:py-3 px-3 sm:px-4 md:px-6 bg-[rgba(168,209,102,0.2)] border-2 border-[#A8D166] rounded-[50px] text-[#A8D166] font-montserrat font-semibold text-xs tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase shadow-[0_0_24px_rgba(168,209,102,0.3)] mb-4 sm:mb-6 md:mb-8">
          PIONEERING INNOVATION
        </div>

        <h1 className="font-montserrat font-black text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight md:leading-[56px] text-white mb-4 sm:mb-6 md:mb-8 tracking-[-0.5px] sm:tracking-[-1px] md:tracking-[-1.5px] md:transform md:skew-x-[-10deg]">
          Transforming Agriculture for Tomorrow
        </h1>

        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed md:leading-[38px] text-white/90 mb-6 sm:mb-8 md:mb-12 max-w-full md:max-w-[600px] md:transform md:skew-x-[-10deg]">
          Leading the revolution in sustainable agriculture with breakthrough innovations that empower farmers
          and protect our planet for future generations.
        </p>

        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-start">
          <button className="inline-flex items-center gap-2 md:gap-3 py-3 sm:py-4 md:py-[22px] px-6 sm:px-8 md:px-12 bg-[#F4B942] text-[#1A4D2E] border-none rounded-xl font-montserrat font-bold text-sm sm:text-base md:text-lg cursor-pointer transition-all duration-500 shadow-[0_8px_32px_rgba(244,185,66,0.4)] hover:scale-[1.08] hover:shadow-[0_12px_48px_rgba(244,185,66,0.6)]">
            Discover Solutions
            <i className="fas fa-arrow-right"></i>
          </button>

          <button className="py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-12 bg-transparent text-white border-[2px] sm:border-[3px] border-white/80 rounded-xl font-montserrat font-bold text-sm sm:text-base md:text-lg cursor-pointer transition-all duration-500 hover:bg-white/10 hover:border-white hover:-translate-y-1">
            View Impact Report
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-10 inset-x-0 z-[5] flex flex-col items-center gap-2 text-white animate-bounce">
        <span className="font-montserrat font-semibold text-xs md:text-sm tracking-[2px] uppercase text-center">
          Scroll to Explore
        </span>
        <i className="fas fa-chevron-down text-lg md:text-2xl"></i>
      </div>
    </section>
  );
}
