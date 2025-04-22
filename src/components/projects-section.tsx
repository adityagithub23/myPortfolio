
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Healthcare AI Web App",
      description: "An AI-powered healthcare application that helps users identify potential health issues based on symptoms and provides preliminary recommendations.",
      tags: ["React", "TensorFlow.js", "Node.js", "Express", "MongoDB"],
      image: "bg-gradient-to-br from-blue-400 to-indigo-600",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "DBMS Project",
      description: "A comprehensive database management system for a retail business, featuring inventory tracking, sales analysis, and customer management.",
      tags: ["MySQL", "PHP", "Bootstrap", "jQuery", "Chart.js"],
      image: "bg-gradient-to-br from-emerald-400 to-teal-600",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "E-Commerce Frontend",
      description: "A modern, responsive e-commerce frontend with product listings, cart functionality, and user authentication.",
      tags: ["React", "Redux", "Tailwind CSS", "Firebase"],
      image: "bg-gradient-to-br from-orange-400 to-pink-600",
      github: "#"
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description: "A creative and interactive portfolio website showcasing my skills, projects, and experience.",
      tags: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
      image: "bg-gradient-to-br from-purple-400 to-indigo-600",
      github: "#",
      demo: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="projects" className="py-20 section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each represents a unique challenge and learning experience.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover="hover"
              className={`glass overflow-hidden rounded-xl card-hover ${
                activeProject === project.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setActiveProject(project.id === activeProject ? null : project.id)}
            >
              <div
                className={`h-48 w-full ${project.image} relative flex items-center justify-center`}
              >
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="flex gap-4">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github size={16} />
                        <span>Github</span>
                      </a>
                    </Button>
                  )}
                  
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 border-2 border-primary rounded-xl"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Interested in seeing more of my work?
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a
              href="https://github.com/adityakumar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={18} />
              <span>Visit My GitHub</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
