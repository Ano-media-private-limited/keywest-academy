"use client"

import { useState } from "react"

export default function TopBar() {
  const [showEmailDropdown, setShowEmailDropdown] = useState(false)
  const [showAddressDropdown, setShowAddressDropdown] = useState(false)

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="bg-black border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 md:py-3">
        <div className="flex flex-row items-center justify-between gap-1 sm:gap-2 md:gap-4 relative overflow-hidden">
          {/* Left Side - Instagram & Enquire Now Buttons */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-shrink-0">
            {/* Instagram Icon */}
            <a 
              href="https://www.instagram.com/keywestacademy.in?igsh=OGU1dGMxbW04OWpq" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 md:gap-2 text-white hover:text-white transition-all hover:scale-105 bg-gradient-to-r from-primary to-accent p-1.5 sm:px-2 sm:py-1 md:px-4 md:py-2 rounded-full shadow-lg hover:shadow-primary/50 flex-shrink-0"
              aria-label="Follow us on Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4 md:w-5 md:h-5">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="hidden sm:inline text-xs md:text-sm font-semibold whitespace-nowrap">Follow Us</span>
            </a>

            {/* Enquire Now Button */}
            <button
              onClick={scrollToContact}
              className="flex items-center gap-1 md:gap-2 text-white hover:text-white transition-all hover:scale-105 bg-gradient-to-r from-primary to-accent px-1.5 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2 rounded-full shadow-lg hover:shadow-primary/50 flex-shrink-0"
              aria-label="Enquire Now"
            >
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold whitespace-nowrap">Enquire Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4 md:w-5 md:h-5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Contact Info - Center/Right */}
          <div className="flex flex-row items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 flex-nowrap whitespace-nowrap min-w-0 flex-1 justify-end">
            {/* Phone Numbers */}
            <a href="tel:+919811020094" className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs md:text-sm text-white font-medium hover:text-primary transition-colors flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0 sm:w-3 sm:h-3 md:w-4 md:h-4">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="text-[10px] sm:text-xs">9811020094</span>
            </a>
            
            <span className="text-white/30 flex-shrink-0 text-[8px] sm:text-sm">•</span>
            
            <a href="tel:+918130049098" className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs md:text-sm text-white font-medium hover:text-primary transition-colors flex-shrink-0">
              <span>8130049098</span>
            </a>

            <span className="text-white/30 flex-shrink-0 text-[8px] sm:text-sm">•</span>

            {/* Email - Mobile: Dropdown, Desktop: Direct Link */}
            <div className="relative flex-shrink-0">
              {/* Mobile: Icon with Dropdown */}
              <button
                onClick={() => {
                  setShowEmailDropdown(!showEmailDropdown)
                  setShowAddressDropdown(false)
                }}
                className="sm:hidden flex items-center gap-1 text-xs text-white font-medium hover:text-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
                  <rect width="20" height="20" x="2" y="2" rx="2" ry="2"/>
                  <path d="m2 2 10 10 10-10"/>
                </svg>
              </button>
              
              {/* Mobile: Email Dropdown */}
              {showEmailDropdown && (
                <div className="fixed top-12 left-2 right-2 bg-white border-2 border-primary rounded-lg p-3 shadow-2xl z-[100] max-w-sm mx-auto">
                  <div className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0 mt-0.5">
                      <rect width="20" height="20" x="2" y="2" rx="2" ry="2"/>
                      <path d="m2 2 10 10 10-10"/>
                    </svg>
                    <div className="flex-1 min-w-0">
                      <span className="text-gray-800 font-semibold text-xs block mb-1">Email</span>
                      <a href="mailto:info@keywestacademy.in" className="text-primary text-xs font-medium hover:underline block break-all">
                        info@keywestacademy.in
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Desktop: Direct Link */}
              <a href="mailto:info@keywestacademy.in" className="hidden sm:flex items-center gap-1 text-xs md:text-sm text-white font-medium hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0 md:w-4 md:h-4">
                  <rect width="20" height="20" x="2" y="2" rx="2" ry="2"/>
                  <path d="m2 2 10 10 10-10"/>
                </svg>
                <span className="hidden lg:inline">info@keywestacademy.in</span>
                <span className="lg:hidden">Email</span>
              </a>
            </div>

            <span className="text-white/30 flex-shrink-0 hidden sm:inline">•</span>

            {/* Address - Mobile: Dropdown, Desktop: Text */}
            <div className="relative flex-shrink-0">
              {/* Mobile: Icon with Dropdown */}
              <button
                onClick={() => {
                  setShowAddressDropdown(!showAddressDropdown)
                  setShowEmailDropdown(false)
                }}
                className="sm:hidden flex items-center gap-1 text-xs text-white font-medium hover:text-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </button>
              
              {/* Mobile: Address Dropdown */}
              {showAddressDropdown && (
                <div className="fixed top-12 left-2 right-2 bg-white border-2 border-primary rounded-lg p-3 shadow-2xl z-[100] max-w-sm mx-auto">
                  <div className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0 mt-0.5">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <div className="flex-1 min-w-0">
                      <span className="text-gray-800 font-semibold text-xs block mb-1">Address</span>
                      <p className="text-gray-700 text-xs leading-relaxed">
                        Building no. 63, 2nd floor,<br />
                        Lajpat Nagar 3, New Delhi - 110057
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Desktop: Text */}
              <div className="hidden sm:flex items-center gap-1 text-xs md:text-sm text-white font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0 md:w-4 md:h-4">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="hidden lg:inline">Building no. 63, 2nd floor, Lajpat Nagar 3, New Delhi - 110057</span>
                <span className="lg:hidden">Lajpat Nagar 3, Delhi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
