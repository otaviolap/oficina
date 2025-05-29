import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Silva",
    position: "Cliente desde 2019",
    content: "Excelente atendimento! Meu carro estava com problemas no motor e eles diagnosticaram e resolveram rapidamente. Preço justo e qualidade no serviço.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Ana Oliveira",
    position: "Cliente desde 2020",
    content: "Ótima oficina! Sempre levo meu carro para manutenção preventiva e nunca tive problemas. Equipe profissional e atenciosa.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Ricardo Mendes",
    position: "Cliente desde 2018",
    content: "Meu caminhão apresentou problemas na estrada e a equipe da AutoTech foi extremamente ágil no atendimento. Serviço de qualidade e preço justo.",
    rating: 4,
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Fernanda Costa",
    position: "Cliente desde 2021",
    content: "Melhor oficina da região! Atendimento personalizado e soluções eficientes. Recomendo para todos que precisam de serviços de qualidade.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const goToPrevious = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    resetTimeout();
    setCurrentIndex(index);
  };

  return (
    <section id="avaliações" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl mb-4">
            O que nossos <span className="text-primary-500">Clientes</span> dizem
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            A satisfação de nossos clientes é nossa prioridade. Confira alguns depoimentos.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div 
              className="transition-transform duration-500 ease-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full p-8 md:p-12"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-20 h-20 rounded-full object-cover border-4 border-primary-500"
                    />
                    <div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={20} 
                            className={i < testimonial.rating ? "text-primary-500 fill-primary-500" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <p className="text-secondary-600 italic mb-6">"{testimonial.content}"</p>
                      <div>
                        <h4 className="font-heading font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-secondary-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={goToPrevious}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-secondary-800 hover:bg-primary-500 hover:text-secondary-800 transition-colors duration-300"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={goToNext}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-secondary-800 hover:bg-primary-500 hover:text-secondary-800 transition-colors duration-300"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-primary-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;