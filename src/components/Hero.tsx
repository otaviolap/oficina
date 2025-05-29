import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('serviços');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-secondary-800 overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary-800 bg-opacity-75"></div>
      
      {/* Yellow diagonal stripes overlay */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, #FFDD00 20px, #FFDD00 40px)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-white leading-tight">
          <span className="text-primary-500">Especialistas</span> em <br />
          Mecânica Automotiva
        </h1>
        <p className="text-white text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          Soluções completas para carros e diesel com tecnologia avançada e atendimento de qualidade
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contato" 
            className="bg-primary-500 text-secondary-800 font-bold py-3 px-8 rounded-md hover:bg-primary-600 transition-colors duration-300 text-lg"
          >
            Agendar Serviço
          </a>
          <a 
            href="#serviços" 
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-secondary-800 transition-colors duration-300 text-lg"
          >
            Nossos Serviços
          </a>
        </div>
      </div>
      
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
        onClick={scrollToServices}
      >
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;