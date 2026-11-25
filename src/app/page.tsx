import React from 'react';
import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      title: "Personalized Emotion-Based AI Chatbot",
      category: "4th Year Research Project (Group)",
      description: "A multimodal AI system using DistilBERT transformers to detect user emotions from text and classify song features for customized music recommendations.",
      tech: ["Python", "DistilBERT", "DigitalOcean"],
      link: "https://github.com/PramodaKAPS",
      type: "Research"
    },
    {
      title: "Enterprise Payroll System",
      category: "Full Stack Development",
      description: "A comprehensive payroll management system handling employee salaries, automated calculations, and secure data processing.",
      tech: ["Next.js", "TypeScript", "Full Stack"],
      link: "https://github.com/kapspramoda",
      type: "Repository"
    },
    {
      title: "Enterprise Employee Directory",
      category: "Full Stack Development",
      description: "A secure web platform for efficient management and search of corporate employee data, featuring organizational hierarchies and contact management.",
      tech: ["React.js", "Node.js", "MySQL"],
      link: "https://github.com/PramodaKAPS",
      type: "Repository"
    },
    {
      title: "ETAS Data Loader",
      category: "2nd Year Industry Project (Group)",
      description: "Designed an online tool facilitating secure data import into ETAS test automation with robust validation and modular architecture.",
      tech: ["React.js", "Node.js", "MongoDB"],
      link: "https://github.com/PramodaKAPS",
      type: "Repository"
    },
    {
      title: "YCS Physics LMS",
      category: "Web Platform",
      description: "A production-grade Learning Management System built for physics education, featuring continuous deployment and scalable cloud hosting.",
      tech: ["Next.js", "Node.js", "DigitalOcean"],
      link: "https://ycsphysics.lk",
      type: "Live Site"
    },
    {
      title: "20Minutes LMS",
      category: "Web Platform",
      description: "An interactive educational platform designed with automated workflow deployments to ensure high availability and seamless user access.",
      tech: ["Next.js", "Vercel", "Tailwind CSS"],
      link: "https://20minutes.lk",
      type: "Live Site"
    },
    {
      title: "ESIP Web Portal",
      category: "Web Application",
      description: "Developed and hosted a responsive web application, managing the end-to-end IT lifecycle from local development to cloud production.",
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
      link: "https://www.esip.lk",
      type: "Live Site"
    },
    {
      title: "Chemistry Education Portal",
      category: "Web Infrastructure",
      description: "An educational platform where I managed the complete end-to-end DNS configuration, server infrastructure, and domain deployment.",
      tech: ["DNS Management", "Server Config", "Web Hosting"],
      link: "https://pramodachemistry.edu.lk",
      type: "Live Site"
    },
    {
      title: "Smart Multi-Functional Massaging Chair",
      category: "1st Year Hardware Project (Group)",
      description: "An engineered smart office chair integrating automated lumbar support, heating/cooling systems, and adjustable mechanics for ergonomic health.",
      tech: ["Proteus", "C", "Microcontrollers"],
      link: null,
      type: "Hardware Prototype"
    }
  ];

  const experience = [
    {
      role: "Founder & IT Executive",
      org: "ESIP Innovations (Private) Limited",
      orgLink: "https://www.esip.lk",
      period: "2025 – Present",
      summary: "Leading full-stack product architecture, LMS platforms, enterprise payroll systems, and DigitalOcean cloud infrastructure (Nginx, PM2, SSL)."
    },
    {
      role: "Full Stack Software Engineer Intern",
      org: "LK Domain Registry",
      orgLink: null,
      period: "Jan 2024 – Jun 2024",
      summary: "Developed and maintained user-centric web applications and internal IT tools using React.js, Node.js, and MySQL in agile teams."
    },
    {
      role: "BSc (Hons) in Information Technology",
      org: "University of Moratuwa",
      orgLink: null,
      period: "2021 – 2025",
      summary: "Graduated with Second Class Lower Division. Final-year research focused on DistilBERT NLP and multimodal emotion classification."
    }
  ];

  const skillGroups = [
    { label: "Frontend & Mobile", items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"] },
    { label: "Backend & Data", items: ["Node.js", "Python", "MySQL", "MongoDB"] },
    { label: "Cloud & DevOps", items: ["DigitalOcean", "Nginx", "PM2", "Vercel", "GitHub Actions"] },
    { label: "AI & Hardware", items: ["DistilBERT", "NLP", "C", "Microcontrollers"] }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-blue-500/30 scroll-smooth">
      
      {/* Sticky Glass Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050505]/75 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <a href="#" className="text-white font-bold tracking-tight text-lg flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            pramoda<span className="text-zinc-500 font-normal">.esip.lk</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Tech Stack</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <a
            href="/Pramoda_Ketipearachchi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold bg-white text-black rounded-full hover:bg-zinc-200 transition-colors"
          >
            Academic CV
          </a>
        </div>
      </header>

      <main className="overflow-hidden">
        {/* Hero Section with Subtle Grid Background */}
        <section className="relative px-6 md:px-12 pt-24 pb-28 md:pt-32 md:pb-36 max-w-7xl mx-auto">
          {/* Background Grid & Glows */}
          <div
            className="absolute inset-0 -z-20 opacity-[0.14] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #3f3f46 1px, transparent 1px), linear-gradient(to bottom, #3f3f46 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse at top, black 35%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse at top, black 35%, transparent 75%)",
            }}
          />
          <div className="absolute -top-24 left-1/4 w-[28rem] h-[28rem] bg-blue-600/15 rounded-full blur-[130px] -z-10 pointer-events-none" />
          <div className="absolute top-20 right-1/4 w-[22rem] h-[22rem] bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

          {/* Clickable Status Pill */}
          <Link
            href="https://www.esip.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.06] text-xs text-zinc-300 transition-all mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Systems & Software Engineer · Founder @ <span className="text-blue-400 font-medium">ESIP Innovations</span> ↗
          </Link>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-[1.05] mb-8">
            Building scalable <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-zinc-200 text-transparent bg-clip-text">
              cloud & AI systems.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10 font-light">
            Hi, I&apos;m <span className="text-zinc-100 font-medium">Pramoda Katipearachchi</span> — a BSc (Hons) IT graduate from the University of Moratuwa specializing in full-stack platforms, cloud infrastructure, and applied AI.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <a
              href="/Pramoda_Ketipearachchi_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all inline-flex items-center gap-2 text-sm"
            >
              Download Academic CV
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
              </svg>
            </a>
            <Link
              href="https://github.com/PramodaKAPS"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-zinc-900/80 border border-white/10 text-white font-medium rounded-full hover:bg-zinc-800 hover:border-white/20 transition-all text-sm"
            >
              GitHub (Main)
            </Link>
            <Link
              href="https://github.com/kapspramoda"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-zinc-900/80 border border-white/10 text-white font-medium rounded-full hover:bg-zinc-800 hover:border-white/20 transition-all text-sm"
            >
              GitHub (Projects)
            </Link>
            <a
              href="#contact"
              className="px-7 py-3.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 font-medium rounded-full hover:bg-blue-500/20 transition-all text-sm"
            >
              Get in Touch
            </a>
          </div>

          {/* Bento Quick Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/5">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <p className="text-2xl font-bold text-white tracking-tight">BSc (Hons)</p>
              <p className="text-xs text-zinc-500 mt-1">University of Moratuwa</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <p className="text-2xl font-bold text-white tracking-tight">9+</p>
              <p className="text-xs text-zinc-500 mt-1">Production & Research Systems</p>
            </div>
            <Link
              href="https://www.esip.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-colors group"
            >
              <p className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                Founder ↗
              </p>
              <p className="text-xs text-zinc-500 mt-1">ESIP Innovations (Pvt) Ltd</p>
            </Link>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <p className="text-2xl font-bold text-white tracking-tight">Full Stack</p>
              <p className="text-xs text-zinc-500 mt-1">Next.js · AI · Cloud Ops</p>
            </div>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" className="px-6 md:px-12 py-24 border-t border-white/5 bg-[#080808]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">Background</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Experience & Education</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {experience.map((item, i) => (
                <div
                  key={i}
                  className="p-7 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/15 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-5">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                    {item.orgLink ? (
                      <Link
                        href={item.orgLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 font-medium mb-4 transition-colors"
                      >
                        {item.org} ↗
                      </Link>
                    ) : (
                      <p className="text-sm text-zinc-400 font-medium mb-4">{item.org}</p>
                    )}
                    <p className="text-sm text-zinc-400 font-light leading-relaxed">{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Bento Section */}
        <section id="skills" className="px-6 md:px-12 py-20 border-t border-white/5 bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">Capabilities</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Core Technologies</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {skillGroups.map((group, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-zinc-900/25 border border-white/5">
                  <h3 className="text-sm font-semibold text-zinc-200 mb-4">{group.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 bg-white/[0.04] border border-white/10 text-zinc-300 text-xs rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Gallery Section */}
        <section id="projects" className="px-6 md:px-12 py-24 border-t border-white/5 bg-[#080808]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">Selected Work</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  Featured Projects
                </h2>
                <p className="text-zinc-500 mt-4 max-w-md font-light">
                  Academic AI research, production LMS platforms, and enterprise web systems.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl p-8 bg-zinc-900/30 border border-white/5 hover:-translate-y-1.5 hover:bg-zinc-900/60 hover:border-blue-500/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex-grow">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <p className="text-[11px] font-semibold text-blue-400 uppercase tracking-widest">
                        {project.category}
                      </p>
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/5 shrink-0">
                        {project.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-white transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 mb-6 font-light leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-black/50 border border-white/10 text-zinc-300 text-xs font-medium rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.link ? (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto pt-5 border-t border-white/5 text-sm font-semibold text-zinc-300 group-hover:text-blue-400 transition-colors inline-flex items-center justify-between w-full"
                    >
                      <span>View Project</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  ) : (
                    <div className="mt-auto pt-5 border-t border-white/5 text-xs font-medium text-zinc-500">
                      Academic Hardware Build (Offline Prototype)
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Footer Section */}
        <section id="contact" className="px-6 md:px-12 py-24 border-t border-white/5 bg-[#050505]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Let&apos;s connect.
            </h2>
            <p className="text-zinc-400 font-light max-w-xl mx-auto mb-10 leading-relaxed">
              Open to academic research collaborations, MSc opportunities, and enterprise software engineering projects.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <a
                href="mailto:pramodakaps@gmail.com"
                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors text-sm"
              >
                pramodakaps@gmail.com
              </a>
              <Link
                href="https://www.linkedin.com/in/pramoda-katipearachchi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 bg-zinc-900 border border-white/10 text-white font-medium rounded-full hover:bg-zinc-800 transition-colors text-sm"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.esip.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 bg-zinc-900 border border-white/10 text-white font-medium rounded-full hover:bg-zinc-800 transition-colors text-sm"
              >
                www.esip.lk ↗
              </Link>
            </div>

            <footer className="pt-8 border-t border-white/5 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p>© {new Date().getFullYear()} Pramoda Katipearachchi. All rights reserved.</p>
              <p>Built with Next.js & Tailwind CSS · Hosted on DigitalOcean</p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}