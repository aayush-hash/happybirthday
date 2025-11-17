import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img3 from "../assets/a.jpg";
import img2 from "../assets/c.jpg";
import img1 from "../assets/e.jpg";

export default function Home() {
  const nav = useNavigate();
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Floating hearts
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "floating-heart";
      heart.innerText = "💗";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 3 + Math.random() * 2 + "s";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Automatic slideshow
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  // Confetti explosion on page load
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 160,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-animation p-4 flex flex-col items-center overflow-hidden">
      {/* Birthday Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-center mt-6"
        style={{ color: "#b91c6e", textShadow: "2px 2px 6px #ffafcc" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🎀 Happy 22nd Birthday, <span className="font-extrabold">Prerana</span>{" "}
        🎀
      </motion.h1>

      {/* Floating Cake Animation */}
      <motion.div
        className="text-6xl mt-8"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🍰
      </motion.div>

      {/* Photo Slideshow */}
      <motion.div
        key={currentIndex}
        className="w-full max-w-4xl h-64 md:h-96 mt-10 overflow-hidden rounded-2xl shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={images[currentIndex]}
          alt={`Prerana ${currentIndex + 1}`}
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Birthday Letter Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-10 w-full max-w-xl bg-pink-50 p-6 rounded-2xl shadow-inner border border-pink-200 text-center"
      >
        <p className="text-gray-700 text-lg mb-4">💌 Dear Prerana,</p>
        <p className="text-gray-700 mb-3">
          Wishing you a magical, joyful, and unforgettable 22nd birthday! 💖 May
          your year be filled with happiness, success, new achievements, and
          beautiful memories.
        </p>
        <p className="text-pink-700 font-bold text-lg mt-4">
          I always love you no matter what the situation. My love is unshaken
          and irreplaceable 💖
        </p>
      </motion.div>

      {/* Navigate to Cake Page */}
      <motion.button
        onClick={() => nav("/cake")}
        className="mt-12 px-6 py-3 bg-pink-600 text-white rounded-full shadow-lg text-lg hover:scale-110 transition"
        whileHover={{ scale: 1.1 }}
      >
        🎉 Go to Cake Surprise
      </motion.button>
    </div>
  );
}
