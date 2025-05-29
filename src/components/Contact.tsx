import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-primary-500" />,
      title: "Endereço",
      content: "Av. Principal, 1234, Centro, São Paulo - SP"
    },
    {
      icon: <Phone size={24} className="text-primary-500" />,
      title: "Telefone",
      content: "(11) 4321-1234"
    },
    {
      icon: <Mail size={24} className="text-primary-500" />,
      title: "E-mail",
      content: "contato@autotech.com.br"
    },
    {
      icon: <Clock size={24} className="text-primary-500" />,
      title: "Horário de Funcionamento",
      content: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 13h"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl mb-4">
            Entre em <span className="text-primary-500">Contato</span>
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato conosco para agendar um serviço ou tirar dúvidas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-secondary-800 text-white rounded-lg p-8 h-full">
              <h3 className="font-heading text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-primary-500">{item.title}</h4>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="font-heading text-xl font-bold mb-4">Siga-nos nas Redes Sociais</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-secondary-700 flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-secondary-700 flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-secondary-700 flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-gray-100 rounded-lg p-8">
              <h3 className="font-heading text-2xl font-bold mb-6">Solicite um Orçamento</h3>
              
              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-1">Serviço Desejado</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Manutenção Preventiva">Manutenção Preventiva</option>
                    <option value="Diagnóstico Eletrônico">Diagnóstico Eletrônico</option>
                    <option value="Suspensão e Freios">Suspensão e Freios</option>
                    <option value="Motor e Transmissão">Motor e Transmissão</option>
                    <option value="Injeção Eletrônica">Injeção Eletrônica</option>
                    <option value="Sistemas de Embreagem">Sistemas de Embreagem</option>
                    <option value="Reparos em Bombas Injetoras">Reparos em Bombas Injetoras</option>
                    <option value="Turbinas e Intercoolers">Turbinas e Intercoolers</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">Mensagem</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-primary-500 text-secondary-800 font-bold py-3 px-4 rounded-md hover:bg-primary-600 transition-colors duration-300 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;