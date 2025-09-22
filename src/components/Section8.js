export default function Page8() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Top section with label and main heading */}
        <div className="text-center mb-16">
          {/* Section label with brackets */}
          <div className="relative inline-block mb-8">
            <span className="text-gray-600 text-[10px] font-medium">Investing in Your Future</span>
            <div className="absolute -top-1 -left-2 w-3 h-3 border-l-2 border-t-2 border-red-500"></div>
            <div className="absolute -bottom-1 -right-2 w-3 h-3 border-r-2 border-b-2 border-red-500"></div>
          </div>

          {/* Main heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Tailor-made Solutions for <br></br><span className="text-gray-500">Digital Development</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Let us discuss your unique needs and prepare a no-obligation quote that reflects your business goals and
            timeline.
          </p>
        </div>

        {/* Dark CTA card */}
        <div className="bg-gray-900 rounded-3xl p-6 md:p-8 lg:p-10 text-center">
          {/* CTA heading */}
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-6 leading-tight">
            Ready to bring your project to life? Let's chat
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-2xl mx-auto">
            We develop customized web, mobile and SaaS solutions that drive growth and create digital success for your
            business.
          </p>

          {/* Button */}
          <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors duration-200">
            Get in touch with us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
