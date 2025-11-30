"use client";

import Image from "next/image";
import brand from "../../../public/images/salcon.jpg";
import { motion } from "framer-motion";
import Link from "next/link";

const Brand = ({ title }) => {
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
                        OUR BRAND
                    </div>
                    <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1A4D2E]">
                        {title && title.indexOf(" ") === -1 ? (
                            <span className="text-[#F4B942]">{title}</span>
                        ) : (
                            <>
                                <span className="text-[#F4B942]">
                                    {title ? title.slice(0, title.indexOf(" ")) : "Brand"}
                                </span>
                                <span className="text-[#1A4D2E]">
                                    {title ? title.slice(title.indexOf(" ")) : " Overview"}
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
                        className="space-y-6 text-center sm:text-left"
                    >
                        <p className="font-montserrat text-lg sm:text-xl font-medium text-[#1A4D2E] leading-relaxed">
                            Willowood Chemicals Limited is headquartered in New Delhi.
                        </p>
                        <p className="font-montserrat text-base sm:text-lg text-[#666] leading-relaxed">
                            Since its inception in 2012, it has grown to enjoy a pan-India presence,
                            with regional marketing teams and more than 10,000 direct dealers and distributors spread across over 20 Indian states.
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
                            src={brand}
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
                            Over the next few years, in addition to generics, it will focus increasingly on promoting its own range of
                            patented and proprietary products under the Willowood brand.
                        </p>
                        <p className="font-montserrat text-base sm:text-lg text-[#666] leading-relaxed border-l-4 border-[#A8D166] pl-6 py-2 bg-[#A8D166]/5 rounded-r-lg">
                            To view a complete list of Willowood Brand products, please visit our
                            <Link href="/products" className="text-[#1A4D2E] font-bold hover:text-[#A8D166] transition-colors ml-2 inline-flex items-center gap-1">
                                Products page <i className="fas fa-arrow-right text-xs"></i>
                            </Link>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Brand;