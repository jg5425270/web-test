export default function AboutSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-jjm-secondary mb-8">About JJM Technology</h2>
            <p className="text-lg text-jjm-neutral-dark mb-6 leading-relaxed">
              We are a forward-thinking technology company specializing in artificial intelligence, automation, and custom software development. Our mission is to empower businesses with innovative solutions that drive growth and efficiency.
            </p>
            <p className="text-lg text-jjm-neutral-dark mb-8 leading-relaxed">
              Founded on the principles of innovation and excellence, we combine cutting-edge technology with deep industry expertise to deliver solutions that exceed expectations.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-jjm-neutral rounded-xl">
                <div className="text-3xl font-bold text-jjm-primary mb-2">50+</div>
                <div className="text-sm text-jjm-neutral-dark">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-jjm-neutral rounded-xl">
                <div className="text-3xl font-bold text-jjm-primary mb-2">5+</div>
                <div className="text-sm text-jjm-neutral-dark">Years Experience</div>
              </div>
            </div>
            
            <button 
              onClick={scrollToContact}
              className="inline-flex items-center bg-jjm-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-jjm-primary-dark transition-colors"
            >
              <i className="fas fa-handshake mr-3"></i>Partner With Us
            </button>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" 
              alt="Professional development team collaborating" 
              className="rounded-xl shadow-lg w-full h-64 object-cover" 
            />
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80" 
              alt="AI automation technology setup" 
              className="rounded-xl shadow-lg w-full h-48 object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}