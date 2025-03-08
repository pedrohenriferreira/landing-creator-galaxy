
import { useAnimateInView } from '@/lib/framer-animations';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const { ref: titleRef, inView: titleInView } = useAnimateInView();
  const { ref: textRef, inView: textInView } = useAnimateInView();
  const { ref: buttonRef, inView: buttonInView } = useAnimateInView();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div 
              ref={titleRef} 
              className={`${titleInView ? 'animate-slide-in-left' : 'opacity-0'}`}
            >
              <span className="inline-block py-1 px-3 mb-4 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                Nutricionista Especializada
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Transforme sua saúde com alimentação adequada
              </h1>
            </div>
            
            <div 
              ref={textRef}
              className={`${textInView ? 'animate-fade-in delay-300' : 'opacity-0'}`}
            >
              <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto lg:mx-0">
                Descubra como uma alimentação personalizada pode melhorar sua qualidade de vida, energia e bem-estar sob orientação profissional.
              </p>
            </div>
            
            <div 
              ref={buttonRef}
              className={`${buttonInView ? 'animate-slide-up delay-500' : 'opacity-0'}`}
            >
              <div className="flex justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="rounded-full bg-primary hover:bg-primary/90 text-white font-medium px-8"
                >
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden border-8 border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" 
                alt="Alimentação saudável" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
