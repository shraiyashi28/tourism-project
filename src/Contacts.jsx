
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPaperPlane,
  FaArrowLeft,
} from "react-icons/fa";

function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      subject.trim() === "" ||
      message.trim() === ""
    ) {
      setError("Please fill your details");
      return;
    }

    setError("");

    alert("Message Sent Successfully!");

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }
  return (
    <div className="relative min-h-screen bg-cyan-900 overflow-x-hidden flex items-center justify-center">


      <div className="absolute inset-0 bg-cyan-900"></div>


      <div className="relative z-10 flex flex-col items-center w-full min-h-screen px-4 sm:px-8 py-6">


        <div className="w-full max-w-7xl">
          <Link
            to="/tourist"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-3 rounded-full font-bold transition"
          >
            <FaArrowLeft className="text-lg" />
            Back to Home
          </Link>
        </div>


        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-8  -translate-x-1/2 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-300">
            Contact Us
          </h1>

          <p className="text-white text-base sm:text-xl mt-4">
            Let's Plan Your Dream Vacation Together 🌍
          </p>
        </motion.div>
        <div className="flex-1 w-full flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full max-w-6xl mt-24 lg:mt-0">


            <motion.div
              initial={{ x: -120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-5 sm:p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Send us a Message
              </h2>

              <form className="space-y-5" onSubmit={handleSubmit}>


                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white/80 outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white/80 outline-none"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white/80 outline-none"
                />
                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-4 rounded-xl bg-white/80 outline-none resize-none"
                ></textarea>
                {error && (
                  <p className="text-red-400 font-semibold text-center">
                    {error}
                  </p>
                )}
                <motion.button

                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-xl flex justify-center items-center gap-3 transition"
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>

              </form>
            </motion.div>


            <motion.div
              initial={{ x: 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>

                <h2 className="text-3xl font-bold text-white mb-8">
                  Contact Information
                </h2>

                <div className="space-y-7">

                  <div className="flex items-center gap-3 sm:gap-5">
                    <FaMapMarkerAlt className="text-yellow-300 text-3xl" />
                    <p className="text-white text-xl">
                      New Delhi, India
                    </p>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-5">
                    <FaPhoneAlt className="text-yellow-300 text-3xl" />
                    <p className="text-white text-xl">
                      +91 98765 43210
                    </p>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-5">
                    <FaEnvelope className="text-yellow-300 text-3xl" />
                    <p className="text-white text-xl">
                      tourism@gmail.com
                    </p>
                  </div>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

                  <div className="bg-white/20 rounded-2xl p-5 text-center">
                    <h3 className="text-yellow-300 text-3xl font-bold">
                      15K+
                    </h3>

                    <p className="text-white mt-2">
                      Happy Tourists
                    </p>
                  </div>

                  <div className="bg-white/20 rounded-2xl p-5 text-center">
                    <h3 className="text-yellow-300 text-3xl font-bold">
                      100+
                    </h3>

                    <p className="text-white mt-2">
                      Destinations
                    </p>
                  </div>

                  <div className="bg-white/20 rounded-2xl p-5 text-center">
                    <h3 className="text-yellow-300 text-3xl font-bold">
                      24/7
                    </h3>

                    <p className="text-white mt-2">
                      Support
                    </p>
                  </div>

                </div>

              </div>

              <div className="flex justify-center gap-2 mt-4">

                <motion.div whileHover={{ scale: 1.3, rotate: 10 }}>
                  <FaInstagram className="text-pink-500 text-2xl cursor-pointer" />
                </motion.div>

                <motion.div whileHover={{ scale: 1.3, rotate: 10 }}>
                  <FaFacebook className="text-blue-500 text-2xl cursor-pointer" />
                </motion.div>

                <motion.div whileHover={{ scale: 1.3, rotate: 10 }}>
                  <FaLinkedin className="text-cyan-400 text-2xl cursor-pointer" />
                </motion.div>

              </div>

            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Contacts;