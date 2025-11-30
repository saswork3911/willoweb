"use client";
import { useState, useEffect } from "react";
import willowoodlogo from "../../../public/images/logo.webp";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [mobileSubDropdowns, setMobileSubDropdowns] = useState({}); // For 3rd level mobile menu

  const navLinks = [
    // { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      submenu: [
        {
          name: "Company Overview",
          href: "/about/company-overview",
          // subItems: [
          //   { name: "Our History", href: "/about/history" },
          //   { name: "Leadership", href: "/about/leadership" },
          //   { name: "Global Footprint", href: "/about/global-footprint" },
          // ]
        },
        { name: "Vision & Values", href: "/about/vision-values" },
        { name: "Awards & Recognition", href: "/about/awards-and-recognitions" },
        { name: "Milestones", href: "/about/milestones" },
        { name: "EHS Policy", href: "/about/ehs-policy" },
        { name: "Management Team", href: "/about/management-team" },
        { name: "Certifications", href: "/about/certifications" },
      ],
    },
    {
      name: "Business Segments",
      href: "/business-segments",
      submenu: [
        { name: "Institutional", href: "/business/institutional" },
        { name: "Brand", href: "/business/brand" },
        { name: "R & D", href: "/business/r-and-d" },
        { name: "Manufacturing", href: "/business/manufacturing" },
        { name: "Exports", href: "/business/exports" },
      ],
    },
    {
      name: "Products",
      href: "/products",
      submenu: [
        { name: "Technical Grade", href: "/products/technical-grade" },
        { name: "Brand", href: "/products/brand" },
        { name: "Bulk Products", href: "/products/bulk-products" },
        { name: "Exports", href: "/products/exports" },
      ],
    },
    {
      name: "Careers",
      href: "/careers",
      submenu: [
        { name: "Career At Willowood", href: "/careers/career-at-willowood" },
        { name: "Job Opportunities", href: "/careers/job-opportunities" },
        { name: "CSR", href: "/careers/csr" },
      ],
    },
    {
      name: "Global Presence",
      href: "/global",
      submenu: [
        { name: "Global Operations", href: "/global-presence/global-operations" },
        { name: "India Operations", href: "/global-presence/india-operations" },
        { name: "Customer Network", href: "/global-presence/customer-network" },
      ],
    },
  ];

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
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ease-out bg-white ${scrolled ? "shadow-[0_8px_32px_rgba(26,77,46,0.1)] py-2 md:py-2" : "py-3 md:py-3"
          } px-4 md:px-8 lg:px-20 flex justify-between items-center`}
      >
        <div className="font-montserrat font-black text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-none tracking-[-0.5px] text-[#1A4D2E]">
          {/* Willowood */}
          <Link href="/">
            <Image alt="navbar" src={willowoodlogo} height={100} width={100} className={` ${scrolled ? "w-36 transition-all duration-300 ease-out" : "w-44"}`}></Image>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 xl:gap-8 list-none">
          {navLinks.map((item) => (
            <li
              key={item.name}
              className="group"
              onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="font-montserrat font-semibold text-sm xl:text-[15px] relative transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[3px] after:bg-[#A8D166] after:transition-all after:duration-500 text-[#1A4D2E] flex items-center gap-1 py-4"
              >
                {item.name}
                {item.submenu && (
                  <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </Link>

              {/* Mega Menu Dropdown */}
              {item.submenu && (
                <div
                  className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-[0_16px_48px_rgba(26,77,46,0.15)] border-t border-gray-100 transition-all duration-300 origin-top z-[-1] ${activeDropdown === item.name
                    ? 'opacity-90 visible  translate-y-0'
                    : 'opacity-0 invisible -translate-y-4'
                    }`}
                >
                  <div className="px-4 md:px-8 lg:px-20 py-12">
                    <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
                      {/* Left Column: Heading */}
                      <div className="w-full md:w-1/4 lg:w-1/5 pt-2">
                        <div className="border-l-[6px] border-[#F4B942] pl-6">
                          <h3 className="font-montserrat font-black text-3xl lg:text-4xl text-[#1A4D2E] leading-tight">
                            {item.name}
                          </h3>
                        </div>
                      </div>

                      {/* Right Column: Links Grid */}
                      <div className="w-full md:w-3/4 lg:w-4/5">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                          {item.submenu.map((subItem, index) => (
                            <div key={index} className="flex flex-col gap-2">
                              <Link
                                href={subItem.href}
                                className="group/link flex items-center gap-3 p-2 rounded-lg hover:bg-[#A8D166]/10 transition-all duration-300 w-fit"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#A8D166] group-hover/link:scale-150 transition-transform duration-300" />
                                <span className="font-montserrat font-semibold text-base text-[#1A4D2E] group-hover/link:text-[#1A4D2E] group-hover/link:translate-x-1 transition-all duration-300">
                                  {subItem.name}
                                </span>
                              </Link>

                              {/* Level 3 Links */}
                              {subItem.subItems && (
                                <div className="pl-8 flex flex-col gap-2 border-l- border-[#A8D166]/20 ml-2.5">
                                  {subItem.subItems.map((level3Item, idx) => (
                                    <Link
                                      key={idx}
                                      href={level3Item.href}
                                      className="font-montserrat text-sm text-[#666] hover:text-[#A8D166] transition-colors duration-200 pl-2"
                                    >
                                      {level3Item.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
            className={`w-6 h-0.5 transition-all duration-300 bg-[#1A4D2E] ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
          />
          <span
            className={`w-6 h-0.5 my-1 transition-all duration-300 bg-[#1A4D2E] ${mobileMenuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`w-6 h-0.5 transition-all duration-300 bg-[#1A4D2E] ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 right-0 z-[999] bg-[#1A4D2E] transition-all duration-500 lg:hidden ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="pt-20 pb-8 px-6 h-screen overflow-y-auto">
          <ul className="space-y-2 pb-20">
            {navLinks.map((item) => (
              <li key={item.name}>
                <div className="border-b border-gray-600/30 pb-2">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setMobileDropdowns(prev => ({ ...prev, [item.name]: !prev[item.name] }))}
                        className="w-full flex justify-between items-center font-montserrat font-semibold text-lg text-white hover:text-[#A8D166] transition-colors duration-300 py-3"
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${mobileDropdowns[item.name] ? 'rotate-180' : ''}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${mobileDropdowns[item.name] ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="ml-4 mt-2 space-y-2 pb-2">
                          {item.submenu.map((subItem, index) => (
                            <div key={index}>
                              {subItem.subItems ? (
                                <>
                                  <button
                                    onClick={() => setMobileSubDropdowns(prev => ({ ...prev, [subItem.name]: !prev[subItem.name] }))}
                                    className="w-full flex justify-between items-center font-montserrat text-sm text-gray-300 hover:text-[#A8D166] transition-colors duration-300 py-2 pl-2"
                                  >
                                    {subItem.name}
                                    <svg
                                      className={`w-3 h-3 transition-transform duration-200 ${mobileSubDropdowns[subItem.name] ? 'rotate-180' : ''}`}
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                  </button>
                                  <div className={`overflow-hidden transition-all duration-300 ${mobileSubDropdowns[subItem.name] ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="ml-4 border-l border-gray-600/50 pl-2 space-y-2 py-1">
                                      {subItem.subItems.map((level3Item, idx) => (
                                        <Link
                                          key={idx}
                                          href={level3Item.href}
                                          onClick={() => setMobileMenuOpen(false)}
                                          className="block font-montserrat text-xs text-gray-400 hover:text-[#A8D166] transition-colors duration-300 py-1.5"
                                        >
                                          {level3Item.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <Link
                                  href={subItem.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block font-montserrat text-sm text-gray-300 hover:text-[#A8D166] transition-colors duration-300 py-2 pl-2"
                                >
                                  {subItem.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full font-montserrat font-semibold text-lg text-white hover:text-[#A8D166] transition-colors duration-300 py-3"
                    >
                      {item.name}
                    </Link>
                  )}
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
