import React from "react";
import One from "../assets/One.png";
import Two from "../assets/Two.png";
import Bhaska from "../assets/Bhaskha.png";



export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-gray-300 via-yellow-200 to-gray-100 py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left side - Image composition */}
        <div className="relative flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4">
            
            {/* Left Image */}
            <div className="relative w-40 h-72 md:w-56 md:h-96 overflow-hidden rounded-[3rem] shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <img
                src={One}
                alt="Office 1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Image */}
            <div className="relative w-40 h-72 md:w-56 md:h-96 overflow-hidden rounded-[3rem] shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl mt-12">
              <img
                src={Two}
                alt="Office 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Circular badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float">
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold text-xl shadow-xl transform hover:scale-110 transition duration-500">
              
              {/* Spinning dashed text circle */}
              <div className="absolute inset-0 rounded-full border-collapse border-black animate-spin-slow flex items-center justify-center text-[10px] text-black uppercase tracking-widest">
                <img src={Bhaska} alt="" className="w-16 h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div>
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
            + About ThemeTags
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-6 leading-tight ">
            AEM Developments <br />
            Empowered{" "}
            <span className=" relative bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Worldide
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-orange-400 to-yellow-400 opacity-50 -z-10"></span>
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-lg">
            Bhasaka Technologies is a leading provider of Adobe Experience Manager (AEM) solutions and staffing services, specializing in delivering tailored digital experiences. Our expert team helps businesses optimize content management, enhance customer engagement, and drive digital transformation. We offer comprehensive services across AEM Assets for efficient digital asset management, AEM Forms for dynamic and personalized data collection, and AEM Target for AI-driven personalization. With deep expertise in AEM, we ensure seamless integration and scalable solutions to meet your unique business needs.
          </p>

          <button className="mt-8 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-full shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            More About Us
          </button>
        </div>
      </div>
    </section>
  );
}
