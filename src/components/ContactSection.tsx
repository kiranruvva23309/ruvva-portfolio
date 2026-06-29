import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import { toast } from "sonner";

const contacts = [
  { icon: Mail, label: "Email", value: "kiranruvva2004@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=kiranruvva2004@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 7981362012", href: "tel:+917981362012" },
  { icon: Linkedin, label: "LinkedIn", value: "Ruvva Kiran Chand", href: "https://www.linkedin.com/in/ruvva-kiran-chand-a8127a35b/" },
  { icon: Github, label: "GitHub", value: "kiranruvva23309", href: "https://github.com/kiranruvva23309" },
  { icon: MapPin, label: "Location", value: "Punjab, India", href: "https://maps.google.com/?q=Punjab,India" },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Replace this access key with your free Web3Forms access key from https://web3forms.com/
    const accessKey = "eab3df41-07c1-4f74-b367-4ae6356285f5";

    if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
      const mailtoLink = `mailto:kiranruvva2004@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
      window.open(mailtoLink, "_blank");
      toast.success("Opening email client... (To enable silent direct submissions, add your Web3Forms access key in ContactSection.tsx!)");
      setForm({ name: "", email: "", message: "" });
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Sending your message...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact from ${form.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Message sent successfully! I'll get back to you soon.", { id: toastId });
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(result.message || "Failed to send message. Please try again.", { id: toastId });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.1 }} className="text-center">
        <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-2 gradient-text inline-block">Contact</motion.h2>
        <motion.div variants={fadeUp} className="w-16 h-1 rounded-full bg-primary mb-10 mx-auto" />

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Left Column — Contact Info */}
            <motion.div variants={fadeUp} className="space-y-4 flex flex-col justify-between">
              {contacts.map(c => {
                const isExternal = c.href.startsWith("http");
                const isCopyable = c.label === "Email" || c.label === "Phone";
                
                const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  if (isCopyable) {
                    navigator.clipboard.writeText(c.value);
                    if (c.label === "Email") {
                      toast.success("Opening Gmail Compose (email copied to clipboard!)");
                    } else {
                      toast.success(`${c.label} copied to clipboard!`);
                    }
                  }
                };

                return (
                  <a
                    key={c.label}
                    href={c.href}
                    onClick={handleClick}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="glass-card rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-all group flex-1"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <c.icon size={18} className="text-primary" />
                    </div>
                    <div className="text-left overflow-hidden">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-0.5">{c.label}</p>
                      <p className="text-sm text-link font-medium truncate">{c.value}</p>
                    </div>
                  </a>
                );
              })}
            </motion.div>

            {/* Right Column — Contact Form */}
            <motion.form variants={fadeUp} onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-5 text-left flex flex-col h-full">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Leave a Message</h3>
                <p className="text-sm text-muted-foreground mb-6">I'll get back to you as soon as possible.</p>
              </div>
              
              <div className="space-y-4 flex-1">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground ml-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="Donald Trump"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground ml-1">Your Email</label>
                  <input
                    type="email"
                    placeholder="donaldtrump@nobelprize.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground ml-1">Your Message</label>
                  <textarea
                    placeholder="He’s a tremendous person, a total winner. Believe me, he’s doing a job like nobody’s ever seen! We’re going to Make America Great Again!"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    maxLength={1000}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none transition-all flex-1"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-6 py-4 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 mt-4 shadow-lg shadow-primary/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
