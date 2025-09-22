"use client"

import React from "react"
import { ArrowRight } from "lucide-react"

export default function Section11() {
  return (
    <footer className="relative bg-white border-t border-gray-200 py-28 px-6 lg:px-20 overflow-hidden">
      {/* Background big text */}
      <div className="absolute inset-0 flex justify-center top-[-80px] md:top-[-120px] pointer-events-none">
        <h1 className="text-[140px] sm:text-[200px] md:text-[260px] lg:text-[320px] font-bold text-gray-100 opacity-40 select-none leading-none">
          Scand<span className="relative">
            i
            <span className="absolute -top-6 left-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-200 opacity-70"></span>
          </span>
          Tech
        </h1>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 z-10">
        
        {/* Left Branding */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">
              <span className="text-gray-900">Scandi</span>
              <span className="text-red-500">Tech</span>
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Strategic design and development agency
          </p>
        </div>

        {/* Business Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Business</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-red-500">About us</a></li>
            <li><a href="#" className="hover:text-red-500">Contact</a></li>
            <li><a href="#" className="hover:text-red-500">Projects</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Social</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" target="_blank" className="hover:text-red-500">Facebook ↗</a></li>
            <li><a href="#" target="_blank" className="hover:text-red-500">Instagram ↗</a></li>
            <li><a href="#" target="_blank" className="hover:text-red-500">LinkedIn ↗</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Newsletter</h3>
          <p className="text-sm text-gray-500 mb-4">
            Stay up to date with digital development strategies and results.
          </p>
          <form className="flex items-center bg-white border rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 px-4 py-2 text-sm text-gray-700 outline-none"
            />
            <button
              type="submit"
              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative max-w-7xl mx-auto mt-10 text-xs text-gray-500 flex justify-between z-10">
        <p>© 2025 ScandiTech | CVR: 45473242</p>
        <a href="#" className="hover:text-red-500">Privacy Policy</a>
      </div>
    </footer>
  )
}
