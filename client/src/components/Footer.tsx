export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { href: "https://linkedin.com/company/jjmtechnology", icon: "fab fa-linkedin-in", label: "LinkedIn" },
    { href: "https://twitter.com/jjmtech", icon: "fab fa-twitter", label: "Twitter" },
    { href: "https://github.com/jjmtechnology", icon: "fab fa-github", label: "GitHub" }
  ];

  return (
    <footer className="bg-jjm-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="JJM Technology" className="h-8 w-8" />
              <div className="text-2xl font-bold text-jjm-primary">JJM Technology</div>
              <div className="text-sm text-gray-400">LLC</div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transforming businesses through innovative AI solutions, automation, and custom software development.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-jjm-primary transition-colors"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`${link.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-jjm-primary transition-colors"
                >
                  Generative AI
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-jjm-primary transition-colors"
                >
                  AI Automation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-jjm-primary transition-colors"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-jjm-primary transition-colors"
                >
                  Mobile Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-jjm-primary transition-colors"
                >
                  Cloud Solutions
                </button>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-jjm-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-jjm-primary transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-jjm-primary transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="/careers" className="text-gray-300 hover:text-jjm-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-jjm-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <i className="fas fa-envelope text-jjm-primary"></i>
                <span>info@jjmtechllc.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-phone text-jjm-primary"></i>
                <span>+1 (803) 525-4143</span>
              </div>
              <div className="flex items-start space-x-2">
                <i className="fas fa-map-marker-alt text-jjm-primary mt-1"></i>
                <span>123 Tech Street<br />Innovation City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 JJM Technology LLC. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-jjm-primary transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-jjm-primary transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-jjm-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
