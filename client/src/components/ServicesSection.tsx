export default function ServicesSection() {
  const services = [
    {
      icon: "fas fa-brain",
      title: "Generative AI",
      description: "Custom AI models, chatbots, content generation, and intelligent automation solutions powered by the latest LLM technology.",
      features: [
        "Custom AI Model Development",
        "Intelligent Chatbot Integration", 
        "Content Generation Systems",
        "AI-Powered Analytics"
      ],
      color: "bg-jjm-primary"
    },
    {
      icon: "fas fa-cogs", 
      title: "AI Automation",
      description: "Streamline operations with intelligent process automation, workflow optimization, and predictive systems.",
      features: [
        "Process Automation",
        "Workflow Optimization",
        "Predictive Analytics",
        "Intelligent Decision Systems"
      ],
      color: "bg-jjm-accent"
    },
    {
      icon: "fas fa-code",
      title: "Web Development", 
      description: "Modern, responsive web applications built with cutting-edge frameworks and optimized for performance.",
      features: [
        "React & Next.js Applications",
        "E-commerce Platforms",
        "Progressive Web Apps",
        "SEO & Performance Optimization"
      ],
      color: "bg-green-500"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: [
        "React Native Apps",
        "iOS & Android Development", 
        "App Store Optimization",
        "Mobile UI/UX Design"
      ],
      color: "bg-purple-500"
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure, DevOps automation, and enterprise-grade deployment solutions.",
      features: [
        "AWS/Azure/GCP Deployment",
        "DevOps & CI/CD Pipelines",
        "Microservices Architecture",
        "Security & Monitoring"
      ],
      color: "bg-blue-500"
    },
    {
      icon: "fas fa-lightbulb",
      title: "Tech Consulting",
      description: "Strategic technology guidance, digital transformation planning, and architecture design consulting.",
      features: [
        "Digital Transformation",
        "Technology Audits",
        "Architecture Planning", 
        "Team Training & Support"
      ],
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-jjm-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-jjm-secondary mb-6">Our Expertise</h2>
          <p className="text-xl text-jjm-neutral-dark max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge technology solutions that drive business growth and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-semibold text-jjm-secondary mb-4">{service.title}</h3>
              <p className="text-jjm-neutral-dark mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="text-sm text-jjm-neutral-dark space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <i className="fas fa-check text-jjm-primary mr-2"></i>{feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}