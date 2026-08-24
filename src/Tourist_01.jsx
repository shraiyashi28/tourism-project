import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import guiphoto from "./assets/pic.png";
import img1 from "./assets/pic.png";
import img2 from "./assets/img2.webp";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";


function Tourist_01() {
    return (
                <div
                    className="w-full min-h-screen p-4 sm:p-5 bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url(${guiphoto})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

                    <div className="relative z-10">
                        <nav className="flex flex-wrap justify-center sm:justify-end gap-3 mb-6">
                            <Link
                                to="/"
                                className="bg-stone-100 px-4 py-2 rounded-full text-sm font-semibold"
                            >
                                Home
                            </Link>
                            <Link
                                to="/About"
                                className="bg-stone-100 px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-300 transition"
                            >
                                About Us
                            </Link>



                            <Link to="/contacts">
                                Contact Us

                            </Link>
                        </nav>

                        <section id="home" className="pt-4"></section>
                        <h1 className="text-2xl sm:text-4xl font-bold text-yellow-300 text-center underline">
                            WELCOME TO FAMOUS TOURIST PLACES
                        </h1>

                        <div className="flex w-full sm:w-4/5 min-h-[420px] sm:h-3/4 mt-6 justify-center flex-col items-center sm:items-start pt-8 sm:pt-20">
                            <h2 className="text-4xl sm:text-5xl font-bold underline text-white mb-4">
                                INDONESIA
                            </h2>
                            <div className="bg-black/30 p-4 rounded-s-md w-full max-w-md">
                                <p className="text-gray-200 text-justify text-sm">
                                    With a population of 284,111,673 people, Indonesia represents a significant demographic market within Asia. Population density
                                    and distribution patterns provide crucial insights for market entry strategies, consumer behavior analysis,
                                    urban planning and infrastructure development projects. Business professionals conducting demographic research
                                    will find comprehensive population statistics essential for market sizing, demand forecasting
                                    and commercial feasibility studies.
                                </p>
                            </div>
                        </div>
                        <div className="hidden md:block absolute top-32 left-[58%] -translate-x-1/2 w-[320px] h-[500px] pointer-events-none">
                            <motion.img
                                src={img1}
                                initial={{ x: 400, opacity: 0, scale: 0.8 }}
                                animate={{ x: 0, opacity: 1, scale: 1 }}
                                transition={{ duration: 5, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 1 }}
                                className="absolute top-0 right-0 w-72 rounded-3xl border-4 border-white shadow-2xl cursor-pointer"
                            />

                            <motion.img
                                src={img2}
                                initial={{ x: 400, opacity: 0, scale: 0.75 }}
                                animate={{ x: 0, opacity: 1, scale: 1 }}
                                transition={{ delay: 0.75, duration: 5, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 1 }}
                                className="absolute top-40 right-12w-72 rounded-3xl border-4 border-white shadow-2xl cursor-pointer"
                            />

                            <motion.img
                                src={img3}
                                initial={{ x: 400, opacity: 0, scale: 0.7 }}
                                animate={{ x: 0, opacity: 1, scale: 1 }}
                                transition={{ delay: 1.5, duration: 5, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 1 }}
                                className="absolute top-72 right-30 w-72 rounded-3xl border-4 border-white shadow-2xl cursor-pointer"
                            />

                            <motion.img
                                src={img4}
                                initial={{ x: 400, opacity: 0, scale: 0.65 }}
                                animate={{ x: 0, opacity: 1, scale: 1 }}
                                transition={{ delay: 2.25, duration: 5, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 1 }}
                                className="absolute top-50 right-30 w-72 rounded-3xl border-4 border-white shadow-2xl cursor-pointer"
                            />
                        </div>
                    </div>

                </div>
           

    );
}

export default Tourist_01;
