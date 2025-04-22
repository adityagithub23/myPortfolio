
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20 section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden glass">
              {/* Placeholder for profile image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gradient">
                  AK
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-accent"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 rounded-full bg-secondary"></div>
            </div>
          </motion.div>
          
          {/* Text Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Computer Science & Engineering Student</h3>
              <p className="text-muted-foreground">
                I'm a final-year Computer Science and Engineering student at VIT Chennai, 
                with a passion for creating innovative solutions through technology.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Professional Experience</h4>
              <div className="glass p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="font-medium">Accenture</h5>
                  <span className="text-sm text-muted-foreground">Internship</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  As an Advanced Engineering Intern at Accenture, I gained hands-on experience in developing innovative tech solutions, collaborating across teams, and applying engineering principles to solve real-world business challenges using modern technologies.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Achievements & Leadership</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary flex-shrink-0 mt-1"></div>
                  <p>3-time CBSE football nationals player, demonstrating dedication and teamwork</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-secondary flex-shrink-0 mt-1"></div>
                  <p>Developed multiple front-end and DBMS projects, showcasing technical skills</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent flex-shrink-0 mt-1"></div>
                  <p>Created an AI web application in healthcare, combining technology with social impact</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary flex-shrink-0 mt-1"></div>
                  <p>Served as vice-captain in school sports, developing leadership abilities</p>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Education</h4>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h5 className="font-medium">B.Tech in Computer Science & Engineering</h5>
                  <p className="text-sm text-muted-foreground">VIT Chennai</p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h5 className="font-medium">Schooling</h5>
                  <p className="text-sm text-muted-foreground">With leadership roles in sports activities</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
