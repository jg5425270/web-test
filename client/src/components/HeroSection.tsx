export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-jjm-primary to-jjm-accent text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Next-Gen <span className="text-jjm-yellow">AI Solutions</span> for Modern Business
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              Transforming businesses through cutting-edge AI automation, web development, and mobile solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToServices}
                className="bg-white text-jjm-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center inline-flex items-center justify-center"
              >
                <i className="fas fa-rocket mr-2"></i>Explore Services
              </button>
              <button 
                onClick={scrollToContact}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-jjm-primary transition-colors text-center inline-flex items-center justify-center"
              >
                <i className="fas fa-comments mr-2"></i>Start Project
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="AI Technology Visualization" 
              className="rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300" 
            />
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-jjm-yellow rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 bg-white rounded-full opacity-10 animate-bounce"></div>
    </section>
  );
}