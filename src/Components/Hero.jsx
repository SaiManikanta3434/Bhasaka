import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const techIcons = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", top: "20%", left: "10%" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", top: "65%", left: "15%" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg", top: "30%", right: "10%" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", bottom: "15%", right: "20%" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", bottom: "20%", left: "25%" },
];

export default function Hero() {
  const [sparkles, setSparkles] = useState([]);
  const [cells, setCells] = useState(Array(100).fill(false));

  // Sparkles
  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((prev) => [
        ...prev,
        {
          id: Math.random(),
          x: Math.random() * window.innerWidth * 0.6 + window.innerWidth * 0.2,
          y: Math.random() * 200 + 200,
        },
      ]);
      setTimeout(() => {
        setSparkles((prev) => prev.slice(1));
      }, 2000);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Blinking cells
  useEffect(() => {
    const interval = setInterval(() => {
      setCells((prev) =>
        prev.map(() => Math.random() > 0.8) // 20% chance ON
      );
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "linear-gradient(90deg, #f5f3ff, #fde68a, #f5f3ff)",
            "linear-gradient(90deg, #fde68a, #fcd34d, #fde68a)",
            "linear-gradient(90deg, #f5f3ff, #fde68a, #f5f3ff)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Grid Background */}
      <div className="absolute inset-0 z-0 grid grid-cols-10 grid-rows-10 opacity-30">
        {cells.map((active, i) => (
          <div
            key={i}
            className={`border border-gray-200 transition-all duration-500 ${
              active ? "bg-orange-200" : "bg-transparent"
            }`}
          />
        ))}
      </div>

      {/* Floating Tech Icons */}
      {techIcons.map((icon, idx) => (
        <motion.img
          key={idx}
          src={icon.src}
          alt="tech"
          className="absolute w-12 h-12 drop-shadow-xl"
          style={icon}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
            y: sparkle.y - 40,
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute w-2 h-2 rounded-full bg-yellow-300 shadow-lg"
          style={{ left: sparkle.x, top: sparkle.y }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center px-6 h-[600px] ">
        <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
          We Digital Product Design Company
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
          Creating Better Solution <br /> For{" "}
          <span className="text-orange-500">Businesses</span>
        </h1>

        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          We are a web and mobile design & development agency. Making websites &
          apps, creating brand identities, and launching startups.
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md">
            Start a project
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-lg shadow-md">
            See Our Products
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">108+</h3>
            <p className="text-gray-600">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">4million+</h3>
            <p className="text-gray-600">Business Using Stripe</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">10+</h3>
            <p className="text-gray-600">Amazing Products</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">120+</h3>
            <p className="text-gray-600">Countries Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
