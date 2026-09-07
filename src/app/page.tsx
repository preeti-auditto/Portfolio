"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import { useRef } from "react";
import InteractivePortrait from "../components/InteractivePortrait";
import DataElements from "../components/DataElements";
import DataNetwork from "../components/DataNetwork";
import MetricsBackground from "../components/MetricsBackground";
import CodeStream from "../components/CodeStream";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="min-h-screen selection:bg-white/20">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight">Preeti Auditto.</div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a
            href="/preetiaudittoresume1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-sm font-medium"
          >
            View Resume
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <DataElements />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black pointer-events-none z-10" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-gray-400 uppercase tracking-[0.2em] text-sm font-medium mb-4">
              HI, I'M PREETI.
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
              DATA
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                ANALYST.
              </span>
            </h1>
            <p className="text-gray-400 max-w-md text-lg mb-8 leading-relaxed">
              Turning raw data into meaningful insights through data analysis, visualization, intelligent reporting, and data-driven decision-making.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                View My Work
                <span className="w-4 h-4 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              >
                Contact Me
                <span className="w-4 h-4 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>
          <div className="hidden lg:block w-full">
            <InteractivePortrait />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-black relative z-10 overflow-hidden">
        <DataNetwork />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Hello, I'm
                <br />
                Preeti Auditto.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                Aspiring Data Analyst with hands-on experience in SQL, Python, data analysis, and dashboard development. Skilled in data cleaning, exploratory data analysis (EDA), KPI tracking, and data visualization to transform raw data into actionable insights, with foundational knowledge of machine learning and predictive modeling.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                { title: "DATA ANALYST", skills: "Python • SQL • Analytics" },
                { title: "DATA VISUALIZATION", skills: "Dashboards • KPIs • Reporting" },
                { title: "FOUNDATIONAL ML", skills: "Predictive Modeling • Feature Engineering" },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="p-6 rounded-2xl glass border border-white/5 hover:border-white/20 transition-all cursor-pointer"
                >
                  <h3 className="font-bold text-xl mb-2">{card.title}</h3>
                  <p className="text-gray-400 text-sm">{card.skills}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative bg-black overflow-hidden">
        <MetricsBackground />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-16">Technologies I Work With</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Python", "SQL", "Excel", "Pandas", "NumPy", "Statistical Analysis", "EDA", 
              "Data Cleaning", "KPI Tracking", "Streamlit", "Matplotlib", "Power BI", 
              "Dashboard Design", "Data Storytelling", "Scikit-learn", "LightGBM", 
              "XGBoost", "Feature Engineering", "Predictive Modeling", "SHAP", 
              "Git", "GitHub", "Jupyter Notebook", "VS Code"
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-white/10 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-black relative z-10 overflow-hidden">
        <CodeStream />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-16">Experience<br />& Leadership</h2>
          <div className="space-y-8 max-w-3xl">
            {[
              {
                role: "DATA ASSOCIATE L1",
                company: "Infotact Solutions",
                date: "2026 | HYDERABAD",
                points: [
                  "Analyzed AI4I 2020 IoT data to identify machine failure trends and key sensor KPIs; built a LightGBM model with SHAP-based explanations.",
                  "Deployed PredictX, a live Streamlit dashboard for real-time KPI monitoring, failure alerts, and trend visualization, version-controlled via GitHub."
                ]
              },
              {
                role: "CO-OPERATIONAL HEAD",
                company: "Techie Hub, CSE, MRCE",
                date: "OCT 2025 | SECUNDERABAD",
                points: [
                  "Led data-driven planning and reporting for 500+ CSE students across major technical initiatives.",
                  "Coordinated mentorship programs and event execution with senior leadership and student teams."
                ]
              },
              {
                role: "TECHNICAL LEAD",
                company: "Techie Hub, CSE, MRCE",
                date: "AUG 2026 | SECUNDERABAD",
                points: [
                  "Lead the technical team, managing projects and coordinating development activities.",
                  "Mentor team members and drive technical projects and initiatives."
                ]
              }
            ].map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="p-8 rounded-3xl glass border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <div className="text-gray-400 mt-1">{exp.company}</div>
                  </div>
                  <div className="text-sm text-gray-500 mt-2 md:mt-0 uppercase tracking-widest">{exp.date}</div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-white/30">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-black relative z-10 overflow-hidden">
        <CodeStream />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-16">Selected<br />Projects.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Multiperspective Fraud Detection System",
                tech: "Python • SQL • Scikit-learn • XGBoost",
                desc: ["Analyzed e-commerce transaction data to identify fraud patterns and reporting KPIs.", "Delivered a comparative performance report highlighting model tradeoffs."]
              },
              {
                num: "02",
                title: "Contextual Predictive Maintenance",
                tech: "Python • SQL • LightGBM • SHAP • Streamlit",
                desc: ["Performed end-to-end data analysis on the AI4I 2020 industrial IoT dataset.", "Built and deployed PredictX, a live reporting dashboard for sensor KPI monitoring."]
              },
              {
                num: "03",
                title: "SmartCity — AI-Powered Waste Management",
                tech: "Python • REST APIs • IoT",
                desc: ["Developed an AI-powered waste classification system.", "Integrated frontend-backend REST APIs and built role-based dashboards."]
              }
            ].map((proj, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl glass border border-white/5 hover:border-white/20 transition-all flex flex-col h-full"
              >
                <div className="text-gray-500 font-mono mb-4 text-sm">PROJECT {proj.num}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white">{proj.title}</h3>
                <div className="text-xs font-medium text-gray-400 mb-6 uppercase tracking-wider">{proj.tech}</div>
                <ul className="space-y-3 text-sm text-gray-400 mb-8 flex-grow">
                  {proj.desc.map((d, i) => (
                    <li key={i}>• {d}</li>
                  ))}
                </ul>
                    <div className="flex gap-4 mt-6">
                      <a href="https://github.com/preeti-auditto" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium border border-white/10">
                        GitHub
                      </a>
                      <a href="#" className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium border border-white/10">
                        Link
                      </a>
                    </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Education & Achievements Section */}
      <section id="education" className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <h2 className="text-4xl font-bold mb-12">Education</h2>
            <div className="space-y-8">
              {[
                {
                  school: "Malla Reddy College of Engineering, Hyderabad",
                  degree: "B.Tech — Computer Science Engineering",
                  grade: "CGPA: 8.6/10",
                  date: "2023 – 2027"
                },
                {
                  school: "Kendriya Vidyalaya Bolarum, Secunderabad",
                  degree: "Class XII (CBSE)",
                  grade: "81%",
                  date: "2021 – 2023"
                },
                {
                  school: "Kendriya Vidyalaya Bolarum, Secunderabad",
                  degree: "Class X (CBSE)",
                  grade: "89%",
                  date: "2021"
                }
              ].map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l border-white/10">
                  <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[6.5px] top-2"></div>
                  <h3 className="text-xl font-bold mb-1">{edu.school}</h3>
                  <div className="text-gray-300 font-medium">{edu.degree}</div>
                  <div className="text-sm text-gray-500 mt-2">{edu.grade} • {edu.date}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievements */}
          <div id="achievements">
            <h2 className="text-4xl font-bold mb-12">Achievements<br />& Recognition</h2>
            <div className="space-y-4">
              {[
                "Finalist — Quantum Arena, 36 Hours Hackathon",
                "Winner — Technical Quiz, MRCE 2025",
                "Best Idea Award — AI Hackathon, IITxAIESEC Hyderabad 2024",
                "Hosted and anchored 15+ college-level technical events with 200–500+ students",
                "Helped grow Techie Hub CSE membership by 30%"
              ].map((achievement, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="p-5 rounded-2xl glass border border-white/5 flex items-start gap-4"
                >
                  <div className="text-white/50 mt-1">✨</div>
                  <div className="text-gray-300">{achievement}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6">
              LET'S BUILD
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
                SOMETHING MEANINGFUL.
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Open to opportunities, collaborations, internships, and conversations around data, analytics, and technology.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.linkedin.com/in/preeti-auditto-b1b13a308/" className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all">
              <span className="font-bold">in</span> LinkedIn
            </a>
            <a href="https://github.com/preeti-auditto" className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all">
              <span className="font-bold">GH</span> GitHub
            </a>
            <a href="mailto:preetiauditto2020@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-all">
              <span className="font-bold">@</span> Email Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
