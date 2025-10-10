import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Desenvolvido com <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" /> por Nicolas Neves Cerqueira
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
