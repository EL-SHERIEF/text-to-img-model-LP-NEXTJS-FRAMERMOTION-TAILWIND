import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";

const Button = ({ text, url }) => {
  return (
    <Link href={url} className="relative">
      <motion.div
        className="shadow-2xl shadow-[#8c2ed45f] relative px-8 py-4 rounded-2xl bg-gradient-to-r from-[#8B2ED4] to-[#1CCCD9] backdrop-blur-sm text-white text-sm font-medium transition-all duration-200 group-hover:backdrop-blur-2xl"
        whileHover={{ scale: 1,x:-10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
       {text}
      
      </motion.div>
    </Link>
  )
}

export default Button
