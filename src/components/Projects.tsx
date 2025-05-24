
const Projects = () => {
  const projects = [
    {
      title: "Enterprise AI Hub",
      description: "A drag-and-drop platform to build and deploy custom AI agents at scale, enabling non-technical users to create sophisticated AI workflows.",
      techStack: ["React", "Node.js", "Azure OpenAI", "MongoDB", "Docker"],
      highlights: ["Scalable AI agent deployment", "Drag-and-drop interface", "Enterprise-grade security"],
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "AnyTrac",
      description: "IoT-based retail tracking solution using Raspberry Pi for real-time inventory management and analytics, integrated with SAP systems.",
      techStack: ["Raspberry Pi", "React", "SAP Integration", "IoT", "Real-time Analytics"],
      highlights: ["60% reduction in operational costs", "Real-time tracking", "SAP integration"],
      gradient: "from-gold-500 to-orange-600"
    },
    {
      title: "Reliance Foundation Scholarships",
      description: "Scalable scholarship management system serving 250K+ users with high-performance backend architecture and robust data processing.",
      techStack: ["Redis", "React.js", "SQL Server", ".NET Core", "Azure"],
      highlights: ["250K+ active users", "High-performance backend", "Automated processing"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "AJIO - Catalog Management",
      description: "Kafka-based event-driven architecture for high-volume product onboarding, handling 20,000+ SKUs daily with real-time processing.",
      techStack: [".NET", "Apache Kafka", "Redis", "ELK Stack", "Microservices"],
      highlights: ["20K+ SKUs/day processing", "Event-driven architecture", "Real-time monitoring"],
      gradient: "from-red-500 to-pink-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-sandstone-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-10 left-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400 animate-mandala-spin">
          <circle cx="50" cy="50" r="5" fill="currentColor" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.3" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 mandala-decoration">
          <h2 className="text-5xl font-bold text-gradient-indigo mb-4 devanagari-heading">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-sandstone-600 elegant-text text-lg">
            Showcasing impactful solutions and innovations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gold-200 indian-hover group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`}></div>
              
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4 devanagari-heading gold-accent">
                {project.title}
              </h3>
              
              <p className="text-sandstone-700 mb-6 leading-relaxed elegant-text">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gold-700 mb-3 devanagari-heading">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-sm text-sandstone-600 flex items-center elegant-text">
                      <span className="w-2 h-2 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mr-3 flex-shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium border border-indigo-300 hover:from-indigo-200 hover:to-indigo-300 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
