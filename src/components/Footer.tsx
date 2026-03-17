import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center gap-4 mb-4">
        {[
          { icon: Github, href: "https://github.com/kiranruvva23309" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/ruvva-kiran-chand-a8127a35b/" },
          { icon: Mail, href: "mailto:kiranruvva2004@gmail.com" },
        ].map(s => (
          <motion.a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center border border-border/10 hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-300 hover:-translate-y-1 text-muted-foreground shadow-sm hover:shadow-md hover:shadow-primary/10"
          >
            <s.icon size={18} />
          </motion.a>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">© 2025 Ruvva Kiran Chand</p>
      <p className="text-xs text-muted-foreground mt-1">Built with passion for learning and technology</p>
    </div>
  </footer>
);

export default Footer;
