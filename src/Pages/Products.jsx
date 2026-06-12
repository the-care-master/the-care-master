import React, { useEffect, useState } from "react";
import Certifications from "../Components/Certifications";
import ClientSection from "../Components/ClientsSection";
import Testimonials from "../Components/Testimonials";
import ProdsSlider from "../Components/ProdsSlider";
import { categories, categoryDescriptions, products } from "../Components/ProductsData";
import { Link, useSearchParams } from "react-router-dom";
import Aos from "aos";

export default function Products() {
    const [searchParams] = useSearchParams();

    const categoryFromUrl = searchParams.get("category");

    const [selectedCategory, setSelectedCategory] = useState(
        categoryFromUrl || "All Products"
    );

    const filteredProducts =
        selectedCategory === "All Products"
            ? products
            : products.filter(
                (product) => product.category === selectedCategory
            );

    useEffect(() => {
        if (categoryFromUrl) {
            setSelectedCategory(categoryFromUrl);
        }
    }, [categoryFromUrl]);

    useEffect(() => {
        Aos.init({
            duration: 800,
            once: false,
            mirror: true
        });
    }, []);

    return (
        <div className="bg-[#f5f1f1]">
            {/* Hero */}
            <ProdsSlider />

            {/* Categories */}
            <section className="max-w-6xl mx-auto lg:px-4 px-2 py-4 md:py-8" data-aos="fade-up">
                <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-3 md:px-4 py-2 text-sm md:text-base rounded-lg font-medium transition-all duration-300 border cursor-pointer ${selectedCategory === category
                                ? "bg-gradient-to-r from-[#0F4C81] to-[#1A6AA8] text-white border-transparent shadow-xl scale-105"
                                : "bg-gradient-to-r from-[#3c5269] via-[#263541] to-[#263847] text-white hover:bg-gray-900 border-gray-200 hover:shadow-md"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>
            <hr className="border-gray-700 max-w-4xl mx-auto mb-4" />

            {/* Category Header */}
            <section className="max-w-4xl mx-auto text-center px-4 font-serif" data-aos="fade-up">
                <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 font-serif underline">
                    {selectedCategory}
                </h2>

                <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed font-serif">
                    {categoryDescriptions[selectedCategory]}
                </p>
            </section>

            {/* Products */}
            <section className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {filteredProducts.map((product) => (
                        <Link
                            to={`/products-details/${product.slug}`}
                            key={product.id}
                            className="text-center border-b border-gray-400 py-4 md:py-5 px-3 md:px-4 transition duration-300 hover:shadow-lg bg-white/35"
                            data-aos="zoom-in"
                        >
                            <h3 className="mb-4 text-xl md:text-2xl font-bold font-serif uppercase text-gray-800">
                                {product.name}
                            </h3>
                            <img
                                src={product.image}
                                alt={product.name}
                                loading="lazy"
                                className="h-64 md:h-72 lg:h-80 mx-auto object-contain transition duration-300 hover:scale-105"
                            />

                            <p className="mt-3 mb-5 md:mb-6 text-gray-700 text-sm leading-relaxed line-clamp-3 max-w-sm mx-auto font-serif">
                                {product.description}
                            </p>

                            <span className="inline-block border border-black/15 rounded-full px-6 md:px-8 py-2 bg-gradient-to-r from-[#3c5269] via-[#263541] to-[#263847] hover:bg-gray-800 text-white text-sm transition duration-300">
                                Know More
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            <Certifications />
            <ClientSection />
            <Testimonials />
        </div>
    );
}