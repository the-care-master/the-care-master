import { Factory, Hourglass, Mountain } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function AboutSection() {

    return (
        <>
            <section className="relative lg:flex items-center py-6 md:py-20 lg:py-32 bg-[#f3f3f3] border-t border-b">
                <div
                    className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain bg-fixed"
                    style={{
                        backgroundImage: "url('/images/bg_1.webp')",
                    }}
                />
                <div className="absolute inset-0 bg-[#f3f3f3]/5" />

                <div className="relative z-10 px-6 md:px-10 lg:px-20" data-aos="fade-up">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center lg:text-left">
                        Hospital <span className="font-light">Beds</span>
                    </h1>

                    <p className="mt-4 text-md lg:text-2xl text-gray-600 max-w-md text-center lg:text-left">
                        Making modern, durable and safe beds since 2015.
                    </p>
                    <div className='flex justify-center lg:justify-start mt-4'>
                        <Link to="/beds" className="mt-3 lg:px-8 lg:py-3 py-2 px-6 border-2 border-gray-700 rounded-full hover:text-white hover:bg-gray-800">
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className="block lg:hidden mt-3">
                    <img
                        src="/images/bg_1.webp"
                        alt=""
                        className="w-full object-cover h-44"
                        loading="lazy"
                    />
                </div>
            </section>
            <section
                className="
                    relative
                    lg:min-h-screen
                    bg-cover
                    bg-fixed
                    bg-no-repeat
                    lg:bg-top
                    bg-[15%_center]
                    overflow-hidden
                "
                style={{
                    backgroundImage: "url('/images/bg_2.webp')",
                }}
            >
                <div className="absolute inset-0 bg-sky-900/5" />

                <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-4 py-3 lg:hidden">

                    <Link
                        to="/about-us"
                        className="group w-full max-w-sm border-2 border-white bg-white/20 hover:bg-white/80 backdrop-blur-sm p-3 duration-300 flex flex-col items-center text-center" data-aos="zoom-in"
                    >
                        <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-4">
                            <Factory size={26} color="white"/>
                        </div>

                        <h3 className="text-xl font-bold mb-2 text-black">
                            About Us
                        </h3>

                        <p className="text-sm text-black/90 font-semibold">
                            Know more about us!
                        </p>

                        <div className="flex mt-2 text-3xl text-black">
                            →
                        </div>
                    </Link>


                    {/* Vision */}
                    <Link to="/about-us" className="group w-full max-w-sm border-2 border-white bg-white/20 hover:bg-white/80 backdrop-blur-sm p-3 text-white duration-300 items-center text-center flex flex-col" data-aos="zoom-in">
                        <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-4 group-hover:bg-black">
                            <Hourglass size={26} />
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-black">
                            Vision
                        </h3>

                        <p className="text-sm leading-7 text-black/90 font-semibold">
                            To be the industry leader in life improving products
                        </p>
                    </Link>

                    {/* Mission */}
                    <Link to="/about-us" className="group w-full max-w-sm border-2 border-white bg-white/20 hover:bg-white/80 backdrop-blur-sm p-3 text-white duration-300 items-center text-center flex flex-col" data-aos="zoom-in">
                        <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-4 group-hover:bg-black">
                            <Mountain size={26} />
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-black">
                            Mission
                        </h3>

                        <p className="text-sm leading-7 text-black/90 font-semibold">
                            To make most durable, safe and modern looking beds & care products
                            providing maximum user satisfaction
                        </p>
                    </Link>
                </div>

                <div className="hidden lg:block">
                    <Link to="/about-us">
                        <div className="absolute right-[28%] top-1/2 -translate-y-1/2" data-aos="zoom-in">
                            <div className="group w-[210px] border-2 border-white bg-white/5 hover:bg-white/80 backdrop-blur-sm px-6 py-3 text-white duration-300">
                                <div className="w-12 h-12 rounded-full bg-sky-500 group-hover:bg-black flex items-center justify-center mb-4">
                                    <Factory size={26} />
                                </div>

                                <h3 className="text-[20px] font-semibold mb-2 group-hover:text-black">
                                    About Us
                                </h3>

                                <p className="text-[15px] text-white/90 group-hover:text-black">
                                    Know more about us !
                                </p>

                                <div className="flex justify-end mt-2 text-3xl group-hover:text-black">
                                    →
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/about-us">
                        <div className="absolute lg:right-30 top-17" data-aos="zoom-in">
                            <div className="group w-[240px] border-2 border-white bg-white/5 hover:bg-white/80 backdrop-blur-sm px-6 py-4 text-white duration-300">
                                <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center mb-4 group-hover:bg-black">
                                    <Hourglass size={26} />
                                </div>

                                <h3 className="text-[20px] font-semibold mb-3 group-hover:text-black">
                                    Vision
                                </h3>

                                <p className="text-[15px] leading-8 text-white/90 group-hover:text-black">
                                    To be the industry leader
                                    in life improving products
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/about-us">
                        <div className="absolute lg:right-30 top-[290px]" data-aos="zoom-in">
                            <div className="group w-[240px] border-2 border-white bg-white/5 hover:bg-white/80 backdrop-blur-sm px-6 py-3 text-white duration-300">
                                <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center mb-4 group-hover:bg-black">
                                    <Mountain size={26} />
                                </div>

                                <h3 className="text-[20px] font-semibold mb-3 group-hover:text-black">
                                    Mission
                                </h3>

                                <p className="text-[15px] leading-8 text-white/90 group-hover:text-black">
                                    To make most durable,
                                    safe and modern looking
                                    beds & care products
                                    providing maximum user
                                    satisfaction
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </section >
        </>
    )
}

export default React.memo(AboutSection);
