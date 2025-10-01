// ClientFeedback.jsx
import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'; // Assuming you use a library like lucide-react for icons

const TestimonialCard = ({ feedback, name, rating }) => {
  // Hover/Animation: Grow slightly and lift on hover
  const hoverClasses = "transform transition duration-500 ease-in-out hover:scale-[1.03] hover:shadow-2xl";
  
  return (
    <div className={`p-6 bg-white rounded-xl shadow-lg border border-gray-100 ${hoverClasses}`}>
      <div className="flex items-center mb-4">
        {/* Placeholder for Profile Image */}
        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
            {/* In a real project, replace this with an <img> tag */}
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-900">Awesome Services!</h4>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        "{feedback}"
      </p>
      
      {/* Star Rating */}
      <div className="flex text-yellow-500 mb-4">
        {Array(rating).fill(0).map((_, i) => <Star key={i} size={16} fill="currentColor" stroke="none" />)}
        {Array(5 - rating).fill(0).map((_, i) => <Star key={i} size={16} stroke="currentColor" fill="none" />)}
      </div>
      
      <p className="text-sm font-semibold text-gray-800 border-t pt-2 mt-4">
        {name}
      </p>
    </div>
  );
};

const ClientFeedback = () => {
  const testimonials = [
    { name: 'Saiful Talukdar', rating: 5, feedback: 'Our AI image solutions have exceeded our customers\' expectations, they appreciate the Here\'s a opportunities.' },
    { name: 'Saiful Talukdar', rating: 5, feedback: 'Our AI image solutions have exceeded our customers\' expectations, they appreciate the Here\'s a opportunities.' },
    { name: 'Saiful Talukdar', rating: 5, feedback: 'Our AI image solutions have exceeded our customers\' expectations, they appreciate the Here\'s a opportunities.' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-300 to-gray-300 via-gray-600 rounded-lg shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div className="text-left">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              • Clients Feedback
            </span>
            <h2 className="text-4xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              What People Think About <br />
              Our Products
            </h2>
          </div>
          <button className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition duration-300">
            Sell All Feedback
          </button>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <TestimonialCard key={index} {...test} />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex justify-center space-x-4 mt-12">
          {/* Arrow Hover/Animation: Scale up slightly and change background */}
          <button className="p-3 rounded-full border border-gray-300 text-gray-600 hover:bg-orange-500 hover:text-white transition duration-300 transform hover:scale-110">
            <ChevronLeft size={24} />
          </button>
          <button className="p-3 rounded-full bg-orange-500 text-white shadow-lg transition duration-300 transform scale-110 hover:scale-125">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;