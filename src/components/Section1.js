"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 px-4 sm:px-6 py-6 bg-gray-50 z-40">
        <div className="max-w-xl mx-auto">
          <div className="bg-gray-800 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="text-white text-base sm:text-lg font-semibold">
                ScandiTech
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors text-sm"
              >
                About us
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors text-sm"
              >
                Our services
              </a>
              <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-full text-sm flex items-center">
                Contact now
                <ArrowRight className="w-3 h-3 ml-2" />
              </button>
            </nav>

            {/* Mobile Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-white z-50 md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div
          className={`p-6 transition-all duration-700 ease-in-out delay-200 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }`}
        >
          {/* Mobile menu header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                </div>
              </div>
              <span className="text-gray-800 text-lg font-semibold">
                ScandiTech
              </span>
            </div>
            <button
              className="text-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile navigation */}
          <nav className="space-y-6">
            <a href="#" className="block text-gray-800 text-lg">
              About us
            </a>
            <a href="#" className="block text-gray-800 text-lg">
              Our services
            </a>
            <div className="pt-4">
              <Button className="w-full bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-50 rounded-3xl py-3 text-base">
                Contact us
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 pt-32 sm:pt-36 min-h-screen flex flex-col justify-center">
        {/* Center Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center justify-center mb-8 sm:mb-12"
        >
          <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200 flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 text-sm font-medium">
              <b>Get your digital strategy started now!</b>
            </span>
          </div>
        </motion.div>

        {/* Text + Testimonials */}
        <div className="relative text-center mb-6 sm:mb-8">
          {/* Left Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block absolute left-0 top-8 sm:top-12 md:top-16 w-48 sm:w-64 bg-white rounded-lg shadow-lg p-4 sm:p-6 transform -rotate-6 z-0 opacity-90"
          >
            <div className="text-3xl sm:text-4xl text-gray-300 mb-2">"</div>
            <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4">
              Teamet designede en flot hjemmeside optimeret til konvertering –
              vi oplevede en stigning på 40 % i leads!
            </p>
            <p className="text-gray-500 text-xs">- Sumaira Iftikhar</p>
          </motion.div>

          {/* Right Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:block absolute right-0 top-12 sm:top-16 md:top-20 w-48 sm:w-64 bg-white rounded-lg shadow-lg p-4 sm:p-6 transform rotate-6 z-0 opacity-90"
          >
            <div className="text-3xl sm:text-4xl text-gray-300 mb-2">"</div>
            <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4">
              Scanditech ramte plet med vores MVP-design – hurtig levering og
              imponerende sans for detaljer.
            </p>
            <p className="text-gray-500 text-xs">- Tim Birk</p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-wide px-4"
          >
            Vejen til Digital Success
            <br />
            Begynder Her
          </motion.h1>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto px-4"
        >
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Scanditech er specialiseret i at udvikle{" "}
            <strong>avancerede web-, app- og SaaS-løsninger</strong>, der
            styrker din digitale synlighed og skaber dybere engagement
          </p>
        </motion.div>

        {/* Avatars + reviews */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex items-start space-x-2 bg-gray-100/50 rounded-lg px-3 py-2">
            <div className="flex -space-x-1">
              <img
                src="../images/professional-headshot-1.png"
                alt="Customer 1"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="../images/professional-headshot-2.png"
                alt="Customer 2"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="../images/professional-headshot-3.png"
                alt="Customer 3"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-gray-700 text-xs font-medium">+2K</span>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3 h-3 text-gray-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-xs">From 1.5K reviews</span>
            </div>
          </div>
        </div>

        {/* Floating button
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-20">
          <Button className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 sm:px-6 py-2 sm:py-3 shadow-lg text-sm sm:text-base transition-colors">
            <span className="block">Schedule time with me</span>
            <span className="text-xs opacity-90">powered by Calendly</span>
          </Button>
        </div> */}
      </main>
    </div>
  );
}
