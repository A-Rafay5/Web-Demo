"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Page2() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState(null) // ❌ no <number | null>

  useEffect(() => {
    const handleMouseMove = (e) => { // ❌ no MouseEvent
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

 const handleCardClick = (projectId) => {
  console.log("Clicked project:", projectId)
  }

  const projects = [
    {
      id: 1,
      title: "Fra design til levering",
      subtitle: "Modnum",
      description: "SaaS development",
      performance: "4x Ad performance",
      bgColor: "bg-gradient-to-br from-pink-500 to-purple-600",
      textColor: "text-white",
      buttonColor: "bg-black text-white",
      buttonText: "Tilmeld dig nu",
    },
    {
      id: 2,
      title: "Transformering af byggearbejdsgange med banebrydende løsninger",
      subtitle: "Bundle",
      description: "Web SaaS development",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      buttonColor: "bg-blue-500 text-white",
      buttonText: "Start gratis",
      secondButton: "Om os",
      hasImage: true,
    },
    {
      id: 3,
      title: "Platform Overview",
      subtitle: "Furniture",
      description: "Saas SEO development",
      performance: "+65% Customer registrations",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      hasDashboard: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      {hoveredCard !== null && (
        <div
          className="fixed z-50 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium pointer-events-none"
          style={{
            left: mousePosition.x + 10,
            top: mousePosition.y - 40,
          }}
        >
          View Project
        </div>
      )}

      {/* Scrolling Project Cards */}
      <div className="relative overflow-hidden mb-16">
        <div className="flex animate-scroll-left space-x-6 w-max">
          {/* First set of cards */}
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${project.bgColor} ${project.textColor} rounded-2xl p-6 md:p-8 lg:p-10 w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-[350px] sm:h-[400px] md:h-[425px] lg:h-[450px] flex flex-col justify-between shadow-lg flex-shrink-0 relative cursor-pointer`}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={handleCardClick}
            >
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 leading-tight">{project.title}</h3>

                {project.hasImage && (
                  <div className="absolute top-6 right-6 md:top-8 md:right-8 w-32 h-20 sm:w-40 sm:h-24 md:w-48 md:h-32">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.PNG-I6BmwsERFeQ0jkFoc5Nu6MIcAj6kTN.png"
                      alt="Dashboard preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                )}

                {project.hasDashboard && (
                  <div className="mb-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.PNG-OynhAFUJHoywUMsoxjsP3D7z2DcZh8.png"
                      alt="Dashboard interface"
                      className="w-full h-24 sm:h-32 md:h-40 object-cover rounded-lg"
                    />
                  </div>
                )}

                {project.id === 1 && (
                  <div className="absolute top-6 right-6 md:top-8 md:right-8 w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40">
                    <div className="bg-pink-400 rounded-2xl p-2 md:p-4 h-full flex flex-col justify-center items-center text-center">
                      <div className="text-3xl sm:text-4xl md:text-6xl font-bold opacity-20 mb-2">modnum</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold text-base md:text-lg">{project.subtitle}</p>
                    <p className="text-xs md:text-sm opacity-80">{project.description}</p>
                  </div>
                  {project.performance && (
                    <div className="text-right">
                      <p className="text-xs md:text-sm font-medium">{project.performance}</p>
                    </div>
                  )}
                </div>

                {project.buttonColor && (
                  <div className="flex space-x-2 md:space-x-3">
                    <button
                      className={`${project.buttonColor} px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium`}
                    >
                      {project.buttonText}
                    </button>
                    {project.secondButton && (
                      <button className="border border-gray-300 text-gray-700 px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium bg-white">
                        {project.secondButton}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {projects.map((project) => (
            <div
              key={`duplicate-${project.id}`}
              className={`${project.bgColor} ${project.textColor} rounded-2xl p-6 md:p-8 lg:p-10 w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-[350px] sm:h-[400px] md:h-[425px] lg:h-[450px] flex flex-col justify-between shadow-lg flex-shrink-0 relative cursor-pointer`}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={handleCardClick}
            >
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 leading-tight">{project.title}</h3>

                {project.hasImage && (
                  <div className="absolute top-6 right-6 md:top-8 md:right-8 w-32 h-20 sm:w-40 sm:h-24 md:w-48 md:h-32">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.PNG-I6BmwsERFeQ0jkFoc5Nu6MIcAj6kTN.png"
                      alt="Dashboard preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                )}

                {project.hasDashboard && (
                  <div className="mb-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.PNG-OynhAFUJHoywUMsoxjsP3D7z2DcZh8.png"
                      alt="Dashboard interface"
                      className="w-full h-24 sm:h-32 md:h-40 object-cover rounded-lg"
                    />
                  </div>
                )}

                {project.id === 1 && (
                  <div className="absolute top-6 right-6 md:top-8 md:right-8 w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40">
                    <div className="bg-pink-400 rounded-2xl p-2 md:p-4 h-full flex flex-col justify-center items-center text-center">
                      <div className="text-3xl sm:text-4xl md:text-6xl font-bold opacity-20 mb-2">modnum</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold text-base md:text-lg">{project.subtitle}</p>
                    <p className="text-xs md:text-sm opacity-80">{project.description}</p>
                  </div>
                  {project.performance && (
                    <div className="text-right">
                      <p className="text-xs md:text-sm font-medium">{project.performance}</p>
                    </div>
                  )}
                </div>

                {project.buttonColor && (
                  <div className="flex space-x-2 md:space-x-3">
                    <button
                      className={`${project.buttonColor} px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium`}
                    >
                      {project.buttonText}
                    </button>
                    {project.secondButton && (
                      <button className="border border-gray-300 text-gray-700 px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium bg-white">
                        {project.secondButton}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Static Text */}
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Recommended by leading companies</h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex justify-center">
          <div className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] overflow-hidden">
            <div className="flex animate-scroll-logos space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20 w-max items-center py-4">
              {/* Company logos duplicated for seamless scrolling */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.PNG-PtYU0H2DTE25kZgXwKytBFLupoyc6D.png"
                alt="Company logos"
                className="h-10 sm:h-12 md:h-14 lg:h-16 opacity-60"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.PNG-PtYU0H2DTE25kZgXwKytBFLupoyc6D.png"
                alt="Company logos"
                className="h-10 sm:h-12 md:h-14 lg:h-16 opacity-60"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.PNG-PtYU0H2DTE25kZgXwKytBFLupoyc6D.png"
                alt="Company logos"
                className="h-10 sm:h-12 md:h-14 lg:h-16 opacity-60"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.PNG-PtYU0H2DTE25kZgXwKytBFLupoyc6D.png"
                alt="Company logos"
                className="h-10 sm:h-12 md:h-14 lg:h-16 opacity-60"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.PNG-PtYU0H2DTE25kZgXwKytBFLupoyc6D.png"
                alt="Company logos"
                className="h-10 sm:h-12 md:h-14 lg:h-16 opacity-60"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.PNG-PtYU0H2DTE25kZgXwKytBFLupoyc6D.png"
                alt="Company logos"
                className="h-10 sm:h-12 md:h-14 lg:h-16 opacity-60"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        
        .animate-scroll-logos {
          animation: scroll-logos 25s linear infinite;
        }
      `}</style>
    </div>
  )
}
