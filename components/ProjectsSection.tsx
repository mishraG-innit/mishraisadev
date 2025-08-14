
'use client';

import { useState } from 'react';
import { Code, Database, Bot, ExternalLink, Calendar, Cpu } from 'lucide-react';

const projects = [
  {
    name: "UnLocker",
    description: "Course unlocker (100k+ students) // sold ✓",
    period: "2019-2024",
    status: "sold",
    fullDescription: "A comprehensive course unlocker platform that served over 100,000 engineering students. Built with scalable architecture to handle high traffic and automated course access systems. Successfully sold after 5 years of operation.",
    tech: ["Node.js", "MongoDB", "Express", "Web Scraping", "Payment Gateway"]
  },
  {
    name: "UnBlur Services",
    description: "Webscrapping tool for students // sold ✓",
    period: "2019-2023",
    status: "sold",
    fullDescription: "Advanced web scraping tool designed specifically for students to access educational content. Featured intelligent parsing algorithms and automated content extraction. Successfully monetized and sold.",
    tech: ["Python", "BeautifulSoup", "Selenium", "API Development", "Database Design"]
  },
  {
    name: "AI Student Tool",
    description: "Next-gen productivity app // ⋯ building ⋯",
    period: "2025 - ...",
    status: "in_progress",
    fullDescription: "Revolutionary AI-powered productivity application designed for the new generation of students. Integrating cutting-edge machine learning algorithms to enhance study efficiency and academic performance.",
    tech: ["AI/ML", "React", "Node.js", "Python", "TensorFlow"]
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "sold":
        return <Database className="w-4 h-4 text-green-500" />;
      case "in_progress":
        return <Cpu className="w-4 h-4 text-yellow-500" />;
      default:
        return <Code className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div className="relative">
      {/* Programming-style background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-2 right-2 text-blue-500 font-mono text-xs">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="mb-1">
              {i % 4 === 0 ? 'class Portfolio {' : 
               i % 4 === 1 ? '  render() {' : 
               i % 4 === 2 ? '    return projects;' : 
               '  }'}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <Code className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg sm:text-xl font-bold font-mono text-primary">~/projects/</h2>
        </div>

        <div className="ml-3 sm:ml-4 md:ml-6 space-y-2 sm:space-y-3">
          <div className="text-muted-foreground font-mono text-xs sm:text-sm mb-3 sm:mb-4">
            const projects = [
          </div>

          <div className="space-y-1">
            {projects.map((project, i) => (
              <button
                key={i}
                onClick={() => openModal(project)}
                className="w-full text-left flex items-center gap-2 p-2 sm:p-3 hover:bg-muted/20 rounded transition-colors group"
              >
                {getStatusIcon(project.status)}
                <div className="flex-1 min-w-0">
                  <span className="text-primary font-mono font-semibold group-hover:text-green-500 transition-colors text-sm sm:text-base">
                    {project.name.replace(/\s+/g, '_').toLowerCase()}.project
                  </span>
                </div>
                <span className="text-muted-foreground font-mono text-xs hover:text-primary transition-colors">
                  →
                </span>
              </button>
            ))}
          </div>

          <div className="text-muted-foreground font-mono text-xs sm:text-sm mt-3 sm:mt-4">
            ];
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-background border rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  {getStatusIcon(selectedProject.status)}
                  <h3 className="text-lg sm:text-xl font-bold font-mono text-primary">
                    {selectedProject.name}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-5 h-5 rotate-45" />
                </button>
              </div>

              <p className="text-muted-foreground font-mono text-sm mb-4">
                {selectedProject.fullDescription}
              </p>

              <div className="mb-4">
                <h4 className="font-mono font-semibold mb-2 text-sm">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-muted/20 text-primary rounded text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {selectedProject.period}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
