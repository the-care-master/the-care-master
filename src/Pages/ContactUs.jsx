import React from 'react'
import { Link } from 'react-router-dom'
import ContactSection from '../Components/ContactSection'

export default function ContactUs() {
    return (
        <div>
            <div
                className="w-full lg:h-[350px] h-[300px] bg-cover bg-no-repeat bg-[80%_center] flex items-center justify-center relative"
                style={{ backgroundImage: "url('/images/contact-us.webp')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center px-4 font-serif" data-aos="fade-up">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            Contact Us
                        </h1>

                        <p className="mt-4 lg:text-lg text-md text-gray-200 lg:max-w-3xl mx-auto">
                            We're here to help! Reach out to us for any inquiries, support, or feedback. Your satisfaction is our priority.
                        </p>
                    </div>
                </div>
            </div>
            <ContactSection />
            <div className="relative w-full overflow-hidden rounded-lg shadow-md lg:min-h-[65vh] min-h-[45vh]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.0381364165814!2d75.51002801084874!3d31.330319874194384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a4d96c8dcf667%3A0xa8bd07b005e55fc7!2sThe%20Care%20Master!5e0!3m2!1sen!2sin!4v1779618319776!5m2!1sen!2sin"
                    className="absolute top-0 left-0 w-full lg:h-[65vh] h-[45vh]"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Care Master Location"
                />
            </div>
        </div>
    )
}
