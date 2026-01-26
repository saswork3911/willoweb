"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CustomerNetwork({ title }) {
  const regions = [
    {
      name: "Asia",
      countries: [
        { name: "India", flag: "/flags/india.png" },
        { name: "Bangladesh", flag: "/flags/bangladesh.png" },
        { name: "China", flag: "/flags/china.png" },
        { name: "Malaysia", flag: "/flags/malesia.png" },
        { name: "Pakistan", flag: "/flags/pakistan.png" },
        { name: "Philippines", flag: "/flags/phillipin.png" },
        { name: "Kazakhstan", flag: "/flags/kajjakistan.png" },
        { name: "Kyrgyzstan", flag: "/flags/kyrgyzstan.png" },
        { name: "Korea", flag: "/flags/koria.png" },
        { name: "Taiwan", flag: "/flags/taiwan.png" },
        { name: "Thailand", flag: "/flags/thailand.png" },
        { name: "Uzbekistan", flag: "/flags/ujebekistan.png" },
        { name: "Vietnam", flag: "/flags/viyatname.png" },
      ],
    },
    {
      name: "Middle East & Africa",
      countries: [
        { name: "Algeria", flag: "/flags/algeria.png" },
        { name: "Egypt", flag: "/flags/ejecpt.png" },
        { name: "Ethiopia", flag: "/flags/ethepia.png" },
        { name: "Iraq", flag: "/flags/iraq.png" },
        { name: "Israel", flag: "/flags/isrile.png" },
        { name: "Jordan", flag: "/flags/jardan.png" },
        { name: "Lebanon", flag: "/flags/lebnon.png" },
        { name: "Kenya", flag: "/flags/kenya.png" },
        { name: "Libya", flag: "/flags/linya.png" },
        { name: "Morocco", flag: "/flags/moroko.png" },
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-20 lg:py-[90px] px-4 sm:px-6 md:px-12 lg:px-8 bg-white overflow-hidden">
      <div className="container mx-auto max-w-[1200px]">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-montserrat font-semibold text-xs tracking-[2px] md:tracking-[3px] uppercase text-[#A8D166] mb-3 md:mb-4">
            GLOBAL FOOTPRINT
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1A4D2E] mb-6">
            {title && title.indexOf(" ") === -1 ? (
              <span className="text-[#F4B942]">{title}</span>
            ) : (
              <>
                <span className="text-[#F4B942]">
                  {title ? title.slice(0, title.indexOf(" ")) : "Customer"}
                </span>
                <span className="text-[#1A4D2E]">
                  {title ? title.slice(title.indexOf(" ")) : " Network"}
                </span>
              </>
            )}
          </h2>
          <p className="font-montserrat text-lg text-[#666] max-w-2xl mx-auto">
            Our customer network extends across over 50 countries around the globe, building strong partnerships and delivering quality solutions.
          </p>
        </motion.div>

        <div className="space-y-16">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent to-[#A8D166]/30"></div>
                <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-[#1A4D2E] px-6 uppercase tracking-wide">
                  {region.name}
                </h3>
                <div className="h-[2px] flex-grow bg-gradient-to-l from-transparent to-[#A8D166]/30"></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
                {region.countries.map((country, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.08)] flex items-center justify-center border-4 border-white group-hover:border-[#F4B942] transition-all duration-300 overflow-hidden relative">
                      <div className="absolute inset-0 bg-[#1A4D2E]/5 group-hover:bg-transparent transition-colors duration-300"></div>
                      {/* Using standard img tag for flags as they might be external or not optimized for next/image yet, or keep existing pattern */}
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-4 font-montserrat font-semibold text-[#1A4D2E] text-center group-hover:text-[#A8D166] transition-colors duration-300">
                      {country.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
