import React, { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function Cake() {
  // Confetti and floating hearts
  useEffect(() => {
    confetti({ particleCount: 300, spread: 160, origin: { y: 0.6 } });

    const interval = setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "floating-heart";
      heart.innerText = "💖";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 3 + Math.random() * 2 + "s";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  // Confetti button
  const shootConfetti = () => {
    confetti({
      particleCount: 400,
      spread: 180,
      origin: { y: 0.6 },
      colors: ["#ff4da6", "#ffd6ea", "#ffafcc", "#fff1f6"],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-animation flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl text-red-600 font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🎂 Birthday Cake for <span className="font-extrabold">Prerana</span> 🎂
      </motion.h1>

      {/* Animated Cake with Sparkle */}
      <motion.div
        className="w-64 h-64 bg-pink-300 rounded-3xl shadow-2xl flex items-center justify-center text-6xl relative"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        🍰
        {/* Sparkles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white rounded-full absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random(),
              }}
              animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                repeat: Infinity,
                duration: 1 + Math.random() * 2,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Confetti Button */}
      <motion.button
        onClick={shootConfetti}
        className="mt-10 bg-red-600 text-white px-6 py-3 text-lg rounded-full shadow-lg hover:scale-110 transition"
        whileHover={{ scale: 1.1 }}
      >
        🎉 Launch More Confetti
      </motion.button>
    </div>
  );
}
