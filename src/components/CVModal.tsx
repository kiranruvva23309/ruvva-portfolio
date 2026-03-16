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
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl backdrop-blur-2xl"
            style={{ backgroundColor: "rgba(10, 15, 25, 0.55)", border: "1px solid rgba(255,255,255,0.15)", scrollbarWidth: "none", msOverflowStyle: "none", boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(59,130,246,0.08), inset 0 1px 0 rgba(255,255,255,0.05)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hide scrollbar for webkit */}
            <style>{`.cv-modal-body::-webkit-scrollbar { display: none; }`}</style>

            {/* Close Button - fixed top right */}
            <button
              onClick={onClose}
              className="fixed top-6 right-6 sm:absolute sm:top-4 sm:right-4 z-30 p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-gray-300 hover:text-white backdrop-blur-sm shadow-lg"
            >
              <X size={20} />
            </button>

            <div className="px-8 py-10 space-y-8">

              {/* ───── Header ───── */}
              <header className="text-center border-b border-white/10 pb-6">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Ruvva Kiran Chand</h1>
                <p className="text-sm text-gray-400 mb-4">
                  Computer Science Undergraduate&nbsp;|&nbsp;Python Developer&nbsp;|&nbsp;Data Analytics Enthusiast
                </p>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-blue-400">
                  <a href="https://linkedin.com/in/kiran-ruvva" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-300 transition-colors">
                    <Linkedin size={13} /> kiran-ruvva
                  </a>
                  <a href="https://github.com/kiranruvva23309" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-300 transition-colors">
                    <Github size={13} /> kiranruvva23309
                  </a>
                  <a href="mailto:kiranruvva2004@gmail.com" className="flex items-center gap-1 hover:text-blue-300 transition-colors">
                    <Mail size={13} /> kiranruvva2004@gmail.com
                  </a>
                  <span className="flex items-center gap-1 text-blue-400">
                    <Phone size={13} /> +91-7981362012
                  </span>
                </div>
              </header>

              {/* ───── Technical Skills ───── */}
              <section>
                <h2 className="flex items-center gap-2 text-blue-400 font-semibold text-base mb-4 border-l-2 border-blue-500 pl-3 uppercase tracking-wider">
                  <span className="text-lg">⚡</span> Skills
                </h2>
                <div className="space-y-2 text-sm">
                  <p><span className="font-bold text-white">Languages:</span> <span className="text-gray-300">Python, Java and SQL</span></p>
                  <p><span className="font-bold text-white">Data Science Libraries & Web Technologies:</span> <span className="text-gray-300">NumPy, Pandas, Matplotlib, Scikit-learn, Seaborn, HTML and CSS</span></p>
                  <p><span className="font-bold text-white">Tools/Platforms:</span> <span className="text-gray-300">MS Excel & Power BI, Jupyter Notebook</span></p>
                  <p><span className="font-bold text-white">Soft Skills:</span> <span className="text-gray-300">Teamwork and Collaboration, Adaptability, Analytical Thinking</span></p>
                </div>
              </section>

              {/* ───── Projects ───── */}
              <section>
                <h2 className="flex items-center gap-2 text-blue-400 font-semibold text-base mb-4 border-l-2 border-blue-500 pl-3 uppercase tracking-wider">
                  <span className="text-lg">📁</span> Projects
                </h2>
                <div className="space-y-4">

                  {/* Project 1 */}
                  <div className="rounded-xl p-5" style={{ border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.02)" }}>
                    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                      <h3 className="font-bold text-white">Smart Parcel Tracker – Real-Time Delivery & Locker System</h3>
                      <span className="text-xs text-blue-400 font-mono shrink-0 flex items-center gap-1"><Calendar size={12}/> Jul 2025</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-gray-400 list-disc list-inside mb-3">
                      <li>Created a parcel management system enabling customers, delivery agents, and admins to securely track shipments and access lockers in real time.</li>
                      <li>Developed using arrays, linked lists, queues, and Hash Tables with login authentication, OTP-based locker access, and role-specific dashboards.</li>
                      <li>Delivered a functional multi-user system improving parcel handling efficiency and delivery transparency.</li>
                    </ul>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {["Python", "Data Structures", "Hash Tables", "OTP Auth"].map(t => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ border: "1px solid rgba(59,130,246,0.3)", color: "#60a5fa", backgroundColor: "rgba(59,130,246,0.08)" }}>{t}</span>
                      ))}
                    </div>
                    <a href="https://github.com/kiranruvva23309" target="_blank" rel="noopener noreferrer" className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1 transition-colors">
                      <ExternalLink size={12} /> View on GitHub
                    </a>
                  </div>

                  {/* Project 2 */}
                  <div className="rounded-xl p-5" style={{ border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.02)" }}>
                    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                      <h3 className="font-bold text-white">Global Armed Conflict Analysis – Power BI Dashboard</h3>
                      <span className="text-xs text-blue-400 font-mono shrink-0 flex items-center gap-1"><Calendar size={12}/> Dec 2025</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-gray-400 list-disc list-inside mb-3">
                      <li>Created a Power BI dashboard to analyse global armed conflict data through interactive visualizations.</li>
                      <li>Performed data cleaning, modelling, and transformation for structured reporting.</li>
                      <li>Built dynamic dashboards using maps, trend lines, filters, and slicers to analyse conflicts by year, region, and intensity.</li>
                    </ul>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {["Power BI", "Data Modelling", "DAX", "Visualization"].map(t => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ border: "1px solid rgba(59,130,246,0.3)", color: "#60a5fa", backgroundColor: "rgba(59,130,246,0.08)" }}>{t}</span>
                      ))}
                    </div>
                    <a href="https://github.com/kiranruvva23309" target="_blank" rel="noopener noreferrer" className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1 transition-colors">
                      <ExternalLink size={12} /> View on GitHub
                    </a>
                  </div>

                  {/* Project 3 */}
                  <div className="rounded-xl p-5" style={{ border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.02)" }}>
                    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                      <h3 className="font-bold text-white">Sales Analysis Dashboard – Excel</h3>
                      <span className="text-xs text-blue-400 font-mono shrink-0 flex items-center gap-1"><Calendar size={12}/> Apr 2025</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-gray-400 list-disc list-inside mb-3">
                      <li>Built to analyze Flipkart's sales performance and highlight trends, profitability, and segment-wise insights.</li>
                      <li>Developed an interactive Excel dashboard using pivot tables, slicers, and advanced charts to visualize KPIs across 2019–2020.</li>
                      <li>Delivered a clear analytical tool revealing top-performing categories, high-profit regions, and monthly sales patterns.</li>
                    </ul>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {["MS Excel", "Pivot Tables", "Charts", "Data Analysis"].map(t => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ border: "1px solid rgba(59,130,246,0.3)", color: "#60a5fa", backgroundColor: "rgba(59,130,246,0.08)" }}>{t}</span>
                      ))}
                    </div>
                    <a href="https://github.com/kiranruvva23309" target="_blank" rel="noopener noreferrer" className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1 transition-colors">
                      <ExternalLink size={12} /> View on GitHub
                    </a>
                  </div>

                  {/* Project 4 */}
                  <div className="rounded-xl p-5" style={{ border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.02)" }}>
                    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                      <h3 className="font-bold text-white">Flipkart Sales Analysis – Python Data Analytics</h3>
                      <span className="text-xs text-blue-400 font-mono shrink-0 flex items-center gap-1"><Calendar size={12}/> Apr 2025</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-gray-400 list-disc list-inside mb-3">
                      <li>Designed to study Flipkart's sales data and uncover patterns in trends, category performance, and customer behavior.</li>
                      <li>Processed and analyzed the dataset using Python (Pandas, Matplotlib, Seaborn) with data cleaning and preprocessing.</li>
                      <li>Produced a detailed analytical report highlighting sales trends, profitable regions, and segment-level purchasing patterns.</li>
                    </ul>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {["Python", "Pandas", "Matplotlib", "Seaborn"].map(t => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ border: "1px solid rgba(59,130,246,0.3)", color: "#60a5fa", backgroundColor: "rgba(59,130,246,0.08)" }}>{t}</span>
                      ))}
                    </div>
                    <a href="https://github.com/kiranruvva23309" target="_blank" rel="noopener noreferrer" className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1 transition-colors">
                      <ExternalLink size={12} /> View on GitHub
                    </a>
                  </div>

                </div>
              </section>

              {/* ───── Certificates ───── */}
              <section>
                <h2 className="flex items-center gap-2 text-blue-400 font-semibold text-base mb-4 border-l-2 border-blue-500 pl-3 uppercase tracking-wider">
                  <span className="text-lg">📜</span> Certificates
                </h2>
                <div className="space-y-2">
                  {[
                    { name: "Advanced Data Structure", issuer: "LPU", date: "Aug '25", link: "https://drive.google.com/file/d/1LSTadRkUE9YlF6sYRUIMWqZFUVHiemp5/view?usp=sharing", action: "View" },
                    { name: "Cloud Computing", issuer: "Swayam NPTEL", date: "Apr '25", link: "https://drive.google.com/file/d/1cHqajE5Yuhe5dazhCbhXNE-KOP2hMw69/view?usp=drive_link", action: "View" },
                    { name: "Computational Theory", issuer: "Infosys Springboard", date: "Aug '25", link: "https://drive.google.com/file/d/1Oq3dz53wUu_bitqt2jIvaBhGM4lkVKh-/view?usp=drive_link", action: "View" },
                    { name: "TCP/IP and Advanced Topics", issuer: "Coursera", date: "Nov '24", link: "https://drive.google.com/file/d/1ju5dgb7_sCaWst3cFNxRcKEbsFUT4Grv/view?usp=drive_link", action: "View" },
                    { name: "Packet Switching Networks and Algorithms", issuer: "Coursera", date: "Nov '24", link: "https://drive.google.com/file/d/1ju5dgb7_sCaWst3cFNxRcKEbsFUT4Grv/view?usp=drive_link", action: "View" },
                    { name: "Digital Systems: From Logic Gates to Processors", issuer: "Coursera", date: "Oct '24", link: "https://drive.google.com/file/d/1ju5dgb7_sCaWst3cFNxRcKEbsFUT4Grv/view?usp=drive_link", action: "View" },
                    { name: "Peer-to-Peer Protocols and Local Area Networks", issuer: "Coursera", date: "Oct '24", link: "https://drive.google.com/file/d/1ju5dgb7_sCaWst3cFNxRcKEbsFUT4Grv/view?usp=drive_link", action: "View" },
                    { name: "Fundamentals of Network Communication", issuer: "Coursera", date: "Oct '24", link: "https://drive.google.com/file/d/1ju5dgb7_sCaWst3cFNxRcKEbsFUT4Grv/view?usp=drive_link", action: "View" },
                    { name: "The Bits and Bytes of Computer Networking", issuer: "Google (Coursera)", date: "Sep '24", link: "https://drive.google.com/file/d/1ju5dgb7_sCaWst3cFNxRcKEbsFUT4Grv/view?usp=drive_link", action: "View" },
                  ].map((c, i) => (
                    <div key={i} className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-white/[0.03] transition-colors" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
                      <p className="text-sm text-gray-300">
                        {c.name} <span className="text-gray-500">–</span> <span className="text-gray-500">{c.issuer}</span>
                      </p>
                      <div className="flex items-center gap-3 shrink-0 ml-4">
                        <span className="text-xs text-blue-400 font-mono">{c.date}</span>
                        <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1 rounded-md font-medium transition-colors" style={{ border: "1px solid rgba(59,130,246,0.4)", color: "#60a5fa" }}>
                          {c.action}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ───── Education ───── */}
              <section>
                <h2 className="flex items-center gap-2 text-blue-400 font-semibold text-base mb-4 border-l-2 border-blue-500 pl-3 uppercase tracking-wider">
                  <span className="text-lg">🎓</span> Education
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start justify-between py-3 px-4 rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.02)" }}>
                    <div>
                      <h3 className="font-bold text-white">Lovely Professional University</h3>
                      <p className="text-sm text-gray-400">B.Tech – Computer Science & Engineering | CGPA: 6.37</p>
                    </div>
                    <span className="text-xs text-blue-400 font-mono shrink-0 ml-4">Aug '23 – Present</span>
                  </div>
                  <div className="flex items-start justify-between py-3 px-4 rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.02)" }}>
                    <div>
                      <h3 className="font-bold text-white">Narayana Junior College</h3>
                      <p className="text-sm text-gray-400">Intermediate | Percentage: 90.6%</p>
                    </div>
                    <span className="text-xs text-blue-400 font-mono shrink-0 ml-4">Apr '21 – Mar '23</span>
                  </div>
                  <div className="flex items-start justify-between py-3 px-4 rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.02)" }}>
                    <div>
                      <h3 className="font-bold text-white">Narayana High School</h3>
                      <p className="text-sm text-gray-400">Matriculation | Percentage: 99.67%</p>
                    </div>
                    <span className="text-xs text-blue-400 font-mono shrink-0 ml-4">Apr '20 – Mar '21</span>
                  </div>
                </div>
              </section>

              {/* ───── Achievements ───── */}
              <section className="pb-4">
                <h2 className="flex items-center gap-2 text-blue-400 font-semibold text-base mb-4 border-l-2 border-blue-500 pl-3 uppercase tracking-wider">
                  <span className="text-lg">🏆</span> Achievements
                </h2>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <div className="flex justify-between items-start w-full gap-3">
                      <span>Solved 70+ coding problems on LeetCode to strengthen DSA and problem-solving skills.</span>
                      <span className="text-blue-400 text-xs font-mono shrink-0">Mar 2025</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <div className="flex justify-between items-start w-full gap-3">
                      <span>Attended technical seminars on system design and data science provided by industry experts on campus.</span>
                      <span className="text-blue-400 text-xs font-mono shrink-0">Oct 2025</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <div className="flex justify-between items-start w-full gap-3">
                      <span>Participated in the Cyber Sleuth workshop on ethical hacking concepts.</span>
                      <span className="text-blue-400 text-xs font-mono shrink-0">Sep 2023</span>
                    </div>
                  </li>
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
