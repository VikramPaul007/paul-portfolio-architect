
import { Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-blue-600">VP</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
          Vikram Paul
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-slate-600 mb-6 font-light">
          Senior Software Engineer & Technical Lead
        </h2>
        
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Architecting scalable systems & leading high-performance teams to deliver 
          mission-critical platforms for millions.
        </p>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="mailto:vikrampaul1996@gmail.com"
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a 
            href="https://linkedin.com/in/vikrampaul"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/vikrampaul"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
