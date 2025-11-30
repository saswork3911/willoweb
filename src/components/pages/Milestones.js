"use client";

import { motion } from "framer-motion";
import { ScrollTimeline } from "../lightswind/scroll-timeline";




const milestones = [
  {
    year: "2019",
    title: "Major Achievement",
    subtitle: "Harvesting Dreams",
    description: "Willowood embarks on a journey of transformation with launch of its new logo & new tagline “Harvesting Dreams”.",
  },
  {
    year: "2018",
    title: "Major Achievement",
    subtitle: "Technical Plant",
    description: "Acquired land for a Technical Plant in Dahej, with a target for completion by 2020.",
  },
  {
    year: "2017",
    title: "NABL Accreditation",
    subtitle: "Shreeji Pesticides",
    description: "Shreeji Pesticides, Willowood’s manufacturing facility, received NABL accreditation.",
  },
  {
    year: "2016",
    title: "CSR Wing Formation",
    subtitle: "Paryavaran & We Care",
    description: 'Formation of a dedicated CSR wing, with the introduction of projects like "Paryavaran" to promote sustainable agroforestry and "We Care" to provide free health checkups and awareness camps in rural areas.',
  },
  {
    year: "2015",
    title: "R&D Centre Launch",
    subtitle: "Vadodara Facility",
    description: "Willowood launches new state-of-the-art R&D Centre in Vadodara",
  },
  {
    year: "2013",
    title: "Operational Expansion",
    subtitle: "Shreeji Unit II & Annual Conference",
    description: "Shreeji Unit II begins operations and Willowood hosts its first annual conference in Vadodara.",
  },
  {
    year: "2012",
    title: "Global & Local Outreach",
    subtitle: "Africa, Middle East & Clinical Van Program",
    description: 'Operations commence in Africa and Middle East. Launch of mobile "Clinical Van Program" to provide free soil testing and crop protection advice to farmers across India.',
  },
].sort((a, b) => parseInt(b.year) - parseInt(a.year));


export default function Milestones({ title }) {
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
            OUR JOURNEY
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
                  {title ? title.slice(title.indexOf(" ")) : " Milestones"}
                </span>
              </>
            )}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">

          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#A8D166]/20 via-[#A8D166] to-[#A8D166]/20 transform md:-translate-x-1/2" />

          {/* {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 md:mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
            >

              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#F4B942] rounded-full border-4 border-white shadow-[0_0_0_4px_rgba(244,185,66,0.3)] transform -translate-x-1.5 md:-translate-x-1/2 z-10 mt-1.5 md:mt-0" />


              <div className="hidden md:block w-1/2" />


              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                }`}>
                <div className={`bg-white p-6 md:p-8 rounded-2xl shadow-[0_10px_30px_rgba(26,77,46,0.08)] border border-gray-100 hover:border-[#A8D166]/30 transition-all duration-300 group ${index % 2 === 0 ? "text-left" : "md:text-right text-left"
                  }`}>
                  <span className="inline-block px-4 py-1 bg-[#A8D166]/10 text-[#1A4D2E] font-montserrat font-bold text-lg rounded-full mb-4 group-hover:bg-[#A8D166] group-hover:text-white transition-colors duration-300">
                    {milestone.year}
                  </span>
                  <ul className="space-y-3">
                    {milestone.events.map((event, i) => (
                      <li key={i} className="font-montserrat text-[#666] leading-relaxed text-sm md:text-base">
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))} */}

          <ScrollTimeline
            events={milestones}
            title=""
            subtitle=""
            activeColor="black"
            progressIndicator={true}
            cardAlignment="alternating"
            cardEffect="glow"
            revealAnimation="fade"
          />
        </div>
      </div>
    </section>
  );
}




