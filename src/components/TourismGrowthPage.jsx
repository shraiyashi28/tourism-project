import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import TourismGraph from "./TourismGraph";

function TourismGrowthPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 px-4 sm:px-8 py-5">

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-5/6 justify-between">

        <Link
          to="/tourist"
          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full font-bold shadow-lg"
        >
          <FaArrowLeft />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center"
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-yellow-300 text-center">
            📈 Tourism Growth Dashboard
          </h1>

          <p className="text-gray-200 mt-2 text-base sm:text-xl text-center">
            International Tourist Arrivals (2019 - 2024)
          </p>
        </motion.div>

        {/* Empty space to balance the layout */}
        <div className="hidden sm:block w-50"></div>

      </div>

      <div className="p-3 sm:p-12 min-h-[calc(100vh-170px)] sm:h-[calc(100vh-170px)]">
        <TourismGraph />
      </div>

    </div>
  );
}

export default TourismGrowthPage;