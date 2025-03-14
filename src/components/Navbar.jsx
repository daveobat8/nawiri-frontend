import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-3xl font-bold text-white">
          <a href="/">
            <img
              src="logo.png"
              alt="Nawiri Logo"
              className="h-12 w-auto scale-[11] px-7"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold">
          <li>
            <a
              href="#projects"
              className="hover:text-orange-600 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-orange-600 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#donate"
              className="hover:text-orange-600 transition-colors duration-300"
            >
              Donate
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-orange-600 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Navigation - Hamburger Icon */}
        <div className="md:hidden relative">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className="w-8 h-6 flex flex-col justify-between">
              <span
                className={`block h-1 bg-white transition-transform duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-1 bg-white transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-1 bg-white transition-transform duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-3" : ""
                }`}
              ></span>
            </div>
          </button>

          {/* Mobile Menu */}
          <div
            className={`absolute top-12 right-0 bg-green-800 text-white w-48 shadow-md rounded-lg transform transition-all duration-300 ${
              menuOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <a
                  href="/"
                  className="block hover:text-orange-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block hover:text-orange-400"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block hover:text-orange-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/donate"
                  className="block hover:text-orange-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block hover:text-orange-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
