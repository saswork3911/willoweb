"use client";
import { useState, useEffect } from "react";
import willowoodlogo from "../../public/images/logo.webp";
import Image from "next/image";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <ul className="hidden lg:flex gap-6 xl:gap-12 list-none">
          {["About", "Solutions", "Innovation", "Sustainability", "Careers"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="font-montserrat font-semibold text-sm xl:text-[15px] relative transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[3px] after:bg-[#A8D166] after:transition-all after:duration-500 text-[#1A4D2E]"
              >
                {item}
              </a>
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
          <ul className="space-y-6">
            {["About", "Solutions", "Innovation", "Sustainability", "Careers"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-montserrat font-semibold text-lg text-white hover:text-[#A8D166] transition-colors duration-300 py-2"
                >
                  {item}
                </a>
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
