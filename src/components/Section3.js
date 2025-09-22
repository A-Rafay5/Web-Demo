"use client"

import { motion } from "framer-motion"

export default function Page3() {
  // Animation variants for cards
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.3 }, // stagger by index
    }),
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Impact Label */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <span className="text-gray-600 text-sm font-medium">Impact</span>
            <div className="absolute -top-2 -left-2">
              <svg viewBox="0 0 12 12" className="w-3 h-3 text-red-500">
                <path
                  d="M0 0L8 0M0 0L0 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="absolute -bottom-2 -right-2">
              <svg viewBox="0 0 12 12" className="w-3 h-3 text-red-500">
                <path
                  d="M12 12L4 12M12 12L12 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Scanditech simplifies the process
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-500 leading-tight">
            and delivers results.
          </h2>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[ 
            {
              num: "300+",
              title: "Successful Projects Delivered",
              desc: "From startups to large enterprises, we have developed high-performance websites, apps, and SaaS solutions that drive tangible results.",
            },
            {
              num: "96%",
              title: "Fewer Errors After Launch",
              desc: "Our strict testing protocols and focus on code quality ensure stable and error-free solutions that function optimally from day one.",
            },
            {
              num: "63%",
              title: "Improved Efficiency",
              desc: "Through strategic development and optimization, we have helped companies streamline operations and maximize productivity.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 rounded-2xl p-8 lg:p-10"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i} // pass index for stagger
            >
              <div className="mb-6">
                <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2">{card.num}</h3>
                <h4 className="text-lg lg:text-xl font-semibold text-gray-700 mb-4">{card.title}</h4>
              </div>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
