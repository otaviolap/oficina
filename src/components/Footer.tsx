import React from 'react';
import { ChevronRight, Wrench } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Wrench 
                size={32} 
                className="text-primary-500 mr-2 transform rotate-12" 
              />
              <span className="font-heading font-bold text-2xl">
                Auto<span className="text-primary-500">Tech</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Soluções completas em mecânica automotiva para carros e diesel. Qualidade, agilidade e preço justo.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 relative pl-3 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-primary-500">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {['Home', 'Serviços', 'Sobre', 'Galeria', 'Avaliações', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-300 flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 relative pl-3 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-primary-500">
              Serviços
            </h4>
            <ul className="space-y-3">
              {[
                'Manutenção Preventiva', 
                'Diagnóstico Eletrônico', 
                'Suspensão e Freios', 
                'Motor e Transmissão',
                'Injeção Eletrônica',
                'Sistemas Diesel'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#serviços"
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-300 flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 relative pl-3 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-primary-500">
              Horário de Funcionamento
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between">
                <span>Segunda-Feira:</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Terça-Feira:</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Quarta-Feira:</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Quinta-Feira:</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sexta-Feira:</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span>08:00 - 13:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AutoTech - Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;