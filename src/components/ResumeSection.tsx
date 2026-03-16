import { motion } from "framer-motion";
import { Download, FileText, MapPin, GraduationCap, Star, ExternalLink } from "lucide-react";
import { useState } from "react";
import CVModal from "./CVModal";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const ResumeSection = () => {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <section id="resume" className="section-container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.12 }} className="text-center">
        <motion.p variants={fadeUp} className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Curriculum Vitae</motion.p>
        <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-10 text-foreground">My Resume</motion.h2>

        {/* Preview Card */}
        <motion.div
          variants={fadeUp}
          onClick={() => setIsCVOpen(true)}
          className="max-w-lg mx-auto rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]"
          style={{
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="text-left">
              <h3 className="text-xl font-bold text-foreground mb-1">Ruvva Kiran Chand</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Computer Science Student &<br />Data Analytics Enthusiast
              </p>
            </div>
            <FileText size={28} className="text-muted-foreground/50 shrink-0 mt-1" />
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full text-muted-foreground" style={{ border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.03)" }}>
              <MapPin size={12} /> LPU, Phagwara
            </span>
            <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full text-muted-foreground" style={{ border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.03)" }}>
              <GraduationCap size={12} /> B.Tech CSE
            </span>
            <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full text-muted-foreground" style={{ border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.03)" }}>
              <Star size={12} /> CGPA 6.37
            </span>
          </div>

          <div className="border-t border-white/10 pt-4">
            <span className="text-sm text-blue-400 font-medium flex items-center justify-center gap-2 hover:text-blue-300 transition-colors">
              <ExternalLink size={14} /> View Full CV
            </span>
          </div>
        </motion.div>

        {/* Download Section */}
        <motion.p variants={fadeUp} className="text-muted-foreground text-sm mt-8 mb-4">
          Want a copy? Download my resume.
        </motion.p>
        <motion.div variants={fadeUp}>
          <a
            href="/Ruvva_CV.pdf"
            download="Ruvva_CV.pdf"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
          >
            <Download size={18} /> Download CV
          </a>
        </motion.div>
      </motion.div>

      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </section>
  );
};

export default ResumeSection;
