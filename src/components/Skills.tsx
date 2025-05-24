
const Skills = () => {
  const skillCategories = [
    {
      title: "Architecture & Design",
      icon: "🏛️",
      skills: [
        "Microservices Architecture",
        "Domain-Driven Design (DDD)",
        "Event-Driven Architecture",
        "System Design",
        "API Design",
        "Scalable Systems"
      ]
    },
    {
      title: "Backend & Cloud",
      icon: "☁️",
      skills: [
        "Python",
        "C#",
        "Node.js",
        ".NET Core",
        "Azure",
        "Azure Kubernetes Service (AKS)",
        "Docker",
        "Kubernetes"
      ]
    },
    {
      title: "Databases",
      icon: "🗃️",
      skills: [
        "Redis",
        "PostgreSQL",
        "MongoDB",
        "SQL Server",
        "MySQL",
        "Database Design",
        "Query Optimization"
      ]
    },
    {
      title: "Tools & DevOps",
      icon: "⚙️",
      skills: [
        "Apache Kafka",
        "ELK Stack",
        "Azure DevOps",
        "CI/CD",
        "Git",
        "Terraform",
        "Monitoring & Logging"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50 to-sandstone-50 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="bg-mandala-pattern w-full h-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 mandala-decoration">
          <h2 className="text-5xl font-bold text-gradient-indigo mb-4 devanagari-heading">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-sandstone-600 elegant-text text-lg">
            Expertise across the full technology stack
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gold-200 indian-hover group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="text-xl font-semibold text-indigo-900 devanagari-heading gold-accent">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="text-sandstone-700 bg-gradient-to-r from-sandstone-100 to-gold-50 px-4 py-2 rounded-lg text-sm font-medium border border-gold-200 hover:from-gold-100 hover:to-gold-200 transition-all duration-300 transform hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
