
import { useAnimateInView } from '@/lib/framer-animations';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const { ref: titleRef, inView: titleInView } = useAnimateInView();
  
  const testimonials = [
    {
      name: 'Mariana Santos',
      position: 'Professora',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
      content: 'Depois de tentar várias dietas sem sucesso, finalmente encontrei na Carolina a orientação que precisava. Seu plano alimentar é flexível, saboroso e me ajudou a perder 12kg em 6 meses, de forma saudável e sustentável.',
      rating: 5
    },
    {
      name: 'Ricardo Almeida',
      position: 'Empresário',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
      content: 'Procurei a Carolina para melhorar minha energia no dia a dia e controlar a glicemia. Sua abordagem é científica, mas ao mesmo tempo muito prática e adaptada à minha rotina agitada. Resultados surpreendentes!',
      rating: 5
    },
    {
      name: 'Juliana Costa',
      position: 'Atleta',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1970&ixlib=rb-4.0.3',
      content: 'Como atleta de triatlo, precisava de um plano nutricional que potencializasse meu desempenho. A Carolina desenvolveu uma estratégia perfeita para minhas necessidades, e consegui melhorar meus tempos significativamente.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={titleRef} 
          className={`text-center max-w-3xl mx-auto mb-16 ${titleInView ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <span className="inline-block py-1 px-3 mb-4 bg-primary/10 text-primary text-xs font-medium rounded-full">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-foreground">
            O que meus clientes estão dizendo
          </h2>
          <p className="text-muted-foreground">
            Conheça as experiências e resultados de pessoas que transformaram sua saúde e qualidade de vida através da alimentação adequada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const { ref, inView } = useAnimateInView(0.1, true);
            
            return (
              <div 
                key={index}
                ref={ref}
                className={`testimonial-card bg-white rounded-lg p-6 shadow-md border border-muted ${inView ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground">{testimonial.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
