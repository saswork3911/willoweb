'use client'
import { useState, useEffect } from 'react'

export default function Sustainability() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(45), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex flex-col lg:flex-row overflow-hidden">
      {/* Background Image */}
      <div className="absolute lg:relative top-0 left-0 w-full lg:w-[65%] h-[250px] sm:h-[300px] md:h-[350px] lg:h-full z-[1] lg:flex lg:items-center">
        <img 
          src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200"
          alt="Sustainable Agriculture"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,77,46,0.7)] to-[rgba(26,77,46,0.4)]" />
      </div>

      {/* Content Card */}
      <div className="relative z-[2] w-full lg:flex lg:items-center lg:justify-end lg:flex-1">
        <div className="w-full lg:max-w-[700px] bg-white/95 backdrop-blur-[20px] p-4 sm:p-6 md:p-8 lg:p-20 mx-4 sm:mx-6 lg:mr-20 mt-[-60px] sm:mt-[-80px] lg:mt-0 rounded-2xl md:rounded-3xl shadow-[0_24px_64px_rgba(26,77,46,0.2)]">
          <div className="font-montserrat font-semibold text-xs tracking-[2px] md:tracking-[3px] uppercase text-[#F4B942] mb-4 md:mb-6">
            SUSTAINABILITY
          </div>
        
        <h2 className="font-montserrat font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-tight md:leading-[64px] text-[#1A4D2E] tracking-[-0.5px] md:tracking-[-1px] lg:tracking-[-1.5px] mb-6 md:mb-8">
          Building a Greener Future
        </h2>
        
        <p className="text-sm sm:text-base md:text-lg leading-6 md:leading-8 text-[#666] mb-8 md:mb-12">
          Our commitment to environmental stewardship goes beyond compliance. We're pioneering circular economy initiatives, investing in renewable energy, and developing eco-friendly solutions that protect our planet while enhancing agricultural productivity.
        </p>
        
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 md:mb-4 gap-2">
            <span className="font-montserrat font-bold text-sm sm:text-base md:text-lg text-[#1A4D2E]">
              Carbon Reduction Progress
            </span>
            <span className="font-montserrat font-black text-xl sm:text-2xl md:text-[32px] text-[#A8D166]">
              {progress}%
            </span>
          </div>
          
          <div className="w-full h-2 md:h-3 bg-[#E0E0E0] rounded-md overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#A8D166] to-[#1A4D2E] rounded-md transition-all duration-1000 ease-out shadow-[0_0_16px_rgba(168,209,102,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <p className="mt-2 md:mt-3 text-xs md:text-sm text-[#999]">
            Target: Carbon Neutral by 2030
          </p>
        </div>

          <button className="inline-flex items-center gap-2 md:gap-3 py-3 sm:py-4 md:py-[22px] px-6 sm:px-8 md:px-12 bg-[#F4B942] text-[#1A4D2E] border-none rounded-xl font-montserrat font-bold text-sm sm:text-base md:text-lg cursor-pointer transition-all duration-500 shadow-[0_8px_32px_rgba(244,185,66,0.4)] hover:scale-[1.08] hover:shadow-[0_12px_48px_rgba(244,185,66,0.6)]">
            Our Sustainability Journey
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  )
}