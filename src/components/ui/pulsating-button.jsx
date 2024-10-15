"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function PulsatingButton({ textAwal, textAkhir}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div >
      <motion.button
        className="relative px-6 py-3 text-lg font-lexend rounded-md overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ backgroundColor: "rgb(0, 0, 0)" }}
        animate={{ backgroundColor: isHovered ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.span
          className="relative z-10 text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {textAwal}
        </motion.span>
        <motion.span
          className="absolute inset-0 z-10 flex items-center justify-center text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {textAkhir}
        </motion.span>
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ originX: 0 }}
        />
      </motion.button>
    </div>
  )
}