
import { Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with subtle mandala pattern */}
      <div className="absolute inset-0 lotus-bg"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-20 animate-mandala-spin">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold-400">
          <circle cx="50" cy="50" r="5" fill="currentColor" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.3" />
        </svg>
      </div>
      
      <div className="absolute bottom-20 right-10 w-24 h-24 opacity-15 animate-mandala-spin" style={{ animationDirection: 'reverse' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-500">
          <circle cx="50" cy="50" r="8" fill="currentColor" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-fade-in-up">
        <div className="mb-8">
          {/* Enhanced avatar with gold border */}
          <div className="w-36 h-36 mx-auto mb-6 bg-gradient-to-br from-sandstone-100 to-sandstone-200 rounded-full flex items-center justify-center border-4 border-gold-400 shadow-lg indian-hover">
            <span className="text-5xl font-bold text-gradient-gold font-devanagari">VP</span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold text-indigo-900 mb-4 devanagari-heading">
          Vikram Paul
        </h1>
        
        <div className="gold-accent mx-auto w-fit mb-6">
          <h2 className="text-2xl md:text-3xl text-sandstone-700 font-serif elegant-text">
            Senior Software Engineer & Technical Lead
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-sandstone-600 mb-8 max-w-3xl mx-auto leading-relaxed elegant-text">
          Architecting scalable systems & leading high-performance teams to deliver 
          mission-critical platforms for millions.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="mailto:vikrampaul1996@gmail.com"
            className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-lg indian-hover"
          >
            <Mail size={20} />
            <span className="font-medium">Email</span>
          </a>
          <a 
            href="https://linkedin.com/in/vikrampaul"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 border-2 border-gold-400 text-indigo-800 px-8 py-4 rounded-xl hover:bg-gold-50 hover:border-gold-500 transition-all duration-300 transform hover:scale-105 indian-hover"
          >
            <Linkedin size={20} />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a 
            href="https://github.com/vikrampaul"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 border-2 border-sandstone-400 text-indigo-800 px-8 py-4 rounded-xl hover:bg-sandstone-50 hover:border-sandstone-500 transition-all duration-300 transform hover:scale-105 indian-hover"
          >
            <Github size={20} />
            <span className="font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
