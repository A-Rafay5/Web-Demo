"use client";

import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Page4() {
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay,
      },
    },
  });
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8 sm:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Our Services Header */}
        <div className="flex justify-start mb-8">
          <div className="relative">
            <span className="text-gray-600 text-sm font-medium">
              Our Services
            </span>
            {/* Top-left bracket */}
            <svg
              className="absolute -top-3 -left-3 w-4 h-4"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 0 L8 0 M0 0 L0 8"
                stroke="#ef4444"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            {/* Bottom-right bracket */}
            <svg
              className="absolute -bottom-3 -right-3 w-4 h-4"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 16 L8 16 M16 16 L16 8"
                stroke="#ef4444"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Headings */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0.1)}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            From ideas to high-impact solutions
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-500 leading-tight">
            that inspire and convert
          </h2>
        </motion.div>

       {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Mobile App Development (left) */}
          <motion.div
            className="lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.2)}
          >
            <div className="p-8 bg-white rounded-2xl border-0 shadow-none">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Mobile App Development
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Build innovative and user-friendly mobile applications for
                    iOS and Android that connect you with your audience on the
                    go and expand your digital reach.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <div className="relative">
                    <img
                      src="./images/modern-smartphone-mockup-with-app-interface.png"
                      alt="Mobile app mockup"
                      className="w-48 h-auto rounded-3xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Web Development & Design + SaaS Solutions - Wider width */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.3)}
          >
          <div className="lg:col-span-2 space-y-8">
            {/* Web Development & Design */}
            <div className="p-8 bg-white rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Web Development & Design
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We create robust, high-performance websites and custom web
                applications that combine innovative design with flawless
                functionality to drive your online success.
              </p>

              <div className="grid grid-cols-3 gap-2">
                <div className="px-1.5 py-1 bg-gray-100 rounded-full text-xs text-gray-700 text-center">
                  User-centered design
                </div>
                <div className="px-1.5 py-1 bg-gray-100 rounded-full text-xs text-gray-700 text-center">
                  User Research
                </div>
                <div className="px-1.5 py-1 bg-gray-100 rounded-full text-xs text-gray-700 text-center">
                  Branding
                </div>
                <div className="px-1.5 py-1 bg-gray-100 rounded-full text-xs text-gray-700 text-center">
                  Development
                </div>
                <div className="px-1.5 py-1 bg-gray-100 rounded-full text-xs text-gray-700 text-center">
                  UI/UX Design
                </div>
                <div className="px-1.5 py-1 bg-gray-100 rounded-full text-xs text-gray-700 text-center">
                  SEO Optimization
                </div>
                <div className="px-1.5 py-1 bg-gray-100 rounded-full text-xs text-gray-700 text-center col-span-3">
                  Copywriting & Storytelling
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left side - Title, description and contact button */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    SaaS Solutions
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Develop scalable, cloud-based software solutions that
                    streamline business processes, create new revenue streams,
                    and deliver exceptional value to your users.
                  </p>
                  <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-full text-sm flex items-center">
                    Contact now
                    <ArrowRight className="w-3 h-3 ml-2" />
                  </button>
                </div>

                {/* Right side - Checklist with single container border */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 min-w-fit w-full ml-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between p-2 bg-orange-100 rounded-md">
                      <div className="flex items-center space-x-2">
                        <Check className="w-3 h-3 text-orange-500" />
                        <div className="text-gray-900 text-xs font-medium">
                          Product strategy
                        </div>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center">
                        <Check className="w-2 h-2 text-white" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white rounded-md">
                      <div className="flex items-center space-x-2">
                        <Check className="w-3 h-3 text-gray-600" />
                        <div className="text-gray-900 text-xs font-medium">
                          Architectural design
                        </div>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-gray-300 flex items-center justify-center">
                        <Check className="w-2 h-2 text-gray-600" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white rounded-md">
                      <div className="flex items-center space-x-2">
                        <Check className="w-3 h-3 text-gray-600" />
                        <div className="text-gray-900 text-xs font-medium">
                          Cloud Implementation
                        </div>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-gray-300 flex items-center justify-center">
                        <Check className="w-2 h-2 text-gray-600" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white rounded-md">
                      <div className="flex items-center space-x-2">
                        <Check className="w-3 h-3 text-gray-600" />
                        <div className="text-gray-900 text-xs font-medium">
                          Subscription models
                        </div>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-gray-300 flex items-center justify-center">
                        <Check className="w-2 h-2 text-gray-600" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white rounded-md">
                      <div className="flex items-center space-x-2">
                        <Check className="w-3 h-3 text-gray-600" />
                        <div className="text-gray-500 text-xs">
                          Data Security
                        </div>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-gray-300 flex items-center justify-center">
                        <Check className="w-2 h-2 text-gray-600" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white rounded-md">
                      <div className="flex items-center space-x-2">
                        <Check className="w-3 h-3 text-gray-600" />
                        <div className="text-gray-500 text-xs">
                          Scaling strategies
                        </div>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-gray-300 flex items-center justify-center">
                        <Check className="w-2 h-2 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
       {/* MVP + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* MVP */}
          <motion.div
            className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.5)}
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                MVP design & development.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                Validate your idea with a fast, functional and beautifully
                designed MVP. We specialize in rapid prototyping, lean
                development and scalable design systems.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">M</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        Marketo.
                      </h4>
                      <p className="text-xs text-gray-500">Ecom Solutions</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1 text-xs text-gray-900">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span>Overview</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-400">
                      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                      <span>Performance</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                      <div className="w-3 h-3 grid grid-cols-2 gap-0.5">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        Integrations
                      </h4>
                      <p className="text-xs text-gray-500">
                        Boost your workflow with powerful third-party apps
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200">
                <div className="flex space-x-4 text-xs">
                  <span className="text-gray-900">All apps</span>
                  <span className="text-gray-400">Connected</span>
                  <span className="text-gray-400">Disconnected</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="bg-blue-900 rounded-2xl p-6 flex flex-col justify-center text-white relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.6)}
          >
            <div className="absolute inset-0 rounded-2xl bg-black [background-image:radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:18px_18px]"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 leading-snug">
                World-Class Design,
                <br />
                Data-Driven Marketing,
                <br />
                Unstoppable Growth
              </h3>
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-5 py-1.5 rounded-full font-medium text-sm flex items-center">
                Book a meeting
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}