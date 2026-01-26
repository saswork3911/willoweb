"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import vijay_ji from '../../../public/team/vijay.jpg'
import hitesh_ji from '../../../public/team/hitesh.png'
import jitenrda_ji from '../../../public/team/jitendra.jpg'
import neeraj_ji from '../../../public/team/neeraj.jpg'
import parishit_ji from '../../../public/team/parikshit.png'
import shahung_sir from '../../../public/team/shahunjpg.jpg'

const teamMembers = [
  {
    name: "MR. VIJAY MUNDHRA",
    role: "Founder",
    image: vijay_ji,
    description: `Vijay founded Willowood Limited as a trading Company in Hong Kong in 1992, 
      and has since spearheaded its evolution to become a globally respected company. 
      Over the past decade, he has stood as a pillar for Willowood group and his 
      visionary abilities have helped the group's transition from a trading company into 
      a research-based and value-added manufacturing business.`,
    extra: `He remains the key guiding force to propel Willowood’s continuous growth through 
      strategies to increase its global footprint by increasing geographical presence and 
      securing customers in more than 50 countries worldwide.`,
  },
  {
    name: "MR. PARIKSHIT MUNDHRA",
    role: "Managing Director",
    image: parishit_ji,
    description: `Parikshit joined and co-founded Willowood India in 2007. He has since led the company 
      from strength to strength, overseeing its emergence as the fastest growing agrochemical 
      company in India. His business intelligence, bold thinking, and motivating personality 
      have been the cornerstones of Willowood India’s phenomenal success.`,
    extra: `As Managing Director, Parikshit oversees the overall functioning of Willowood India. 
      He holds an Honors degree in Business and Commerce from St. Xavier’s College, Kolkata.`,
  },
  {
    name: "MR. JITENDRA MOHAN",
    role: "Chief Operating Officer",
    image: jitenrda_ji,
    description: `With over 26 years of experience in the agrochemicals industry, Jitendra brings to Willowood the versatile combination of
     scientific knowledge and business acumen. Since joining Willowood in 2007, he has played an instrumental role in the company’s expansion into different business verticals, as well as the growth of its customer base. As Chief Operations Officer, he looks after the key functions of the group, handling Willowood’s Institutional Business, Manufacturing Operations, Brand Business and Regulatory & IP Affairs.`,
    extra: `Jitendra holds a Masters Degree in Agrochemicals from the University of Delhi, a specialization in 
    Residue Chemistry from Jerusalem University and an MBA from Bharti Vidyapeeth in Delhi.`,
  },
  {
    name: "MR. HITESH BAGRI",
    role: "DIRECTOR",
    image: hitesh_ji,
    description: `Hitesh joined Willowood India in 2009 and, while working through different divisions, rapidly made an impression for his energy and acumen. He currently heads Willowood’s brand business in Delhi, managing a team of over 200 people. As part of his role, he has led numerous 
    initiatives to improve the efficiency of the brand business and extend the reach of the Willowood name to every corner of India.`,
    extra: `As the youngest member in the Willowood management team, Hitesh is known for his excellent management skills and collaborative leadership style. Prior to joining Willowood, Hitesh graduated with a Business degree from HR College of 
    Commerce and Economics in Mumbai and completed his CFA (Chartered Financial Analyst) designation from ICFAI University.`,
  },
  {
    name: "MR. NEERAJ MUNDHRA",
    role: "Chief Financial Officer",
    image: neeraj_ji,
    description: `Neeraj joined Willowood India in 2009 and earned a reputation for his diligence and his penchant for numbers. Neeraj holds an MBA in Finance from SIBAR, Pune, as well as Post Graduate Diplomas in Logistics, International Business and Foreign Trade from the University of Pune. He has an extensive background in finance and currently
     looks after financial strategic planning, accounts, taxation and banking relationships for the Group Companies.`,
    extra: `He has played a leading role in building good governance practices and overseeing sound management of the company finances.`,
  },
  {
    name: "MR. SHEN SHAO JUN",
    role: "Chief Financial Officer",
    image: shahung_sir,
    description: `Shao Jun joined Willowood China in 2002 and quickly rose up the ranks to reach the position of General Manager. He has been instrumental in creating deep ties with 
    various Chinese manufacturers while establishing an excellent name recognition for Willowood.`,
    extra: `Shao Jun has worked at the Chemical Products Inspection Station of Zhejiang Province and has deep knowledge of product quality and required specifications. His background as a chemistry major 
    from Zhejiang University of Technology provide him the sound credentials for Willowood’s supply chain management.`,
  },
];

const ManagementTeam = ({ title }) => {
  return (
    <section className="py-16  sm:py-20 md:py-20 lg:py-[90px] px-4 sm:px-6 md:px-12 lg:px-8 bg-white overflow-hidden">
      <div className="container mx-auto max-w-[1200px] shadow-sm ">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-montserrat font-semibold text-xs tracking-[2px] md:tracking-[3px] uppercase text-[#A8D166] mb-3 md:mb-4">
            LEADERSHIP
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1A4D2E]">
            {title && title.indexOf(" ") === -1 ? (
              <span className="text-[#F4B942]">{title}</span>
            ) : (
              <>
                <span className="text-[#F4B942]">
                  {title ? title.slice(0, title.indexOf(" ")) : "Management"}
                </span>
                <span className="text-[#1A4D2E]">
                  {title ? title.slice(title.indexOf(" ")) : " Team"}
                </span>
              </>
            )}
          </h2>
        </motion.div>

        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(26,77,46,0.08)] hover:shadow-[0_20px_40px_rgba(26,77,46,0.15)] transition-all duration-500 border border-gray-100 group`}
            >
              {/* Image Section */}
              <div className="md:w-1/3 relative h-[400px] md:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-[#1A4D2E]/10 group-hover:bg-transparent transition-colors duration-500 z-[1]" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-center bg-gradient-to-b from-green to-gray-50">
                <div className="mb-6">
                  <h3 className="font-montserrat font-bold text-sm tracking-wider text-[#A8D166] uppercase mb-2">
                    {member.role}
                  </h3>
                  <h4 className="font-montserrat font-black text-2xl md:text-3xl text-[#1A4D2E] group-hover:text-[#F4B942] transition-colors duration-300">
                    {member.name}
                  </h4>
                </div>

                <div className="space-y-4">
                  <p className="font-montserrat text-[#666] leading-relaxed text-sm md:text-base">
                    {member.description}
                  </p>
                  <p className="font-montserrat text-[#666] leading-relaxed text-sm md:text-base border-l-4 border-[#A8D166] pl-4 bg-[#A8D166]/5 py-2 rounded-r-lg">
                    {member.extra}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;

