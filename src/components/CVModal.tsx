import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, Github, Mail, Phone, ExternalLink, Calendar } from "lucide-react";
import { useEffect } from "react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVModal = ({ isOpen, onClose }: CVModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden"
          style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(12px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl backdrop-blur-3xl cv-modal-body"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.4)",
              border: "1px solid rgba(255,255,255,0.12)",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              boxShadow: "0 30px 80px rgba(0,0,0,0.4), 0 0 60px rgba(59,130,246,0.05), inset 0 1px 0 rgba(255,255,255,0.1)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hide scrollbar for webkit */}
            <style>{`.cv-modal-body::-webkit-scrollbar { display: none; }`}</style>

            {/* Close Button - fixed top right */}
            <button
              onClick={onClose}
              className="fixed top-6 right-6 sm:absolute sm:top-5 sm:right-5 z-30 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all text-gray-400 hover:text-white backdrop-blur-md border border-white/10"
            >
              <X size={20} />
            </button>

            <div className="px-8 py-12 space-y-10">

              {/* ───── Header ───── */}
              <header className="text-center border-b border-white/5 pb-8">
                <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 mb-2">Ruvva Kiran Chand</h1>
                <p className="text-sm text-gray-400 mb-5 font-medium tracking-wide">
                  Computer Science Undergraduate&nbsp;|&nbsp;Python Developer&nbsp;|&nbsp;Data Analytics Enthusiast
                </p>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-blue-400/90 italic">
                  <a href="https://www.linkedin.com/in/ruvva-kiran-chand-a8127a35b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-300 transition-colors">
                    <Linkedin size={13} /> Ruvva Kiran Chand
                  </a>
                  <a href="https://github.com/kiranruvva23309" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-300 transition-colors">
                    <Github size={13} /> kiranruvva23309
                  </a>
                  <a href="mailto:kiranruvva2004@gmail.com" className="flex items-center gap-1.5 hover:text-blue-300 transition-colors">
                    <Mail size={13} /> kiranruvva2004@gmail.com
                  </a>
                  <span className="flex items-center gap-1.5 text-blue-400/90">
                    <Phone size={13} /> +91-7981362012
                  </span>
                </div>
              </header>

              {/* ───── Technical Skills ───── */}
              <section>
                <h2 className="flex items-center gap-3 text-blue-400 font-bold text-sm mb-5 uppercase tracking-[0.2em]">
                  <span className="w-8 h-[1px] bg-blue-500/50" /> Skills
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <p className="mb-2"><span className="text-white font-semibold">Languages:</span> <span className="text-gray-400">Python, SQL, Java, C and C++</span></p>
                    <p className="mb-2"><span className="text-white font-semibold">Libraries/Technologies:</span> <span className="text-gray-400">NumPy, Pandas, Matplotlib, Scikit-learn, Seaborn, HTML and CSS</span></p>
                    <p className="mb-2"><span className="text-white font-semibold">Tools/Platforms:</span> <span className="text-gray-400">MS Excel & Power BI, Jupyter Notebook</span></p>
                    <p><span className="text-white font-semibold">Soft Skills:</span> <span className="text-gray-400">Problem-Solving, Team Lead & Player, Project Management and Adaptability</span></p>
                  </div>
                </div>
              </section>

              {/* ───── Projects ───── */}
              <section>
                <h2 className="flex items-center gap-3 text-blue-400 font-bold text-sm mb-6 uppercase tracking-[0.2em]">
                  <span className="w-8 h-[1px] bg-blue-500/50" /> Projects
                </h2>
                <div className="space-y-6">

                  {/* Project Cards with glass effect */}
                  {[
                    {
                      title: "Smart Parcel Tracker – Delivery & Locker System",
                      date: "Jul 2025",
                      items: [
                        "Created a parcel management system enabling customers, delivery agents, and admins to securely track shipments and access lockers in real time.",
                        "Developed using arrays, linked lists, queues, and Hash Tables with login authentication, OTP-based locker access, and role-specific dashboards.",
                        "Delivered a functional multi-user system improving parcel handling efficiency and delivery transparency."
                      ],
                      tags: ["C++", "Data Structures", "Hash Tables", "OTP Auth"]
                    },
                    {
                      title: "Global Armed Conflict Analysis – Power BI Dashboard",
                      date: "Dec 2025",
                      items: [
                        "Created a Power BI dashboard to analyse global armed conflict data through interactive visualizations.",
                        "Performed data cleaning, modelling, and transformation for structured reporting.",
                        "Built dynamic dashboards using maps, trend lines, filters, and slicers to analyse conflicts by year, region, and intensity."
                      ],
                      tags: ["Power BI", "Data Modelling", "DAX", "Visualization"]
                    },
                    {
                      title: "Sales Analysis Dashboard – Excel",
                      date: "Apr 2025",
                      items: [
                        "Built to analyze Flipkart's sales performance and highlight trends, profitability, and segment-wise insights.",
                        "Developed an interactive Excel dashboard using pivot tables, slicers, and advanced charts to visualize KPIs across 2019–2020.",
                        "Delivered a clear analytical tool revealing top-performing categories, high-profit regions, and monthly sales patterns."
                      ],
                      tags: ["MS Excel", "Pivot Tables", "Charts", "Data Analysis"]
                    },
                    {
                      title: "Flipkart Sales Analysis – Python Data Analytics",
                      date: "Apr 2025",
                      items: [
                        "Designed to study Flipkart's sales data and uncover patterns in trends, category performance, and customer behavior.",
                        "Processed and analyzed the dataset using Python (Pandas, Matplotlib, Seaborn) with data cleaning and preprocessing.",
                        "Produced a detailed analytical report highlighting sales trends, profitable regions, and segment-level purchasing patterns."
                      ],
                      tags: ["Python", "Pandas", "Matplotlib", "Seaborn"]
                    }
                  ].map((p, i) => (
                    <div key={i} className="rounded-2xl p-6 border border-white/10 bg-white/[0.03] transition-all hover:bg-white/[0.05]">
                      <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                        <h3 className="font-bold text-gray-100 text-lg">{p.title}</h3>
                        <span className="text-[10px] text-blue-400 font-mono tracking-wider bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">{p.date}</span>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside mb-4 ml-1">
                        {p.items.map((item, idx) => <li key={idx} className="leading-relaxed">{item}</li>)}
                      </ul>
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {p.tags.map(t => (
                          <span key={t} className="text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider bg-blue-500/5 text-blue-400/80 border border-blue-500/10">{t}</span>
                        ))}
                      </div>
                      <a href="https://github.com/kiranruvva23309" target="_blank" rel="noopener noreferrer" className="text-xs text-green-400/80 hover:text-green-300 flex items-center gap-1.5 transition-colors font-medium">
                        <ExternalLink size={12} /> View Source Code
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              {/* ───── Certificates ───── */}
              <section>
                <h2 className="flex items-center gap-3 text-blue-400 font-bold text-sm mb-6 uppercase tracking-[0.2em]">
                  <span className="w-8 h-[1px] bg-blue-500/50" /> Certificates
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Advanced Data Structure", issuer: "LPU", date: "Aug '25", link: "https://drive.google.com/file/d/1LSTadRkUE9YlF6sYRUIMWqZFUVHiemp5/view?usp=sharing", action: "View" },
                    { name: "Cloud Computing", issuer: "Swayam NPTEL", date: "Apr '25", link: "https://drive.google.com/file/d/1cHqajE5Yuhe5dazhCbhXNE-KOP2hMw69/view?usp=drive_link", action: "View" },
                    { name: "Computational Theory", issuer: "Infosys Springboard", date: "Aug '25", link: "https://drive.google.com/file/d/1Oq3dz53wUu_bitqt2jIvaBhGM4lkVKh-/view?usp=drive_link", action: "View" },
                    { name: "TCP/IP and Advanced Topics", issuer: "Coursera", date: "Nov '24", link: "https://drive.google.com/file/d/1ju5dgb7_sCaWst3cFNxRcKEbsFUT4Grv/view?usp=drive_link", action: "View" },
                    { name: "Packet Switching Networks", issuer: "Coursera", date: "Nov '24", link: "https://drive.google.com/file/d/1ju5dgb7_sCaWst3cFNxRcKEbsFUT4Grv/view?usp=drive_link", action: "View" },
                    { name: "Digital Systems", issuer: "Coursera", date: "Oct '24", link: "https://drive.google.com/file/d/1ju5dgb7_sCaWst3cFNxRcKEbsFUT4Grv/view?usp=drive_link", action: "View" },
                  ].map((c, i) => (
                    <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-sm text-gray-200 font-medium leading-tight group-hover:text-blue-400 transition-colors">{c.name}</p>
                        <ExternalLink size={12} className="text-gray-600 group-hover:text-blue-400 shrink-0 mt-0.5" />
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono">
                        <span>{c.issuer}</span>
                        <span>{c.date}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </section>

              {/* ───── Education ───── */}
              <section>
                <h2 className="flex items-center gap-3 text-blue-400 font-bold text-sm mb-6 uppercase tracking-[0.2em]">
                  <span className="w-8 h-[1px] bg-blue-500/50" /> Education
                </h2>
                <div className="space-y-3">
                  {[
                    { school: "Lovely Professional University", degree: "B.Tech – CSE | CGPA: 6.37", date: "Aug 23 – Present" },
                    { school: "Narayana Junior College", degree: "Intermediate | Percentage: 90.6", date: "Apr 21 – Mar 23" },
                    { school: "Narayana High School", degree: "Matriculation | Percentage: 99.67", date: "Apr 20 – Mar 21" }
                  ].map((e, i) => (
                    <div key={i} className="flex items-start justify-between p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                      <div>
                        <h3 className="font-bold text-gray-200 text-sm mb-1">{e.school}</h3>
                        <p className="text-xs text-gray-500">{e.degree}</p>
                      </div>
                      <span className="text-[10px] text-blue-400/80 font-mono shrink-0 ml-4 font-bold">{e.date}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ───── Achievements ───── */}
              <section className="pb-8">
                <h2 className="flex items-center gap-3 text-blue-400 font-bold text-sm mb-6 uppercase tracking-[0.2em]">
                  <span className="w-8 h-[1px] bg-blue-500/50" /> Achievements
                </h2>
                <ul className="space-y-4 text-sm text-gray-400">
                  {[
                    { text: "Solved 70+ coding problems on LeetCode to strengthen DSA and problem-solving skills.", date: "Mar 2025" },
                    { text: "Attended technical seminars on system design and data science provided by industry experts.", date: "Oct 2025" },
                    { text: "Participated in the Cyber Sleuth workshop on ethical hacking concepts.", date: "Sep 2023" }
                  ].map((a, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 shrink-0 transition-colors" />
                      <div className="flex justify-between items-start w-full gap-4">
                        <span className="leading-relaxed">{a.text}</span>
                        <span className="text-blue-400/60 text-[10px] font-mono shrink-0 mt-1">{a.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CVModal;
