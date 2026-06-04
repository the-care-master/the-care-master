
import React from "react";

function Certifications() {

  return (
    <section className="py-10 md:py-16 lg:py-24 bg-gradient-to-r from-[#42474d] via-[#14181b] to-[#1c2329]">
      <div className="max-w-6xl mx-auto lg:px-0 px-6">

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center" data-aos="fade-down">
          OUR CERTIFICATIONS
        </h2>

        <div
          className="
            mt-10
            grid
            sm:grid-cols-2
            grid-cols-3
            md:grid-cols-4
            lg:flex
            lg:flex-wrap
            lg:justify-center
            gap-6
            lg:gap-16
          "
        >
          <img
            src="/images/certificates/iso45001.webp"
            alt="ISO 45001"
            loading="lazy"
            className="w-16 lg:w-18 mx-auto hover:scale-105 transition"
            data-aos="zoom-in"
          />

          <img
            src="/images/certificates/iso50001.webp"
            alt="ISO 50001"
            loading="lazy"
            className="w-16 lg:w-18 mx-auto hover:scale-105 transition"
            data-aos="zoom-in"
          />

          <img
            src="/images/certificates/iso9001.webp"
            alt="ISO 9001"
            loading="lazy"
            className="w-16 lg:w-18 mx-auto hover:scale-105 transition"
            data-aos="zoom-in"
          />

          <img
            src="/images/certificates/iso13485.webp"
            alt="ISO 13485"
            loading="lazy"
            className="w-16 lg:w-18 mx-auto hover:scale-105 transition"
            data-aos="zoom-in"
          />

          <img
            src="/images/certificates/iso-company.webp"
            alt="ISO Company"
            loading="lazy"
            className="w-16 lg:w-18 mx-auto hover:scale-105 transition"
            data-aos="zoom-in"
          />

          <img
            src="/images/certificates/ce.webp"
            alt="CE"
            loading="lazy"
            className="w-16 lg:w-18 mx-auto hover:scale-105 transition"
            data-aos="zoom-in"
          />

          <img
            src="/images/certificates/iec.webp"
            alt="IEC"
            loading="lazy"
            className="w-16 lg:w-18 mx-auto hover:scale-105 transition"
            data-aos="zoom-in"
          />
        </div>

      </div>
    </section>
  );
}

export default React.memo(Certifications);