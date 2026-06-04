import React from 'react'
import {
    Binoculars,
    Mountain,
    Users,
    HeartHandshake,
    Leaf,
    BadgeCheck,
    Handshake,
    Scale,
    TrendingUp,
    SearchCheck,
    ShieldCheck,
} from "lucide-react";
import Certifications from '../Components/Certifications'
import ClientSection from '../Components/ClientsSection'

const values = [
    {
        icon: <Handshake size={40} />,
        title: "COMMITMENT",
        desc: "Adhere to the best products, services, and other initiatives that benefits both internal and external environments of organization.",
    },
    {
        icon: <Scale size={40} />,
        title: "ETHICS",
        desc: "We strive to maintain high ethical standards with team members, customers, clients, community members, and shareholders.",
    },
    {
        icon: <TrendingUp size={40} />,
        title: "PERFORMANCE",
        desc: "Creating a pathway to success by developing plans that ensures better results and strives for development.",
    },
    {
        icon: <SearchCheck size={40} />,
        title: "QUALITY",
        desc: "Quality is first in everything we do. Giving our best to justify what we do, we do well.",
    },
    {
        icon: <ShieldCheck size={40} />,
        title: "SAFETY",
        desc: "Ensuring safety on top of all by adopting measures through healthcare, safe environment policies and manufacturing standards.",
    },
];

function AboutUs() {

    return (
        <div>
            <section
                className="relative h-[40vh] lg:h-[65vh] bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/about-us.webp')",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center px-4" data-aos="fade-up">
                        <h1 className="text-3xl md:text-5xl font-bold text-white">
                            About The Care Master
                        </h1>

                        <p className="mt-4 lg:text-lg text-md text-gray-200 lg:max-w-3xl mx-auto">
                            Dedicated to delivering trusted healthcare and medical equipment solutions, empowering hospitals, clinics, and care facilities with quality, innovation, and reliability.
                        </p>
                    </div>
                </div>
            </section>

            <section className=" py-8 lg:py-12 overflow-hidden border-t border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <h2 className="text-center text-2xl sm:text-3xl md:text-5xl mb-6 lg:mb-12" data-aos="fade-up">
                        <span className="font-bold text-gray-700">CARE</span>
                        <span className="font-light text-gray-500">
                            {" "}FOR THE PEOPLE
                        </span>
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                        <div className="relative lg:flex justify-center hidden">

                            <img
                                src="/images/the-care-master.webp"
                                alt="About Background"
                                loading="lazy"
                                className="w-[65vh] h-[65vh] rounded-full cursor-pointer hover:scale-105 shadow-2xl shadow-black"
                                data-aos="zoom-in"
                            />
                        </div>

                        <div className="text-center" data-aos="fade-down">

                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-500 mb-6 lg:mb-8">
                                <span className="font-bold text-gray-700">
                                    ABOUT
                                </span>{" "}
                                US
                            </h3>

                            <div className="space-y-4 md:space-y-5 text-gray-700 text-base sm:text-lg leading-7 sm:leading-8">
                                <p>
                                    Established in 2015 ,India the care master has gained immense expertise in supplying & trading of Medical equipment, wheel chair, ventilator etc. The supplier company is located in Jalandhar, Punjab and is one of the leading sellers of listed products. Buy Medical equipment, wheel chair, ventilator in bulk from us for the best quality products and service.
                                </p>

                                <p>
                                    Under the canopy of latest technologies and modern engineering we
                                    develop products with an objective of providing maximum
                                    satisfaction and safety to doctors as well as patients.
                                </p>

                                <p>
                                    We drive to make healthcare better by supporting caregivers in the
                                    well-being of patients and providing innovative healthcare
                                    solutions.
                                </p>

                            </div>
                            <div className="relative flex justify-center lg:hidden mt-2">

                                <img
                                    src="/images/the-care-master.webp"
                                    alt="About Background"
                                    loading='lazy'
                                    className="w-60 rounded-2xl"
                                    data-aos="zoom-in"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Certifications />

            <ClientSection />

            <section className=" py-8 border-b border-t">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="bg-[#ececec] p-5 hover:scale-105" data-aos="zoom-in">
                            <div className="flex items-start gap-4">

                                <Binoculars
                                    size={34}
                                    className="text-gray-600 mt-1"
                                />

                                <div>
                                    <h3 className="lg:text-3xl text-2xl font-bold text-gray-700">
                                        VISION
                                    </h3>

                                    <p className="mt-2 text-gray-500 lg:text-lg text-md leading-8">
                                        To be the industry leader in life
                                        improving products
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="bg-[#ececec] p-5 hover:scale-105" data-aos="zoom-in">
                            <div className="flex items-start gap-4">

                                <Mountain
                                    size={34}
                                    className="text-gray-600 mt-1"
                                />

                                <div>
                                    <h3 className="lg:text-3xl text-2xl font-bold text-gray-700 ">
                                        MISSION
                                    </h3>

                                    <p className="mt-2 text-gray-500 lg:text-lg text-md leading-8">
                                        To make most durable, safe,
                                        advanced and modern looking
                                        beds & care products providing
                                        maximum user satisfaction.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="bg-[#ececec] py-6 px-8 mt-6 text-center" data-aos="fade-up">

                    <h2 className="text-3xl lg:text-5xl" >
                        <span className="font-bold text-gray-700">
                            CORE
                        </span>{" "}
                        <span className="font-light text-gray-500">
                            VALUES
                        </span>
                    </h2>

                    <p className="mt-4 text-gray-500 text-lg">
                        Our core values are based on{" "}
                        <span className="font-bold">
                            SEER
                        </span>{" "}
                        Business practice
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-6">

                        <div className="flex flex-col items-center" data-aos="zoom-in">

                            <div className="lg:w-28 lg:h-28 w-20 h-20 rounded-full bg-[#a9a9a9] flex items-center justify-center hover:scale-105">
                                <Users size={46} className="text-white" />
                            </div>

                            <p className="mt-4 text-gray-600">
                                <span className="font-bold">S</span> - Socially
                            </p>

                        </div>

                        <div className="flex flex-col items-center" data-aos="zoom-in">

                            <div className="lg:w-28 lg:h-28 w-20 h-20 rounded-full bg-[#a9a9a9] flex items-center justify-center hover:scale-105">
                                <HeartHandshake
                                    size={46}
                                    className="text-white"
                                />
                            </div>

                            <p className="mt-4 text-gray-600">
                                <span className="font-bold">E</span> - Ethically
                            </p>

                        </div>

                        <div className="flex flex-col items-center" data-aos="zoom-in">

                            <div className="lg:w-28 lg:h-28 w-20 h-20 rounded-full bg-[#a9a9a9] flex items-center justify-center hover:scale-105">
                                <Leaf
                                    size={46}
                                    className="text-white"
                                />
                            </div>

                            <p className="mt-4 text-gray-600">
                                <span className="font-bold">E</span> - Environmentally
                            </p>
                        </div>

                        <div className="flex flex-col items-center" data-aos="zoom-in">
                            <div className="lg:w-28 lg:h-28 w-20 h-20 rounded-full bg-[#a9a9a9] flex items-center justify-center hover:scale-105">
                                <BadgeCheck
                                    size={46}
                                    className="text-white"
                                />
                            </div>

                            <p className="mt-4 text-gray-600 text-center">
                                <span className="font-bold">R</span> - Responsible
                                business practice
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" py-4 lg:py-6">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    <h2 className="text-center text-3xl md:text-5xl font-light text-gray-700 mb-8" data-aos="fade-down">
                        WHAT WE BELIEVE IN
                    </h2>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-y-8 gap-y-4 gap-x-16">
                        {values.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col sm:flex-row items-center sm:items-start lg:gap-6 gap-3 text-center sm:text-left"
                                data-aos="zoom-in"
                            >
                                <div className="lg:w-28 lg:h-28 w-20 h-20 flex-shrink-0 rounded-full border-[3px] border-gray-300 flex items-center justify-center hover:scale-105">
                                    <div className="lg:w-20 lg:h-20 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                                        {item.icon}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-700 leading-8 text-base">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default React.memo(AboutUs);
