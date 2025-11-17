import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cake from "./pages/Cake";
import bgMusic from "./assets/music1.mp3";

export default function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(bgMusic);
    audioRef.current = audio;
    audio.loop = true;
    audio.volume = 0.5;

    // Try autoplay immediately
    audio.play().catch(() => {
      console.log("Autoplay blocked, will play on first user interaction");
      document.addEventListener(
        "click",
        () => {
          audio.play();
        },
        { once: true }
      );
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cake" element={<Cake />} />
      </Routes>
    </Router>
  );
}
