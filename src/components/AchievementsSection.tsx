import { motion } from "framer-motion";
import { Trophy, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "70+ LeetCode Problems Solved",
    desc: "Strengthened DSA and problem-solving skills by solving 70+ coding challenges across various difficulty levels.",
    date: "Mar 2025",
    image: "/achievements/leetcode.png",
    link: "",
  },
  {
    title: "Technical Seminars – System Design & Data Science",
    desc: "Attended technical seminars on system design and data science provided by industry experts on campus.",
    date: "Oct 2025",
    image: "/achievements/seminar.png",
    link: "",
  },
  {
    title: "Cyber Sleuth Workshop – Ethical Hacking",
    desc: "Participated in the Cyber Sleuth workshop exploring ethical hacking concepts and cybersecurity fundamentals.",
    date: "Sep 2023",
    image: "/achievements/cybersleuth.png",
    link: "https://drive.google.com/file/d/1qRdxZoj3VKUvgxLL_OfmA92x7vO56CHE/view?usp=drive_link",
  },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const AchievementsSection = () => (
  <section id="achievements" className="section-container">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.12 }} className="text-center">
      <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-2 gradient-text inline-block">Achievements</motion.h2>
      <motion.div variants={fadeUp} className="w-16 h-1 rounded-full bg-primary mb-10 mx-auto" />

      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {achievements.map(a => (
          <motion.div key={a.title} variants={fadeUp} className="glass-card rounded-xl overflow-hidden hover:border-primary/20 transition-colors group text-center">
            <div className="w-full h-40 overflow-hidden">
              <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Trophy size={16} className="text-primary" />
                <h3 className="font-semibold text-foreground text-sm">{a.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{a.desc}</p>
              <p className="text-xs font-mono-code text-muted-foreground mb-2">{a.date}</p>
              {a.link && (
                <a href={a.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors font-medium">
                  <ExternalLink size={12} /> View Certificate
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default AchievementsSection;
