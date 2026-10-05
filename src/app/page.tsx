import React from 'react';
import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      title: "Personalized Emotion-Based AI Chatbot",
      category: "4th Year Research Project (Group)",
      description: "A multimodal AI system using DistilBERT transformers to detect user emotions from text and classify song features for customized music recommendations.",
      tech: ["Python", "DistilBERT", "DigitalOcean"],
      link: "https://github.com/PramodaKAPS" 
    },
    {
      title: "Enterprise Payroll System",
      category: "Full Stack Development",
      description: "A comprehensive payroll management system handling employee salaries, automated calculations, and secure data processing.",
      tech: ["Next.js", "TypeScript", "Full Stack"],
      link: "https://github.com/pramodakaps" 
    },
    {
      title: "Enterprise Employee Directory",
      category: "Full Stack Development",
      description: "A secure web platform for efficient management and search of corporate employee data, featuring organizational hierarchies and contact management.",
      tech: ["React.js", "Node.js", "MySQL"],
      link: "https://github.com/PramodaKAPS" 
    },
    {
      title: "ETAS Data Loader",
      category: "2nd Year Hardware Project (Group)",
      description: "Designed an online tool facilitating secure data import into ETAS test automation with robust validation and modular architecture.",
      tech: ["React.js", "Node.js", "MongoDB"],
      link: "https://github.com/PramodaKAPS"
    },
    {
      title: "YCS Physics LMS",
      category: "Web Platform",
      description: "A production-grade Learning Management System built for physics education, featuring continuous deployment and scalable cloud hosting.",
      tech: ["Next.js", "Node.js", "DigitalOcean"],
      link: "https://ycsphysics.lk"
    },
    {
      title: "20Minutes LMS",
      category: "Web Platform",
      description: "An interactive educational platform designed with automated workflow deployments to ensure high availability and seamless user access.",
      tech: ["Next.js", "Vercel", "Tailwind CSS"],
      link: "https://20minutes.lk"
    },
    {
      title: "ESIP Web Portal",
      category: "Web Application",
      description: "Developed and hosted a responsive web application, managing the end-to-end IT lifecycle from local development to cloud production.",
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
      link: "https://esip.lk"
    },
    {
      title: "Chemistry Education Portal",
      category: "Web Infrastructure",
      description: "An educational platform where I managed the complete end-to-end DNS configuration, server infrastructure, and domain deployment.",
      tech: ["DNS Management", "Server Config", "Web Hosting"],
      link: "https://pramodachemistry.edu.lk"
    },
    {
      title: "Smart Multi-Functional Massaging Chair",
      category: "1st Year Hardware Project (Group)",
      description: "An engineered smart office chair integrating automated lumbar support, heating/cooling systems, and adjustable mechanics for ergonomic health.",
      tech: ["Proteus", "C", "Microcontrollers"],
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-blue-500/30 overflow-hidden">
      
      {/* Hero Section */}
      <section className="px-6 md:px-24 py-24 md:py-36 max-w-7xl mx-auto flex flex-col justify-center relative">
        {/* Abstract Background Blurs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-12 h-[1px] bg-blue-500"></span>
          <p className="text-blue-400 font-medium tracking-widest uppercase text-xs sm:text-sm">
            Systems & Software Engineer
          </p>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 text-white leading-tight">
          Hi, I am <br className="hidden md:block"/>
          <span className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 text-transparent bg-clip-text">Pramoda.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12 font-light">
          An IT Executive and BSc (Hons) graduate specializing in cloud infrastructure, 
          AI applications, and full-stack web solutions. I build scalable, production-ready systems.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link 
            href="https://github.com/PramodaKAPS" 
            target="_blank"
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
          >
            GitHub (Main)
          </Link>
          <Link 
            href="https://github.com/kapspramoda" 
            target="_blank"
            className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-medium rounded-full hover:bg-zinc-800 hover:border-zinc-700 transition-all"
          >
            GitHub (Projects)
          </Link>
          <a 
            href="/Pramoda_Ketipearachchi_CV.pdf" 
            target="_blank"
            className="px-8 py-4 bg-blue-600/10 border border-blue-500/30 text-blue-400 font-medium rounded-full hover:bg-blue-600/20 hover:border-blue-500/50 transition-all"
          >
            Download Academic CV
          </a>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="px-6 md:px-24 py-24 border-t border-white/5 relative bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Featured Projects
              </h2>
              <p className="text-zinc-500 mt-4 max-w-md font-light">
                A selection of my academic research, full-stack platforms, and enterprise solutions.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative rounded-3xl p-8 bg-zinc-900/30 border border-white/5 backdrop-blur-sm hover:-translate-y-2 hover:bg-zinc-900/60 hover:border-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-500 flex flex-col h-full"
              >
                <div className="flex-grow">
                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4 opacity-80">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold mb-4 text-zinc-100 group-hover:text-white transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-8 font-light leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 text-zinc-300 text-xs font-medium rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href={project.link}
                  target="_blank"
                  className="mt-auto pt-6 border-t border-white/5 text-sm font-semibold text-zinc-300 group-hover:text-blue-400 transition-colors inline-flex items-center w-full"
                >
                  View Project 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}