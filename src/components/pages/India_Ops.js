"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import brand from "../../../public/business/map-willow.jpg";

const IndiaOps = ({ title }) => {
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
            DOMESTIC PRESENCE
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1A4D2E] mb-6">
            {title && title.indexOf(" ") === -1 ? (
              <span className="text-[#F4B942]">{title}</span>
            ) : (
              <>
                <span className="text-[#F4B942]">
                  {title ? title.slice(0, title.indexOf(" ")) : "India"}
                </span>
                <span className="text-[#1A4D2E]">
                  {title ? title.slice(title.indexOf(" ")) : " Operations"}
                </span>
              </>
            )}
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Map Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_48px_rgba(26,77,46,0.15)] bg-white p-4 border border-gray-100 group">
              <div className="absolute inset-0 bg-[#1A4D2E]/5 group-hover:bg-transparent transition-colors duration-500 z-[1]" />
              <Image
                src={brand}
                alt="Willowood India Operations Map"
                width={600}
                height={500}
                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="space-y-6">
              <p className="font-montserrat text-lg font-medium text-[#1A4D2E] leading-relaxed">
                In the past decade, Willowood has burgeoned into one of the largest players in the Indian agrochemicals market.
              </p>
              <p className="font-montserrat text-[#666] leading-relaxed text-base">
                Our network extends over 20 states with more than 10,000+ dealers and distributors across the country, ensuring our high-quality products reach farmers everywhere.
              </p>

              <div className="grid grid-cols-2 gap-6 my-8">
                <div className="bg-[#F4B942]/10 p-4 rounded-xl border border-[#F4B942]/20">
                  <h4 className="font-montserrat font-bold text-2xl text-[#1A4D2E] mb-1">400+</h4>
                  <p className="font-montserrat text-xs font-semibold text-[#666] uppercase tracking-wide">Professionals</p>
                </div>
                <div className="bg-[#A8D166]/10 p-4 rounded-xl border border-[#A8D166]/20">
                  <h4 className="font-montserrat font-bold text-2xl text-[#1A4D2E] mb-1">700+</h4>
                  <p className="font-montserrat text-xs font-semibold text-[#666] uppercase tracking-wide">Field Staff</p>
                </div>
              </div>

              <div className="font-montserrat text-[#666] leading-relaxed text-base border-l-4 border-[#A8D166] pl-4 bg-[#A8D166]/5 py-3 rounded-r-lg space-y-3">
                <p>
                  Our head offices in <span className="font-bold text-[#1A4D2E]">Kolkata</span> and <span className="font-bold text-[#1A4D2E]">Delhi</span> handle finance, marketing & regulatory operations.
                </p>
                <p>
                  We operate <span className="font-bold text-[#1A4D2E]">3 manufacturing facilities</span> and an R&D facility in Vadodara, supported by <span className="font-bold text-[#1A4D2E]">29 strategic warehouses</span> across India.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndiaOps;
