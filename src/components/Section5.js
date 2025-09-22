"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react"
export default function Page5() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      title: "Web development",
      img: "./images/laptop-computer-showing-website-interface-with-cle.jpg",
      bg: "bg-gray-100",
      desc: "We design and develop custom websites that combine aesthetics with functionality. Whether you need a simple presentation page or a complex platform, we deliver responsive and user-friendly solutions that support your business and convert visitors into customers.",
    },
    {
      title: "App development",
      img: "./images/mobile-phone-with-app-interface-and-wireless-speak.jpg",
      bg: "bg-gray-900",
      desc: "We design and develop custom apps that combine aesthetics with functionality. Whether you need a simple presentation page or a complex platform, we deliver responsive and user-friendly solutions that support your business and convert visitors into customers.",
    },
    {
      title: "SaaS solutions",
      img: "./images/dashboard-interface-with-charts-and-analytics-data.jpg",
      bg: "bg-gray-100",
      desc: "We design and develop custom SaaS solutions that combine aesthetics with functionality. Whether you need a simple presentation page or a complex platform, we deliver responsive and user-friendly solutions that support your business and convert visitors into customers.",
    },
    {
      title: "SEO (Search Engine Optimization)",
      img: "./images/seo-search-engine-optimization-with-magnifying-gla.jpg",
      bg: "bg-gray-900",
      desc: "We design and develop custom SEO strategies that combine aesthetics with functionality. Whether you need a simple presentation page or a complex platform, we deliver responsive and user-friendly solutions that support your business and convert visitors into customers.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 relative">
      {/* Floating cursor text */}
      {hoveredCard !== null && (
        <div
          className="fixed z-50 bg-black text-white px-3 py-1 rounded-md text-sm font-medium pointer-events-none"
          style={{ top: mousePosition.y - 30, left: mousePosition.x + 15 }}
        >
          View projects →
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-2xl">
            <div className="relative inline-block mb-4">
              <span className="text-sm text-gray-600">Our projects</span>
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-red-500"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-red-500"></div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How we have helped other companies.
            </h1>
            <p className="text-gray-600 text-lg">
              See how we've helped clients transform ambitious ideas into
              impactful digital products.
            </p>
          </div>
          <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-full text-sm flex items-center">
            Our tea services
            <ArrowRight className="w-3 h-3 ml-2" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image with hover zoom */}
              <div
                className={`w-20 h-16 ${card.bg} rounded-lg flex items-center justify-center mb-6 relative overflow-hidden`}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {card.title}
              </h3>
              <b><p className="text-gray-600 leading-relaxed">{card.desc}</p></b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
