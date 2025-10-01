import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import generate from "../assets/Generate.png"
import business from "../assets/Business.png"
import cloud from "../assets/Cloud.png"
import machine from "../assets/Machine.png"

// --- Data for Project Cards ---
const projects = [
  {
    id: 1,
    category: "Adobe Experience Manager",
    title: "You get immersive content experiences across audiences and channels. With Assets, you can source content from a range of sources using automated workflows.",
    sales: 1532,
    reviews: "1.4K Reviews",
    image: generate,
  },
  {
    id: 2,
    category: "Business Process",
    title: "We develop next-generation technology solutions for global enterprises, empowering companies to achieve excellence in their business outcomes.",
    sales: 890,
    reviews: "950 Reviews",
    image: business,
  },
  {
    id: 3,
    category: "Cloud computing",
    title: "Cloud computing is the delivery of computing services like storage, servers, databases, and software over the internet. It enables scalable, flexible, and cost-effective access to IT resources without the need for physical infrastructure.",
    sales: 2400,
    reviews: "2.1K Reviews",
    image: cloud,
  },
  {
    id: 4,
    category: "AI and Machine Learning",
    title: "Artificial Intelligence (AI) and Machine Learning (ML) enable systems to learn from data, identify patterns, and make decisions with minimal human intervention. AI mimics human intelligence, while ML focuses on algorithms that improve automatically through experience.",
    sales: 1120,
    reviews: "1.0K Reviews",
    image: machine,
  }
];

// --- Component ---
export default function HomePage() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      // Calculate scroll amount based on card width (350px) + gap (24px for space-x-6)
      const scrollAmount = direction === "left" ? -374 : 374;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-gray-900 min-h-screen px-6 md:px-16 py-12 text-white overflow-hidden">
      {/* Animated Stars Background */}
      <style jsx global>{`
        /* Note: For the 'stars' classes to work, you must define them 
           in a global CSS file or within a <style> tag like this. 
           (Assuming you have the necessary CSS animations) */
        .stars, .stars2, .stars3 {
          /* Placeholder CSS - replace with your actual star animation styles */
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Services Section (Unchanged) */}
        <div className="text-center">
          <p className="text-orange-400 font-medium">• Why choose us</p>
          <h2 className="text-3xl font-bold mt-2">IT Services to Various Industries</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10">
          {["WHMCS Template", "Custom Development", "e-Commerce Platform", "Event Management",].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-gray-800 to-gray-700 hover:from-indigo-500 hover:to-purple-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col items-center justify-center"
            >
              <span className="text-white font-medium">{item}</span>
              <span className="mt-4 w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-lg">
                →
              </span>
            </div>
          ))}
          <div className="p-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition flex flex-col items-center justify-center">
            <span className="font-medium">Not Listed? Let's Talk</span>
          </div>
        </div>

        {/* Projects Section (UPDATED) */}
        <div className="mt-20">
          <p className="text-orange-400 font-medium">• Projects</p>
          <h2 className="text-3xl font-bold mt-2">Comprehensive Project Plan & Overview</h2>

          <div className="relative mt-10">
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 rounded-full shadow-lg hover:scale-110 transition hidden md:block" // Hidden on small screens for better touch UX
              aria-label="Scroll Projects Left"
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </button>

            {/* Scrollable Project Cards */}
            <div
              ref={scrollRef}
              className="flex overflow-x-scroll scrollbar-hide space-x-6 scroll-smooth px-2 pb-4" // Added horizontal padding for edge visibility
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-[350px] flex-shrink-0 bg-gray-800 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
                >
                  {/* Project Image Area */}
                  <div 
                    className="h-48 bg-cover bg-center rounded-t-xl transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    {/* Dark gradient overlay for text readability (optional) */}
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>

                  <div className="p-4 relative z-10">
                    <span className="text-sm text-orange-400">• {project.category}</span>
                    <h3 className="text-lg font-semibold mt-2 group-hover:text-indigo-400 transition">
                      {project.title}
                    </h3>
                    
                  </div>
                </div>
              ))}
              {/* Spacer for clean end of scroll */}
              <div className="w-16 flex-shrink-0"></div> 
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 rounded-full shadow-lg hover:scale-110 transition hidden md:block" // Hidden on small screens
              aria-label="Scroll Projects Right"
            >
              <ChevronRight className="text-white w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}