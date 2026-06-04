import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919872778014";

    const text = `Hello The Care Master,
  
Contact Person: ${name}
Hospital / Clinic: ${hospitalName}
Phone: ${number}
Email: ${email}
City: ${city}
State: ${state}

Requirement Details:
${message}
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");

    setName("");
    setEmail("");
    setNumber("");
    setCity("");
    setHospitalName("");
    setState("");
    setMessage("");
  };

  return (
    <section
      className="relative lg:min-h-screen bg-cover lg:bg-fixed bg-[15%_center lg:bg-top bg-no-repeat overflow-hidden border-t border-b"
      style={{
        backgroundImage: "url('/images/bg_6.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 lg:bg-black/5" />
      <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen">

        <div className="hidden lg:block" />

        <div className="lg:bg-[#f0dfd1] text-white lg:text-black px-6 md:px-10 lg:px-16 py-6 md:py-10 lg:py-12 flex items-center">
          <div className="w-full max-w-xl mx-auto">

            <h2 className="text-3xl md:text-4xl lg:text-[45px] leading-tight lg:leading-none lg:text-[#2d3440] text-center" data-aos="fade-down">
              <span className="font-light">
                Let's Get In
              </span>{" "}
              <span className="font-bold">
                Touch
              </span>
            </h2>

            <p className="mt-4 text-base md:text-lg lg:text-[#444] leading-7 md:leading-8 text-center" data-aos="fade-down">
              Let's talk about what you want to accomplish
              and how we can make it happen.
            </p>

            <div className="mt-6 space-y-6" data-aos="zoom-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Contact Person Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-black outline-none py-3 text-sm md:text-base lg:placeholder-gray-800 placeholder:white"
                />
                <input
                  type="text"
                  placeholder="Hospital / Clinic Name *"
                  value={hospitalName}
                  onChange={(e) => setHospitalName(e.target.value)}
                  className="bg-transparent border-b border-black outline-none py-3 text-sm md:text-base lg:placeholder-gray-800 placeholder:white"
                />
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="bg-transparent border-b border-black outline-none py-3 text-sm md:text-base lg:placeholder-gray-800 placeholder:white"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-b border-black outline-none py-3 text-sm md:text-base lg:placeholder-gray-800 placeholder:white"
                />
              </div>

              {/* City + Quantity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="City *"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="bg-transparent border-b border-black outline-none py-3 text-sm md:text-base lg:placeholder-gray-800 placeholder:white"
                />
                <input
                  type="text"
                  placeholder="State *"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="bg-transparent border-b border-black outline-none py-3 text-sm md:text-base lg:placeholder-gray-800 placeholder:white"
                />
              </div>

              {/* Requirement Details */}
              <textarea
                rows="2"
                placeholder="Requirement Details *"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent border-b border-black outline-none py-3 text-sm md:text-base resize-none lg:placeholder-gray-800 placeholder:white"
              />

              {/* Submit */}
              <div className="flex justify-center pt-2">
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-[#3c5269] via-[#263541] to-[#263847] hover:scale-105 hover:bg-gray-900 text-white rounded-full px-12 py-4 text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Send Enquiry
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}