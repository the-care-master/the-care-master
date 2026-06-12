import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    icon: <FaFacebook size={20} />,
    link: "https://facebook.com/",
    
  },
  {
    icon: <FaInstagram size={20} />,
    link: "https://www.instagram.com/thecaremaster/",
  },
  {
    icon: <FaLinkedin size={20} />,
    link: "https://linkedin.com/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black/90 text-white">
      <div className="max-w-7xl mx-auto px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-6">

          <div className="text-center">
            <div className="flex items-center justify-center mb-1 lg:h-18">
              <Link to="/">
                <img
                  src="/images/logo.webp"
                  alt="Logo"
                  className="w-40 rounded-sm h-38 cursor-pointer brightness-150 contrast-135 drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]"
                />
              </Link>
            </div>

            <h3 className="text-xl font-bold mb-6">
              CARE FOR THE PEOPLE
            </h3>

            <div className="flex gap-4 mb-6 justify-center">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-sky-600 hover:scale-110 duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <h4 className="font-bold text-xl mb-4">
              FOR SERVICE
            </h4>

            <div className="space-y-3 text-gray-200">
              <a
                href="tel:+919872778014"
                aria-label="Call The Care Master"
                className="flex items-center gap-3 justify-center hover:text-white"
              >
                <Phone size={20} />
                +91 98727 78014
              </a>

              <a
                href="mailto:thecaremasterofficial@gmail.com"
                className="flex items-center gap-3 justify-center hover:text-white"
              >
                <MdOutlineMail size={24} />
                thecaremasterofficial@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">
              QUICK LINKS
            </h3>

            <div className="w-16 h-1 bg-sky-600 mb-8 mx-auto"></div>

            <ul className="space-y-4 text-gray-200">
              <li><Link to="/about-us" className="hover:text-white">About Us</Link></li>
              <li><Link to="/blogs" className="hover:text-white">Blogs</Link></li>
              <li><Link to="/faqs" className="hover:text-white">FAQ's</Link></li>
              <li><Link to="/contact-us" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/certificates" className="hover:text-white">Certificates</Link></li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">
              CATEGORIES
            </h3>

            <div className="w-16 h-1 bg-sky-600 mb-8 mx-auto"></div>

            <ul className="space-y-4 text-gray-200">
              <li>
                <Link to="/products?category=Hospital Beds">
                  Hospital Beds
                </Link>
              </li>

              <li>
                <Link to="/products?category=Mobility Solutions">
                  Mobility Solutions
                </Link>
              </li>

              <li>
                <Link to="/products?category=Respiratory Care">
                  Respiratory Care
                </Link>
              </li>

              <li>
                <Link to="/products?category=Patient Care Equipment">
                  Patient Care Equipment
                </Link>
              </li>

              <li>
                <Link to="/products?category=OT Equipment">
                  OT Equipment
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">
              GET IN TOUCH
            </h3>

            <div className="w-16 h-1 bg-sky-600 mb-8 mx-auto"></div>

            <div className="space-y-5 text-gray-200 text-left">
              <a
                href="https://maps.app.goo.gl/zMWFUhp5A36xCFt28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-6 justify-center items-center hover:text-white transition"
              >
                <MapPin size={24} className="mt-1 flex-shrink-0" />
                <div>
                  <p>
                    Ground Floor, Sangal Sohal Road,
                    Leather Complex, Basti Bawa Khel,
                    Jalandhar, Punjab 144021
                  </p>
                </div>
              </a>

              <a
                href="tel:+919872778014"
                aria-label="Call The Care Master"
                className="flex gap-3 justify-center items-center hover:text-white transition"
              >
                <Phone size={20} />
                <span>+91 98727 78014</span>
              </a>
              <a
                href="mailto:thecaremasterofficial@gmail.com"
                className="flex items-center gap-3 justify-center hover:text-white"
              >
                <MdOutlineMail size={24} />
                thecaremasterofficial@gmail.com
              </a>

              <div className="flex gap-3 justify-center items-center">
                <Clock size={20} />
                <span>Mon - Sun : 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-200">
          © 2015 The Care Master. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}