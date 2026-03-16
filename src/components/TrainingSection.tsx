import { motion } from "framer-motion";
import { Calendar, BookOpen, ExternalLink } from "lucide-react";
import projectParcel from "@/assets/project-parcel.jpg";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const TrainingSection = () => (
  <section id="training" className="section-container">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.12 }} className="text-center">
      <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-2 gradient-text inline-block">Training</motion.h2>
      <motion.div variants={fadeUp} className="w-16 h-1 rounded-full bg-primary mb-10 mx-auto" />

      <motion.div variants={fadeUp} className="glass-card rounded-xl overflow-hidden max-w-3xl mx-auto text-center">
        <img src={projectParcel} alt="DSA Training" className="w-full h-48 object-cover" loading="lazy" />
        <div className="p-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <BookOpen size={22} className="text-primary" />
            <h3 className="font-semibold text-foreground text-lg">Skill Development – LPU</h3>
          </div>
          <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4 font-mono-code">
            <Calendar size={14} /> Jun 2025 – Aug 2025 • Summer Training
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Completed an advanced Data Structures and Algorithms training program using Python. Built a project titled Smart Parcel Locker that applies core data structure techniques to manage parcel storage, retrieval, and tracking efficiently.
          </p>

          <div className="mb-4">
            <p className="text-sm font-medium text-foreground mb-2">Key Topics:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Linked Lists", "Trees", "Graphs", "Sorting Algorithms", "Searching Algorithms"].map(c => (
                <span key={c} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">{c}</span>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm font-medium text-foreground mb-2">Tools used:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Python", "Data Structures", "Algorithms"].map(t => (
                <span key={t} className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground font-mono-code">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default TrainingSection;
