import React from 'react'
import { motion } from "framer-motion";
import refrence from "./refrence.jpeg";
import Aust from "./Aust.jpg";
import tou from "./tou4.jpg";
import aust3 from "./aust3.webp";
function Tourist03() {
  return (
    <div
      className="w-full min-h-screen p-4 sm:p-5 bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${refrence})` }}
    >

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

      <div className="relative z-10 flex w-full sm:w-4/5 min-h-[620px] sm:h-3/4 mt-6 justify-center flex-col items-center sm:items-start pt-16 sm:pt-20">
        <motion.h2
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-extrabold underline text-cyan-300 mb-4"
        >
          Australia
        </motion.h2>
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 sm:p-6 rounded-3xl w-full max-w-lg shadow-2xl"
        >
          <p
            className="text-gray-200 text-lg "
            style={{ textAlign: "justify" }}
          >
            Australia, officially the Commonwealth of Australia, is a country comprising the mainland of the Australian continent, the island of Tasmania and numerous smaller islands.[N 6] It has a land area of 7,688,287 km2 (2,968,464 sq mi), making it the sixth-largest country in the world, and is the world's flattest and driest inhabited continent. It is a megadiverse country, and its size gives it a wide variety of landscapes and climates, including deserts in the interior and tropical rainforests along the coast.The ancestors of Aboriginal Australians began arriving from Southeast Asia 50,000 to 65,000 years ago, during the Last Glacial Period. By the time of British settlement, Aboriginal Australians spoke more than 250 distinct languages and had one of the oldest living cultures in the world.
          </p>
        </motion.div>

        <div className="hidden lg:block absolute top-32 left-[58%] -translate-x-1/2 w-[320px] h-[500px] pointer-events-none">
        <div className="absolute top-20 right-[-600px] w-[700px] h-[650px]">
  
  <motion.img
    src={Aust}
    initial={{ x: 400, opacity: 0, scale: 0.8 }}
    animate={{
      x: 0,
      opacity: 1,
      scale: 1,
      y: [0, -12, 0],
    }}
    transition={{
      duration: 1,
      delay: 0.2,
      y: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
    whileHover={{
      scale: 1.08,
      rotate: -3,
      zIndex: 50,
    }}
    className="absolute top-0 right-0 w-80 rounded-3xl border-4 border-white shadow-2xl"
  />
  <motion.img
    src={tou}
    initial={{ x: 400, opacity: 0, scale: 0.8 }}
    animate={{
      x: 0,
      opacity: 1,
      scale: 1,
      y: [0, 12, 0],
    }}
    transition={{
      duration: 1,
      delay: 0.7,
      y: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
    whileHover={{
      scale: 1.08,
      rotate: 4,
      zIndex: 50,
    }}
    className="absolute top-40 right-14 w-80 rounded-3xl border-4 border-white shadow-2xl"
  />

 
  <motion.img
    src={aust3}
    initial={{ x: 400, opacity: 0, scale: 0.8 }}
    animate={{
      x: 0,
      opacity: 1,
      scale: 1,
      y: [0, -12, 0],
    }}
    transition={{
      duration: 1,
      delay: 1.2,
      y: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
    whileHover={{
      scale: 1.08,
      rotate: -4,
      zIndex: 50,
    }}
    className="absolute top-[300px] right-28 w-80 rounded-3xl border-4 border-white shadow-2xl"
  />

</div>

        </div>
      </div>
    </div>
  )
}

export default Tourist03;
