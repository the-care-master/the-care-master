import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { products } from './ProductsData'; // Path adjust kar lavo
import { Link } from 'react-router-dom';


export default function FeaturedProductsSlider() {
  // 1. Maintaining Category Order: Top 12 products selection
  const featuredProductIds = [
    1, 2, 4, 5,       // Hospital Beds
    8, 10, 13,        // OT Equipment
    17, 18,           // Mobility Solutions
    22,               // Respiratory Care
    27, 30            // Patient Care Equipment
  ];

  const sliderProducts = featuredProductIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section className="lg:py-8 py-6 bg-gray-100 relative font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row lg:items-end lg:justify-between justify-center items-center text-center lg:text-left mb-8">
          <div>
            <span className="uppercase tracking-[3px] text-gray-700 font-bold text-xs sm:text-sm">
              Featured Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-1">
              Our Medical & Hospital Equipment
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              type="button"
              aria-label="Previous Slide"
              className="med-slider-prev w-10 h-10 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-600 hover:text-white hover:border-gray-600 flex items-center justify-center transition shadow-sm cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next Slide"
              className="med-slider-next w-10 h-10 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-600 hover:text-white hover:border-gray-600 flex items-center justify-center transition shadow-sm cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="relative group">
          
          {/* Mobile Overlay Navigation Buttons (Visible ONLY on Mobile md:hidden) */}
          <button
            type="button"
            aria-label="Previous Slide"
            className="med-slider-prev md:hidden absolute left-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur border border-gray-200 text-gray-800 shadow-md flex items-center justify-center active:scale-95 transition"
          >
            <ChevronLeft size={18} />
          </button>
          
          <button
            type="button"
            aria-label="Next Slide"
            className="med-slider-next md:hidden absolute right-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur border border-gray-200 text-gray-800 shadow-md flex items-center justify-center active:scale-95 transition"
          >
            <ChevronRight size={18} />
          </button>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.med-slider-next',
            prevEl: '.med-slider-prev',
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-8"
        >
          {sliderProducts.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col lg:h-[400px] h-[380px]">
                
                {/* Image Box */}
                <div className="relative h-60 bg-gray-100 overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-gray-700 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider z-10 shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-base font-bold text-gray-800 hover:text-gray-950 transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <Link
                    to={`/products/${item.slug}`}
                    className="mt-3 inline-flex items-end text-right justify-center gap-1.5 text-xs font-bold text-gray-800 hover:text-gray-950 transition-colors pt-3 border-t border-gray-300"
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>

      </div>
    </section>
  );
}