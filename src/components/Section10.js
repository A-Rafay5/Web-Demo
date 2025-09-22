"use client"

import React from "react"
import { Check, ArrowRight } from "lucide-react"

export default function Section10() {
  return (
    <section className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 text-center">
      {/* Red Bracket Label */}
      <div className="relative inline-block mb-8">
        <span className="text-gray-600 text-[10px] font-medium uppercase tracking-wider">
          Contact us
        </span>
        <div className="absolute -top-1 -left-2 w-3 h-3 border-l-2 border-t-2 border-red-500"></div>
        <div className="absolute -bottom-1 -right-2 w-3 h-3 border-r-2 border-b-2 border-red-500"></div>
      </div>

      {/* Main Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Become part of our <br className="hidden sm:block" /> successful customer base
      </h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-gray-500 text-base sm:text-lg mb-12">
        Schedule a no-obligation dialogue with us to discuss your strategy, your digital goals,
        and how we can create your next breakthrough solution.
      </p>

      {/* Logo Animation */}
      <div className="relative overflow-hidden mb-12">
        <div className="flex justify-center">
          <div className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] overflow-hidden">
            <div className="flex animate-scroll-logos space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20 w-max items-center">
              {/* Repeat Logos for seamless scroll */}
              {Array.from({ length: 8 }).map((_, i) => (
                <img
                  key={i}
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.PNG-PtYU0H2DTE25kZgXwKytBFLupoyc6D.png"
                  alt="Company logo"
                  className="h-8 sm:h-10 md:h-12 lg:h-14 opacity-50"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-full text-sm flex items-center mx-auto">
        Book a meeting
        <ArrowRight className="w-3 h-3 ml-2" />
      </button>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-logos {
          animation: scroll-logos 25s linear infinite;
        }
      `}</style>
    </section>
  )
}
