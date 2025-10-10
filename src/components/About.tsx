import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb, Clock } from "lucide-react";

const About = () => {
  const qualities = [
    {
      icon: Clock,
      title: "Flexibilidade",
      description: "Disponível para trabalhar em diferentes turnos, adaptando-me às necessidades da equipe",
    },
    {
      icon: Target,
      title: "Comprometimento",
      description: "Focado em cumprir prazos e metas, garantindo resultados de qualidade",
    },
    {
      icon: Users,
      title: "Trabalho em Equipe",
      description: "Valorizo a colaboração e acredito que desafios se transformam em conquistas quando enfrentados juntos",
    },
    {
      icon: Lightbulb,
      title: "Pensamento Criativo",
      description: "Busco soluções inovadoras e eficientes para os problemas do dia a dia",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <p className="text-xl text-muted-foreground">
              Desenvolvedor em formação, buscando oportunidades para crescer e contribuir
            </p>
          </div>

          {/* Main Description */}
          <Card className="bg-card border-primary/20 shadow-card animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <CardContent className="p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary">Objetivo Profissional</h3>
                <p className="text-lg text-foreground leading-relaxed">
                  Estou em busca de uma oportunidade de estágio ou efetivação na área de tecnologia, 
                  onde possa aplicar meus conhecimentos e continuar aprendendo. Com formação técnica em 
                  Informática e atualmente cursando Análise e Desenvolvimento de Sistemas, estou preparado 
                  para enfrentar novos desafios e contribuir com soluções criativas.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Qualities Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {qualities.map((quality, index) => (
              <Card
                key={quality.title}
                className="bg-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-gradient-primary">
                      <quality.icon className="h-6 w-6 text-background" />
                    </div>
                    <h4 className="text-xl font-semibold">{quality.title}</h4>
                  </div>
                  <p className="text-muted-foreground">{quality.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
