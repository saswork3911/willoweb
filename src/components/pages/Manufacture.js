"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import researchdev from "../../../public/business/toll.jpg";

const Manufacture = ({ title }) => {
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
                alt="Willowood Manufacturing Facility"
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
              CAPABILITIES
            </div>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1A4D2E] mb-6">
              {title && title.indexOf(" ") === -1 ? (
                <span className="text-[#F4B942]">{title}</span>
              ) : (
                <>
                  <span className="text-[#F4B942]">
                    {title ? title.slice(0, title.indexOf(" ")) : "Manufacturing"}
                  </span>
                  <span className="text-[#1A4D2E]">
                    {title ? title.slice(title.indexOf(" ")) : " Facility"}
                  </span>
                </>
              )}
            </h2>

            <div className="space-y-6">
              <p className="font-montserrat text-lg font-medium text-[#1A4D2E] leading-relaxed">
                Willowood Chemicals Ltd’s manufacturing facility specialises in the manufacturing and packaging of agrochemical products.
              </p>
              <p className="font-montserrat text-[#666] leading-relaxed text-base">
                Strategically located in the chemical manufacturing hub of Vadodara, between two major ports (Mundra and Kandla), WCL is readily accessible by sea and by road.
              </p>
              <p className="font-montserrat text-[#666] leading-relaxed text-base">
                The facility caters to different product ranges including insecticides, herbicides and fungicides, spread over 4 separate wings, carefully designed to prevent cross-contamination. WCL is equipped to manufacture a variety of formulations, including EC, EW, SL, WP, SP, WDG, DF, SC, CS, ME, SE, SG, ZC, ZW and OD.
              </p>
              <div className="font-montserrat text-[#666] leading-relaxed text-base border-l-4 border-[#A8D166] pl-4 bg-[#A8D166]/5 py-3 rounded-r-lg">
                <p className="mb-2">
                  As a licensed manufacturer with over 30 years of experience, WCL has become synonymous with the highest standards of quality and professionalism.
                </p>
                <p className="text-sm font-semibold text-[#1A4D2E]">
                  WCL received NABL accreditation in 2017 and was also recently recognized by Dupont India for “Best Product Delivery in Insecticides and Fungicides”.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Manufacture;
