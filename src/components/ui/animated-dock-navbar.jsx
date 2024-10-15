"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, CookingPot, Info, LogIn } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


const navItems = [
  { icon: Home, label: "Home", href: "/home" },
  { icon: CookingPot, label: "Recipe", href: "/recipe" },
  { icon: Info, label: "Info", href: "/info" },
  { icon: LogIn, label: "Login", href: "/" },
]

export default function AnimatedDockNavbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <nav className="fixed  bottom-0 left-0 right-0 bg-black border-t border-white rounded-t-3xl shadow-lg">
      <div className="max-w-md mx-auto px-4">
        <ul className="flex justify-between items-center py-2">
          {navItems.map((item, index) => (
            <li key={item.label} className="flex-1 text-white font-domaine">
              <Link href={item.href} className="flex flex-col items-center">
                <motion.div
                  className="relative p-2"
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  initial="rest"
                  whileHover="hover"
                  animate={hoveredIndex === index ? "hover" : "rest"}
                >
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        className="absolute inset-0 bg-white rounded-full"
                        initial={{ scale: 1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 3 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      />
                    )}
                  </AnimatePresence>
                  <motion.div
                    className="relative z-10"
                    variants={{
                      rest: { y: 0, color: "#ffff" },
                      hover: { y: -50, color: "#000", scale: 1.5, },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <item.icon className="w-6 h-6" />
                  </motion.div>
                </motion.div>
                <motion.span
                  className="text-xs mt-1"
                  variants={{
                    rest: { color: "#ffff" },
                    hover: { color: "#ffff" },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            </li>
          ))}
          <li className="flex-1 -mt-5">
            <div href="/" className="flex flex-col items-center">
              <motion.div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Image
                  src="/img1.jpg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </motion.div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}