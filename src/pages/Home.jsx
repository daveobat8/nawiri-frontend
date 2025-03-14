import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('image5.jpg')" }} // Replace with actual image path
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-white max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Nawiri</h1>
        <p className="mt-4 text-lg md:text-xl">
          Empowering communities through education, health, and sustainable
          growth.
        </p>

        <div className="mt-14 flex justify-center space-x-4 ">
          <a
            href="#about"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white text-lg font-semibold transition"
          >
            Learn More
          </a>
          <a
            href="#donate"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white text-lg font-semibold transition"
          >
            Donate Now
          </a>
        </div>
      </div>
      <div className="absolute bottom-5 right-5 flex gap-4 z-50 ">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 transition"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 transition"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 transition"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 transition"
        >
          <FaLinkedinIn size={24} />
        </a>
      </div>
    </section>
  );
}

export default Home;
