
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-bold text-gradient">Aditya Kumar</h2>
              <p className="text-sm text-muted-foreground">
                A passionate Computer Science student and developer focused on creating innovative solutions.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full">
                  <a href="https://github.com/adityakumar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full">
                  <a href="https://linkedin.com/in/adityakumar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full">
                  <a href="mailto:ak.work002@gmail.com" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-medium">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-medium">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">
                  <a href="mailto:ak.work002@gmail.com" className="hover:text-foreground transition-colors">
                    ak.work002@gmail.com
                  </a>
                </li>
                <li className="text-muted-foreground">
                  <a href="tel:+918252798631" className="hover:text-foreground transition-colors">
                    +91 8252798631
                  </a>
                </li>
                <li className="text-muted-foreground">
                  VIT Chennai
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Resume */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-medium">Resume</h3>
              <p className="text-sm text-muted-foreground">
                Download my resume to learn more about my education, skills, and experiences.
              </p>
              <Button asChild variant="outline" className="w-full">
                <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground"
        >
          <p>&copy; {currentYear} Aditya Kumar. All rights reserved.</p>
          <p className="mt-1">
            <span>Made with </span>
            <span className="text-destructive">❤</span>
            <span> and lots of </span>
            <span className="text-gradient font-medium">&lt;code/&gt;</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
