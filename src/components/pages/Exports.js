"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import researchdev from "../../../public/business/exportship.jpg";

const Exports = ({ title }) => {
  return (
    <section className="py-16 sm:py-20 md:py-20 lg:py-[90px] px-4 sm:px-6 md:px-12 lg:px-8 bg-white overflow-hidden">
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_48px_rgba(26,77,46,0.15)] group">
              <div className="absolute inset-0 bg-[#1A4D2E]/10 group-hover:bg-transparent transition-colors duration-500 z-[1]" />
              <Image
                src={researchdev}
                alt="Willowood Global Exports"
                width={700}
                height={500}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 order-1 lg:order-2"
          >
            <div className="font-montserrat font-semibold text-xs tracking-[2px] md:tracking-[3px] uppercase text-[#A8D166] mb-3 md:mb-4">
              GLOBAL REACH
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
                    {title ? title.slice(title.indexOf(" ")) : " Exports"}
                  </span>
                </>
              )}
            </h2>

            <div className="space-y-6">
              <p className="font-montserrat text-lg font-medium text-[#1A4D2E] leading-relaxed">
                In parallel to its domestic business, Willowood is a global exporter of generic, proprietary and branded crop protection products.
              </p>
              <p className="font-montserrat text-[#666] leading-relaxed text-base">
                Our portfolio includes insecticides, acaricides, fungicides, weedicides and herbicides. Key markets include the USA, South America, Europe, Africa and the CIS Region.
              </p>
              <p className="font-montserrat text-[#666] leading-relaxed text-base">
                We can also develop custom or specialised formulations for our customers, and have the capability to manufacture EC, SC, SL, WP, WDG, EW, CS / ME, ZC and other formulation types.
              </p>

              <div className="font-montserrat text-[#666] leading-relaxed text-base border-l-4 border-[#A8D166] pl-4 bg-[#A8D166]/5 py-3 rounded-r-lg space-y-2">
                <p>
                  For a complete list of products that we currently offer for export, please
                  <Link href="#" className="text-[#1A4D2E] font-bold hover:text-[#A8D166] transition-colors duration-300 ml-1">
                    click here
                  </Link>.
                </p>
                <p className="text-sm">
                  For more information, please email
                  <a href="mailto:sales@willowood.com" className="text-[#A8D166] font-semibold hover:text-[#F4B942] transition-colors duration-300 mx-1">
                    sales@willowood.com
                  </a>
                  or
                  <a href="mailto:exports@willowood.com" className="text-[#A8D166] font-semibold hover:text-[#F4B942] transition-colors duration-300 mx-1">
                    exports@willowood.com
                  </a>
                  with the heading “Exports Enquiry”.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Exports;
