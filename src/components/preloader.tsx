
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderDetail {
  label: string;
  value: string;
}

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentDetailIndex, setCurrentDetailIndex] = useState(0);
  
  const details: LoaderDetail[] = [
    { label: "Name", value: "Aditya Kumar" },
    { label: "Occupation", value: "Computer Science Student" },
    { label: "University", value: "VIT Chennai" },
    { label: "Specialization", value: "Computer Science & Engineering" },
    { label: "Experience", value: "Accenture Intern" },
    { label: "Skills", value: "Web Development, DBMS, AI" },
    { label: "Achievements", value: "3-time CBSE Football Nationals" },
    { label: "Sports", value: "Vice-Captain" },
  ];

  useEffect(() => {
    // Simulate loading the website
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Increment progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
      
      // Update detail being shown
      if (progress % Math.floor(100 / details.length) === 0 && progress > 0) {
        setCurrentDetailIndex((prev) => 
          prev < details.length - 1 ? prev + 1 : prev
        );
      }
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [progress, details.length]);

  if (!loading) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="w-96 sm:w-[500px] space-y-8" // Increased width and made responsive
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center">
              <motion.h1 
                className="text-4xl font-bold mb-2 text-gradient"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Aditya Kumar
              </motion.h1>
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-sm text-muted-foreground">Portfolio Loading</span>
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-primary"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Terminal-like detail display */}
            <div className="glass p-4 rounded-lg font-mono text-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <div className="ml-2 text-xs text-muted-foreground">system_info.exe</div>
              </div>
              
              <div className="space-y-2">
                {details.slice(0, currentDetailIndex + 1).map((detail, index) => (
                  <motion.div 
                    key={detail.label}
                    className="grid grid-cols-[130px_1fr] gap-4 items-center" // Added items-center to align text
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-primary whitespace-nowrap">{'>'} {detail.label}:</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={detail.value}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-foreground whitespace-wrap" // Added whitespace-nowrap to prevent line breaks
                      >
                        {detail.value}
                        {index === currentDetailIndex && (
                          <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                          >_</motion.span>
                        )}
                      </motion.span>
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Progress bar */}
            <div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeInOut" }}
                />
              </div>
              <div className="mt-2 text-right text-sm text-muted-foreground">
                {progress}% Complete
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
