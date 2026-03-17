import { motion } from "framer-motion";
import { ExternalLink, Calendar, Globe } from "lucide-react";
import projectParcel from "@/assets/project-parcel.jpg";
import projectSalesExcel from "@/assets/project-sales-excel.jpg";
import projectSalesPython from "@/assets/project-sales-python.jpg";
import projectConflict from "@/assets/project-conflict.png";
import projectMelodyMind from "@/assets/project-melodymind.png";

const projects = [
  {
    image: projectConflict,
    title: "Global Armed Conflict Analysis – Power BI Dashboard",
    duration: "Dec 2025",
    tech: ["Power BI", "Data Modeling", "Data Transformation"],
    desc: "Created a Power BI dashboard to analyze global armed conflict data and present insights through interactive visualizations.",
    features: [
      "Performed data cleaning, modeling, and transformation for structured reporting.",
      "Built dynamic dashboards using maps, trend lines, filters, and slicers to analyze conflicts by year, region, and intensity",
    ],
    github: "https://github.com/kiranruvva23309",
    live: null,
  },
  {
    image: projectParcel,
    title: "Smart Parcel Tracker – Real-Time Delivery & Locker System",
    duration: "Jul 2025",
    tech: ["C++", "Arrays", "Linked Lists", "Queues", "Hash Tables"],
    desc: "A parcel management system enabling customers, delivery agents, and admins to securely track shipments, access lockers, and monitor operations in real time.",
    features: [
      "Login authentication & OTP-based locker access",
      "Real-time parcel updates with role-specific dashboards",
      "Built using core data structures for efficient parcel handling",
    ],
    github: "https://github.com/kiranruvva23309",
    live: null,
  },
  {
    image: projectMelodyMind,
    title: "MelodyMind – AI Music Tutor",
    duration: "Apr 2025",
    tech: ["React", "AI", "Education Tech"],
    desc: "At MelodyMind, we believe that understanding music theory should be accessible to everyone. Our mission is to demystify music theory concepts through interactive, personalized learning experiences powered by artificial intelligence.",
    features: [
      "Whether you're a beginner just starting to read sheet music or an intermediate musician looking to understand complex chord progressions",
      "Our AI tutor adapts to your level and learning style to help you master music theory concepts effectively.",
    ],
    github: "https://github.com/kiranruvva23309",
    live: null,
  },
  {
    image: projectSalesExcel,
    title: "Sales Analysis Dashboard – An Excel Dashboard",
    duration: "Apr 2025",
    tech: ["MS Excel", "Pivot Tables", "Slicers", "Charts"],
    desc: "An interactive Excel dashboard analyzing Flipkart's sales performance, highlighting trends, profitability, and segment-wise insights across 2019–2020.",
    features: [
      "Pivot tables & slicers for interactive data exploration",
      "KPI visualization: total sales, quantity, profit",
      "Regional, category, and segment performance analysis",
    ],
    github: "https://github.com/kiranruvva23309",
    live: null,
  },
  {
    image: projectSalesPython,
    title: "Flipkart Sales Analysis – Python Data Analytics",
    duration: "Apr 2025",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    desc: "A data analytics project studying Flipkart's sales data to uncover patterns in monthly trends, category performance, profitability, and customer behavior.",
    features: [
      "Data cleaning, preprocessing & exploratory data analysis",
      "Visualizations: line, scatter, bar, pie charts",
      "Segment-level purchasing pattern analysis",
    ],
    github: "https://github.com/kiranruvva23309",
    live: null,
  },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const ProjectsSection = () => (
  <section id="projects" className="section-container">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} transition={{ staggerChildren: 0.12 }} className="text-center">
      <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-2 gradient-text inline-block">Projects</motion.h2>
      <motion.div variants={fadeUp} className="w-16 h-1 rounded-full bg-primary mb-10 mx-auto" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <motion.div key={p.title} variants={fadeUp} className="glass-card rounded-xl overflow-hidden hover:border-primary/20 transition-all group text-center">
            <img src={p.image} alt={p.title} className="w-full h-44 object-cover" loading="lazy" />
            <div className="p-6">
              <h3 className="font-semibold text-foreground leading-tight mb-2">{p.title}</h3>
              <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-mono-code mb-3">
                <Calendar size={12} /> {p.duration}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {p.tech.map(t => (
                  <span key={t} className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground font-mono-code">{t}</span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>

              {p.features && (
                <ul className="text-sm text-muted-foreground mb-4 space-y-1 inline-block text-left">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap items-center justify-center gap-4">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-link hover:underline">
                    <ExternalLink size={14} /> GitHub
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-link hover:underline">
                    <Globe size={14} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default ProjectsSection;
