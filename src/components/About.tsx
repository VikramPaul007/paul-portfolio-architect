
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">
          About Me
        </h2>
        
        <div className="prose prose-lg mx-auto text-slate-600 leading-relaxed">
          <p className="text-xl mb-6">
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
          
          <p>
            When I'm not architecting systems, I enjoy exploring new technologies, 
            contributing to open-source projects, and sharing knowledge with the 
            developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
