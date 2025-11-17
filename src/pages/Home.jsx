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

  // Confetti on load
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 160,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-animation p-4 flex flex-col items-center overflow-hidden">
      {/* Heading */}
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

      {/* Floating Cake */}
      <motion.div
        className="text-6xl mt-8"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🎂
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

      {/* BIG HEARTFELT LETTER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-12 w-full max-w-3xl bg-pink-50 p-8 rounded-3xl shadow-xl border border-pink-200"
      >
        <h2 className="text-2xl font-bold text-pink-700 mb-4 text-center">
          💌 A Letter From My Heart 💌
        </h2>

        <div className="text-gray-700 text-lg space-y-4 leading-relaxed max-h-[380px] overflow-y-auto pr-2">
          <p>Happy Birthday.</p>

          <p>I want to tell you something from the bottom of my heart.</p>

          <p>
            There was a time when your voice was my favorite sound, your smile
            was my morning, and your presence was my peace.
          </p>

          <p>
            But then life changed. You walked away carrying your pain, and I
            stood there, watching the only world I knew disappear.
          </p>

          <p>
            Days passed. Months passed. But how can my heart move on from the
            only person it beats for?
          </p>

          <p>
            Every night I close my eyes, and your memories come before sleep.
            Every morning I open my phone, and your photos in my hidden album
            become my sunrise.
          </p>

          <p>
            I search for you in crowds, in dreams, in quiet moments… But you are
            nowhere. And yet somehow, you are everywhere inside me.
          </p>

          <p>
            I know you have suffered. I know you broke in silence. And the worst
            pain for me is knowing you cried alone when I should have been the
            shoulder you leaned on.
          </p>

          <p>
            Even though I wasn’t beside you physically, my heart never left you
            for a single second.
          </p>

          <p>
            I made mistakes. I hurt you without meaning to. But losing you
            changed me more than anything in life.
          </p>

          <p>
            I grew. I learned. I became better not to impress you, but because
            love made me want to become the person you deserve.
          </p>

          <p className="italic text-pink-700 font-semibold text-center">
            “Some loves don’t end. They just stay quiet, but alive.”
          </p>

          <p>
            You changed… but my love stayed exactly the same — unmoved,
            unshaken, untouched by time.
          </p>

          <p>If God gave me one wish, I would ask for nothing but you.</p>

          <p>And today, on your birthday, here is my truth:</p>

          <p className="font-bold text-pink-700">
            I will wait for you till my last breath. Not because I am weak, but
            because my love for you is stronger than distance, pain, or time.
          </p>

          <p>
            Even if you forget me someday… I will still remember you. Even if
            you love someone else someday… I will still wish for your happiness.
          </p>

          <p>
            You are not just a chapter in my life — you are the whole story my
            heart still writes.
          </p>

          <p className="text-center text-pink-700 font-bold text-xl">
            I love you. Deeply. Painfully. Endlessly.
          </p>
        </div>
      </motion.div>

      {/* Button */}
      <motion.button
        onClick={() => nav("/cake")}
        className="mt-12 px-8 py-4 bg-pink-600 text-white rounded-full shadow-lg text-xl hover:scale-110 transition"
        whileHover={{ scale: 1.1 }}
      >
        🎉 Go to Cake Surprise
      </motion.button>
    </div>
  );
}
