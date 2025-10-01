// src/components/Services.jsx
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import frontend from "../assets/frontend.jpg"
import web from "../assets/web.webp"
import software from "../assets/Software.png"
import application from "../assets/application.webp"
import ai from "../assets/ai.png"

// NOTE: Please ensure these image URLs are valid and accessible
const services = [
  {
    title: "UI/UX & Graphics Design",
    image: frontend, 
    items: ["Logo Design", "Brand Guidelines", "Business Card", "Wireframe", "Mobile Application", "Flyer Design"],
  },
  {
    title: "Mobile & Web Application",
    image: web, 
    items: ["Web Development", "iOS/Android Apps", "API Integration", "Progressive Web Apps", "E-commerce Solutions", "Custom Software"],
  },
  {
    title: "Software Development Consulting",
    image: software, 
    items: ["Strategy & Planning", "Technology Roadmap", "Process Optimization", "Code Review", "Architecture Design", "Agile Coaching"],
  },
  {
    title: "Application Development",
    image: application, 
    items: ["Backend Systems", "Frontend Development", "DevOps", "Cloud Solutions", "Maintenance & Support", "Testing & QA"],
  },
  {
    title: "AI & Machine Learning",
    image: ai, 
    items: ["Model Training", "Data Analysis", "Automation", "AI Consulting", "Chatbots", "Predictive Systems"],
  },
];

// Service Card component with image background and hover text overlay
const ServiceCard = ({ service }) => {
  return (
    <motion.div
      className="min-w-[320px] h-[350px] rounded-xl overflow-hidden cursor-pointer group shadow-xl relative flex-shrink-0"
      whileHover="hover"
      initial="rest"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${service.image})` }}
        variants={{
          rest: { scale: 1, filter: "brightness(100%)" },
          hover: { scale: 1.05, filter: "brightness(40%)" }, // Darken on hover
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Overlay for text content - Appears on Hover */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-black/50"
        variants={{
          rest: { opacity: 0, y: 30 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
        <ul className="space-y-1 text-sm text-gray-200">
          {service.items.slice(0, 3).map((item, i) => ( 
            <li key={i} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
              {item}
            </li>
          ))}
          {service.items.length > 3 && (
            <li className="text-sm text-orange-400 mt-2">... and more</li>
          )}
        </ul>
        <div className="mt-4">
          <button className="flex items-center gap-2 text-sm font-medium text-orange-400 hover:text-white transition group-hover:underline">
            Explore <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
          </button>
        </div>
      </motion.div>

      {/* Initial display of just the title - Fades Out on Hover */}
      <motion.div
        className="absolute bottom-0 left-0 p-6 text-white drop-shadow-lg"
        variants={{
          rest: { opacity: 1, y: 0 },
          hover: { opacity: 0, y: -20 },
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold">{service.title}</h3>
      </motion.div>
    </motion.div>
  );
};

export default function Services() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      // Scroll by the width of one card plus the gap (approx 320px + 24px gap = 344px)
      const scrollAmount = direction === "left" ? -344 : 344;
      sliderRef.current.scrollBy({
        left: scrollAmount, 
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gradient-to-l from-black to-black via-pink-900 text-white py-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 px-6 md:px-8">
          <div>
            <span className="px-3 py-1 rounded-full border border-orange-500 text-orange-500 text-sm">
              • Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Explore Our Expertise 🚀
            </h2>
          </div>

          {/* Arrow Controls */}
          <div className="flex gap-3 mt-6 md:mt-0 flex-shrink-0">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-gray-600 hover:bg-gray-800 transition"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-orange-500 hover:bg-orange-600 transition"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={sliderRef}
          // The key classes for horizontal scroll: flex, overflow-x-auto, scrollbar-hide
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-6 md:px-8" 
        >
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
          {/* Padding element for the end of the scroll */}
          <div className="min-w-[20px] h-1 flex-shrink-0"></div> 
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center mt-12 px-6 md:px-8">
          <button className="px-8 py-3 rounded-full border border-orange-500 text-orange-500 flex items-center gap-2 font-medium hover:bg-orange-500 hover:text-white transition shadow-lg">
            See All Services <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}