import { useState } from 'react';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Intelligent Customer Support Bot",
      description: "Advanced AI chatbot with natural language processing, reducing customer service response time by 80%.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=80",
      category: "ai",
      status: "Completed",
      technologies: ["OpenAI GPT", "Python", "React"]
    },
    {
      id: 2,
      title: "Advanced E-commerce Platform", 
      description: "Full-featured e-commerce solution with AI-powered recommendations and automated inventory management.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "web",
      status: "Completed",
      technologies: ["Next.js", "Stripe", "PostgreSQL"]
    },
    {
      id: 3,
      title: "Personal Finance Tracker",
      description: "AI-powered mobile app for expense tracking and financial planning with predictive analytics.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "mobile",
      status: "Completed", 
      technologies: ["React Native", "TensorFlow", "Firebase"]
    },
    {
      id: 4,
      title: "Workflow Automation Suite",
      description: "Enterprise automation system that streamlined operations and reduced manual tasks by 70%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
      category: "ai",
      status: "Completed",
      technologies: ["Python", "AWS Lambda", "Zapier"]
    },
    {
      id: 5,
      title: "Healthcare Management System",
      description: "Comprehensive patient management portal with HIPAA compliance and AI-assisted diagnostics.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "web",
      status: "Completed",
      technologies: ["Vue.js", "Node.js", "MongoDB"]
    },
    {
      id: 6,
      title: "Healthcare Management System",
      description: "HIPAA-compliant patient management portal with AI-assisted diagnostics, appointment scheduling, and electronic health records.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "web",
      status: "Completed",
      technologies: ["Vue.js", "Node.js", "MongoDB", "HIPAA"]
    },
    {
      id: 7,
      title: "Smart Logistics Tracker",
      description: "Real-time logistics tracking with AI-powered route optimization and delivery predictions.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "mobile",
      status: "In Progress",
      technologies: ["Flutter", "Google Maps API", "Machine Learning"]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI Solutions' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'ai': return 'AI Solution';
      case 'web': return 'Web App';
      case 'mobile': return 'Mobile App';
      default: return 'Project';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai': return 'bg-jjm-primary text-white';
      case 'web': return 'bg-green-500 text-white';
      case 'mobile': return 'bg-purple-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 bg-jjm-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-jjm-secondary mb-6">Featured Projects</h2>
          <p className="text-xl text-jjm-neutral-dark max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful AI implementations, web applications, and mobile solutions.
          </p>
        </div>
        
        {/* Project Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeFilter === filter.id
                  ? 'bg-jjm-primary text-white'
                  : 'bg-white text-jjm-secondary hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 text-xs rounded-full font-semibold ${getCategoryColor(project.category)}`}>
                    {getCategoryLabel(project.category)}
                  </span>
                  <span className={`px-3 py-1 text-xs rounded-full font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-jjm-secondary mb-3">{project.title}</h3>
                <p className="text-jjm-neutral-dark mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-jjm-primary font-semibold hover:text-jjm-primary-dark transition-colors">
                  View Details <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center bg-jjm-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-jjm-primary-dark transition-colors"
          >
            <i className="fas fa-folder-plus mr-3"></i>Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}