
import {
  Leaf,
  HeartHandshake,
  Users,
  BadgeCheck,
} from "lucide-react";
import React from "react";

const clients = [
  "/images/clients/apex.webp",
  "/images/clients/apollo.webp",
  "/images/clients/fortune.webp",
  "/images/clients/gmch.webp",

  "/images/clients/jnu.webp",
  "/images/clients/kd.webp",
  "/images/clients/manipal.webp",
  "/images/clients/pes.webp",

  "/images/clients/hcg.webp",
  "/images/clients/pmch.webp",
  "/images/clients/jmch.webp",
  "/images/clients/sal.webp",

  "/images/clients/sai.webp",
  "/images/clients/zydus.webp",
];


function ClientSection() {
  return (
    <section
      className="relative bg-fixed bg-cover bg-no-repeat overflow-hidden bg-[18%_center] border-t"
      style={{
        backgroundImage: "url('/images/bg_4.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/20 lg:bg-black/5" />
      <div className="relative grid lg:grid-cols-2">
        <div />

        <div className="px-8 lg:px-16 py-10">

          <h2 className="lg:text-[50px] text-[35px] leading-none mb-6 text-[#222] text-center" data-aos="fade-down">
            <span className="font-light">
              Esteemed
            </span>{" "}
            <span className="font-bold">
              Clients
            </span>
          </h2>

          <div className="grid grid-cols-4 border border-[#e5e5e5]">

            {clients.map((logo, index) => (
              <div
                key={index}
                className="
                  h-[90px]
                  flex
                  items-center
                  justify-center
                  border-r
                  border-b
                  border-[#e5e5e5]
                  lg:bg-white/20
                  bg-white/40
                "
                data-aos="zoom-in"
              >
                <img
                  src={logo}
                  alt=""
                  loading="lazy"
                  className="
                    max-h-14
                    object-contain
                    hover:scale-105
                    duration-300
                  "
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default React.memo(ClientSection);