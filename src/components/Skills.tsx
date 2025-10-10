import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, BarChart3 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: "Frontend",
      color: "from-purple-500 to-pink-500",
      skills: ["HTML", "CSS", "Javascript"],
    },
    {
      icon: Code2,
      title: "Backend & Linguagens",
      color: "from-blue-500 to-cyan-500",
      skills: ["PHP", "Python", "C++", "C#"],
    },
    {
      icon: Database,
      title: "Banco de Dados",
      color: "from-green-500 to-emerald-500",
      skills: ["SQL", "XAMPP"],
    },
    {
      icon: BarChart3,
      title: "Análise de Dados",
      color: "from-orange-500 to-yellow-500",
      skills: ["Power BI (cursando)"],
    },
  ];

  const additionalSkills = [
    "Microsoft Office",
    "Organização",
    "Gestão de Tempo",
    "Resolução de Problemas",
  ];

  return (
    <section id="habilidades" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Habilidades Técnicas
            </h2>
            <p className="text-xl text-muted-foreground">
              Tecnologias e ferramentas que domino
            </p>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="bg-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-secondary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <Card className="bg-card border-primary/20 shadow-card animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <CardHeader>
              <CardTitle className="text-2xl">Competências Adicionais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {additionalSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-base py-2 px-4 border-primary/50 hover:bg-primary/10"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="bg-card border-primary/20 shadow-card animate-in fade-in slide-in-from-bottom-4 duration-700 delay-900">
            <CardHeader>
              <CardTitle className="text-2xl">Idiomas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-primary" />
                  <span className="text-lg">Português - Nativo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-accent" />
                  <span className="text-lg">Inglês - Básico</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
