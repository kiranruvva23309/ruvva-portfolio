import { motion } from "framer-motion";
import { Lightbulb, Code2, BookOpen } from "lucide-react";

const traits = [
  { icon: Lightbulb, label: "Analytical Thinking" },
  { icon: Code2, label: "Coding" },
  { icon: BookOpen, label: "Continuous Learning" },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const AboutSection = () => (
  <section id="about" className="section-container">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.15 }} className="text-center">
      <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-2 gradient-text inline-block">About Me</motion.h2>
      <motion.div variants={fadeUp} className="w-16 h-1 rounded-full bg-primary mb-8 mx-auto" />

      <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
        I am currently pursuing a Bachelor of Technology in Computer Science and Engineering at Lovely Professional University. I have hands-on experience working on data analytics projects, parcel management systems, and dashboard development using technologies like Python, Pandas, Matplotlib, Scikit-learn, Excel, and Power BI.
      </motion.p>
      <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
        My interests include Python development, data analytics, cloud computing, and building scalable software solutions. I have earned certifications in cloud computing, computer communications, and networking. I am always eager to take on new challenges, collaborate on projects, and grow as a developer.
      </motion.p>

      <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
        {traits.map(t => (
          <div key={t.label} className="glass-card rounded-xl px-6 py-4 flex items-center gap-3 hover:border-primary/30 transition-colors">
            <t.icon size={24} className="text-primary" />
            <span className="text-sm font-medium text-foreground">{t.label}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default AboutSection;
