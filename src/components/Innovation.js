export default function Innovation() {
  const metrics = [
    { value: '₹500Cr+', label: 'Annual R&D Investment' },
    { value: '15', label: 'Research Centers' },
    { value: '300+', label: 'Scientists & Researchers' }
  ]

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-0  min-h-[500px] md:min-h-[600px] lg:min-h-[800px] bg-[#F8F8F8]">
      <div className="relative overflow-hidden  h-[250px] sm:h-[300px] md:h-[400px] lg:h-auto order-1 lg:order-1">
        <img 
          src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800"
          alt="Innovation Lab"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="py-8 sm:py-12 md:py-16 lg:py-[120px] px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col justify-center order-2 lg:order-2">
        <div className="font-montserrat font-semibold text-xs tracking-[2px] md:tracking-[3px] uppercase text-[#A8D166] mb-4 md:mb-6">
          INNOVATION AT OUR CORE
        </div>
        
        <h2 className="font-montserrat font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight md:leading-[72px] text-[#1A4D2E] tracking-[-0.5px] md:tracking-[-1px] lg:tracking-[-1.5px] mb-6 md:mb-8">
          Research <span className="text-[#f1ce31]">That</span> Changes Lives
        </h2>
        
        <p className="text-sm sm:text-base md:text-lg leading-6 md:leading-8 text-[#666] max-w-full lg:max-w-[560px] mb-8 md:mb-12">
          Our commitment to innovation drives everything we do. With state-of-the-art research facilities and world-class scientists, we're pioneering solutions that address the most pressing challenges in global agriculture.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="flex-1 text-center sm:text-left">
              <div className="font-montserrat font-black text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-none text-[#F4B942] mb-1 md:mb-2">
                {metric.value}
              </div>
              <div className="font-inter text-xs md:text-sm text-[#666] font-semibold">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5">
          <button className="inline-flex items-center justify-center gap-2 md:gap-3 py-3 sm:py-4 md:py-[22px] px-6 sm:px-8 md:px-12 bg-[#F4B942] text-[#1A4D2E] border-none rounded-xl font-montserrat font-bold text-sm sm:text-base md:text-lg cursor-pointer transition-all duration-500 shadow-[0_8px_32px_rgba(244,185,66,0.4)] hover:scale-[1.08] hover:shadow-[0_12px_48px_rgba(244,185,66,0.6)]">
            Innovation Hub
            <i className="fas fa-arrow-right"></i>
          </button>
          
          <button className="py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 bg-transparent text-[#1A4D2E] border-[2px] sm:border-[3px] border-[#A8D166] rounded-xl font-montserrat font-bold text-sm sm:text-base cursor-pointer transition-all duration-500 hover:bg-[#A8D166] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(168,209,102,0.3)]">
            Sustainability Report
          </button>
        </div>
      </div>
    </section>
  )
}