
import { useAnimateInView } from '@/lib/framer-animations';
import { 
  Utensils, 
  Scale, 
  Heart, 
  Baby, 
  Apple, 
  BarChart
} from 'lucide-react';

const Services = () => {
  const { ref: titleRef, inView: titleInView } = useAnimateInView();
  
  const services = [
    {
      title: 'Nutrição Clínica',
      description: 'Tratamento nutricional para condições de saúde como diabetes, hipertensão, colesterol alto e problemas digestivos.',
      icon: <Heart className="h-10 w-10 text-primary" />
    },
    {
      title: 'Emagrecimento',
      description: 'Estratégias personalizadas para perda de peso saudável e sustentável, sem dietas restritivas.',
      icon: <Scale className="h-10 w-10 text-primary" />
    },
    {
      title: 'Nutrição Esportiva',
      description: 'Planos alimentares para otimizar o desempenho físico e auxiliar na recuperação muscular.',
      icon: <BarChart className="h-10 w-10 text-primary" />
    },
    {
      title: 'Reeducação Alimentar',
      description: 'Aprenda a fazer escolhas alimentares mais saudáveis e desenvolva uma relação equilibrada com a comida.',
      icon: <Apple className="h-10 w-10 text-primary" />
    },
    {
      title: 'Nutrição Materno-Infantil',
      description: 'Acompanhamento nutricional durante a gestação, amamentação e introdução alimentar para bebês.',
      icon: <Baby className="h-10 w-10 text-primary" />
    },
    {
      title: 'Planejamento de Cardápios',
      description: 'Elaboração de cardápios práticos e saborosos, adaptados à sua rotina e preferências.',
      icon: <Utensils className="h-10 w-10 text-primary" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={titleRef} 
          className={`text-center max-w-3xl mx-auto mb-16 ${titleInView ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <span className="inline-block py-1 px-3 mb-4 bg-primary/10 text-primary text-xs font-medium rounded-full">
            Meus Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-foreground">
            Serviços especializados para suas necessidades nutricionais
          </h2>
          <p className="text-muted-foreground">
            Ofereço uma variedade de serviços personalizados para ajudar você a atingir seus objetivos de saúde e bem-estar através da alimentação adequada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { ref, inView } = useAnimateInView(0.1, true);
            
            return (
              <div 
                key={index}
                ref={ref}
                className={`service-card bg-white rounded-lg p-6 shadow-md ${inView ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
