"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import carmel from '../../../public/product/carmel.jpg'
import drcol from '../../../public/product/drcol.jpg'
import layby from '../../../public/product/layby.jpg'
import mywill from '../../../public/product/mywill.jpg'
import phylum from '../../../public/product/phylum.jpg'
import theme from '../../../public/product/theme.jpg'
import valxtra from '../../../public/product/valxtra.jpg'
import wilcore from '../../../public/product/wilcore.jpg'
import willonyl from '../../../public/product/willonyl.jpg'

const categories = [
  {
    title: "Brand Products",
    subcategories: ["Fungicide", "Herbicide", "Insecticide", "PGRs & Others"],
  },
];

const allProducts = {
  Fungicide: [
    { name: "CARMEL", image: carmel, description: "Carbendazim 12% + Mancozeb 63% WP" },
    { name: "DR COL", image: drcol, description: "PROPINEB 70% WP" },
    { name: "LAYBY", image: layby, description: "CYMOXANIL 8% + MANCOZEB 64% WP" },
    { name: "MYWILL", image: mywill, description: "MYCLOBUTANIL 10% WP" },
    { name: "PHYLLUM", image: phylum, description: "PROPICONAZOLE 25% EC" },
    { name: "THEME", image: theme, description: "THIOPHANATE METHYL 70% WP" },
    { name: "VALXTRA", image: valxtra, description: "HEXACONAZOLE 5% + VALIDAMYCIN 2.5% SC" },
    { name: "WILCORE", image: wilcore, description: "DIFENOCONAZOLE 25% EC" },
    { name: "WILLONYL", image: willonyl, description: "CHLOROTHALONIL 75% WP" },
  ],
  Herbicide: [
    { name: "HERB-X", image: "/productlist.png", description: "Herbicide Example 1" },
    { name: "WEED-CLEAR", image: "/productlist.png", description: "Herbicide Example 2" },
  ],
};

const ProductsPage = ({ title }) => {
  const [openCategories, setOpenCategories] = useState({ "Brand Products": true });
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
                  {title ? title.slice(0, title.indexOf(" ")) : "Brand"}
                </span>
                <span className="text-[#1A4D2E]">
                  {title ? title.slice(title.indexOf(" ")) : " Products"}
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
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-24">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(26,77,46,0.08)] hover:shadow-[0_20px_40px_rgba(26,77,46,0.15)] transition-all duration-500 border border-gray-100 flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden bg-gray-50 p-4 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#1A4D2E]/5 group-hover:bg-transparent transition-colors duration-500" />
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="object-contain h-full w-auto transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow bg-white">
                    <h3 className="font-montserrat font-bold text-lg text-[#1A4D2E] mb-2 group-hover:text-[#A8D166] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="font-montserrat text-sm text-[#666] leading-relaxed flex-grow">
                      {product.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-xs font-bold text-[#F4B942] uppercase tracking-wider group-hover:text-[#1A4D2E] transition-colors duration-300">
                        View Details →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center mt-12 space-x-2">
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

export default ProductsPage;
