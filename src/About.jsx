import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-sky-800 to-blue-900 flex justify-center items-center px-4 sm:px-6 py-8 sm:py-12">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
          className="w-full max-w-6xl bg-white/10 backdrop-blur-xl rounded-md shadow-md p-5 sm:p-6 md:p-12 border border-white/20"
      >

        <Link
          to="/tourist"
          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-3 rounded-full font-bold transition mb-8"
        >
          <FaArrowLeft className="text-lg" />
          Back to Home
        </Link>

        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative sm:absolute top-0 left-1/2 -translate-x-1/2 text-4xl sm:text-6xl font-extrabold text-yellow-300 z-10 text-center whitespace-nowrap">
        
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white text-base sm:text-lg leading-8 sm:leading-10 text-justify mt-6 sm:mt-0"
        >
          Welcome to{" "}
          <span className="font-bold text-yellow-300">
            Famous Tourist Places
          </span>
          , your trusted guide to discovering the world's most breathtaking
          destinations. Our mission is to inspire travelers by showcasing
          beautiful countries, iconic landmarks, rich cultures, and unforgettable
          travel experiences.
        </motion.p>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            className="bg-white/20 rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">
              🌍 Our Mission
            </h2>

            <p className="text-white leading-7">
              To help travelers explore the world's most beautiful destinations
              with accurate, engaging, and inspiring travel information.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            className="bg-white/20 rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">
              ✈️ What We Offer
            </h2>

            <p className="text-white leading-7">
              Country guides, famous attractions, travel tips, local culture,
              history, travel statistics, interactive maps, and stunning
              photography.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            className="bg-white/20 rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">
              ⭐ Why Choose Us
            </h2>

            <p className="text-white leading-7">
              We combine modern web design with interactive features like live
              chat, tourism analytics, image galleries, and responsive layouts
              to make travel planning simple and enjoyable.
            </p>
          </motion.div>

        </div>

     
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-14 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-4">
            🌎 Explore. Dream. Discover.
          </h2>

          <p className="text-white text-lg max-w-3xl mx-auto leading-8">
            Start your journey with us and discover the world's most famous
            tourist destinations through immersive visuals, travel insights,
            interactive experiences, and modern technology.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default About;