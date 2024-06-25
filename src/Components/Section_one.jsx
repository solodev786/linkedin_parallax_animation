"use client";
import React from "react";
import { motion } from "framer-motion";
function Section_one() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-200 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className=" text-9xl font-black text-black tracking-wider">
          image parallax
        </h1>
        <h1 className=" text-9xl font-black text-black tracking-wider">
          starts here
        </h1>
      </motion.div>
    </div>
  );
}

export default Section_one;
