
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function StatsSection() {

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const stats = [
    {
      end: 11,
      suffix: "+",
      label: "Years of Experience",
    },
    {
      end: 500,
      suffix: "+",
      label: "Healthcare Partners",
    },
    {
      end: 50000,
      suffix: "+",
      label: "Products Delivered",
    },
    {
      end: 100,
      suffix: "%",
      label: "Quality Assurance",
    },
  ];

  return (
    <section ref={ref} className="bg-gradient-to-r from-[#282c30] via-[#13171a] to-[#1a2127] text-white py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 font-serif">
        <h1 className="text-2xl md:text-4xl font-bold text-center lg:mb-12 mb-6 animate-pulse">
          Why Choose The Care Master?
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-8 gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} data-aos="zoom-in" className="bg-gradient-to-r from-[#3c5269] via-[#263541] to-[#263847] lg:p-5 p-3 rounded-lg shadow-lg transition hover:shadow-2xl hover:translate-y-1">
              <h2 className="text-2xl md:text-3xl font-bold">
                {inView && (
                  <CountUp
                    end={stat.end}
                    duration={8}
                    separator=","
                    suffix={stat.suffix}
                  />
                )}
              </h2>

              <p className="mt-2 text-xs md:text-base text-gray-200 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(StatsSection);