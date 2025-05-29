import React, { useState } from 'react';
import { services } from '../data/services';
import { PenTool as Tool, Cpu, Disc, CircleDot, Zap, Wind, Droplet, Truck, Car } from 'lucide-react';

const ServiceCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: string; 
}> = ({ title, description, icon }) => {
  
  const getIcon = () => {
    switch (icon) {
      case 'tool': return <Tool size={32} />;
      case 'cpu': return <Cpu size={32} />;
      case 'disc': return <Disc size={32} />;
      case 'engine': return <CircleDot size={32} />;
      case 'zap': return <Zap size={32} />;
      case 'circle': return <CircleDot size={32} />;
      case 'droplet': return <Droplet size={32} />;
      case 'wind': return <Wind size={32} />;
      default: return <Tool size={32} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border-t-4 border-primary-500 h-full">
      <div className="text-primary-500 mb-4">{getIcon()}</div>
      <h3 className="font-heading font-bold text-xl mb-3 text-secondary-800">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'car' | 'diesel'>('all');

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory || service.category === 'both');

  return (
    <section id="serviços" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl mb-4">
            Nossos <span className="text-primary-500">Serviços</span>
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços para veículos leves e pesados, 
            utilizando equipamentos de última geração e profissionais altamente qualificados.
          </p>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={() => setActiveCategory('all')} 
              className={`px-6 py-2 rounded-full ${
                activeCategory === 'all' 
                  ? 'bg-primary-500 text-secondary-800 font-bold' 
                  : 'bg-white text-secondary-600 hover:bg-gray-200'
              } transition-colors duration-300`}
            >
              Todos
            </button>
            <button 
              onClick={() => setActiveCategory('car')} 
              className={`px-6 py-2 rounded-full flex items-center ${
                activeCategory === 'car' 
                  ? 'bg-primary-500 text-secondary-800 font-bold' 
                  : 'bg-white text-secondary-600 hover:bg-gray-200'
              } transition-colors duration-300`}
            >
              <Car size={18} className="mr-2" /> Carros
            </button>
            <button 
              onClick={() => setActiveCategory('diesel')} 
              className={`px-6 py-2 rounded-full flex items-center ${
                activeCategory === 'diesel' 
                  ? 'bg-primary-500 text-secondary-800 font-bold' 
                  : 'bg-white text-secondary-600 hover:bg-gray-200'
              } transition-colors duration-300`}
            >
              <Truck size={18} className="mr-2" /> Diesel
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;