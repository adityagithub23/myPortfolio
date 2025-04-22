import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { 
  Code, 
  FileCode, 
  FileJson, 
  Code2, 
  ServerCog, 
  Database, 
  Github,
  Lightbulb,
  Users,
  Star,
  Clock,
  MessageSquare
} from "lucide-react";

interface SkillSphereProps {
  position: [number, number, number];
  name: string;
  color: string;
  icon: React.ReactNode;
  speed?: number;
}

export function SkillsSection() {
  const skills = [
    { name: "HTML5", color: "#E34F26", position: [-4, 2, 1] as [number, number, number], icon: <Code className="w-6 h-6" /> },
    { name: "CSS3", color: "#2965F1", position: [-2, 2, 1] as [number, number, number], icon: <FileCode className="w-6 h-6" /> },
    { name: "JavaScript", color: "#F7DF1E", position: [0, 2, 1] as [number, number, number], icon: <FileJson className="w-6 h-6" /> },
    { name: "React.js", color: "#61DBFB", position: [2, 2, 1] as [number, number, number], icon: <Code2 className="w-6 h-6" /> },
    { name: "Tailwind", color: "#38BDF8", position: [4, 2, 1] as [number, number, number], icon: <Code className="w-6 h-6" /> },
    
    { name: "Node.js", color: "#3C873A", position: [-3, 0, 0] as [number, number, number], icon: <ServerCog className="w-6 h-6" /> },
    { name: "Express.js", color: "#000000", position: [-1, 0, 0] as [number, number, number], icon: <ServerCog className="w-6 h-6" /> },
    { name: "MongoDB", color: "#4DB33D", position: [1, 0, 0] as [number, number, number], icon: <Database className="w-6 h-6" /> },
    { name: "SQL", color: "#F29111", position: [3, 0, 0] as [number, number, number], icon: <Database className="w-6 h-6" /> },
    
    { name: "Git", color: "#F05032", position: [-4, -2, 1] as [number, number, number], icon: <Code className="w-6 h-6" /> },
    { name: "GitHub", color: "#181717", position: [-2, -2, 1] as [number, number, number], icon: <Github className="w-6 h-6" /> },
    { name: "VS Code", color: "#007ACC", position: [0, -2, 1] as [number, number, number], icon: <Code className="w-6 h-6" /> },
    { name: "API Testing", color: "#FF6C37", position: [2, -2, 1] as [number, number, number], icon: <Code className="w-6 h-6" /> },

    { name: "Problem Solving", color: "#FF4F79", position: [-3, -4, 2] as [number, number, number], icon: <Lightbulb className="w-6 h-6" /> },
    { name: "Teamwork", color: "#4CAF50", position: [-1, -4, 2] as [number, number, number], icon: <Users className="w-6 h-6" /> },
    { name: "Leadership", color: "#FFC107", position: [1, -4, 2] as [number, number, number], icon: <Star className="w-6 h-6" /> },
    { name: "Time Management", color: "#2196F3", position: [3, -4, 2] as [number, number, number], icon: <Clock className="w-6 h-6" /> },
    { name: "Communication", color: "#9C27B0", position: [0, -6, 2] as [number, number, number], icon: <MessageSquare className="w-6 h-6" /> },
  ];

  return (
    <section id="skills" className="py-20 section-padding overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These are the technologies and skills I've worked with!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
        </motion.div>
        
        
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-start justify-center"
        >
          <div className="glass p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gradient">Frontend</h3>
            <div className="space-y-2">
              {skills.slice(0, 5).map((skill) => (
                <div key={skill.name} className="flex items-center gap-2">
                  {skill.icon}
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gradient">Backend</h3>
            <div className="space-y-2">
              {skills.slice(5, 9).map((skill) => (
                <div key={skill.name} className="flex items-center gap-2">
                  {skill.icon}
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gradient">Dev Tools</h3>
            <div className="space-y-2">
              {skills.slice(9, 13).map((skill) => (
                <div key={skill.name} className="flex items-center gap-2">
                  {skill.icon}
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gradient">Soft Skills</h3>
            <div className="space-y-2">
              {skills.slice(13).map((skill) => (
                <div key={skill.name} className="flex items-center gap-2">
                  {skill.icon}
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
