"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import EHSone from '../../../public/images/ehs-1.jpg'
import EHStwo from '../../../public/images/ehs-2.jpg'

const EHSPolicy = ({ title }) => {
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
            COMMITMENT
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1A4D2E]">
            {title && title.indexOf(" ") === -1 ? (
              <span className="text-[#F4B942]">{title}</span>
            ) : (
              <>
                <span className="text-[#F4B942]">
                  {title ? title.slice(0, title.indexOf(" ")) : "EHS"}
                </span>
                <span className="text-[#1A4D2E]">
                  {title ? title.slice(title.indexOf(" ")) : " Policy"}
                </span>
              </>
            )}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Environment Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(26,77,46,0.08)] hover:shadow-[0_20px_40px_rgba(26,77,46,0.15)] transition-all duration-500 border border-gray-100"
          >
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-[#1A4D2E]/10 group-hover:bg-transparent transition-colors duration-500 z-[1]" />
              <Image
                src={EHSone}
                alt="Environment"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8 bg-gradient-to-b from-white to-gray-50">
              <h3 className="font-montserrat font-bold text-2xl text-[#1A4D2E] mb-4 group-hover:text-[#A8D166] transition-colors duration-300">
                Our Pledge to The Environment
              </h3>
              <div className="space-y-4">
                <p className="font-montserrat text-[#666] leading-relaxed text-sm md:text-base">
                  We are committed to conducting our business activities such that they comply with all applicable
                  environmental regulations. As an organization, we are also committed to doing everything that
                  is reasonably within our power to minimize negative impact on the environment.
                </p>
                <p className="font-montserrat text-[#666] leading-relaxed text-sm md:text-base border-l-4 border-[#A8D166] pl-4">
                  To this end, we pledge to periodically review the environmental footprint of our business
                  activities, in a methodical and transparent manner, to encourage a culture of accountability
                  and continual improvement.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Employees Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(26,77,46,0.08)] hover:shadow-[0_20px_40px_rgba(26,77,46,0.15)] transition-all duration-500 border border-gray-100"
          >
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-[#F4B942]/10 group-hover:bg-transparent transition-colors duration-500 z-[1]" />
              <Image
                src={EHStwo}
                alt="Employees"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8 bg-gradient-to-b from-white to-gray-50">
              <h3 className="font-montserrat font-bold text-2xl text-[#1A4D2E] mb-4 group-hover:text-[#F4B942] transition-colors duration-300">
                Our Pledge to Our Employees
              </h3>
              <div className="space-y-4">
                <p className="font-montserrat text-[#666] leading-relaxed text-sm md:text-base">
                  We pledge to provide a safe and healthy work environment for all our employees and contracted
                  workers. This includes providing them with a clean, comfortable workspace and, where applicable,
                  safety gear and safety training, in accordance with regulatory requirements and industry practices.
                </p>
                <p className="font-montserrat text-[#666] leading-relaxed text-sm md:text-base border-l-4 border-[#F4B942] pl-4">
                  We pledge to keep in place, an accessible system for employees to report health and safety
                  violations, should they occur, so that they can be addressed appropriately at the supervisor or
                  management level.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EHSPolicy;
