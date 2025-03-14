import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-3xl font-bold text-green-700">
          <a href="/">
            <img
              src="logo.png"
              alt="Nawiri Logo"
              className="h-12 w-auto scale-[11] px-7"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-semibold">
          <li>
            <a
              href="#projects"
              className="hover:text-green-600 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-green-600 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#donate"
              className="hover:text-green-600 transition-colors duration-300"
            >
              Donate
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-green-600 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Navigation - Hamburger Icon */}
        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Hamburger Icon */}
            <div className="w-8 h-6 flex flex-col justify-between">
              <span
                className={`block h-1 bg-gray-800 transition-transform duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-1 bg-gray-800 transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-1 bg-gray-800 transition-transform duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white shadow-md transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-gray-800 font-semibold">
          <a
            href="#projects"
            className="hover:text-green-600 text-xl"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#about"
            className="hover:text-green-600 text-xl"
            onClick={toggleMenu}
          >
            Donate
          </a>
          <a
            href="#donate"
            className="hover:text-green-600 text-xl"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-green-600 text-xl"
            onClick={toggleMenu}
          >
            Contact
          </a>
          <button onClick={toggleMenu} className="text-red-500 text-lg mt-4">
            Close ✖
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
