export default function SimpleWebsite() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="JJM Technology" className="h-8 w-8 mr-2" />
              <div className="text-2xl font-bold text-blue-600">JJM Technology</div>
              <div className="text-sm text-gray-500 ml-2">LLC</div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Services</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">About</button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Next-Gen <span className="text-yellow-300">AI Solutions</span> for Modern Business
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Transforming businesses through cutting-edge AI automation, web development, and mobile solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollToSection('services')} className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100">
                Explore Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
                Start Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions that drive business growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Generative AI",
                description: "Custom AI models, chatbots, content generation, and intelligent automation solutions.",
                color: "bg-blue-600"
              },
              {
                title: "AI Automation", 
                description: "Streamline operations with intelligent process automation and workflow optimization.",
                color: "bg-blue-500"
              },
              {
                title: "Web Development",
                description: "Modern, responsive web applications built with cutting-edge frameworks.",
                color: "bg-green-500"
              },
              {
                title: "Mobile Development",
                description: "Native and cross-platform mobile applications for exceptional user experiences.",
                color: "bg-purple-500"
              },
              {
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and enterprise-grade deployment solutions.",
                color: "bg-blue-500"
              },
              {
                title: "Tech Consulting",
                description: "Strategic technology guidance and digital transformation planning.",
                color: "bg-orange-500"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <div className="w-8 h-8 bg-white rounded opacity-20"></div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">About JJM Technology</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are a forward-thinking technology company specializing in artificial intelligence, automation, and custom software development. Our mission is to empower businesses with innovative solutions that drive growth and efficiency.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700">
                Partner With Us
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl text-blue-600 mb-4">🤖</div>
                <p className="text-gray-700 font-semibold">AI Technology Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful AI implementations, web applications, and mobile solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Intelligent Customer Support Bot",
                description: "Advanced AI chatbot reducing response time by 80%",
                category: "AI Solution",
                status: "Completed"
              },
              {
                title: "E-commerce Platform",
                description: "Full-featured platform with AI recommendations",
                category: "Web App",
                status: "Completed"
              },
              {
                title: "Finance Tracker App",
                description: "AI-powered mobile app with predictive analytics",
                category: "Mobile App", 
                status: "Completed"
              },
              {
                title: "Workflow Automation Suite",
                description: "Enterprise system reducing manual tasks by 70%",
                category: "AI Solution",
                status: "Completed"
              },
              {
                title: "Healthcare Management System",
                description: "HIPAA compliant with AI-assisted diagnostics",
                category: "Web App",
                status: "Completed"
              },
              {
                title: "Smart Logistics Tracker",
                description: "Real-time tracking with AI route optimization",
                category: "Mobile App",
                status: "In Progress"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center">
                  <div className="text-white text-4xl">📱</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs rounded-full font-semibold bg-blue-600 text-white">
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 text-xs rounded-full font-semibold ${project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Let's discuss your project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="First Name *" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  <input type="text" placeholder="Last Name *" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <input type="email" placeholder="Email Address *" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                <input type="text" placeholder="Company" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select a service</option>
                  <option value="gen-ai">Generative AI</option>
                  <option value="ai-automation">AI Automation</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-development">Mobile Development</option>
                </select>
                <textarea placeholder="Project Description *" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Office Location</h4>
                      <p className="text-gray-600">123 Tech Street, Innovation City, TC 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone Number</h4>
                      <p className="text-gray-600">+1 (803) 525-4143</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email Address</h4>
                      <p className="text-gray-600">info@jjmtechllc.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { href: "https://linkedin.com/company/jjmtechnology", label: "LinkedIn", color: "bg-blue-600" },
                    { href: "https://twitter.com/jjmtech", label: "Twitter", color: "bg-blue-400" },
                    { href: "https://github.com/jjmtechnology", label: "GitHub", color: "bg-gray-800" }
                  ].map((link, index) => (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-lg flex items-center justify-center text-white transition-all ${link.color} hover:opacity-80`}>
                      <span>🔗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl font-bold text-blue-400">JJM Technology</div>
                <div className="text-sm text-gray-400">LLC</div>
              </div>
              <p className="text-gray-300">
                Transforming businesses through innovative AI solutions, automation, and custom software development.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('services')}>Generative AI</button></li>
                <li><button onClick={() => scrollToSection('services')}>AI Automation</button></li>
                <li><button onClick={() => scrollToSection('services')}>Web Development</button></li>
                <li><button onClick={() => scrollToSection('services')}>Mobile Development</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
                <li><button onClick={() => scrollToSection('projects')}>Portfolio</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-300">
                <p>info@jjmtechllc.com</p>
                <p>7035057582</p>
                <p>123 Tech Street<br />Innovation City, TC 12345</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            © 2024 JJM Technology LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}