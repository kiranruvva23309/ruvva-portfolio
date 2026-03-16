import { motion } from "framer-motion";
import { MapPin, Github, Linkedin, Download, ArrowDown } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

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
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16"
      >
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
          {/* Left Column — Text Content */}
          <motion.div variants={fadeUp} className="flex-1 text-center lg:text-left">
            <motion.p variants={fadeUp} className="text-sm font-mono text-primary tracking-widest uppercase mb-3">
              👋 there!
            </motion.p>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
              <span className="text-foreground">I'm </span>
              <span className="gradient-text">Kiran Chand</span>
            </motion.h1>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="gradient-text">Ruvva</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="font-mono-code text-sm text-muted-foreground mb-6">
              Computer Science Student · Python Developer · Data Analytics Enthusiast
            </motion.p>

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

              <a
                href="https://github.com/KiranRuvva"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass-card hover:border-primary/40 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} className="text-foreground" />
              </a>

              <a
                href="https://www.linkedin.com/in/ruvva-kiran-chand-8b0a28296"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass-card hover:border-primary/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-foreground" />
              </a>

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
