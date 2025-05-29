import React from 'react';
import { Clock, Award, Users, ThumbsUp } from 'lucide-react';

const About: React.FC = () => {
  const advantages = [
    {
      icon: <Clock size={36} className="text-primary-500" />,
      title: "Agilidade",
      description: "Atendimento rápido e serviços realizados dentro do prazo combinado."
    },
    {
      icon: <Award size={36} className="text-primary-500" />,
      title: "Qualidade",
      description: "Equipe altamente qualificada e peças de primeira linha."
    },
    {
      icon: <Users size={36} className="text-primary-500" />,
      title: "Experiência",
      description: "Mais de 15 anos de experiência no mercado automotivo."
    },
    {
      icon: <ThumbsUp size={36} className="text-primary-500" />,
      title: "Garantia",
      description: "Garantia em todos os serviços e peças substituídas."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-secondary-800 text-white relative overflow-hidden">
      {/* Yellow diagonal pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 10px, #FFDD00 10px, #FFDD00 20px)'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="font-heading font-bold text-4xl mb-6">
              Sobre a <span className="text-primary-500">AutoTech</span>
            </h2>
            <p className="mb-6 text-gray-300">
              Fundada em 2008, a AutoTech se consolidou como referência em mecânica automotiva para carros e veículos diesel. 
              Nossa missão é oferecer serviços de alta qualidade, com transparência e preço justo.
            </p>
            <p className="mb-6 text-gray-300">
              Contamos com uma equipe de profissionais altamente qualificados e em constante atualização, 
              utilizando equipamentos modernos e tecnologia de ponta para diagnósticos precisos e reparos eficientes.
            </p>
            <p className="text-gray-300">
              Priorizamos a segurança e satisfação dos nossos clientes, oferecendo garantia em todos os serviços e 
              utilizando peças de qualidade que atendem às especificações dos fabricantes.
            </p>
            
            <div className="mt-10">
              <a 
                href="#contato" 
                className="bg-primary-500 text-secondary-800 font-bold py-3 px-8 rounded-md hover:bg-primary-600 transition-colors duration-300 inline-block"
              >
                Entre em Contato
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="bg-secondary-700 p-6 rounded-lg hover:bg-secondary-600 transition-colors duration-300"
              >
                <div className="mb-4">{advantage.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-2">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;