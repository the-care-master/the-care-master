import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../Components/ProductsData";
import ContactSection from "../Components/ContactSection";

const ProductDetails = () => {
  const { slug } = useParams();

  const product = products.find(
    (item) => item.slug === slug
  );


  const text = `Hello The Care Master,

I would like to enquire about ${product.name}.
Could you please provide me with the following details:
Please provide:
• Product specifications
• Pricing / quotation
• Availability
• Delivery details

Looking forward to your response.
Thank you!`;  

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Product Not Found
        </h2>

        <Link
          to="/products"
          className="mt-4 px-6 py-2 bg-[#0F4C81] text-white rounded-lg"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section
        className="relative h-[40vh] lg:h-[65vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/slider/slide9.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4" data-aos="flip-up">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-200 text-[#17191b] border border-white/20 text-sm mb-4">
              Premium Healthcare Equipment
            </span>

            <h1 className="text-2xl md:text-5xl font-bold text-white">
              {product.name}
            </h1>

            <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed line-clamp-2">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 lg:py-12 py-6">
        <div className="grid lg:grid-cols-2 lg:gap-12 gap-6 items-center">

          {/* Product Image */}
          <div className="p-2 shadow-xs lg:flex hidden" data-aos="zoom-in">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="w-full h-[480px] object-contain hover:scale-105 transition duration-200"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center items-center text-center" data-aos="fade-up">
            <span className="inline-block bg-blue-100 text-[#0F4C81] px-4 py-1 rounded-full text-sm font-medium">
              {product.category}
            </span>

            <h1 className="text-4xl font-bold text-gray-800 mt-4">
              {product.name}
            </h1>

            <p className="mt-6 text-gray-600 leading-8">
              {product.description}
            </p>
            <div className="p-1 shadow-xs lg:hidden flex" data-aos="zoom-in">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="w-full h-[400px] object-contain hover:scale-105 transition duration-200"
              />
            </div>

            <div className="flex flex-wrap gap-4 lg:mt-6 mt-3 justify-center items-center" data-aos="fade-up">
              <a
                href={`https://wa.me/919872778014?text=${encodeURIComponent(text)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-11 py-3 bg-gradient-to-r from-[#3c5269] via-[#263541] to-[#263847] text-white rounded-xl hover:bg-gray-900 transition hover:shadow-lg"
              >
                Enquire Now
              </a>

              <Link
                to="/products"
                className="px-8 py-3 hover:bg-gray-800 hover:text-white border border-gray-600 rounded-xl transition"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-gray-800" />
      <section className="lg:py-12 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="lg:text-3xl text-2xl font-bold text-center mb-8" data-aos="fade-down">
            Why Choose The Care Master?
          </h2>

          <div className="grid md:grid-cols-3 lg:gap-6 gap-4">
            <div className="bg-gradient-to-r from-[#3c5269] via-[#263541] to-[#263847] text-white lg:p-6 p-3 rounded-xl text-center hover:shadow-lg transition hover:-translate-y-2" data-aos="zoom-in">
              <h3 className="font-semibold text-xl mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-300">
                High-quality healthcare equipment built
                for durability and reliability.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#3c5269] via-[#263541] to-[#263847] text-white lg:p-6 p-3 rounded-xl text-center hover:shadow-lg transition hover:-translate-y-2" data-aos="zoom-in">
              <h3 className="font-semibold text-xl mb-2">
                Trusted Support
              </h3>
              <p className="text-gray-300">
                Dedicated assistance for hospitals,
                clinics and home care customers.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#3c5269] via-[#263541] to-[#263847] text-white lg:p-6 p-3 rounded-xl text-center hover:shadow-lg transition hover:-translate-y-2" data-aos="zoom-in">
              <h3 className="font-semibold text-xl mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-300">
                Reliable delivery and installation
                support across locations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default ProductDetails;
