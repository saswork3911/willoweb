'use client'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you for subscribing! We&apos;ll keep you updated.`)
    setEmail('')
  }

  const footerLinks = {
    Company: ['About Us', 'Leadership', 'Locations', 'Careers'],
    Solutions: ['Crop Protection', 'Precision Ag', 'Biosciences', 'Innovation'],
    Resources: ['Investors', 'Newsroom', 'Publications', 'Contact']
  }

  const socialIcons = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin' },
    { name: 'Twitter', icon: 'fab fa-twitter' },
    { name: 'Facebook', icon: 'fab fa-facebook' },
    { name: 'Instagram', icon: 'fab fa-instagram' }
  ]

  return (
    <footer className="bg-[#1A4D2E] text-white">
      <div className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1.5fr] gap-6 sm:gap-8 md:gap-12 lg:gap-[60px] mb-6 sm:mb-8 md:mb-12 lg:mb-[60px]">
          <div className="sm:col-span-2 lg:col-span-1 max-w-full lg:max-w-[350px]">
            <div className="font-montserrat font-black text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#A8D166] mb-3 sm:mb-4 md:mb-5">
              Willowood
            </div>
            <p className="text-xs sm:text-sm md:text-base leading-5 md:leading-[26px] text-white/80 mb-4 sm:mb-6 md:mb-8">
              Pioneering sustainable solutions for tomorrow&apos;s agriculture. Join us in transforming the future of farming.
            </p>
            <div className="flex gap-2 sm:gap-3 md:gap-4">
              {socialIcons.map((social, index) => (
                <a key={index} href="#" className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:bg-[#F4B942] hover:border-[#F4B942] hover:text-[#1A4D2E] hover:-translate-y-1 transition-all duration-300">
                  <i className={`${social.icon} text-sm sm:text-base`}></i>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="">
              <h4 className="font-montserrat font-bold text-sm md:text-base text-white mb-3 sm:mb-4 md:mb-6">
                {category}
              </h4>
              <ul className="list-none space-y-2 md:space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-white/70 text-xs sm:text-sm md:text-[15px] hover:text-[#A8D166] hover:pl-2 transition-all duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-montserrat font-bold text-sm md:text-base text-white mb-3 md:mb-4">
              Stay Updated
            </h4>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 md:gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="py-2 sm:py-3 md:py-[14px] px-3 sm:px-4 md:px-5 bg-white/10 border-2 border-white/20 rounded-lg text-white text-xs sm:text-sm md:text-[15px] placeholder-white/50 focus:outline-none focus:border-[#A8D166] focus:bg-white/15 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="py-2 sm:py-3 md:py-[14px] px-4 sm:px-5 md:px-6 bg-[#F4B942] text-[#1A4D2E] border-none rounded-lg font-montserrat font-bold text-xs sm:text-sm md:text-[15px] cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(244,185,66,0.4)] transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-4 sm:pt-6 md:pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-white/50 text-xs md:text-sm text-center md:text-left">
            © 2024 Willowood. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item, index) => (
              <a key={index} href="#" className="text-white/50 text-xs md:text-sm hover:text-[#A8D166] transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}