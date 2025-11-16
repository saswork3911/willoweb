"use client";
import { useState, useEffect } from "react";
import willowoodlogo from "../../public/images/logo.webp";
import Image from "next/image";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  const menuItems = {
    "Our Story": ["About Us", "Leadership", "History", "Mission & Vision"],
    "What We Do": ["Products", "Services", "Research", "Development"],
    "Sustainability": ["Planet", "People", "Purpose", "ESG Goals"],
    "Investors": ["Financial Reports", "Stock Information", "Presentations", "News"],
    "Careers": ["Job Openings", "Culture", "Benefits", "Apply Now"],
    "Newsroom": ["Press Releases", "Media Kit", "Events", "Publications"]
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ease-out bg-white ${
          scrolled ? "shadow-[0_8px_32px_rgba(26,77,46,0.1)] py-2 md:py-2" : "py-3 md:py-3"
        } px-4 md:px-8 lg:px-20 flex justify-between items-center`}
      >
        <div className="font-montserrat font-black text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-none tracking-[-0.5px] text-[#1A4D2E]">
          {/* Willowood */}
          <Image alt="navbar" src={willowoodlogo} height={100} width={100} className={` ${scrolled ? "w-36 transition-all duration-300 ease-out":"w-44"}`}></Image>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 xl:gap-8 list-none">
          {Object.keys(menuItems).map((item) => (
            <li 
              key={item} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="font-montserrat font-semibold text-sm xl:text-[15px] relative transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[3px] after:bg-[#A8D166] after:transition-all after:duration-500 text-[#1A4D2E] flex items-center gap-1"
              >
                {item}
                <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-300 ${activeDropdown === item ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="py-2">
                  {menuItems[item].map((subItem, index) => (
                    <a
                      key={index}
                      href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm font-montserrat text-[#1A4D2E] hover:bg-[#A8D166]/10 hover:text-[#1A4D2E] transition-colors duration-200"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button className="hidden sm:inline-flex py-2 md:py-3 lg:py-[14px] px-4 md:px-6 lg:px-8 bg-[#F4B942] text-[#1A4D2E] border-none rounded-xl font-montserrat font-bold text-xs md:text-sm lg:text-[15px] cursor-pointer transition-all duration-500 shadow-[0_8px_32px_rgba(244,185,66,0.4)] hover:scale-[1.08] hover:shadow-[0_12px_48px_rgba(244,185,66,0.6)]">
          Contact Us
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-8 h-8 flex flex-col justify-center items-center transition-all duration-300 text-[#1A4D2E]"
        >
          <span
            className={`w-6 h-0.5 transition-all duration-300 bg-[#1A4D2E] ${
              mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 my-1 transition-all duration-300 bg-[#1A4D2E] ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-all duration-300 bg-[#1A4D2E] ${
              mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 right-0 z-[999] bg-[#1A4D2E] transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="pt-20 pb-8 px-6">
          <ul className="space-y-2">
            {Object.keys(menuItems).map((item) => (
              <li key={item}>
                <div className="border-b border-gray-600/30 pb-2">
                  <button
                    onClick={() => setMobileDropdowns(prev => ({...prev, [item]: !prev[item]}))}
                    className="w-full flex justify-between items-center font-montserrat font-semibold text-lg text-white hover:text-[#A8D166] transition-colors duration-300 py-3"
                  >
                    {item}
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${mobileDropdowns[item] ? 'rotate-180' : ''}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileDropdowns[item] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="ml-4 mt-2 space-y-2 pb-2">
                      {menuItems[item].map((subItem, index) => (
                        <a
                          key={index}
                          href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block font-montserrat text-sm text-gray-300 hover:text-[#A8D166] transition-colors duration-300 py-2 pl-2"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-full mt-8 py-4 px-6 bg-[#F4B942] text-[#1A4D2E] border-none rounded-xl font-montserrat font-bold text-base cursor-pointer transition-all duration-500 shadow-[0_8px_32px_rgba(244,185,66,0.4)] hover:scale-[1.02]"
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
