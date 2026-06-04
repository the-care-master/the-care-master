import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import SiteRoutes from "./Components/SiteRoutes"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import Aos from "aos"

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <>
      <Header />
      <SiteRoutes />
      <Link to="tel:+919872778014"
        aria-label="Call The Care Master"
        className="fixed bottom-6 left-6 bg-gradient-to-r from-[#3c5269] via-[#263541] to-[#263847] text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 animate-bounce"
      >
        <FaPhoneAlt className="text-white text-2xl drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
      </Link>

      <Link
        to="https://wa.me/919872778014?text=Hello%20Care%20Master,%20I%20am%20interested%20in%20your%20healthcare%20products.%20Please%20share%20more%20information."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 bg-green-600 p-4 rounded-full shadow-lg hover:bg-green-700 transition transform hover:scale-110 animate-bounce"
      >
        <FaWhatsapp className="text-white text-3xl drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
      </Link>
      <Footer />
    </>
  )
}

export default App
