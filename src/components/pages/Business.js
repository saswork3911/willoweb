"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import ImageOne from '../../../public/business/tech-grade.jpg'
import ImageTwo from '../../../public/business/Brand_Products.jpg'
import ImageThree from '../../../public/business/toll-manufact.png'
import ImageFour from '../../../public/business/research-deve.jpg'
import ImageFive from '../../../public/business/exports.jpg'

const businessSegments = [
  {
    title: "Technical-Grade/Institutional Products",
    image: ImageOne,
    link: "#",
    description: "High-quality technical grade agrochemicals for institutional buyers and formulators."
  },
  {
    title: "Brand Products",
    image: ImageTwo,
    link: "#",
    description: "A wide range of branded formulations catering to the diverse needs of farmers."
  },
  {
    title: "Toll Manufacturing & Packaging",
    image: ImageThree,
    link: "#",
    description: "State-of-the-art manufacturing and packaging services for global partners."
  },
  {
    title: "Research & Development",
    image: ImageFour,
    link: "#",
    description: "Innovation-driven R&D focused on developing sustainable crop protection solutions."
  },
  {
    title: "Exports",
    image: ImageFive,
    link: "#",
    description: "Expanding our global footprint with high-quality agrochemical exports."
  },
];

const BusinessSegments = ({ title }) => {
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
            OUR EXPERTISE
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1A4D2E] mb-6">
            {title && title.indexOf(" ") === -1 ? (
              <span className="text-[#F4B942]">{title}</span>
            ) : (
              <>
                <span className="text-[#F4B942]">
                  {title ? title.slice(0, title.indexOf(" ")) : "Business"}
                </span>
                <span className="text-[#1A4D2E]">
                  {title ? title.slice(title.indexOf(" ")) : " Segments"}
                </span>
              </>
            )}
          </h2>
          <p className="font-montserrat text-lg text-[#666] max-w-2xl mx-auto">
            Our primary business activities in India include a diverse range of solutions tailored for modern agriculture.
          </p>
        </motion.div>

        {/* Segments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessSegments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(26,77,46,0.08)] hover:shadow-[0_20px_40px_rgba(26,77,46,0.15)] transition-all duration-500 border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-[#1A4D2E]/10 group-hover:bg-transparent transition-colors duration-500 z-[1]" />
                <Image
                  src={segment.image}
                  alt={segment.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-white to-gray-50">
                <h3 className="font-montserrat font-bold text-xl text-[#1A4D2E] mb-3 group-hover:text-[#A8D166] transition-colors duration-300">
                  {segment.title}
                </h3>
                <p className="font-montserrat text-[#666] text-sm leading-relaxed mb-6 flex-grow">
                  {segment.description}
                </p>

                <Link href={segment.link} className="inline-flex items-center text-[#1A4D2E] font-bold text-sm hover:text-[#F4B942] transition-colors duration-300 group/link">
                  Learn More
                  <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSegments;
