"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    title: "Technical Grade",
    subcategories: ["Fungicide", "Herbicide", "Acaricide", "Insecticide"],
  },
];

const allProducts = {
  Fungicide: [
    { name: "Acephate", class: "Fungicide", formulation: "75% SP" },
    { name: "Acetamiprid", class: "Fungicide", formulation: "20% SP" },
    { name: "Bifenthrin", class: "Fungicide", formulation: "10% EC & 10% WP" },
    { name: "BPMC (Fenobucarb)", class: "Fungicide", formulation: "50% EC" },
    { name: "Buprofezin", class: "Fungicide", formulation: "25% SC" },
    { name: "Cartap Hydrochloride", class: "Fungicide", formulation: "50% SP & 4% Gr" },
    { name: "Diafenthiuron", class: "Fungicide", formulation: "50% WP" },
    { name: "Emamectin Benzoate", class: "Fungicide", formulation: "5% SG & 1.9% EC" },
    { name: "Fipronil", class: "Fungicide", formulation: "5% SC & 0.3% Gr" },
  ],
  Herbicide: [
    { name: "Fenoxaprop-p-Ethyl", class: "Herbicide", formulation: "71283-80-2" },
    { name: "Glyphosate", class: "Herbicide", formulation: "1071-83-6" },
    { name: "Imazethapyr", class: "Herbicide", formulation: "81335-77-5" },
    { name: "Metribuzin", class: "Herbicide", formulation: "21087-64-9" },
    { name: "Oxyfluorfen", class: "Herbicide", formulation: "42874-03-3" },
    { name: "Paraquat Dichloride", class: "Herbicide", formulation: "1910-42-5" },
    { name: "Pretilachlor", class: "Herbicide", formulation: "51218-49-6" },
  ],
  Acaricide: [
    { name: "Propargite", class: "Acaricide", formulation: "2312-35-8" },
    { name: "Hexythiazox", class: "Acaricide", formulation: "78587-05-0" },
  ],
  Insecticide: [
    { name: "Acetamiprid", class: "Insecticide", formulation: "135410-20-7" },
    { name: "Bifenthrin", class: "Insecticide", formulation: "82657-04-3" },
    { name: "Cartap Hydrochloride", class: "Insecticide", formulation: "15263-52-2" },
    { name: "Difenthiuron", class: "Insecticide", formulation: "80060-09-9" },
    { name: "Emamectin Benzoate", class: "Insecticide", formulation: "155569-91-8" },
    { name: "Fenobucarb (BPMC)", class: "Insecticide", formulation: "3766-81-2" },
    { name: "Imidacloprid", class: "Insecticide", formulation: "138261-41-3" },
    { name: "Lambda Cyhalothrin", class: "Insecticide", formulation: "91465-08-6" },
    { name: "Triazophos", class: "Insecticide", formulation: "24017-47-8" },
  ],
};

const Technical = ({ title }) => {
  const [openCategories, setOpenCategories] = useState({ "Technical Grade": true });
  const [selectedCategory, setSelectedCategory] = useState("Fungicide");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const toggleCategory = (title) => {
    setOpenCategories((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleCategorySelect = (subcategory) => {
    setSelectedCategory(subcategory);
    setCurrentPage(1);
  };

  const products = allProducts[selectedCategory] || [];
  const totalPages = Math.ceil(products.length / productsPerPage);
  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

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
            OUR PRODUCTS
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1A4D2E] mb-6">
            {title && title.indexOf(" ") === -1 ? (
              <span className="text-[#F4B942]">{title}</span>
            ) : (
              <>
                <span className="text-[#F4B942]">
                  {title ? title.slice(0, title.indexOf(" ")) : "Technical"}
                </span>
                <span className="text-[#1A4D2E]">
                  {title ? title.slice(title.indexOf(" ")) : " Grade"}
                </span>
              </>
            )}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-montserrat font-bold text-lg text-[#1A4D2E] mb-4 pb-2 border-b border-gray-200">Categories</h3>
              {categories.map((category, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div
                    className="flex justify-between items-center cursor-pointer font-semibold text-[#1A4D2E] hover:text-[#A8D166] transition-colors duration-300"
                    onClick={() => toggleCategory(category.title)}
                  >
                    <span className="font-montserrat">{category.title}</span>
                    <span className="text-[#F4B942] font-bold text-lg">
                      {openCategories[category.title] ? "−" : "+"}
                    </span>
                  </div>

                  <AnimatePresence>
                    {openCategories[category.title] && category.subcategories.length > 0 && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 space-y-2 overflow-hidden"
                      >
                        {category.subcategories.map((sub, subIndex) => (
                          <li
                            key={subIndex}
                            onClick={() => handleCategorySelect(sub)}
                            className={`cursor-pointer pl-4 py-1 text-sm font-montserrat transition-all duration-300 border-l-2 ${selectedCategory === sub
                                ? "text-[#1A4D2E] font-bold border-[#F4B942] bg-[#F4B942]/10 rounded-r-md"
                                : "text-[#666] border-transparent hover:text-[#A8D166] hover:border-[#A8D166]"
                              }`}
                          >
                            {sub}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.main
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-montserrat font-bold text-2xl text-[#1A4D2E]">{selectedCategory}</h2>
              <span className="text-sm text-[#666] font-montserrat">Showing {paginatedProducts.length} of {products.length} products</span>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(26,77,46,0.08)] overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#1A4D2E] text-white">
                      <th className="p-4 text-left font-montserrat font-semibold text-sm uppercase tracking-wider">Product Name</th>
                      <th className="p-4 text-left font-montserrat font-semibold text-sm uppercase tracking-wider">Class</th>
                      <th className="p-4 text-left font-montserrat font-semibold text-sm uppercase tracking-wider">Formulation / CAS No.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {paginatedProducts.map((product, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="hover:bg-[#A8D166]/5 transition-colors duration-200"
                      >
                        <td className="p-4 font-montserrat font-medium text-[#1A4D2E]">{product.name}</td>
                        <td className="p-4 font-montserrat text-[#666]">{product.class}</td>
                        <td className="p-4 font-montserrat text-[#666] font-medium">{product.formulation}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-[#A8D166] hover:text-[#A8D166] disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-400 transition-all duration-300"
                >
                  &lt;
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full font-montserrat font-bold transition-all duration-300 ${currentPage === i + 1
                        ? "bg-[#1A4D2E] text-white shadow-lg shadow-[#1A4D2E]/20"
                        : "border border-gray-200 hover:border-[#A8D166] hover:text-[#A8D166]"
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-[#A8D166] hover:text-[#A8D166] disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-400 transition-all duration-300"
                >
                  &gt;
                </button>
              </div>
            )}
          </motion.main>
        </div>
      </div>
    </section>
  );
};

export default Technical;
