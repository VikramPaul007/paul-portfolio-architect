
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-sandstone-50 to-sandstone-100 relative overflow-hidden">
      {/* Decorative mandala in background */}
      <div className="absolute top-10 right-10 w-40 h-40 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold-400 animate-mandala-spin">
          <circle cx="50" cy="50" r="2" fill="currentColor" />
          <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="24" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.3" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 mandala-decoration">
          <h2 className="text-5xl font-bold text-gradient-indigo mb-4 devanagari-heading">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gold-200 indian-hover">
          <div className="prose prose-lg mx-auto text-sandstone-700 leading-relaxed elegant-text">
            <p className="text-xl mb-6 text-indigo-900 font-medium">
              With over 7 years of experience in software engineering, I specialize in 
              designing and implementing scalable backend architectures and cloud-native solutions 
              that serve millions of users worldwide.
            </p>
            
            <p className="mb-6">
              My expertise lies in building robust microservices architectures, implementing 
              event-driven systems, and leading cross-functional teams to deliver 
              mission-critical platforms. I have a proven track record of optimizing 
              system performance, reducing operational costs, and mentoring teams to 
              achieve technical excellence.
            </p>
            
            <p className="mb-6">
              Throughout my career, I've worked with cutting-edge technologies including 
              cloud platforms (Azure, AWS), containerization (Docker, Kubernetes), 
              and modern development practices (DevOps, CI/CD). I'm passionate about 
              creating elegant solutions to complex technical challenges and fostering 
              a culture of innovation and continuous learning.
            </p>
            
            <p className="text-gold-700 font-medium">
              When I'm not architecting systems, I enjoy exploring new technologies, 
              contributing to open-source projects, and sharing knowledge with the 
              developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
