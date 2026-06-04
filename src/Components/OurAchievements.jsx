import React from "react";

function OurAchievements() {

  return (
    <section className="py-6 lg:py-12 bg-gradient-to-r from-[#42474d] via-[#14181b] to-[#1c2329] text-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-8">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold"
        data-aos="fade-down"
      >
        Our Achievements
      </h2>

      <div className="w-24 h-1 bg-sky-400 mx-auto mt-4 rounded-full"></div>

      <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
        Our commitment to quality, innovation and healthcare excellence
        is backed by internationally recognized certifications.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 gap-6">

      {/* Certificate 1 */}
      <div
        className="group rounded-2xl p-2 hover:border-sky-400/40 hover:shadow-2xl transition-all duration-100"
        data-aos="zoom-in"
      >
        <img
          src="/images/certificates/certificate_1.webp"
          alt="GMP Certificate"
          loading="lazy"
          className="w-full max-w-[250px] h-80 mx-auto rounded-lg shadow-lg group-hover:scale-105 transition duration-200"
        />

        <h3 className="text-xl font-semibold text-center mt-5">
          GMP Certification
        </h3>

        <p className="text-gray-200 text-center mt-2 text-sm">
          Good Manufacturing Practice certification ensuring high
          standards in healthcare manufacturing.
        </p>
      </div>

      {/* Certificate 2 */}
      <div
        className="group rounded-2xl p-2 hover:border-sky-400/40 hover:shadow-xl transition-all duration-100"
        data-aos="zoom-in"
      >
        <img
          src="/images/certificates/certificate_2.webp"
          alt="ISO 9001"
          loading="lazy"
          className="w-full max-w-[250px] h-80 mx-auto rounded-lg shadow-lg group-hover:scale-105 transition duration-200"
        />

        <h3 className="text-xl font-semibold text-center mt-5">
          ISO 9001:2015
        </h3>

        <p className="text-gray-200 text-center mt-2 text-sm">
          International quality management certification demonstrating
          excellence in processes and customer satisfaction.
        </p>
      </div>

    </div>

  </div>
</section>
  );
}

export default React.memo(OurAchievements);