import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      period: "2025 - Presente",
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: "UNIP - Universidade Paulista",
      description: "Cursando 4º Semestre",
      status: "current",
    },
    {
      period: "2021 - 2023",
      degree: "Ensino Médio Técnico em Informática",
      institution: "Colégio Joseense",
      description: "Concluído",
      status: "completed",
    },
  ];

  return (
    <section id="formacao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Formação Acadêmica
            </h2>
            <p className="text-xl text-muted-foreground">
              Minha trajetória educacional
            </p>
          </div>

          {/* Timeline */}
          <div className="relative space-y-8">
            {/* Vertical Line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-primary hidden md:block" />

            {educationData.map((edu, index) => (
              <Card
                key={edu.degree}
                className={`bg-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-700 ${
                  edu.status === "current" ? "border-primary" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex gap-6">
                    {/* Icon */}
                    <div className="relative z-10">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center ${
                          edu.status === "current"
                            ? "bg-gradient-primary shadow-glow"
                            : "bg-gradient-accent"
                        }`}
                      >
                        <GraduationCap className="h-8 w-8 text-background" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Period */}
                      <div className="flex items-center gap-2 text-accent">
                        <Calendar className="h-5 w-5" />
                        <span className="font-semibold">{edu.period}</span>
                        {edu.status === "current" && (
                          <span className="ml-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                            Cursando
                          </span>
                        )}
                      </div>

                      {/* Degree */}
                      <h3 className="text-2xl font-bold text-foreground">
                        {edu.degree}
                      </h3>

                      {/* Institution */}
                      <p className="text-lg text-primary font-medium">
                        {edu.institution}
                      </p>

                      {/* Description */}
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
