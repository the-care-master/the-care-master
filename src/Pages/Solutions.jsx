import React from 'react'
import { Link } from 'react-router-dom';
const solutions = [
    {
        id: 1,
        title: "Home Care Solutions",
        image: "/images/products/electric-motorized-wheelchair.webp",
        description:
            "Comfortable and reliable healthcare equipment designed to support patient care at home.",
        products: [
            "Automatic Home Care Bed",
            "Recliner Motorized Bed",
            "Oxygen Concentrator",
            "Electric Wheelchair",
        ],
    },

    {
        id: 2,
        title: "Hospital Solutions",
        image: "/images/products/mayo-ss-trolley.webp",
        description:
            "Complete equipment solutions for hospitals, clinics and healthcare facilities.",
        products: [
            "Hospital Beds",
            "Crash Cart Trolley",
            "Mayo SS Trolley",
            "Stretcher",
        ],
    },

    {
        id: 3,
        title: "Rehabilitation Solutions",
        image: "/images/products/patient-shifter.webp",
        description:
            "Mobility and rehabilitation equipment to improve recovery and independence.",
        products: [
            "Patient Shifter",
            "Mobility Scooter",
            "Electric Travel Wheelchair",
            "Therapy Bed",
        ],
    },

    {
        id: 4,
        title: "Respiratory Care Solutions",
        image: "/images/products/oxygen-concentrator.webp",
        description:
            "Advanced respiratory support systems for hospitals and home care.",
        products: [
            "Oxygen Concentrator",
            "HFNC Unit",
            "Pulse Oximeter",
            "Suction Machine",
        ],
    },
];

function Solutions() {

    return (
        <>
            <section
                className="relative h-[40vh] lg:h-[60vh] bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/slider/slide7.webp')",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center px-4" data-aos="fade-up">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            Healthcare Solutions
                        </h1>

                        <p className="mt-4 lg:text-lg text-md text-gray-200 lg:max-w-3xl mx-auto font-serif">
                            Comprehensive healthcare and mobility solutions
                            designed for hospitals, clinics, rehabilitation
                            centres and home care environments.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center mb-6" data-aos="fade-down">
                        <h2 className="lg:text-4xl text-2xl font-serif underline font-bold text-gray-800 ">
                            Our Healthcare Solutions
                        </h2>

                        <p className="mt-2 text-gray-700 font-serif">
                            Tailored solutions for every healthcare environment.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {solutions.map((solution, index) => (
                            <div
                                key={solution.id}
                                className={`grid lg:grid-cols-2 lg:gap-10 items-center pb-6 ${index !== solutions.length - 1
                                        ? "mb-6 border-b border-gray-700 font-serif"
                                        : ""
                                    } ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}
                            >
                                <div className="overflow-hidden rounded-3xl lg:flex hidden" data-aos="zoom-in">
                                    <img
                                        src={solution.image}
                                        alt={solution.title}
                                        loading="lazy"
                                        className="w-full lg:h-[380px] h-[280px] object-contain hover:scale-105 transition duration-200"
                                    />
                                </div>

                                <div className="px-4 flex text-center lg:text-left justify-center lg:justify-start flex-col items-center lg:items-start" data-aos="fade-up">
                                    <span className="inline-block px-4 py-1 rounded-full bg-[#0F4C81]/10 text-[#0F4C81] font-medium">
                                        Solution {solution.id}
                                    </span>

                                    <h2 className="mt-4 lg:text-4xl text-3xl font-bold text-gray-800">
                                        {solution.title}
                                    </h2>

                                    <p className="mt-4 text-gray-800 leading-7 font-serif">
                                        {solution.description}
                                    </p>

                                    <div className="mt-6 space-y-3 justify-start w-full lg:max-w-sm lg:ml-0 ml-8">
                                        {solution.products.map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="w-2 h-2 bg-[#212c35] rounded-full"></div>

                                                <span className="text-gray-700">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="overflow-hidden rounded-3xl lg:hidden flex" data-aos="zoom-in">
                                        <img
                                            src={solution.image}
                                            alt={solution.title}
                                            loading="lazy"
                                            className="w-full lg:h-[380px] h-[280px] object-contain hover:scale-105 transition duration-200"
                                        />
                                    </div>

                                    <Link to="/products" className="lg:mt-8 bg-gradient-to-r from-[#3c5269] via-[#263541] to-[#263847] hover:bg-gradient-to-r from-[#3d5b7a] via-[#273a49] to-[#263847] text-white px-8 py-3 rounded-lg transition">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-r from-[#3c5269] via-[#263541] to-[#263847] lg:py-14 py-8 border-b border-t">
                <div className="max-w-4xl mx-auto text-center px-4 font-serif" data-aos="fade-up">
                    <h2 className="lg:text-4xl text-2xl font-bold text-white">
                        Looking for Custom Healthcare Solutions?
                    </h2>

                    <p className="mt-4 mb-8 text-gray-200">
                        Our team is ready to help you find the right
                        medical equipment and healthcare solutions.
                    </p>

                    <Link to="/contact-us" className="mt-4 bg-white text-[#0F4C81] hover:bg-gray-800 hover:text-white px-8 py-3 rounded-lg font-semibold">
                        Contact Us
                    </Link>
                </div>
            </section>
        </>
    )
}

export default React.memo(Solutions);
