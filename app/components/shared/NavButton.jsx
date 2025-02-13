import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";

const Button = ({ text, url }) => {
  return (
    <Link href={url} className="relative">
      <motion.div
        className="relative px-6 py-3 text-black bg-white rounded-xl overflow-hidden font-semibold"
        whileHover={{ scale: 1,x:-10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
       {text}
      
      </motion.div>
    </Link>
  )
}

export default Button
