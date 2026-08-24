import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TourismGraph from "./TourismGraph";

export default function GraphButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.15,
          rotate: 15,
        }}
        whileTap={{
          scale: 0.9,
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        onClick={() => setOpen(true)}
        className="fixed bottom-28 right-6 w-16 h-16 rounded-full bg-blue-600 text-white text-3xl shadow-2xl z-50"
      >
        📈
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{
                scale: 0.5,
                opacity: 0,
                y: 100,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.5,
                opacity: 0,
                y: 100,
              }}
              transition={{
                duration: 0.5,
              }}
              className="relative w-[90%] lg:w-[75%]"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-red-600 text-white text-2xl"
              >
                ✕
              </button>

              <TourismGraph />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}