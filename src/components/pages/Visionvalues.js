"use client";
import React from "react";
import { motion } from "framer-motion";

const Visionvalues = ({ title, meta, description, image }) => {
    const values = [
        {
            title: "Innovation",
            icon: "fas fa-lightbulb",
            description: "Cultivate an environment of collaboration in which everyone is comfortable sharing his or her thoughts and ideas. Build an environment in which people can work freely to devise bold and creative solutions to real world problems.",
            color: "bg-[#F4B942]",
            iconColor: "text-[#1A4D2E]",
            textColor: "text-[#1A4D2E]"
        },
        {
            title: "Leadership",
            icon: "fas fa-flag",
            description: "Lead by example to encourage hard work, ambition and enthusiasm in our employees. Delegate, empower and offer challenges and rewards to foster growth.",
            color: "bg-[#1A4D2E]",
            iconColor: "text-[#A8D166]",
            textColor: "text-white"
        },
        {
            title: "Professionalism",
            icon: "fas fa-award",
            description: "Show respect for our stakeholders by adhering to deadlines and consistently delivering at or above the promised quality of service.",
            color: "bg-[#F4B942]",
            iconColor: "text-[#1A4D2E]",
            textColor: "text-[#1A4D2E]"
        },
        {
            title: "Responsibility",
            icon: "fas fa-hand-holding-heart",
            description: "Practice a culture of integrity, accountability and sustainability.",
            color: "bg-[#1A4D2E]",
            iconColor: "text-[#A8D166]",
            textColor: "text-white"
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-20 lg:py-[90px] bg-white overflow-hidden">
            {/* Hero / Header Section */}
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1400px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className="font-montserrat font-semibold text-xs tracking-[2px] md:tracking-[3px] uppercase text-[#A8D166] mb-3 md:mb-4">
                        OUR CORE PHILOSOPHY
                    </div>
                    <h1 className="font-montserrat font-black text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight text-[#1A4D2E] mb-8">
                        {title && title.indexOf(" ") === -1 ? (
                            <span className="text-[#F4B942]">{title}</span>
                        ) : (
                            <>
                                <span className="text-[#F4B942]">
                                    {title ? title.slice(0, title.indexOf(" ")) : "Vision"}
                                </span>
                                <span className="text-[#1A4D2E]">
                                    {title ? title.slice(title.indexOf(" ")) : " & Values"}
                                </span>
                            </>
                        )}
                    </h1>
                    <p className="font-montserrat text-lg sm:text-xl md:text-2xl text-[#666] max-w-4xl mx-auto leading-relaxed">
                        To sustainably feed the world’s growing population using
                        research-based, integrated solutions to crop protection.
                    </p>
                </motion.div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`${item.color} p-8 rounded-3xl shadow-[0_16px_32px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full`}
                        >
                            <div className="mb-6">
                                <div className={`w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm`}>
                                    <i className={`${item.icon} text-3xl ${item.iconColor}`} />
                                </div>
                            </div>
                            <h3 className={`font-montserrat font-bold text-2xl mb-4 ${item.textColor}`}>
                                {item.title}
                            </h3>
                            <p className={`font-montserrat text-base leading-relaxed opacity-90 ${item.textColor}`}>
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Visionvalues;