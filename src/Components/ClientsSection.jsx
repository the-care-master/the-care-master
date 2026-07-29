import {
  Leaf,
  HeartHandshake,
  Users,
  BadgeCheck,
} from "lucide-react";
import React from "react";

const clients = [
  { src: "/images/clients/apex.webp", name: "Apex" },
  { src: "/images/clients/apollo.webp", name: "Apollo" },
  { src: "/images/clients/fortune.webp", name: "Fortune" },
  { src: "/images/clients/gmch.webp", name: "GMCH" },
  { src: "/images/clients/jnu.webp", name: "JNU" },
  { src: "/images/clients/kd.webp", name: "KD" },
  { src: "/images/clients/manipal.webp", name: "Manipal" },
  { src: "/images/clients/pes.webp", name: "PES" },
  { src: "/images/clients/hcg.webp", name: "HCG" },
  { src: "/images/clients/pmch.webp", name: "PMCH" },
  { src: "/images/clients/jmch.webp", name: "JMCH" },
  { src: "/images/clients/sal.webp", name: "SAL" },
  { src: "/images/clients/sai.webp", name: "SAI" },
  { src: "/images/clients/zydus.webp", name: "Zydus" },
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

            {clients.map((client, index) => (
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
                  src={client.src}
                  alt={`${client.name} logo`}
                  width={140}
                  height={56}
                  loading="lazy"
                  className="
                    max-h-14
                    w-auto
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