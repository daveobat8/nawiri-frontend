import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const Contact = () => {
  return (
    <footer id="contact" className="bg-green-900 text-white py-12 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>Email: <a href="mailto:info@nawiri.org" className="underline">info@nawiri.org</a></p>
          <p>Phone: <a href="tel:+254700123456" className="underline">+254 700 123 456</a></p>
          <p>Location: Nairobi, Kenya</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-orange-400">About Us</a></li>
            <li><a href="#projects" className="hover:text-orange-400">Our Projects</a></li>
            <li><a href="#donate" className="hover:text-orange-400">Donate</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="h-6 w-6 hover:text-blue-500 transition-transform transform hover:scale-125" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="h-6 w-6 hover:text-blue-400 transition-transform transform hover:scale-125" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="h-6 w-6 hover:text-pink-500 transition-transform transform hover:scale-125" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 text-center border-t border-white/20 pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Nawiri. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;