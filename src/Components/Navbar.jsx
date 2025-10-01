import { motion } from "framer-motion";
import logo from "../assets/logo.webp";

export default function Navbar() {
  const navItems = ["Home", "About", "Services", "Careers", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 shadow-lg"
    >
      {/* Orange + Gray Gradient Background */}
      <div className="bg-gradient-to-r from-gray-900 via-orange-400 to-gray-900 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.1, rotate: -2 }}
            className="text-white font-bold text-2xl tracking-wide cursor-pointer"
          >
            <img src={logo} alt="" className="w-full h-16"/>
          </motion.h1>

          {/* Nav Links */}
          <ul className="flex space-x-8 text-white font-medium">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.2,
                  color: "#FFD580", // Light orange hover
                  textShadow: "0px 0px 8px rgba(255,255,255,0.8)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer transition duration-300"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
