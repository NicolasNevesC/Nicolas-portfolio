import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nicolasnevesiphone@gmail.com",
      href: "mailto:nicolasnevesiphone@gmail.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(12) 99704-2067",
      href: "tel:+5512997042067",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São José dos Campos, SP",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/NicolasNevesC",
      href: "https://github.com/NicolasNevesC",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nicolas-neves-291385248",
      href: "https://www.linkedin.com/in/nicolas-neves-291385248",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Vamos Conversar?
            </h2>
            <p className="text-xl text-muted-foreground">
              Estou disponível para oportunidades e colaborações
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <Card
                key={contact.label}
                className="bg-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-lg bg-gradient-primary flex items-center justify-center">
                    <contact.icon className="h-7 w-7 text-background" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">{contact.label}</h4>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-muted-foreground hover:text-primary transition-colors block break-words"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{contact.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <Card className="bg-card border-primary/20 shadow-card animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-center mb-6">Redes Sociais</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    className="h-auto py-4 px-6 border-primary/50 hover:bg-primary/10 justify-start group"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center gap-4 w-full">
                        <social.icon className="h-6 w-6 text-primary" />
                        <div className="text-left flex-1">
                          <div className="font-semibold">{social.label}</div>
                          <div className="text-sm text-muted-foreground">{social.value}</div>
                        </div>
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="mailto:nicolasnevesiphone@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Enviar Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
