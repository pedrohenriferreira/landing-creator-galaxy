
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-2xl font-serif font-bold text-primary mb-6">NutriVida</h4>
            <p className="text-white/70 mb-6">
              Transformando vidas através de uma alimentação personalizada e equilibrada para uma melhor qualidade de vida.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <span className="sr-only">Youtube</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-white mb-4">Links Rápidos</h5>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/70 hover:text-primary transition-colors">Início</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-primary transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-primary transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-primary transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-primary transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-white mb-4">Serviços</h5>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/70 hover:text-primary transition-colors">Nutrição Clínica</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-primary transition-colors">Emagrecimento</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-primary transition-colors">Nutrição Esportiva</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-primary transition-colors">Reeducação Alimentar</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-primary transition-colors">Nutrição Materno-Infantil</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-white mb-4">Horário de Atendimento</h5>
            <ul className="space-y-3">
              <li className="text-white/70">Segunda-feira: 9h às 18h</li>
              <li className="text-white/70">Terça-feira: 9h às 18h</li>
              <li className="text-white/70">Quarta-feira: 9h às 18h</li>
              <li className="text-white/70">Quinta-feira: 9h às 18h</li>
              <li className="text-white/70">Sexta-feira: 9h às 18h</li>
              <li className="text-white/70">Sábado: 9h às 12h</li>
              <li className="text-white/70">Domingo: Fechado</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-4 md:mb-0">
            © {currentYear} NutriVida. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-primary/20 hover:bg-primary/30 text-primary rounded-full flex items-center justify-center transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
