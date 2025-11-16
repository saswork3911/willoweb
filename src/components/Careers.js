export default function Careers() {
  const benefits = [
    'Innovation Culture',
    'Global Opportunities', 
    'Continuous Learning',
    'Impact-Driven Work'
  ]

  const images = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600',
    'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400'
  ]

  return (
    <section className="py-16 sm:py-20 md:py-20 lg:py-[50px] px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#F8F8F8] to-white">
      <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 sm:gap-12 lg:gap-20 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(26,77,46,0.1)] hover:-translate-y-2 transition-transform duration-500 sm:row-span-2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
            <img 
              src={images[0]}
              alt="Team Collaboration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(26,77,46,0.1)] hover:-translate-y-2 transition-transform duration-500 h-[180px] sm:h-[145px] md:h-[190px] lg:h-[238px]">
            <img 
              src={images[1]}
              alt="Research Lab"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(26,77,46,0.1)] hover:-translate-y-2 transition-transform duration-500 h-[180px] sm:h-[145px] md:h-[190px] lg:h-[238px]">
            <img 
              src={images[2]}
              alt="Innovation Workshop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="font-montserrat font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight md:leading-[72px] text-[#1A4D2E] tracking-[-0.5px] md:tracking-[-1px] lg:tracking-[-1.5px] mb-4 sm:mb-6 md:mb-8">
            Join Our  <span className="text-[#f1ce31]">Journey</span> 
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg leading-6 md:leading-8 text-[#666] mb-6 sm:mb-8 md:mb-10">
            Be part of a team that&apos;s shaping the future of agriculture. We offer a culture of innovation, continuous learning, and meaningful impact. Join us in making a difference for farmers and our planet.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 bg-[rgba(168,209,102,0.1)] border-2 border-[#A8D166] rounded-xl font-montserrat font-bold text-xs sm:text-sm md:text-base text-[#1A4D2E] text-center hover:bg-[#A8D166] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                {benefit}
              </div>
            ))}
          </div>

          <button className="inline-flex items-center gap-2 md:gap-3 py-3 sm:py-4 md:py-[22px] px-6 sm:px-8 md:px-12 bg-[#F4B942] text-[#1A4D2E] border-none rounded-xl font-montserrat font-bold text-sm sm:text-base md:text-lg cursor-pointer transition-all duration-500 shadow-[0_8px_32px_rgba(244,185,66,0.4)] hover:scale-[1.08] hover:shadow-[0_12px_48px_rgba(244,185,66,0.6)]">
            Explore Careers
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  )
}