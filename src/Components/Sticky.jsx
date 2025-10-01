import React, { useEffect, useRef, useState } from "react";
import aem from "../assets/aem.webp";
import nextgen from "../assets/Nextgen.webp";
import imagine from "../assets/Imagine.jpeg";
import founderImg from "../assets/founder.webp";

const slides = [
  {
    id: 0,
    title: "CREATIVE",
    text: "Our team collaborates to develop the best strategies and inspired solutions for your brand. We leverage intelligence and technology as we create great experiences.",
    img: aem,
  },
  {
    id: 1,
    title: "CONNECT",
    text: "We help you connect with your audience through dynamic and impactful experiences. By understanding your unique needs, we craft strategies that drive success and turn your goals into reality.",
    img: nextgen,
  },
  {
    id: 2,
    title: "DEVELOP",
    text: "Develop Creative transforms your vision into reality with expert solutions in strategy, branding, website development, and content creation.",
    img: imagine,
  },
];

export default function StickyShowcase() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = null;
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = Math.max(rect.height - window.innerHeight, 1);
      const scrolled = -rect.top;
      setProgress(Math.min(Math.max(scrolled / totalScroll, 0), 1));
    };
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(handleScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const slideCount = slides.length;
  const stage = progress * (slideCount + 1); // +1 for founder
  const activeIndex = Math.floor(Math.min(stage, slideCount - 0.01));
  const slideProgress = stage - activeIndex; // 0 → 1 within current slide

  // Founder opacity appears at the end
  const founderOpacity = progress > 0.95 ? (progress - 0.95) / 0.05 : 0;

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Render all slides for crossfade */}
        {slides.map((slide, index) => {
          const indexProgress = Math.min(Math.max(stage - index, 0), 1);
          const imgOpacity =
            indexProgress < 0.1
              ? indexProgress * 10
              : indexProgress > 0.9
              ? (1 - indexProgress) * 10
              : 1;
          return (
            <div
              key={slide.id}
              className="absolute inset-0 bg-center bg-cover transition-all duration-700"
              style={{
                backgroundImage: `url(${slide.img})`,
                opacity: imgOpacity,
                transform: `scale(${1 + indexProgress * 0.05}) translateY(${indexProgress * 20}px)`,
              }}
            />
          );
        })}

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>

        {/* Black fade overlay for each slide */}
        <div
          className="absolute inset-0 bg-black transition-opacity duration-500"
          style={{
            opacity:
              slideProgress > 0.8 && activeIndex < slideCount ? (slideProgress - 0.8) * 5 : 0,
          }}
        ></div>

        {/* Text for active slide */}
        {slides[activeIndex] && (
          <div
            className="relative z-10 text-center px-6 transition-opacity duration-500"
            style={{
              opacity:
                slideProgress < 0.2
                  ? 0
                  : slideProgress < 0.4
                  ? (slideProgress - 0.2) * 5
                  : slideProgress > 0.8
                  ? (1 - slideProgress) * 5
                  : 1,
              transform: `translateY(${(1 - slideProgress) * 30}px)`,
            }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              {slides[activeIndex].title}
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-white/80 max-w-2xl mx-auto">
              {slides[activeIndex].text}
            </p>
          </div>
        )}

        {/* Founder Image Section */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000"
          style={{
            opacity: founderOpacity,
            transform: `translateY(${(1 - founderOpacity) * 50}px) scale(${0.95 + founderOpacity * 0.05})`,
          }}
        >
          {/* Text above founder image */}
          <h2
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-6 transition-opacity duration-700"
            style={{ opacity: founderOpacity }}
          >
            MEET OUR FOUNDER
          </h2>

          {/* Founder Image */}
          <img
            src={founderImg}
            alt="Founder"
            className="w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full object-cover shadow-2xl ring-8 ring-white/30 transition-transform duration-500 hover:scale-105"
          />

          {/* Text below founder image */}
          <h3
            className="text-3xl md:text-4xl font-semibold text-white drop-shadow-lg mt-6 transition-opacity duration-700"
            style={{ opacity: founderOpacity }}
          >
            Founder
          </h3>
        </div>
      </div>
    </section>
  );
}
