import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Globe, Wrench, Users,
  FileCode, Cpu, Coffee, Hash,
  BarChart3, Grid3X3, LineChart, Waves, Table2,
  Database, Terminal, BookOpen, Cloud, GitBranch, Github,
  MessageSquare, Lightbulb, Clock, Brain, Handshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ── skill data ─────────────────────────────────────────────── */

interface Skill {
  name: string;
  icon: LucideIcon;
  color: string;          // a tailwind text-color class
}

interface Category {
  title: string;
  icon: LucideIcon;
  accentColor: string;    // gradient / solid colour for the left bar
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: "Languages",
    icon: Code2,
    accentColor: "from-cyan-400 to-blue-500",
    skills: [
      { name: "Python", icon: Hash, color: "text-yellow-400" },
      { name: "SQL", icon: Database, color: "text-emerald-400" },
      { name: "Java", icon: Coffee, color: "text-orange-400" },
      { name: "C", icon: FileCode, color: "text-blue-400" },
      { name: "C++", icon: Cpu, color: "text-pink-400" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Globe,
    accentColor: "from-violet-400 to-purple-500",
    skills: [
      { name: "Pandas", icon: BarChart3, color: "text-indigo-400" },
      { name: "NumPy", icon: Grid3X3, color: "text-sky-400" },
      { name: "Matplotlib", icon: LineChart, color: "text-orange-400" },
      { name: "Seaborn", icon: Waves, color: "text-teal-400" },
      { name: "Excel", icon: Table2, color: "text-green-500" },
      { name: "Power BI", icon: BarChart3, color: "text-amber-400" },
    ],
  },
  {
    title: "Databases & Tools",
    icon: Wrench,
    accentColor: "from-emerald-400 to-teal-500",
    skills: [
      { name: "MySQL", icon: Database, color: "text-sky-400" },
      { name: "VS Code", icon: Terminal, color: "text-blue-500" },
      { name: "Jupyter", icon: BookOpen, color: "text-orange-400" },
      { name: "MS Azure", icon: Cloud, color: "text-blue-400" },
      { name: "Git", icon: GitBranch, color: "text-red-400" },
      { name: "GitHub", icon: Github, color: "text-foreground" },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    accentColor: "from-pink-400 to-rose-500",
    skills: [
      { name: "Communication", icon: MessageSquare, color: "text-pink-400" },
      { name: "Problem-Solving", icon: Lightbulb, color: "text-amber-400" },
      { name: "Time Management", icon: Clock, color: "text-cyan-400" },
      { name: "Analytical Thinking", icon: Brain, color: "text-purple-400" },
      { name: "Teamwork", icon: Handshake, color: "text-green-400" },
    ],
  },
];

/* ── skill to project mapping ───────────────────────────────── */

const skillProjects: Record<string, string[]> = {
  "Python": ["Flipkart Sales Analysis (Python)"],
  "SQL": ["Smart Parcel Tracker"],
  "Java": [],
  "C": [],
  "C++": ["Smart Parcel Tracker"],
  "Pandas": ["Flipkart Sales Analysis (Python)"],
  "NumPy": ["Flipkart Sales Analysis (Python)"],
  "Matplotlib": ["Flipkart Sales Analysis (Python)"],
  "Seaborn": ["Flipkart Sales Analysis (Python)"],
  "Excel": ["Sales Analysis Dashboard (Excel)"],
  "Power BI": ["Global Armed Conflict Analysis (Power BI)"],
  "MySQL": ["Smart Parcel Tracker"],
  "MS Azure": ["Cloud Computing"],
  "React": ["MelodyMind – AI Music Tutor"],
  "Communication": [],
  "Problem-Solving": ["Smart Parcel Tracker"],
  "Time Management": ["My Precious Life"],
  "Analytical Thinking": ["Global Armed Conflict Analysis", "Flipkart Sales Analysis"],
  "Teamwork": ["Smart Parcel Tracker", "MelodyMind – AI Music Tutor"],
};

/* ── animation variants ─────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const chipVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

/* ── component ──────────────────────────────────────────────── */

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="text-foreground">Technical </span>
            <span className="gradient-text">Arsenal</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mx-auto" />
        </motion.div>
  
        {/* Categories */}
        <div className="space-y-12">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              className="relative"
            >
              {/* Category title with accent bar */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-1 h-7 rounded-full bg-gradient-to-b ${cat.accentColor}`} />
                <h3 className="text-xl font-bold text-foreground">{cat.title}</h3>
              </div>
  
              {/* Skill chips */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.05 }}
                className="flex flex-wrap gap-3"
              >
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="relative group/tooltip">
                    <motion.div
                      variants={chipVariant}
                      whileHover={{ scale: 1.06, y: -2 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="group glass-card rounded-xl px-5 py-3 flex items-center gap-2.5
                                 cursor-default hover:border-primary/50 transition-all duration-200
                                 hover:shadow-lg hover:shadow-primary/10"
                    >
                      <skill.icon size={18} className={`${skill.color} transition-transform group-hover:scale-110`} />
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </motion.div>
  
                    {/* Pop-up Tooltip */}
                    <AnimatePresence>
                      {hoveredSkill === skill.name && skillProjects[skill.name] && skillProjects[skill.name].length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 w-56 p-3 
                                     rounded-xl bg-[#0a0f19] border border-primary/30 shadow-2xl backdrop-blur-xl
                                     pointer-events-none"
                        >
                          <div className="text-[10px] uppercase tracking-wider text-primary font-bold mb-2">Used in Projects</div>
                          <div className="space-y-1.5">
                            {skillProjects[skill.name].map((proj) => (
                              <div key={proj} className="flex items-center gap-2 text-xs text-gray-300">
                                <div className="w-1 h-1 rounded-full bg-primary" />
                                {proj}
                              </div>
                            ))}
                          </div>
                          {/* Triangle pointer */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-[#0a0f19] filter drop-shadow(0 2px 2px rgba(0,0,0,0.5))" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
