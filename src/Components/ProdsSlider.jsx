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
  { url: "/images/slider/slide6.webp" },
  { url: "/images/slider/slide7.webp" },
  { url: "/images/slider/slide1.webp" },
  { url: "/images/slider/slide4.webp" },
  { url: "/images/slider/slide8.webp" },
  { url: "/images/slider/slide9.webp" },
  { url: "/images/slider/slide10.webp" },
];

function ProdsSlider() {

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
        className="hero-swiper w-full h-[300px] md:h-[300px] lg:h-[400px]"
      >
        {fadeImages.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.url})`,
              }}
            >
              <div className="absolute inset-0 bg-black/60" />

              <div className="absolute inset-0 z-20 flex items-center">
                <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 text-center" data-aos="flip-up">

                  <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    Advanced Medical Equipment
                    <br />
                    For Modern Healthcare Environments
                  </h1>

                  <p className="mt-4 text-white text-base md:text-lg max-w-3xl mx-auto">
                    Discover a complete range of healthcare products designed for
                    hospitals, clinics, rehabilitation centers, and care facilities.
                  </p>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default ProdsSlider;