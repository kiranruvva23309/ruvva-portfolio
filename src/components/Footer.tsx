import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center gap-4 mb-4">
        {[
          { icon: Github, href: "https://github.com/kiranruvva23309" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/ruvva-kiran-chand-a8127a35b/" },
          { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=kiranruvva2004@gmail.com" },
        ].map(s => {
          const isExternal = s.href.startsWith("http");
          const isGmailCompose = s.href.includes("mail.google.com");
          
          const handleClick = () => {
            if (isGmailCompose) {
              navigator.clipboard.writeText("kiranruvva2004@gmail.com");
              toast.success("Opening Gmail Compose (email copied to clipboard!)");
            }
          };

          return (
            <motion.a
              key={s.href}
              href={s.href}
              onClick={handleClick}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center border border-border/10 hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-300 hover:-translate-y-1 text-muted-foreground shadow-sm hover:shadow-md hover:shadow-primary/10"
            >
              <s.icon size={18} />
            </motion.a>
          );
        })}
      </div>
      <p className="text-sm text-muted-foreground">© 2025 Ruvva Kiran Chand</p>
      <p className="text-xs text-muted-foreground mt-1">Built with passion for learning and technology</p>
    </div>
  </footer>
);

export default Footer;
