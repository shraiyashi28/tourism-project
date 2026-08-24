import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 grid md:grid-cols-3 gap-8">

    
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400">
            🌍 Explore Indonesia
          </h2>
          <p className="mt-3 text-gray-300">
            Discover breathtaking beaches, volcanoes, temples, islands and
            unforgettable adventures across Indonesia.
          </p>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
            <li className="hover:text-yellow-400 cursor-pointer">Tourist Places</li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">
            Contact Us
          </h3>

          <p className="text-gray-300">📍 Bali, Indonesia</p>
          <p className="text-gray-300">📞 +91 98765 43210</p>
          <p className="text-gray-300">✉ tourism@gmail.com</p>

          <div className="flex gap-5 mt-5 text-2xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer transition" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer transition" />
            <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-400">
        © 2026 | Designed by Shraiyashi
      </div>
    </footer>
  );
}

export default Footer;