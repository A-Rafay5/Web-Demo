"use client";

import { useEffect, useState } from "react";

export default function Page7() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Insight & Strategy",
      description:
        "Through workshops and thorough research, we develop a strategy that reflects your vision.",
    },
    {
      number: "02",
      title: "Plan & Priority",
      description:
        "We map user journeys, project milestones, and deliverables to ensure a smooth and transparent workflow from start to finish.",
    },
    {
      number: "03",
      title: "Design and Prototypes",
      description:
        "Our team creates targeted design, sharp texts and strong branding that communicates clearly and creates results.",
    },
    {
      number: "04",
      title: "Develop & Launch",
      description:
        "Whether it's no-code or custom development, we bring your digital presence to life with pixel-perfect execution and optimized performance.",
    },
    {
      number: "05",
      title: "Support & Development",
      description:
        "We follow up after the launch, continuously adjust and support your brand in adapting and growing.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("workflow-section");
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate progress based on element position in viewport
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight))
      );
      setScrollProgress(progress);

      // Calculate active step based on progress through the steps
      const stepProgress = progress * steps.length;
      const currentStep = Math.floor(stepProgress);
      setActiveStep(Math.min(currentStep, steps.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  return (
    <div
      id="workflow-section"
      className="min-h-screen bg-gray-50 py-12 sm:py-20 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Side - Static Content */}
          <div className="lg:sticky lg:top-20">
            {/* Our approach Header */}
            <div className="flex justify-start mb-6 sm:mb-8">
              <div className="relative">
                <span className="text-gray-600 text-sm font-medium">
                  Our approach
                </span>
                {/* Top-left bracket */}
                <svg
                  className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-3 h-3 sm:w-4 sm:h-4"
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
                  className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 w-3 h-3 sm:w-4 sm:h-4"
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

            {/* Main Heading */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                A workflow that works
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-500 leading-tight">
                every time.
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
              We understand your goals and challenges in depth – and create
              strategies that hit the spot.
            </p>
          </div>

          {/* Right Side - Animated Content */}
          <div className="relative min-h-[600px] sm:min-h-[800px] w-full">
            {/* Vertical line */}
            <div
              className="absolute left-3 sm:left-4 lg:left-6 top-0 w-0.5 bg-gray-200"
              style={{ height: "100%" }}
            >
              <div
                className="w-full bg-red-500"
                style={{ height: `${scrollProgress * 100}%`, maxHeight: "100%" }}
              />
            </div>

            <div className="space-y-12 sm:space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start w-full">
                  {/* Step number */}
                  <div
                    className={`absolute left-3 sm:left-4 lg:left-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold bg-white ${
                      index <= activeStep
                        ? "border-gray-800 text-gray-800"
                        : "border-gray-300 text-gray-400"
                    }`}
                    style={{ transform: "translateX(-50%)" }}
                  >
                    {step.number}
                  </div>

                  {/* Step content */}
                  <div
                    className={`ml-8 sm:ml-12 lg:ml-16 pr-2 sm:pr-4 ${
                      index <= activeStep
                        ? "opacity-100 translate-x-0"
                        : "opacity-30 translate-x-4 sm:translate-x-8"
                    }`}
                  >
                    <div className="relative p-3 sm:p-4">
                      <svg
                        className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M16 0 L8 0 M16 0 L16 8"
                          stroke="#ef4444"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>

                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}
