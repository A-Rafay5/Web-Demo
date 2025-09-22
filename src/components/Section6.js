"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

export default function TestimonialsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <style jsx>{`
        @keyframes slideUpCard {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(-100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes slideUpOverlay {
          0% { transform: translateY(100%); opacity: 0; }
          50% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }

        @keyframes slideLeftCard {
          0% { transform: translateX(0); opacity: 1; }
          50% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideLeftOverlay {
          0% { transform: translateX(100%); opacity: 0; }
          50% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        .animate-slide-up-card {
          animation: slideUpCard 12s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .animate-slide-up-overlay {
          animation: slideUpOverlay 12s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .animate-slide-left-card {
          animation: slideLeftCard 12s ease-in-out infinite;
          animation-delay: 6s;
          will-change: transform, opacity;
        }

        .animate-slide-left-overlay {
          animation: slideLeftOverlay 12s ease-in-out infinite;
          animation-delay: 6s;
          will-change: transform, opacity;
        }
      `}</style>

      <div className="min-h-screen bg-gray-50 py-20 px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <span className="text-gray-600 text-sm font-medium">Testimonials</span>
              <div className="absolute -top-1 -left-2 w-3 h-3 border-l-2 border-t-2 border-red-500"></div>
              <div className="absolute -bottom-1 -right-2 w-3 h-3 border-r-2 border-b-2 border-red-500"></div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Results that speak for themselves</h1>
            <h2 className="text-xl text-gray-600 mb-2">Read our customer cases</h2>
            <p className="text-gray-500">See why our customers recommend us.</p>
          </div>

          {/* Testimonials Grid */}
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left: Tall 8X Conversion Rate Card */}
              <div className="lg:col-span-1 lg:row-span-2 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between min-h-[500px]">
                <div className="mb-6">
                  <div className="text-5xl font-bold text-gray-900 mb-2">8X</div>
                  <div className="text-gray-600 text-lg mb-4">Increase in conversion rate</div>
                  <div className="text-red-500 text-3xl mb-3">"</div>
                  <p className="text-gray-700 leading-relaxed">
                    We needed a modern, high-converting website, and the Scanditech team delivered beyond expectations.
                    Their design and SEO expertise helped us increase our conversion rate by 800% in just two weeks.
                    Highly recommended!"
                  </p>
                </div>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">David Callahan</div>
                  <div className="text-gray-500">Marketing Director, PSA</div>
                </div>
              </div>

              {/* Top Right: 19X Faster User Adoption Card */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="mb-6">
                  <div className="text-5xl font-bold text-gray-900 mb-2">19X</div>
                  <div className="text-gray-600 text-lg mb-4">Faster User Adoption</div>
                  <div className="text-red-500 text-3xl mb-3">"</div>
                  <p className="text-gray-700 leading-relaxed">
                    "Scanditech handled every aspect of our new platform from concept to implementation. Their expertise
                    in scalable architecture and app development helped us launch faster, and the results of increased
                    lead generation have been phenomenal!"
                  </p>
                </div>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                  <div className="text-gray-500">Marketing Director, Carwise</div>
                </div>
              </div>

              {/* Bottom Left: Slide Up Cards */}
              <div className="lg:col-span-1 relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300">
                <div className="bg-white p-6 animate-slide-up-card">
                  <div className="mb-4">
                    <div className="text-red-500 text-2xl mb-3">"</div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      "Scanditech's custom web app automated our processes and significantly reduced operating costs.
                      Their technical insight was invaluable!"
                    </p>
                  </div>
                  <div className="border-t pt-3">
                    <div className="font-semibold text-gray-900 text-sm">Tom Becker</div>
                    <div className="text-gray-500 text-xs">Founder, Modnum</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gray-900 text-white p-6 animate-slide-up-overlay">
                  <div className="mb-4">
                    <div className="text-red-500 text-2xl mb-3">"</div>
                    <p className="leading-relaxed text-white text-sm">
                      "Scanditech re-engineered our mission-critical SaaS platform. The result was near-perfect uptime
                      and significantly improved performance."
                    </p>
                  </div>
                  <div className="border-t border-gray-700 pt-3">
                    <div className="font-semibold text-white text-sm">James Patterson</div>
                    <div className="text-gray-300 text-xs">CEO, Nexa Digital</div>
                  </div>
                </div>
              </div>

              {/* Bottom Right: Slide Left Cards */}
              <div className="lg:col-span-1 relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300">
                <div className="bg-white p-6 animate-slide-left-card">
                  <div className="mb-4">
                    <div className="text-red-500 text-2xl mb-3">"</div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      "Scanditech delivered our new mobile app incredibly quickly. The intuitive user experience ensured success."
                    </p>
                  </div>
                  <div className="border-t pt-3">
                    <div className="font-semibold text-gray-900 text-sm">Danielle Reyes</div>
                    <div className="text-gray-500 text-xs">Founder, Tibs</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gray-900 text-white p-6 animate-slide-left-overlay">
                  <div className="mb-4">
                    <div className="text-red-500 text-2xl mb-3">"</div>
                    <p className="leading-relaxed text-white text-sm">
                      "Our platform required a highly scalable solution. Scanditech built robust architecture exceeding expectations."
                    </p>
                  </div>
                  <div className="border-t border-gray-700 pt-3">
                    <div className="font-semibold text-white text-sm">Sarah Hojberg</div>
                    <div className="text-gray-300 text-xs">Marketing Director, PSA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews & Rating */}
           <div className="lg:col-start-1 lg:col-span-1 mt-6">
              <div className="flex items-center space-x-3">
                <span className="text-gray-700 font-medium">300+ satisfied customers love our services</span>
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">4.9</div>
                  <div className="text-gray-500 text-sm">From 243 reviews</div>
                </div>
              </div>
            </div>
          </div>
          </div>
    </>
  )
}
