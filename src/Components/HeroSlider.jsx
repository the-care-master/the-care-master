import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const fadeImages = [
  { url: "/images/slider/slide1.webp" },
  { url: "/images/slider/slide2.webp" },
  { url: "/images/slider/slide3.webp" },
  { url: "/images/slider/slide4.webp" },
  { url: "/images/slider/slide5.webp" },
  { url: "/images/slider/slide6.webp" },
];

function HeroSlider() {

  return (
    <section className="group w-full relative overflow-hidden">

      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
        ]}
        autoplay={{ delay: 3000 }}
        navigation
        loop
        className="hero-swiper w-full h-[350px] md:h-[380px] lg:h-[450px]"
      >
        {fadeImages.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.url})`,
              }}
            >
              <div className="absolute inset-0 lg:bg-black/50 bg-black/40" />
              
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">

                  <div className="max-w-2xl text-center lg:text-left" data-aos="flip-up">

                    <h1 className="text-white text-2xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      Premium Hospital
                      <br />
                      Furniture Solutions
                    </h1>

                    <p className="mt-4 text-white/90 text-base md:text-lg lg:text-xl leading-7">
                      Durable, safe and modern healthcare
                      furniture designed to enhance
                      patient comfort and improve
                      hospital efficiency.
                    </p>

                    <div className="flex flex-row gap-4 mt-8 justify-center lg:justify-start">
                      <Link
                        to="/products"
                        className="bg-gray-800 hover:bg-gray-00 text-white lg:px-8 px-4 lg:py-3 py-2 rounded-full transition inline-block"
                      >
                        Explore Products
                      </Link>
                      <Link
                        to="/contact-us"
                        className="border border-white hover:border-gray-800 text-white hover:bg-gray-800 hover:text-white lg:px-8 px-4 lg:py-3 py-2 rounded-full transition inline-block"
                      >
                        Contact Us
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default HeroSlider;