"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Plus } from "lucide-react";

export default function Page9() {
  const [contactVisible, setContactVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollY = useRef(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      question: "What technologies and platforms do you work with?",
      answer:
        "We work with modern web technologies including React, Next.js, Node.js, TypeScript, and various databases. We also specialize in mobile app development using React Native and Flutter, and cloud platforms like AWS and Vercel.",
    },
    {
      question: "How does collaboration take place during a project?",
      answer:
        "We maintain transparent communication through regular check-ins, project management tools, and collaborative platforms. You'll have direct access to our team and receive regular updates on project progress.",
    },
    {
      question:
        "What distinguishes Scanditech from other development agencies?",
      answer:
        "Our strength lies in delivering high-quality, customized, results-oriented web, app and SaaS solutions. We combine deep technical expertise with a strategic approach focused on creating real business value for you.",
    },
    {
      question: "What services does your agency offer?",
      answer:
        "We specialize in website design, web development, mobile app development, SaaS solutions and copywriting. Our goal is to help businesses grow through high-performance digital solutions.",
    },
    {
      question: "How is the price of projects determined?",
      answer:
        "Project pricing is based on scope, complexity, timeline, and specific requirements. We provide detailed quotes after understanding your needs and offer flexible pricing models to suit different budgets.",
    },
    {
      question: "How long does a typical development project take?",
      answer:
        "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex web applications or mobile apps can take 8-16 weeks. We provide detailed timelines during project planning.",
    },
    {
      question: "Do you offer support and maintenance after launch?",
      answer:
        "Yes, we provide ongoing support and maintenance services to ensure your digital solutions continue to perform optimally. This includes updates, security patches, and feature enhancements as needed.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? "down" : "up";

      // Only update if direction changed
      if (direction !== scrollDirection) setScrollDirection(direction);

      lastScrollY.current = currentScrollY;

      const contactElement = document.getElementById("contact-section");
      if (!contactElement) return;

      const rect = contactElement.getBoundingClientRect();
      const elementTop = rect.top;
      const windowHeight = window.innerHeight;

      if (direction === "down" && elementTop < windowHeight * 0.8) {
        setContactVisible(true);
      } else if (direction === "up" && elementTop > windowHeight * 0.5) {
        setContactVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
    // No lastScrollY or scrollDirection in dependency array to avoid loops
  }, [scrollDirection]);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 lg:pt-[58px] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Static Content */}
          <div className="lg:sticky lg:top-20">
            <div className="relative inline-block mb-6">
              <span className="text-gray-600 text-sm font-medium">FAQs</span>
              <svg
                className="absolute -top-2 -left-2 w-3 h-3"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 0 L8 0 M0 0 L0 8"
                  stroke="#ef4444"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <svg
                className="absolute -bottom-2 -right-2 w-3 h-3"
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

            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Do you have questions?
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-500 leading-tight">
                We have the answers.
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg mb-12">
              Everything you need to know about our process and how we deliver
              results.
            </p>

            <div
              id="contact-section"
              className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-1000 ${
                contactVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Didn't find what you were looking for?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact our support team – they are helpful and friendly!
              </p>
              <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-md">
                Contact us
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 lg:mt-20">
            <div className="space-y-0">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <div
                    className="flex items-center justify-between cursor-pointer py-1"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-medium text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div
                      className={`w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                        openFAQ === index ? "rotate-45 border-gray-600" : ""
                      }`}
                    >
                      <Plus className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      openFAQ === index ? "opacity-100 py-2" : "opacity-0 py-0"
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
