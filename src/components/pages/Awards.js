"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import pmf from "../../../public/awards/agri.png";
import wcrc from "../../../public/awards/wcrc.png";
import wcrcint from "../../../public/awards/wcrcint.png";
import etacent from "../../../public/awards/ettimes.jpg";
import agri from "../../../public/awards/agri.png";
import skochaward from "../../../public/awards/skochaward.png";

const awardsData = [
  {
    img: pmf,
    text: "PMFAI-SML Annual AGCHEM Award 2024 by Pesticides manufacturers & Formulations Association of India.",
  },
  {
    img: wcrc,
    text: "WCRC LEADERS award 2023 by WCRCINT.",
  },
  {
    img: wcrcint,
    text: "IDEASFEST 2023 award by WCRCINT.",
  },
  {
    img: pmf,
    text: "Award for outstanding innovation and chemical synthesis 2022 by PMFAI.",
  },
  {
    img: etacent,
    text: "Top Most Manufacturing Company award, 2022 by ET Ascent.",
  },
  {
    img: agri,
    text: "Agri business Summit & Agri Awards, ABSA 2021.",
  },
  {
    img: skochaward,
    text: "Winner of SKOCH Award gold category, 2019 ",
  },
];

const Awards = ({ title }) => {
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
            RECOGNITION
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1A4D2E]">
            {title && title.indexOf(" ") === -1 ? (
              <span className="text-[#F4B942]">{title}</span>
            ) : (
              <>
                <span className="text-[#F4B942]">
                  {title ? title.slice(0, title.indexOf(" ")) : "Awards"}
                </span>
                <span className="text-[#1A4D2E]">
                  {title ? title.slice(title.indexOf(" ")) : " & Recognition"}
                </span>
              </>
            )}
          </h2>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awardsData.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(26,77,46,0.08)] hover:shadow-[0_20px_40px_rgba(26,77,46,0.15)] transition-all duration-300 border border-gray-100 hover:border-[#A8D166]/30 flex flex-col items-center text-center h-full"
            >
              <div className="w-32 h-32 relative mb-6 p-4 bg-gray-50 rounded-full group-hover:bg-[#A8D166]/10 transition-colors duration-300 flex items-center justify-center">
                <Image
                  src={award.img}
                  alt="Award"
                  className="object-contain p-2"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="font-montserrat text-[#666] group-hover:text-[#1A4D2E] transition-colors duration-300 leading-relaxed text-sm md:text-base font-medium">
                {award.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
