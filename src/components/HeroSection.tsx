import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Github, Linkedin, Download, ArrowDown } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const Typewriter = ({ strings }: { strings: string[] }) => {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const fullText = strings[index];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setSpeed(50);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setSpeed(100);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % strings.length);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, index, strings, speed]);

  return (
    <span className="min-h-[1.5em] inline-block">
      <span className="gradient-text">{currentText}</span>
      <span className="inline-block w-[2px] h-[1em] bg-primary ml-1 animate-pulse" />
    </span>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-10">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px] animate-glow-pulse" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
          {/* Left Column — Text Content */}
          <motion.div variants={fadeUp} className="flex-1 text-center lg:text-left">
            <div className="inline-flex flex-col items-stretch w-fit mx-auto lg:mx-0">
              <div className="flex items-center justify-between gap-10 mb-3">
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-2">
                  <p className="text-sm font-mono text-primary tracking-widest uppercase mb-0 whitespace-nowrap">
                    👋 Hi there!
                  </p>
                  <p className="text-xl font-bold tracking-tight whitespace-nowrap">
                    <span className="text-foreground">I'm </span>
                  </p>
                </motion.div>

                <motion.div 
                  variants={fadeUp}
                  className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full glass-card border-emerald-500/20 bg-emerald-500/5 text-[10px] font-bold tracking-wider text-emerald-400 uppercase shadow-lg shadow-emerald-500/10 whitespace-nowrap"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Available for Opportunities
                </motion.div>
              </div>

              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 whitespace-nowrap">
                <span className="gradient-text">Ruvva Kiran Chand</span>
              </motion.h1>
            </div>

            <motion.div variants={fadeUp} className="font-mono-code text-lg sm:text-xl lg:text-2xl min-h-[1.5em] mb-8">
              <Typewriter
                strings={[
                  "Python, SQL, Java, C and C++",
                  "Business Analyst",
                  "Data Analyst",
                  "Power BI Specialist",
                  "Data Analytics Enthusiast"
                ]}
              />
            </motion.div>

            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4 max-w-xl">
              I am a passionate Computer Science and Engineering undergraduate
              dedicated to developing innovative and secure software solutions. Skilled
              in Python, Java, and C++, I focus on practical applications such as AI-driven
              fitness coaching and secure file management systems.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4 max-w-xl">
              My tech stack includes frameworks like HTML, CSS, NumPy, Pandas, and tools
              such as Power BI and MySQL. Beyond coding, I enjoy challenging hackathons
              and continuous learning through certifications.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
              When not coding, I love exploring data visualizations and improving user
              experiences. My goal is to leverage technology to create impactful, user-friendly
              software that enhances security and health awareness.
            </motion.p>

            {/* Action row — Location, socials, resume */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-5">
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                Punjab, India
              </span>

              <motion.a
                href="https://github.com/kiranruvva23309"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full glass-card border-primary/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/20"
                aria-label="GitHub"
              >
                <Github size={20} className="text-foreground" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/ruvva-kiran-chand-a8127a35b/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full glass-card border-primary/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/20"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-foreground" />
              </motion.a>

              <a
                href="/Ruvva_CV.pdf"
                download="Ruvva_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column — Large Photo */}
          <motion.div
            variants={fadeUp}
            className="flex-shrink-0"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full gradient-border overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src="/ruvva-passport.jpg"
                alt="Ruvva Kiran Chand"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-14 flex justify-center lg:justify-start"
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
