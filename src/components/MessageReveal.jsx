import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import React, { useState } from "react";

export default function MessageReveal() {
  const [show, setShow] = useState(false);

  const handleReveal = () => {
    setShow(true);
    // short confetti burst on reveal
    confetti({ particleCount: 120, spread: 120, origin: { y: 0.4 } });
  };

  return (
    <div className="bg-white/80 backdrop-blur-lg p-4 rounded-2xl shadow-lg border border-pink-200 max-w-xl mx-auto">
      <motion.button
        className="w-full px-4 py-3 bg-pink-500 text-white rounded-full font-medium mb-4"
        onClick={handleReveal}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        aria-expanded={show}
      >
        💞 Reveal Birthday Message
      </motion.button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          show ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.6 }}
        style={{ overflow: "hidden" }}
      >
        <div className="text-gray-800 leading-relaxed p-2">
          <p className="mb-2">Dear Prerana,</p>

          <p className="mb-2">
            You light up every room with your laughter and warmth. On your 22nd
            birthday, I wish you bright days filled with love, new adventures
            that inspire you, and gentle moments that remind you how cherished
            you are.
          </p>

          <p className="mb-2">
            Keep dreaming boldly, keep smiling freely, and know that you are
            loved more than words can say. May this year bring you closer to
            every beautiful thing you hope for.
          </p>

          <p className="font-semibold">With all my best wishes, 🎂✨</p>
        </div>

        {/* small animated sign-off */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-3 text-sm text-right text-pink-600"
        >
          — Someone who cares
        </motion.div>
      </motion.div>
    </div>
  );
}
