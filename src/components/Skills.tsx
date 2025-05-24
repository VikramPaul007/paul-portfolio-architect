
const Skills = () => {
  const skillCategories = [
    {
      title: "Architecture & Design",
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
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b border-slate-200 pb-2">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="text-slate-600 bg-slate-50 px-3 py-2 rounded-lg text-sm"
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
