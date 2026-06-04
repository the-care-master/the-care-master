
import {
  Leaf,
  HeartHandshake,
  Users,
  BadgeCheck,
} from "lucide-react";
import React from "react";

function SustainabilitySection() {

  return (
    <section
      className="relative bg-cover bg-fixed bg-no-repeat overflow-hidden bg-[10%_center] border-t"
      style={{
        backgroundImage: "url('/images/bg_3.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 lg:bg-black/20" />
      <div className="relative grid grid-cols-1 lg:grid-cols-2">

        <div className="block"></div>

        <div className="text-white px-3 md:px-6 lg:px-12 py-6 md:py-10 lg:py-16 text-center lg:text-left" >

          <h2 className="text-2xl lg:text-3xl font-bold mb-5" data-aos="fade-down">
            SEER
          </h2>

          <div className="grid grid-cols-2 lg:gap-y-4 gap-y-6 lg:gap-x-2 gap-x-4 mb-6 lg:p-2 p-3">

            <div className="flex lg:flex-row flex-col items-center gap-4" data-aos="zoom-in">
              <Users size={30} strokeWidth={1.5} />
              <span className="text-[16px] lg:text-xl font-semibold">
                Socially
              </span>
            </div>

            <div className="flex items-center lg:flex-row flex-col gap-4" data-aos="zoom-in">
              <HeartHandshake size={30} strokeWidth={1.5} />
              <span className="text-[16px] lg:text-xl font-semibold">
                Ethically
              </span>
            </div>

            <div className="flex items-center lg:flex-row flex-col gap-4" data-aos="zoom-in">
              <Leaf size={30} strokeWidth={1.5} />
              <span className="text-[16px] lg:text-xl font-semibold">
                Environmentally
              </span>
            </div>

            <div className="flex items-center lg:flex-row flex-col gap-4" data-aos="zoom-in">
              <BadgeCheck size={30} strokeWidth={1.5} />
              <span className="text-[16px] lg:text-xl font-semibold">
                Responsible
                business practice
              </span>
            </div>

          </div>

          <h2 className="text-2xl lg:text-3xl font-bold mb-6" data-aos="fade-up">
            CERTIFICATIONS
          </h2>

          <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 p-2 lg:p-3">

            <img
              src="/images/certificates/iso45001.webp"
              alt=""
              loading="lazy"
              className="w-16 md:w-18 mx-auto hover:scale-105 transition"
              data-aos="zoom-in"
            />

            <img
              src="/images/certificates/iso50001.webp"
              alt=""
              className="w-16 md:w-18 mx-auto hover:scale-105 transition"
              data-aos="zoom-in"
              loading="lazy"
            />

            <img
              src="/images/certificates/iso9001.webp"
              alt=""
              className="w-16 md:w-18 mx-auto hover:scale-105 transition"
              data-aos="zoom-in"
              loading="lazy"
            />

            <img
              src="/images/certificates/iso13485.webp"
              alt=""
              className="w-16 md:w-18 mx-auto hover:scale-105 transition"
              data-aos="zoom-in"
              loading="lazy"
            />

            <img
              src="/images/certificates/iso-company.webp"
              alt=""
              className="w-16 md:w-18 mx-auto hover:scale-105 transition"
              data-aos="zoom-in"
              loading="lazy"
            />

            <img
              src="/images/certificates/ce.webp"
              alt=""
              className="w-16 md:w-18 mx-auto hover:scale-105 transition"
              data-aos="zoom-in"
              loading="lazy"
            />

            <img
              src="/images/certificates/iec.webp"
              alt=""
              className="w-16 md:w-18 mx-auto hover:scale-105 transition"
              data-aos="zoom-in"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(SustainabilitySection);