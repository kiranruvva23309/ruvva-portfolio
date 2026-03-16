import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

const contacts = [
  { icon: Mail, label: "Email", value: "kiranruvva2004@gmail.com", href: "mailto:kiranruvva2004@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 7981362012", href: "tel:+917981362012" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/kiran-ruvva", href: "https://www.linkedin.com/in/kiran-ruvva/" },
  { icon: Github, label: "GitHub", value: "github.com/kiranruvva23309", href: "https://github.com/kiranruvva23309" },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    const mailtoLink = `mailto:kiranruvva2004@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailtoLink, "_blank");
    toast.success("Opening email client...");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.1 }} className="text-center">
        <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-2 gradient-text inline-block">Contact</motion.h2>
        <motion.div variants={fadeUp} className="w-16 h-1 rounded-full bg-primary mb-10 mx-auto" />

        <div className="max-w-2xl mx-auto space-y-8">
          <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
            {contacts.map(c => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <c.icon size={20} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</p>
                  <p className="text-sm text-link font-medium">{c.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="glass-card rounded-xl p-6 space-y-4 text-left">
            <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Leave a Message</h3>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
            />
            <button type="submit" className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <Send size={18} /> Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
