import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/nicolas-profile.jpeg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <img
              src={profileImage}
              alt="Nicolas Neves Cerqueira"
              className="relative w-40 h-40 rounded-full object-cover border-4 border-primary shadow-glow"
            />
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Nicolas Neves Cerqueira
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground whitespace-pre-line">'''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''
                                            
                                            desenvolvedor full stack</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              19 anos • São José dos Campos, SP
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => scrollToSection("contato")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Entre em Contato
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => scrollToSection("sobre")}
            >
              Conheça Mais
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/NicolasNevesC"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-neves-291385248"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:nicolasnevesiphone@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="tel:+5512997042067"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
