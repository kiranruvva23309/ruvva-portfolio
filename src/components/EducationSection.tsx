import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const education = [
  {
    year: "Aug 2023 – Present",
    school: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 6.37",
    color: "from-primary to-accent",
  },
  {
    year: "Apr 2021 – Mar 2023",
    school: "Narayana Junior College",
    location: "Vishakhapatnam, Andhra Pradesh",
    degree: "Intermediate",
    score: "Percentage: 90.6%",
    color: "from-accent to-primary",
  },
  {
    year: "Apr 2020 – Mar 2021",
    school: "Narayana High School",
    location: "Vishakhapatnam, Andhra Pradesh",
    degree: "Matriculation",
    score: "Percentage: 99.67%",
    color: "from-primary to-accent",
  },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const EducationSection = () => (
  <section id="education" className="section-container">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.15 }} className="text-center">
      <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-2 gradient-text inline-block">Education</motion.h2>
      <motion.div variants={fadeUp} className="w-16 h-1 rounded-full bg-primary mb-10 mx-auto" />

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30 hidden md:block" />

        {education.map((e, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className={`relative flex flex-col md:flex-row items-center gap-6 mb-12 last:mb-0 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-background border-[3px] border-primary z-10 hidden md:block shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />

            <div className={`w-full md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
              <div className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all group relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${e.color}`} />

                <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"} justify-center`}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    <GraduationCap size={24} className="text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground text-lg leading-tight">{e.school}</h4>
                </div>

                <div className={`flex items-center gap-1.5 text-xs text-muted-foreground mb-3 ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"} justify-center`}>
                  <MapPin size={12} className="text-primary" />
                  <span>{e.location}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-2">{e.degree}</p>

                {e.score && (
                  <div className={`flex items-center gap-2 mb-3 ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"} justify-center`}>
                    <Award size={14} className="text-accent" />
                    <span className="text-sm font-bold text-primary">{e.score}</span>
                  </div>
                )}

                <div className={`flex items-center gap-1.5 text-xs text-muted-foreground font-mono-code ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"} justify-center`}>
                  <Calendar size={12} className="text-accent" />
                  <span>{e.year}</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block w-[calc(50%-2rem)]" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default EducationSection;
