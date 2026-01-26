"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import researchdev from "../../../public/business/researchdev.jpg";

const Research = ({ title }) => {
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
              INNOVATION
            </div>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1A4D2E] mb-6">
              {title && title.indexOf(" ") === -1 ? (
                <span className="text-[#F4B942]">{title}</span>
              ) : (
                <>
                  <span className="text-[#F4B942]">
                    {title ? title.slice(0, title.indexOf(" ")) : "Research &"}
                  </span>
                  <span className="text-[#1A4D2E]">
                    {title ? title.slice(title.indexOf(" ")) : " Development"}
                  </span>
                </>
              )}
            </h2>

            <div className="space-y-6">
              <p className="font-montserrat text-lg font-medium text-[#1A4D2E] leading-relaxed">
                Based in Vadodara, Willowood’s newly launched R&D facility handles the bulk of in-house testing and R&D needs for its various business functions.
              </p>
              <p className="font-montserrat text-[#666] leading-relaxed text-base">
                With state-of-the-art equipment and a highly experienced team of scientists, technicians and agronomists, the facility is a valuable step towards Willowood’s goal of becoming an innovation leader and fully-integrated provider of crop protection.
              </p>
              <div className="font-montserrat text-[#666] leading-relaxed text-base border-l-4 border-[#F4B942] pl-4 bg-[#F4B942]/5 py-3 rounded-r-lg">
                <p className="font-semibold text-[#1A4D2E]">
                  It is NABL (ISO 17025) certified and GLP approved.
                </p>
              </div>
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
                src={researchdev}
                alt="Willowood R&D Facility"
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

export default Research;
