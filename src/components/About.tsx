
import { useAnimateInView } from '@/lib/framer-animations';
import { Check } from 'lucide-react';

const About = () => {
  const { ref: imageRef, inView: imageInView } = useAnimateInView();
  const { ref: contentRef, inView: contentInView } = useAnimateInView();
  
  const benefits = [
    'Atendimento personalizado para suas necessidades',
    'Planejamento alimentar baseado em evidências científicas',
    'Acompanhamento contínuo da sua evolução',
    'Foco em resultados sustentáveis a longo prazo',
    'Abordagem que respeita sua relação com a comida'
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={imageRef} 
            className={`relative ${imageInView ? 'animate-slide-in-left' : 'opacity-0'}`}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-lg -z-10"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3" 
                  alt="Nutricionista" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div 
            ref={contentRef} 
            className={`${contentInView ? 'animate-slide-in-right' : 'opacity-0'}`}
          >
            <span className="inline-block py-1 px-3 mb-4 bg-primary/10 text-primary text-xs font-medium rounded-full">
              Sobre Mim
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-foreground">
              Olá, sou Carolina Silva, <br/>Nutricionista Especialista
            </h2>
            <p className="text-muted-foreground mb-6">
              Há mais de 10 anos ajudo pessoas a transformarem seus hábitos alimentares, melhorando sua saúde e qualidade de vida através de uma alimentação equilibrada, saborosa e adequada às necessidades individuais.
            </p>
            <p className="text-muted-foreground mb-8">
              Minha abordagem é personalizada, considerando não apenas seus objetivos, mas também seu estilo de vida, preferências e histórico de saúde, para criar um plano alimentar que funcione especificamente para você.
            </p>
            
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <p className="ml-3 text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
