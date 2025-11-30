

"use client";

import React from "react";
import Image from "next/image";
import aboutUs from "../../../public/images/about-us.jpg";
import { motion } from "framer-motion";

const CompanyOverview = ({ title, meta, description, image }) => {
    return (
        <section className="py-16 sm:py-20 md:py-20 lg:py-[90px] px-4 sm:px-6 md:px-12 lg:px-8 bg-white overflow-hidden">
            <div className="container mx-auto max-w-[1200px]">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="font-montserrat font-semibold text-xs tracking-[2px] md:tracking-[3px] uppercase text-[#A8D166] mb-3 md:mb-4">
                        WHO WE ARE
                    </div>
                    <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1A4D2E]">
                        {title && title.indexOf(" ") === -1 ? (
                            <span className="text-[#F4B942]">{title}</span>
                        ) : (
                            <>
                                <span className="text-[#F4B942]">
                                    {title ? title.slice(0, title.indexOf(" ")) : "About"}
                                </span>
                                <span className="text-[#1A4D2E]">
                                    {title ? title.slice(title.indexOf(" ")) : " Us"}
                                </span>
                            </>
                        )}
                    </h2>
                </motion.div>

                {/* Content & Image Flow */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-center sm:text-left" // Center on mobile, left on desktop if preferred, or just consistent
                    >
                        <p className="font-montserrat text-lg sm:text-xl font-medium text-[#1A4D2E] leading-relaxed">
                            Willowood Chemicals is an affiliate of Willowood Group, a leading
                            global producer and distributor of crop protection chemicals.
                        </p>
                        <p className="font-montserrat text-base sm:text-lg text-[#666] leading-relaxed">
                            With over 30+ years of experience and a loyal customer base in
                            over 50 countries, Willowood is one of the most trusted names in
                            agrochemicals today.
                        </p>
                        <p className="font-montserrat text-base sm:text-lg text-[#666] leading-relaxed">
                            The group currently operates offices in India, USA, Hong Kong,
                            China and Kenya. Products include insecticides, herbicides,
                            fungicides, biopesticides and plant growth regulators. Willowood
                            places a strategic emphasis on innovation-driven solutions, using
                            in-house R&D capabilities and a committed team of agronomists to
                            fuel a continuous pipeline of new products.
                        </p>
                    </motion.div>

                    {/* Image "Inbetween" / Inline */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden shadow-[0_24px_48px_rgba(26,77,46,0.15)] my-12 group"
                    >
                        <div className="absolute inset-0 bg-[#1A4D2E]/10 group-hover:bg-transparent transition-colors duration-500 z-[1]" />
                        <Image
                            src={aboutUs}
                            alt="Willowood Chemicals Building"
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="font-montserrat text-base sm:text-lg text-[#666] leading-relaxed">
                            Since its inception in 2006, the company has grown from strength
                            to strength, recently earning a spot in the Top 20 Agrochemical
                            Companies of India, and named the 2nd fastest growing agrochemical
                            company in India by Agropages Magazine.
                        </p>
                        <p className="font-montserrat text-base sm:text-lg text-[#666] leading-relaxed border-l-4 border-[#A8D166] pl-6 py-2 bg-[#A8D166]/5 rounded-r-lg">
                            Willowood empowers farmers worldwide with high-quality products
                            that help protect and grow crops, contributing to a more
                            sustainable future.
                            <a href="#" className="text-[#1A4D2E] font-bold hover:text-[#A8D166] transition-colors ml-2 inline-flex items-center gap-1">
                                Willowood Team <i className="fas fa-arrow-right text-xs"></i>
                            </a>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CompanyOverview;

