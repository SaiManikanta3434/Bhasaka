
import React from 'react';
import { Mail, Phone, Facebook, Linkedin, Twitter } from 'lucide-react'; 

const Footer = () => {
  // Define the subtle background gradient that goes from a dark gray to black
  const gradientClass = 'bg-gradient-to-t from-gray-900 via-black to-black';

  const footerLinks = [
    { title: 'Company', links: ['About', 'Services', 'Practices', 'Blog', 'Contact'] },
    { title: 'Support', links: ['Terms & Conditions', 'Privacy Policy'] },
  ];

  const contactInfo = [
    { icon: Mail, text: 'hr@bhasaka.com', href: 'mailto:hr@bhasaka.com' },
    { icon: Phone, text: '(040) 48520391', href: 'tel:+914048520391' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className={`text-white ${gradientClass} pt-16`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">

          {/* Column 1: Company Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Bhasaka Technologies</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Bhasaka is a leading IT service provider, delivering cutting-edge technologies, 
              innovative products, and robust applications. We focus on transformative 
              solutions that enhance efficiency, user experiences, and business growth in a 
              dynamic digital landscape.
            </p>
          </div>

          {/* Columns 2 & 3: Navigation Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-xl font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white text-sm transition duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Get in Touch */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 mb-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <item.icon className="w-5 h-5 mr-3 text-red-500" />
                  <a 
                    href={item.href}
                    className="text-gray-400 hover:text-white text-base transition duration-300"
                  >
                    {item.text}
                  </a>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  aria-label={social.label}
                  className="text-gray-400 hover:text-blue-500 transition duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-6 pb-8 text-center sm:text-left">
          <p className="text-sm text-gray-500">
            Copyright Â© 2025 Bhasaka Technologies - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;