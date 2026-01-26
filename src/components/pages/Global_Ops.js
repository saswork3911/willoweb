"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import aboutUs from "../../../public/business/map-new.png";

const GlobalOps = ({ title }) => {
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
            WORLDWIDE PRESENCE
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1A4D2E] mb-6">
            {title && title.indexOf(" ") === -1 ? (
              <span className="text-[#F4B942]">{title}</span>
            ) : (
              <>
                <span className="text-[#F4B942]">
                  {title ? title.slice(0, title.indexOf(" ")) : "Global"}
                </span>
                <span className="text-[#1A4D2E]">
                  {title ? title.slice(title.indexOf(" ")) : " Operations"}
                </span>
              </>
            )}
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="space-y-6">
              <p className="font-montserrat text-lg font-medium text-[#1A4D2E] leading-relaxed">
                Willowood has major operating offices in 5 locations across the globe.
              </p>
              <p className="font-montserrat text-[#666] leading-relaxed text-base">
                Each office functions as an individual profit centre and focuses on different business segments, but together they form the integrated business model that has contributed to Willowood’s success.
              </p>
              <p className="font-montserrat text-[#666] leading-relaxed text-base">
                With over 30+ years of experience and a loyal customer base in over 50 countries, Willowood is one of the most trusted names in agrochemicals today.
              </p>

              <div className="grid grid-cols-2 gap-4 my-6">
                {['India', 'USA', 'Hong Kong', 'China', 'Kenya'].map((location, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-[#F4B942]" />
                    <span className="font-montserrat font-semibold text-[#1A4D2E]">{location}</span>
                  </div>
                ))}
              </div>

              <div className="font-montserrat text-[#666] leading-relaxed text-base border-l-4 border-[#A8D166] pl-4 bg-[#A8D166]/5 py-3 rounded-r-lg">
                <p className="mb-2">
                  Since its inception in 2006, the company has grown from strength to strength, recently earning a spot in the Top 20 Agrochemical Companies of India.
                </p>
                <Link href="#" className="inline-flex items-center text-[#1A4D2E] font-bold text-sm hover:text-[#F4B942] transition-colors duration-300 group">
                  Meet the Willowood Team
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Map Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_48px_rgba(26,77,46,0.15)] bg-white p-4 border border-gray-100 group">
              <div className="absolute inset-0 bg-[#1A4D2E]/5 group-hover:bg-transparent transition-colors duration-500 z-[1]" />
              <Image
                src={aboutUs}
                alt="Willowood Global Presence Map"
                width={800}
                height={600}
                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalOps;
