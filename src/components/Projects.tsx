
const Projects = () => {
  const projects = [
    {
      title: "Enterprise AI Hub",
      description: "A drag-and-drop platform to build and deploy custom AI agents at scale, enabling non-technical users to create sophisticated AI workflows.",
      techStack: ["React", "Node.js", "Azure OpenAI", "MongoDB", "Docker"],
      highlights: ["Scalable AI agent deployment", "Drag-and-drop interface", "Enterprise-grade security"]
    },
    {
      title: "AnyTrac",
      description: "IoT-based retail tracking solution using Raspberry Pi for real-time inventory management and analytics, integrated with SAP systems.",
      techStack: ["Raspberry Pi", "React", "SAP Integration", "IoT", "Real-time Analytics"],
      highlights: ["60% reduction in operational costs", "Real-time tracking", "SAP integration"]
    },
    {
      title: "Reliance Foundation Scholarships",
      description: "Scalable scholarship management system serving 250K+ users with high-performance backend architecture and robust data processing.",
      techStack: ["Redis", "React.js", "SQL Server", ".NET Core", "Azure"],
      highlights: ["250K+ active users", "High-performance backend", "Automated processing"]
    },
    {
      title: "AJIO - Catalog Management",
      description: "Kafka-based event-driven architecture for high-volume product onboarding, handling 20,000+ SKUs daily with real-time processing.",
      techStack: [".NET", "Apache Kafka", "Redis", "ELK Stack", "Microservices"],
      highlights: ["20K+ SKUs/day processing", "Event-driven architecture", "Real-time monitoring"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                {project.title}
              </h3>
              
              <p className="text-slate-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-sm text-slate-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
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
