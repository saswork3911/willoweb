"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import aboutUs from "../../../public/business/inst.jpg";

const Institutional = ({ title }) => {
  return (
    <section className="py-16 sm:py-20 md:py-20 lg:py-[90px] px-4 sm:px-6 md:px-12 lg:px-8 bg-white overflow-hidden">
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="font-montserrat font-semibold text-xs tracking-[2px] md:tracking-[3px] uppercase text-[#A8D166] mb-3 md:mb-4">
              WHO WE ARE
            </div>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1A4D2E] mb-6">
              {title && title.indexOf(" ") === -1 ? (
                <span className="text-[#F4B942]">{title}</span>
              ) : (
                <>
                  <span className="text-[#F4B942]">
                    {title ? title.slice(0, title.indexOf(" ")) : "Institutional"}
                  </span>
                  <span className="text-[#1A4D2E]">
                    {title ? title.slice(title.indexOf(" ")) : " Business"}
                  </span>
                </>
              )}
            </h2>

            <div className="space-y-6">
              <p className="font-montserrat text-lg font-medium text-[#1A4D2E] leading-relaxed">
                Willowood Chemicals Ltd. (WCL) is a leading supplier of agrochemicals in the Indian market.
              </p>
              <p className="font-montserrat text-[#666] leading-relaxed text-base">
                Headquartered in Kolkata, WCL is also the holding company for all of Willowood’s business activities in India.
              </p>
              <p className="font-montserrat text-[#666] leading-relaxed text-base">
                It imports an extensive range of technical grade pesticides, under its own registrations, and supplies to over 150 companies across India. Additionally, it
                <Link href="#" className="text-[#A8D166] font-semibold hover:text-[#F4B942] transition-colors duration-300 mx-1">
                  exports
                </Link>
                a range of generic and branded products globally.
              </p>
              <p className="font-montserrat text-[#666] leading-relaxed text-base border-l-4 border-[#F4B942] pl-4 bg-[#F4B942]/5 py-3 rounded-r-lg">
                For a complete list of Bulk and Technical Grade products offered, please view our
                <Link href="#" className="text-[#1A4D2E] font-bold hover:text-[#A8D166] transition-colors duration-300 ml-1">
                  Products page
                </Link>.
              </p>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_48px_rgba(26,77,46,0.15)] group">
              <div className="absolute inset-0 bg-[#1A4D2E]/10 group-hover:bg-transparent transition-colors duration-500 z-[1]" />
              <Image
                src={aboutUs}
                alt="Willowood Chemicals Building"
                width={700}
                height={500}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Institutional;
