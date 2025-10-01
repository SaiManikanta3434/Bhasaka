import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // for hamburger icons
import logo from "../assets/logo.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Services", "Careers", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 shadow-lg"
    >
      {/* Background */}
      <div className="bg-gradient-to-r from-gray-900 via-orange-400 to-gray-900 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.1, rotate: -2 }}
            className="cursor-pointer"
          >
            <img src={logo} alt="Logo" className="h-12 md:h-16 w-auto" />
          </motion.h1>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-8 text-white font-medium">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.2,
                  color: "#FFD580",
                  textShadow: "0px 0px 8px rgba(255,255,255,0.8)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer transition duration-300"
              >
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gray-900/95 px-6 py-4"
            >
              <ul className="flex flex-col space-y-4 text-white font-medium">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.1, color: "#FFD580" }}
                    className="cursor-pointer"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
