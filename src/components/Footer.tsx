import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center gap-4 mb-4">
        {[
          { icon: Github, href: "https://github.com/kiranruvva23309" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/kiran-ruvva/" },
          { icon: Mail, href: "mailto:kiranruvva2004@gmail.com" },
        ].map(s => (
          <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground">
            <s.icon size={18} />
          </a>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">© 2025 Ruvva Kiran Chand</p>
      <p className="text-xs text-muted-foreground mt-1">Built with passion for learning and technology</p>
    </div>
  </footer>
);

export default Footer;
