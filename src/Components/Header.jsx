import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Solutions", path: "/solutions" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto px-3 lg:py-2 py-3 lg:px-12 flex items-center justify-between">

        <NavLink to="/">
          <div className="lg:h-[60px] lg:w-26 h-14 w-24 flex items-center">
            <img
              src="/images/logo.webp"
              alt="Care Master Logo"
              className="h-12 lg:h-12 w-auto object-contain brightness-150 contrast-125"
            />
          </div>
        </NavLink>

        <nav className="hidden lg:flex gap-12 text-white font-semibold text-md lg:ml-24">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-sky-300 border-b-2 border-sky-300 pb-1"
                  : "text-white hover:text-gray-300 transition"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">

          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center lg:hidden hover:bg-gray-800 hover:text-white cursor-pointer"
          >
            {open ? <X size={20} aria-label="Close Menu" /> : <Menu size={20} aria-label="Open Menu" />}
          </button>

          <a href="tel:+919872778014" aria-label="Call The Care Master" className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3c5269] via-[#263541] to-[#263847] text-white flex items-center justify-center hover:bg-gray-800 hover:text-white cursor-pointer hover:bg-gradient-to-r from-[#3d5b7a] via-[#273a49] to-[#263847] hover:scale-105">
            <Phone size={18} />
          </a>

          <Link to="/contact-us">
            <button className="bg-gradient-to-r from-[#3c5269] via-[#263541] to-[#263847] text-white px-5 py-2 rounded-full font-medium hover:bg-gradient-to-r from-[#3d5b7a] via-[#273a49] to-[#263847] cursor-pointer hover:scale-105">
              Inquire Now
            </button>
          </Link>

        </div>
      </div>

      <div
        className={`
          lg:hidden
          absolute top-full left-0 w-full bg-black
          overflow-hidden
          transition-all duration-300
          ${open
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
          }
        `}
      >
        <nav className="py-2">

          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="
                block
                px-8
                py-4
                text-white
                text-lg
                text-center
                border-t
                border-white/50
                hover:bg-white/5
                transition
              "
            >
              {item.name}
            </NavLink>
          ))}

          <div className="border-b border-white/20" />

        </nav>
      </div>
    </header>
  );
}