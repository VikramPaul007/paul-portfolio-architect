
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-sandstone-50/95 backdrop-blur-md shadow-lg border-b border-gold-200" 
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold text-gradient-gold hover:scale-105 transition-all duration-300 devanagari-heading"
          >
            विक्रम पॉल
            <span className="block text-sm font-normal text-indigo-700">Vikram Paul</span>
          </button>
          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-indigo-800 hover:text-gold-600 transition-all duration-300 font-medium py-2 px-1 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-indigo-800 hover:text-gold-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
