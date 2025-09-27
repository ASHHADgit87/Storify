import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets"; 

const images = [
  assets.heroimage1,
  assets.heroimage2,
  assets.heroimage3,
  assets.heroimage4,
  assets.heroimage5,
  assets.heroimage6,
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center bg-black">
      <AnimatePresence>
        <motion.img
  key={index}
  src={images[index]}
  alt={`slide-${index}`}
  className="absolute w-full h-full object-cover object-center"
  initial={{ opacity: 0, x: -200, rotateY: -60 }}  
  animate={{ opacity: 1, x: 0, rotateY: 0 }}       
  exit={{ opacity: 0, x: 200, rotateY: 60 }}       
  transition={{ duration: 1.5, ease: "easeInOut" }} 
/>


      </AnimatePresence>
      <div className="absolute left-6 md:left-16 top-1/4 text-white z-10">
        <h4 className="text-lg mb-2">Trade-in-offer</h4>
        <h2 className="text-3xl md:text-5xl font-bold mb-2">Super value deals</h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#FF7F32] mb-4">
          On all products
        </h1>
        <p className="mb-6 text-base md:text-lg">
          Save more with coupons & up to 70% off!
        </p>
        <button className="bg-[#FF7F32] text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-bold hover:bg-orange-600 transition cursor-pointer">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
