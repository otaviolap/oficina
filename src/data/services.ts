export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: 'car' | 'diesel' | 'both';
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Manutenção Preventiva',
    description: 'Mantenha seu veículo em perfeito estado com nossa manutenção preventiva. Inclui troca de óleo, filtros, verificação de fluidos e sistemas de segurança.',
    icon: 'tool',
    category: 'both'
  },
  {
    id: 2,
    title: 'Diagnóstico Eletrônico',
    description: 'Utilizamos equipamentos de última geração para diagnóstico preciso de falhas eletrônicas em veículos leves e pesados.',
    icon: 'cpu',
    category: 'both'
  },
  {
    id: 3,
    title: 'Suspensão e Freios',
    description: 'Reparos e manutenção em sistemas de suspensão e freios para uma condução segura e confortável.',
    icon: 'disc',
    category: 'car'
  },
  {
    id: 4,
    title: 'Motor e Transmissão',
    description: 'Especialistas em reparos de motores e transmissões com garantia de serviço e peças originais.',
    icon: 'engine',
    category: 'both'
  },
  {
    id: 5,
    title: 'Injeção Eletrônica',
    description: 'Manutenção e reparo do sistema de injeção eletrônica para melhor performance e economia de combustível.',
    icon: 'zap',
    category: 'car'
  },
  {
    id: 6,
    title: 'Sistemas de Embreagem',
    description: 'Substituição e ajuste de embreagens para veículos leves e pesados com equipamentos de precisão.',
    icon: 'circle',
    category: 'both'
  },
  {
    id: 7,
    title: 'Reparos em Bombas Injetoras',
    description: 'Manutenção especializada em bombas injetoras e sistemas de alta pressão para veículos diesel.',
    icon: 'droplet',
    category: 'diesel'
  },
  {
    id: 8,
    title: 'Turbinas e Intercoolers',
    description: 'Diagnóstico, reparo e substituição de turbinas e intercoolers para máxima eficiência em veículos diesel.',
    icon: 'wind',
    category: 'diesel'
  }
];