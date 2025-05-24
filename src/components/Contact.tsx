
import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="bg-mandala-pattern w-full h-full"></div>
      </div>
      
      {/* Decorative mandalas */}
      <div className="absolute top-20 right-20 w-40 h-40 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold-400 animate-mandala-spin">
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.3" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 mandala-decoration">
          <h2 className="text-5xl font-bold text-white mb-4 devanagari-heading">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-indigo-200 elegant-text text-lg">
            Let's create something amazing together
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gold-300/30">
              <h3 className="text-2xl font-semibold text-white mb-6 devanagari-heading gold-accent">
                Let's Connect
              </h3>
              <p className="text-indigo-200 mb-8 leading-relaxed elegant-text">
                I'm always interested in discussing new opportunities, challenging projects, 
                or simply connecting with fellow engineers. Feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-gold-500 rounded-xl text-white group-hover:bg-gold-400 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-indigo-300 text-sm">Email</p>
                    <a 
                      href="mailto:vikrampaul1996@gmail.com"
                      className="text-white hover:text-gold-300 transition-colors font-medium"
                    >
                      vikrampaul1996@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-gold-500 rounded-xl text-white group-hover:bg-gold-400 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-indigo-300 text-sm">Phone</p>
                    <a 
                      href="tel:+917679807295"
                      className="text-white hover:text-gold-300 transition-colors font-medium"
                    >
                      +91-7679807295
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gold-300/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-indigo-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-gold-300/50 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent text-white placeholder-indigo-300 backdrop-blur-sm"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-indigo-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-gold-300/50 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent text-white placeholder-indigo-300 backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-indigo-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-gold-300/50 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent text-white placeholder-indigo-300 backdrop-blur-sm resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white py-4 px-6 rounded-xl hover:from-gold-600 hover:to-gold-700 transition-all duration-300 font-medium transform hover:scale-105 shadow-lg indian-hover"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
