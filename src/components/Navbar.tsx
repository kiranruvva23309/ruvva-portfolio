import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  "Home", "Skills", "Projects", "Training", "Certificates", "Achievements", "Education", "Resume", "Contact"
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-card shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#home" className="text-xl font-bold tracking-tight gradient-text hover:opacity-80 transition-opacity">
          Ruvva's Portfolio
        </a>
        <div className="hidden md:flex gap-1">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary">
              {l}
            </button>
          ))}
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass-card border-t border-border">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="block w-full text-left px-6 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
