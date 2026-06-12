import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from "react";

const testimonials = [
  {
    text: `The Care Master provides excellent hospital furniture at very reasonable prices. The quality is outstanding and their after-sales support is always prompt and professional.`,
    name: "Dr. Ratan Sharma",
    hospital: "Maa Gayatri Hospital",
  },
  {
    text: `We purchased ICU beds and patient care equipment from The Care Master. The build quality is exceptional and delivery was completed on time. Highly recommended.`,
    name: "Dr. Harpreet Singh",
    hospital: "Life Care Hospital",
  },
  {
    text: `Best hospital bed manufacturer in Punjab. Their products are durable, comfortable for patients and competitively priced. Great experience overall.`,
    name: "Dr. Neha Gupta",
    hospital: "City Multispeciality Hospital",
  },
  {
    text: `Very professional team with excellent customer service. They guided us throughout the selection process and provided customized healthcare furniture solutions.`,
    name: "Dr. Amit Verma",
    hospital: "Verma Health Centre",
  },
  {
    text: `Top-quality hospital beds, wheelchairs and medical furniture. The finishing and design standards are impressive and perfectly suited for modern healthcare facilities.`,
    name: "Dr. Rajesh Kumar",
    hospital: "Medicare Hospital",
  },
  {
    text: `We have been using their products for years and the reliability has been outstanding. Their maintenance support and commitment to customer satisfaction are truly commendable.`,
    name: "Dr. Pooja Malhotra",
    hospital: "Sunrise Hospital",
  },
  {
    text: `Excellent workmanship and premium quality products. The team ensured smooth installation and provided complete support after delivery.`,
    name: "Dr. Maninder Kaur",
    hospital: "Healing Touch Hospital",
  },
  {
    text: `The Care Master offers one of the widest ranges of hospital furniture in the region. Quality, affordability and service make them our preferred healthcare partner.`,
    name: "Dr. Sandeep Arora",
    hospital: "Arora Medical Centre",
  },
];

function Testimonials() {

  return (
    <section
      className="relative py-4 md:py-8 lg:py-12 bg-cover bg-center overflow-hidden border-t"
      style={{
        backgroundImage: "url('/images/bg_5.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 py-4">

        <h2 className="text-center text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-none mb-8 text-white font-serif" data-aos="fade-up">
          <span className="font-light">Our Heroes</span>{" "}
          <span className="font-bold">Says</span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop
          className="pb-10 md:pb-14 testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-center">

                {/* Card */}
                <div className="bg-white rounded-3xl px-6 md:px-10 py-4 md:py-8 max-w-3xl mx-auto shadow-xl font-serif" data-aos="zoom-in">

                  <p className="text-gray-800 text-sm md:text-base lg:text-[18px] leading-7 md:leading-8 lg:leading-10">
                    {item.text}
                  </p>

                  <div className="mt-3 text-blue-400 text-lg md:text-xl lg:text-2xl">
                    ★★★★★
                  </div>

                </div>

                <div className="mt-6" data-aos="fade-up">

                  <h4 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
                    {item.name}
                  </h4>

                  <p className="text-white/80 italic mt-2 text-sm md:text-base lg:text-lg">
                    {item.hospital}
                  </p>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default React.memo(Testimonials);