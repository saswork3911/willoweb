'use client'

export default function GlobalPresence() {
  const stats = [
    { number: '6', label: 'Continents' },
    { number: '100+', label: 'Countries' },
    { number: '25', label: 'Manufacturing Sites' },
    { number: '5000+', label: 'Global Workforce' }
  ]

  return (
    <section className="bg-[#1A4D2E] py-16 sm:py-20 md:py-32 lg:py-[160px] px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dots' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%23A8D166' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23dots)'/%3E%3C/svg%3E")`
      }} />
      
      <div className="relative z-[1] text-center">
        <h2 className="font-montserrat font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight md:leading-[72px] text-white tracking-[-0.5px] md:tracking-[-1px] lg:tracking-[-1.5px] mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          Our Global Footprint
        </h2>
        
        <div className="max-w-full md:max-w-[800px] lg:max-w-[1200px] mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20 relative h-[200px] sm:h-[250px] md:h-[350px] lg:h-[500px]">
          <div className="w-full h-full flex items-center justify-center">
            <svg className="filter drop-shadow-[0_8px_32px_rgba(168,209,102,0.3)] w-full h-full max-w-[900px]" viewBox="0 0 1000 500">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <radialGradient id="pulseGradient">
                  <stop offset="0%" stopColor="#A8D166" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#A8D166" stopOpacity="0"/>
                </radialGradient>
              </defs>
              
              <path d="M100,150 L200,120 L280,140 L350,130 L420,145 L480,135 L540,150 L600,140 L650,155 L700,145 L750,160 L800,150 L850,165" 
                    stroke="#A8D166" strokeWidth="2" fill="none" opacity="0.3"/>
              <path d="M150,220 L250,200 L330,215 L400,205 L470,220 L530,210 L600,225 L670,215 L730,230" 
                    stroke="#A8D166" strokeWidth="2" fill="none" opacity="0.3"/>
              <path d="M200,290 L300,270 L380,285 L450,275 L520,290 L590,280 L650,295" 
                    stroke="#A8D166" strokeWidth="2" fill="none" opacity="0.3"/>
              
              {[
                {x: 250, y: 180, delay: 0},
                {x: 480, y: 200, delay: 0.5},
                {x: 650, y: 220, delay: 1},
                {x: 350, y: 260, delay: 1.5},
                {x: 750, y: 170, delay: 0.75}
              ].map((point, index) => (
                <g key={index} filter="url(#glow)">
                  <circle cx={point.x} cy={point.y} r="8" fill="#F4B942">
                    <animate attributeName="r" values="8;12;8" dur="2s" begin={`${point.delay}s`} repeatCount="indefinite"/>
                  </circle>
                  <circle cx={point.x} cy={point.y} r="20" fill="url(#pulseGradient)" opacity="0.5">
                    <animate attributeName="r" values="20;35;20" dur="2s" begin={`${point.delay}s`} repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" begin={`${point.delay}s`} repeatCount="indefinite"/>
                  </circle>
                </g>
              ))}
              
              <line x1="250" y1="180" x2="480" y2="200" stroke="#A8D166" strokeWidth="1.5" opacity="0.4" strokeDasharray="5,5">
                <animate attributeName="strokeDashoffset" from="10" to="0" dur="1s" repeatCount="indefinite"/>
              </line>
              <line x1="480" y1="200" x2="650" y2="220" stroke="#A8D166" strokeWidth="1.5" opacity="0.4" strokeDasharray="5,5">
                <animate attributeName="strokeDashoffset" from="10" to="0" dur="1s" repeatCount="indefinite"/>
              </line>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-full md:max-w-[800px] lg:max-w-[1200px] mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-montserrat font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-none text-[#F4B942] mb-2 md:mb-3">
                {stat.number}
              </div>
              <div className="w-[30px] sm:w-[40px] md:w-[50px] lg:w-[60px] h-[2px] md:h-[3px] bg-gradient-to-r from-transparent via-[#A8D166] to-transparent mx-auto my-2 md:my-4" />
              <div className="font-inter text-xs sm:text-sm md:text-base text-white font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}