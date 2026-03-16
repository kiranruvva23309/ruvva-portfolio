import { motion } from "framer-motion";
import { Cloud, Globe, Cpu, Wifi, Calendar, ExternalLink } from "lucide-react";

const certs = [
  {
    icon: Cpu,
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    issuer: "Infosys Springboard",
    duration: "Aug 2025",
    image: "/certificates/cert-infosys.png",
    link: "https://drive.google.com/file/d/1Oq3dz53wUu_bitqt2jIvaBhGM4lkVKh-/view?usp=drive_link",
  },
  {
    icon: Cpu,
    title: "Advanced Data Structure",
    issuer: "Lovely Professional University",
    duration: "Aug 13, 2025",
    image: "/certificates/cert-advanced-data-structures.png",
    link: "https://drive.google.com/file/d/1LSTadRkUE9YlF6sYRUIMWqZFUVHiemp5/view?usp=sharing",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    issuer: "Swayam NPTEL",
    duration: "Jan – Apr 2025",
    image: "/certificates/cert-nptel.png",
    link: "https://drive.google.com/file/d/1cHqajE5Yuhe5dazhCbhXNE-KOP2hMw69/view?usp=drive_link",
  },
  {
    icon: Wifi,
    title: "TCP/IP and Advanced Topics",
    issuer: "University of Colorado (Coursera)",
    duration: "Nov 21, 2024",
    image: "/certificates/cert-tcp-ip.png",
    link: "https://drive.google.com/file/d/1ju5dgb7_sCaWst3cFNxRcKEbsFUT4Grv/view?usp=drive_link",
  },
  {
    icon: Wifi,
    title: "Packet Switching Networks and Algorithms",
    issuer: "University of Colorado (Coursera)",
    duration: "Nov 8, 2024",
    image: "/certificates/cert-packet-switching.png",
    link: "https://drive.google.com/file/d/1ju5dgb7_sCaWst3cFNxRcKEbsFUT4Grv/view?usp=drive_link",
  },
  {
    icon: Globe,
    title: "Peer-to-Peer Protocols and Local Area Networks",
    issuer: "University of Colorado (Coursera)",
    duration: "Oct 12, 2024",
    image: "/certificates/cert-p2p.png",
    link: "https://drive.google.com/file/d/1ju5dgb7_sCaWst3cFNxRcKEbsFUT4Grv/view?usp=drive_link",
  },
  {
    icon: Wifi,
    title: "Fundamentals of Network Communication",
    issuer: "University of Colorado (Coursera)",
    duration: "Oct 6, 2024",
    image: "/certificates/cert-network-comm.png",
    link: "https://drive.google.com/file/d/1ju5dgb7_sCaWst3cFNxRcKEbsFUT4Grv/view?usp=drive_link",
  },
  {
    icon: Cpu,
    title: "Digital Systems: From Logic Gates to Processors",
    issuer: "Universitat Autònoma de Barcelona (Coursera)",
    duration: "Oct 1, 2024",
    image: "/certificates/cert-digital-systems.png",
    link: "https://drive.google.com/file/d/1ju5dgb7_sCaWst3cFNxRcKEbsFUT4Grv/view?usp=drive_link",
  },
  {
    icon: Globe,
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google (Coursera)",
    duration: "Sep 13, 2024",
    image: "/certificates/cert-google-networking.png",
    link: "https://drive.google.com/file/d/1ju5dgb7_sCaWst3cFNxRcKEbsFUT4Grv/view?usp=drive_link",
  },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const CertificatesSection = () => (
  <section id="certificates" className="section-container">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} transition={{ staggerChildren: 0.12 }} className="text-center">
      <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-2 gradient-text inline-block">Certificates</motion.h2>
      <motion.div variants={fadeUp} className="w-16 h-1 rounded-full bg-primary mb-10 mx-auto" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map(c => (
          <motion.div key={c.title} variants={fadeUp} className="glass-card flex flex-col rounded-xl overflow-hidden hover:border-primary/20 transition-all group text-center h-full">
            <div className="relative w-full h-48 bg-secondary/50 overflow-hidden shrink-0 border-b border-border/50">
              <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            
            <div className="p-6 flex flex-col flex-grow items-center relative">
              <div className="absolute -top-6 w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center shadow-lg group-hover:border-primary/50 transition-colors">
                <c.icon size={20} className="text-primary" />
              </div>

              <h3 className="font-semibold text-foreground text-sm leading-snug mt-4 mb-1">{c.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{c.issuer}</p>
              
              <div className="flex items-center justify-center gap-2 mb-6">
                <Calendar size={12} className="text-muted-foreground" />
                <span className="text-xs font-mono text-muted-foreground">{c.duration}</span>
              </div>

              <div className="mt-auto">
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-link hover:underline font-medium transition-colors hover:text-primary">
                  <ExternalLink size={14} /> View Certificate
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default CertificatesSection;
