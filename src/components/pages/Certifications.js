"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ISO15 from '../../../public/certificates/ISO_9001_2015.jpg'
import ISO15_2 from '../../../public/certificates/ISO_14001_2015.jpg'
import ISO15_3 from '../../../public/certificates/ISO_45001_2018.jpg'
import NABL from '../../../public/certificates/NABL.jpg'

const certifications = [
  {
    title: "ISO",
    number: "9001:2015",
    description: "For Quality Management Systems",
    image: ISO15,
  },
  {
    title: "ISO",
    number: "14001:2015",
    description: "For Environmental Management Systems",
    image: ISO15_2,
  },
  {
    title: "ISO OHSMS",
    number: "45001:2018",
    description: "For Occupational Health and Safety Management Systems",
    image: ISO15_3,
  },
  {
    title: "NABL",
    number: "Accredited",
    description: "National Accreditation Board for Testing and Calibration Laboratories",
    image: NABL,
  },
];

const Certifications = ({ title }) => {
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
            QUALITY ASSURANCE
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1A4D2E]">
            {title && title.indexOf(" ") === -1 ? (
              <span className="text-[#F4B942]">{title}</span>
            ) : (
              <>
                <span className="text-[#F4B942]">
                  {title ? title.slice(0, title.indexOf(" ")) : "Our"}
                </span>
                <span className="text-[#1A4D2E]">
                  {title ? title.slice(title.indexOf(" ")) : " Certifications"}
                </span>
              </>
            )}
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(26,77,46,0.08)] hover:shadow-[0_20px_40px_rgba(26,77,46,0.15)] transition-all duration-300 border border-gray-100 hover:border-[#A8D166]/30 flex flex-col items-center text-center h-full"
            >
              <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden border border-gray-100 group-hover:border-[#A8D166]/20 transition-colors duration-300">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              <h3 className="font-montserrat font-bold text-lg text-[#1A4D2E] mb-2 group-hover:text-[#A8D166] transition-colors duration-300">
                {cert.title}
              </h3>

              {cert.number && (
                <div className="inline-block px-3 py-1 bg-[#A8D166]/10 rounded-full mb-2">
                  <p className="font-montserrat font-semibold text-[#1A4D2E] text-xs">
                    {cert.number}
                  </p>
                </div>
              )}

              {cert.description && (
                <p className="font-montserrat text-[#666] text-xs leading-relaxed">
                  {cert.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
