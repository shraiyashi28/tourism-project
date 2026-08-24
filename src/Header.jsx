import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-x-6 gap-y-3 px-4 sm:px-8 py-3 sm:py-4">

       
        <p className="text-xl sm:text-3xl font-bold text-yellow-400">
          🌍  Let's Explore with us
        </p>

       
        <nav className="flex flex-wrap items-center justify-end gap-x-4 sm:gap-x-8 gap-y-2 text-sm sm:text-base text-white font-semibold">

          <Link
            to="/"
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>

          

       

          <Link
            to="/about"
            className="hover:text-yellow-400 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/contacts"
            className="hover:text-yellow-400 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/tourism-growth"
            className="hover:text-yellow-300 transition"
          >
            📈 Tourism Growth
          </Link>
          
        

        </nav>
      </div>
    </header>
  );
}

export default Header;