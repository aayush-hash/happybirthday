import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/a.jpg';
import img2 from '../assets/b.jpg';
import img3 from '../assets/c.jpg';
import img4 from '../assets/d.png';
import img5 from '../assets/e.jpg';


export default function Slideshow() {
const images = [img1, img2, img3,img4,img5];
const [index, setIndex] = useState(0);


useEffect(() => {
const interval = setInterval(() => {
setIndex((prev) => (prev + 1) % images.length);
}, 2500);
return () => clearInterval(interval);
}, []);


return (
<motion.img
key={index}
src={images[index]}
className="w-full h-64 object-cover rounded-2xl shadow-xl border-2 border-pink-300"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6 }}
/>
);
}