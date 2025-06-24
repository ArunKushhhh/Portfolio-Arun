"use client"

import { useState, useRef } from "react"
import { Home, FolderOpen, Edit3, Sparkles, FileText, Linkedin, Github } from "lucide-react"
import Tooltip from "./Tooltip"

const FloatingNav = ({ aboutPicture = null }) => {
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const dockRef = useRef(null)

  const navItems = [
    { id: "home", icon: Home, label: "Home", href: "#home" },
    { id: "experience", icon: Sparkles, label: "Experience", href: "#experience" },
    { id: "projects", icon: FolderOpen, label: "Projects", href: "#projects" },
    { id: "skills", icon: Edit3, label: "Skills", href: "#skills" },
    { id: "about", label: "About", href: "#about", isPicture: true },
    { id: "resume", icon: FileText, label: "Resume", href: "#resume" },
    { id: "linkedin", icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/arun-kumar-kushwaha-b26085286/", external: true },
    { id: "github", icon: Github, label: "GitHub", href: "https://github.com/ArunKushhhh", external: true },
  ]

  const handleNavClick = (item) => {
    if (item.external) {
      window.open(item.href, "_blank")
      return
    }

    setActiveSection(item.id)
    const element = document.querySelector(item.href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleMouseMove = (e) => {
    if (dockRef.current) {
      const rect = dockRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  const calculateScale = (itemIndex, itemWidth = 60) => {
    if (!mousePosition.x) return 1

    const itemCenter = itemIndex * (itemWidth + 8) + itemWidth / 2 + 16 // 16px padding
    const distance = Math.abs(mousePosition.x - itemCenter)
    const maxDistance = 100
    const maxScale = 1.4
    const minScale = 1

    if (distance > maxDistance) return minScale

    const scale = maxScale - (distance / maxDistance) * (maxScale - minScale)
    return Math.max(minScale, scale)
  }

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div
        ref={dockRef}
        className="bg-white/10 backdrop-blur-xl border-t border-white/20 rounded-full px-6 py-2"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="flex items-end gap-2 h-16">
          {navItems.map((item, index) => {
            const Icon = item.icon
            const scale = calculateScale(index)
            const isActive = activeSection === item.id

            return (
              <Tooltip key={item.id} content={item.label}>
                <button
                  onClick={() => handleNavClick(item)}
                  className="relative flex items-center justify-center transition-all duration-300 ease-out"
                  style={{
                    transform: `scale(${scale}) translateY(${(scale - 1) * -10}px)`,
                    width: "60px",
                    height: "60px",
                  }}
                >
                  <div
                    className={`
                      w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden
                      ${isActive ? "bg-white/30 shadow-lg" : "bg-white/10 hover:bg-white/20"}
                    `}
                  >
                    {item.isPicture && aboutPicture ? (
                      <img
                        src={aboutPicture}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    ) : item.isPicture ? (
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-semibold">
                        A
                      </div>
                    ) : (
                      <Icon
                        size={20}
                        className={`transition-colors duration-300 ${
                          isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                        }`}
                      />
                    )}
                  </div>

                  {/* Active indicator dot */}
                  {isActive && <div className="absolute -bottom-1 w-1 h-1 bg-white rounded-full opacity-100" />}
                </button>
              </Tooltip>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default FloatingNav