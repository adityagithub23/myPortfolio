
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const messages = [
  "Let's connect and build something awesome together!",
  "Looking for a collaborator? I'm in!",
  "Got a project idea? Let's talk!",
  "Need a tech enthusiast? You found one!",
  "Scroll down to see my projects!"
];

export function AIBuddy() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isWaving, setIsWaving] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  // Cycle through messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Random blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 300);
    }, Math.random() * 3000 + 2000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Random waving
  useEffect(() => {
    const waveInterval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 1500);
    }, Math.random() * 10000 + 10000);
    return () => clearInterval(waveInterval);
  }, []);

  return (
    <a 
      href="#contact" 
      className="fixed left-4 bottom-4 z-50 cursor-pointer"
      aria-label="Contact me"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: "spring" }}
        className="relative"
      >
        {/* Robot avatar */}
        <div className="relative w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full overflow-hidden glass">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Robot face */}
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              {/* Eyes */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 md:w-3 md:h-3 bg-background rounded-full">
                <div 
                  className={cn(
                    "absolute inset-0 bg-primary rounded-full transform origin-bottom", 
                    isBlinking ? "animate-blink" : ""
                  )}
                ></div>
              </div>
              <div className="absolute top-1/4 right-1/4 w-2 h-2 md:w-3 md:h-3 bg-background rounded-full">
                <div 
                  className={cn(
                    "absolute inset-0 bg-primary rounded-full transform origin-bottom", 
                    isBlinking ? "animate-blink" : ""
                  )}
                ></div>
              </div>
              {/* Mouth */}
              <div className="absolute bottom-1/4 left-1/3 right-1/3 h-1 bg-background rounded-full"></div>
              {/* Antenna */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                <div className="w-1 h-3 bg-accent"></div>
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              </div>
            </div>
          </div>
          {/* Waving hand */}
          <motion.div 
            className="absolute bottom-1 right-0 w-4 h-6 bg-secondary rounded-full origin-bottom"
            animate={isWaving ? { rotate: [0, 20, -10, 20, -10, 20, 0] } : {}}
            transition={{ duration: 1.5 }}
          ></motion.div>
        </div>
        
        {/* Speech bubble */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-20 left-0 glass px-4 py-2 rounded-lg text-xs md:text-sm max-w-[200px] md:max-w-[250px] text-foreground"
          >
            {messages[currentMessage]}
            <div className="absolute -bottom-2 left-4 w-4 h-4 glass rotate-45"></div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </a>
  );
}
