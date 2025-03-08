
import { useAnimateInView } from '@/lib/framer-animations';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Clock, 
  Instagram, 
  Facebook, 
  Youtube 
} from 'lucide-react';

const Contact = () => {
  const { ref: titleRef, inView: titleInView } = useAnimateInView();
  const { ref: formRef, inView: formInView } = useAnimateInView();
  const { ref: infoRef, inView: infoInView } = useAnimateInView();
  
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: 'Telefone',
      content: '+55 (11) 99999-8888',
      link: 'tel:+551199998888'
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: 'Email',
      content: 'contato@nutrivida.com.br',
      link: 'mailto:contato@nutrivida.com.br'
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: 'Endereço',
      content: 'Av. Paulista, 1000 - São Paulo, SP',
      link: 'https://maps.google.com'
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: 'Horário',
      content: 'Segunda a Sexta: 9h às 18h',
      link: null
    }
  ];
  
  const socialMedia = [
    {
      icon: <Instagram className="h-5 w-5" />,
      link: 'https://instagram.com'
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      link: 'https://facebook.com'
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      link: 'https://youtube.com'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={titleRef} 
          className={`text-center max-w-3xl mx-auto mb-16 ${titleInView ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <span className="inline-block py-1 px-3 mb-4 bg-primary/10 text-primary text-xs font-medium rounded-full">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-foreground">
            Vamos começar sua jornada para uma vida mais saudável
          </h2>
          <p className="text-muted-foreground">
            Entre em contato para agendar sua consulta ou tirar dúvidas sobre os serviços.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div 
            ref={formRef} 
            className={`${formInView ? 'animate-slide-in-left' : 'opacity-0'}`}
          >
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Envie uma mensagem</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                    Assunto
                  </label>
                  <select 
                    id="subject"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="" disabled selected>Selecione o assunto</option>
                    <option value="appointment">Agendar consulta</option>
                    <option value="information">Informações sobre serviços</option>
                    <option value="partnership">Propostas de parceria</option>
                    <option value="other">Outro assunto</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Descreva como posso ajudar você"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg"
                >
                  Enviar mensagem
                </Button>
              </form>
            </div>
          </div>
          
          <div 
            ref={infoRef} 
            className={`${infoInView ? 'animate-slide-in-right' : 'opacity-0'}`}
          >
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Informações de contato</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                        {item.icon}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="text-muted-foreground hover:text-primary transition-colors"
                            target={item.title === 'Endereço' ? '_blank' : undefined}
                            rel={item.title === 'Endereço' ? 'noopener noreferrer' : undefined}
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-foreground mb-3">Redes sociais</h4>
                  <div className="flex space-x-4">
                    {socialMedia.map((item, index) => (
                      <a 
                        key={index}
                        href={item.link} 
                        className="w-10 h-10 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-primary text-white rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-6">
                  <Calendar className="h-6 w-6 mr-3" />
                  <h3 className="text-2xl font-bold">Agende sua consulta</h3>
                </div>
                
                <p className="mb-6">
                  Dê o primeiro passo em direção a uma vida mais saudável. Agende sua consulta agora e comece sua transformação.
                </p>
                
                <Button 
                  variant="secondary" 
                  className="w-full bg-white text-primary hover:bg-white/90 font-medium rounded-lg"
                >
                  Agendar agora <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
