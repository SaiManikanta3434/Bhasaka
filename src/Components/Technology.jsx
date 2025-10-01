// TechnologyStack.jsx
import React from 'react';


const techImages = {
  'React.js': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
  'JavaScript': 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  'TypeScript': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  'Photoshop': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png',
  'Vue.js': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
  'Laravel': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
  'Node.js': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png',
  'Angular': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
  'Tailwind CSS': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  'Sass': 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg',
};


const TechIcon = ({ iconName, name, bgColor }) => {
    return (
        <div
            className={`
                flex flex-col items-center p-4 rounded-xl cursor-pointer 
                transition-all duration-300 ease-out 
                transform 
                hover:scale-110 
                hover:translate-y-[-8px] 
                hover:z-10 
                group
            `}
        >
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center p-3 mb-3 shadow-2xl ${bgColor}`}>
                {/* Realistic Icon Image */}
                <img 
                    src={techImages[iconName]} // Use the image URL from the map
                    alt={`${iconName} logo`} 
                    className="w-full h-full object-contain filter drop-shadow-lg group-hover:animate-pulse" // Apply effects to the image
                />
            </div>
            <p className="text-gray-900 font-semibold group-hover:text-blue-700 transition-colors duration-300">{name}</p>
        </div>
    );
};

const TechnologyStack = () => {
    const technologies = [
        { iconName: 'React.js', name: 'React.js', bgColor: 'bg-teal-400' },
        { iconName: 'JavaScript', name: 'JavaScript', bgColor: 'bg-yellow-400' },
        { iconName: 'TypeScript', name: 'TypeScript', bgColor: 'bg-sky-600' },
        { iconName: 'Photoshop', name: 'Photoshop', bgColor: 'bg-blue-600' },
        { iconName: 'Vue.js', name: 'Vue.js', bgColor: 'bg-green-500' },
        { iconName: 'Laravel', name: 'Laravel', bgColor: 'bg-red-500' },
        { iconName: 'Node.js', name: 'Node.js', bgColor: 'bg-green-700' },
        { iconName: 'Angular', name: 'Angular', bgColor: 'bg-red-700' },
        { iconName: 'Tailwind CSS', name: 'Tailwind CSS', bgColor: 'bg-cyan-500' },
        { iconName: 'Sass', name: 'Sass', bgColor: 'bg-pink-600' },
        // Add more technologies here following the 'iconName' and 'name' structure
    ];

    return (
        <section 
            className={`
                py-20 text-center relative overflow-hidden
                bg-gradient-to-br from-yellow-200 via-orange-300 to-yellow-200 
                bg-[length:400%_400%] 
                animate-gradient-pulse 
            `}
        >
            <div className="container mx-auto px-4 relative z-10">
                <span className="text-sm font-semibold text-orange-600 uppercase tracking-widest">
                    • TECHNOLOGY
                </span>
                <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mt-2 mb-12 drop-shadow-md">
                    We integrate with the 
                    <span className="text-blue-700 block sm:inline"> Best Technology</span>
                </h2>
                
                {/* Grid for Technology Icons */}
                {/* Adjusted grid to handle more icons elegantly on large screens, e.g., lg:grid-cols-10 */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-x-4 gap-y-12 max-w-7xl mx-auto">
                    {technologies.map((tech, index) => (
                        <TechIcon key={index} {...tech} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologyStack;