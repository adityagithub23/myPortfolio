import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const characterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simple blinking animation
    const interval = setInterval(() => {
      if (characterRef.current) {
        const eyes = characterRef.current.querySelectorAll('.eye');
        eyes.forEach(eye => {
          eye.classList.add('blink');
          setTimeout(() => {
            eye.classList.remove('blink');
          }, 200);
        });
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="lg:w-1/2 space-y-6"
        >
          <motion.span 
            className="inline-block text-sm px-3 py-1 glass rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Final-year CSE Student at VIT Chennai
          </motion.span>
          
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Hi, I'm <span className="text-gradient">Aditya Kumar</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            Blending tech expertise with creative problem-solving. Former Accenture intern with a passion for innovative solutions and teamwork.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center sm:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <Button asChild className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <br />
            <p className="text-sm text-muted-foreground">3-time CBSE Football Nationals Player & Tech Enthusiast</p>
          </motion.div>
        </motion.div>
        
        {/* Anime Character */}
        <motion.div 
          className="lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            {/* Character container */}
            <div ref={characterRef} className="w-full h-full relative">
              {/* Desk */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-16 bg-primary/20 rounded-t-3xl"></div>
              
              {/* Laptop */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-40 h-24 bg-gray-800 rounded-md">
                <div className="absolute top-2 left-2 right-2 bottom-12 bg-blue-500 rounded overflow-hidden">
                  {/* Code on screen */}
                  <div className="p-1 text-[6px] text-white font-mono">
                    <motion.div
                      initial={{ y: 0 }}
                      animate={{ y: -20 }}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: "loop",
                        duration: 5,
                        ease: "linear"
                      }}
                    >
                      {Array.from({ length: 15 }).map((_, i) => (
                        <div key={i} className="flex">
                          <span className="text-green-300 mr-1">{'>>'}</span>
                          <span className="mr-1">{Array.from({ length: Math.floor(Math.random() * 15) + 5 }).map(() => '█').join('')}</span>
                          <span className="text-yellow-300">{Array.from({ length: Math.floor(Math.random() * 8) + 2 }).map(() => '█').join('')}</span>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Character body */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-32 h-48">
                {/* Head */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-[#FDCEB6] rounded-2xl">
                  {/* Face */}
                  <div className="absolute top-6 left-0 right-0 flex justify-center space-x-8">
                    {/* Eyes */}
                    <div className="eye w-2 h-4 bg-gray-800 rounded-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-[#FDCEB6] transform translate-y-0 blink-transition"></div>
                    </div>
                    <div className="eye w-2 h-4 bg-gray-800 rounded-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-[#FDCEB6] transform translate-y-0 blink-transition"></div>
                    </div>
                  </div>
                  
                  {/* Mouth */}
                  <motion.div 
                    className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-800 rounded-full"
                    animate={{ 
                      scaleX: [1, 1.2, 0.8, 1], 
                      scaleY: [1, 0.7, 1.3, 1] 
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: "reverse", 
                      duration: 8, 
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  
                  {/* Hair */}
                  <div className="absolute -top-2 -left-2 -right-2 h-12 bg-gray-800 rounded-t-2xl"></div>
                  <div className="absolute -top-1 -right-2 w-4 h-10 bg-gray-800 rounded"></div>
                  <div className="absolute -top-1 -left-2 w-4 h-10 bg-gray-800 rounded"></div>
                </div>
                
                {/* Body */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-28 h-32 bg-primary rounded-t-lg">
                  {/* Shirt collar */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-white rounded-b-lg"></div>
                  
                  {/* Arms */}
                  <motion.div 
                    className="absolute top-8 -left-5 w-5 h-20 bg-primary rounded-l-lg origin-right"
                    animate={{ rotate: [0, 2, 0, -2, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 5, 
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  
                  <motion.div 
                    className="absolute top-8 -right-5 w-5 h-20 bg-primary rounded-r-lg origin-left"
                    animate={{ rotate: [0, -5, 0, 5, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5, 
                      ease: "easeInOut"
                    }}
                  >
                    {/* Hand */}
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#FDCEB6] rounded-full"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          delay: 2, 
          opacity: { duration: 1 },
          y: { repeat: Infinity, duration: 1.5 }
        }}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll down</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-muted-foreground to-transparent"></div>
      </motion.div>
      
      {/* CSS for blinking eyes */}
      <style>
        {`
        .blink-transition {
          transition: transform 0.1s;
        }
        .blink {
          transform: translateY(100%);
        }
        `}
      </style>
    </section>
  );
}
