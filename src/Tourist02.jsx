import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";
import balib from "./balib.webp";
import img2 from "./img2.webp";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg"

function Tourist02() {
  return (
    <div
      className="w-full min-h-screen p-4 sm:p-5 bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${balib})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

      <div className="relative z-10 flex w-full sm:w-4/5 min-h-[560px] sm:h-3/4 mt-6 justify-center flex-col items-center sm:items-start pt-16 sm:pt-20">
        <motion.h2
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-extrabold underline text-cyan-300 mb-4"
        >
          BALI
        </motion.h2>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 sm:p-6 rounded-3xl w-full max-w-lg shadow-2xl"
        >

          <p className="text-white  text-justify text-sm">
            Bali is the only Hindu-majority province in Indonesia, with 86.40%
            of the population adhering to Balinese Hinduism. It is renowned for
            its highly developed arts, including traditional and modern dance,
            sculpture, painting, leather, metalworking, and music. The
            Indonesian International Film Festival is held every year in Bali.
            Other international events that have been held in Bali include Miss
            World 2013, the 2018 Annual Meetings of the International Monetary
            Fund and the World Bank Group, and the 2022 G20 summit. In March
            2017, Tripadvisor named Bali as the world's top destination in its
            Traveler's Choice awards.
          </p>
          <button className="mt-6 px-8 py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-full shadow-xl transition duration-300 hover:scale-110">
            Explore Bali →
          </button>
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-center">
              <h3 className="text-cyan-300 text-2xl">🏝</h3>
              <p className="text-white font-bold">100+</p>
              <span className="text-gray-300 text-sm">Beaches</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-center">
              <h3 className="text-cyan-300 text-2xl">✈️</h3>
              <p className="text-white font-bold">6.5M</p>
              <span className="text-gray-300 text-sm">Visitors</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-center">
              <h3 className="text-cyan-300 text-2xl">🌋</h3>
              <p className="text-white font-bold">4</p>
              <span className="text-gray-300 text-sm">Volcanoes</span>
            </div>

          </div>
        </motion.div>
      </div>
      <div className="hidden lg:block absolute top-20 right-10 w-[520px] h-[600px]">
        <motion.img
          src={img2}
          initial={{ x: 500, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            y: [0, -15, 0]
          }}
          style={{ rotate: "-8deg" }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-72 rounded-3xl border-4 border-white shadow-2xl cursor-pointer"
          whileHover={{
            scale: 1.08,
            rotate: 3
          }}
        />

        <motion.img
          src={img3}
          initial={{ x: 500, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            y: [0, -15, 0]
          }}
          style={{ rotate: "5deg" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute top-36 right-12 w-72 rounded-3xl border-4 border-white shadow-2xl cursor-pointer"
          whileHover={{
            scale: 1.08,
            rotate: 3
          }}
        />
        <motion.img
          src={img4}
          initial={{ x: 500, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            y: [0, -15, 0]
          }}
          style={{ rotate: "-4deg" }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-72 right-12 w-72 rounded-3xl border-4 border-white shadow-2xl cursor-pointer"
          whileHover={{
            scale: 1.08,
            rotate: 3
          }}
        />
      </div>
    </div >


  );
}

export default Tourist02;