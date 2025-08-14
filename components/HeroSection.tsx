
"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentName, setCurrentName] = useState("G");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentName(prev => prev === "G" ? "Ji" : "G");
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <motion.section
      className="bg-background border rounded-xl p-4 sm:p-6 md:p-8 shadow-lg space-y-3 sm:space-y-4 mt-4 sm:mt-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Animated Background Character */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <motion.div
          className="w-64 h-64"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            {/* Head */}
            <motion.circle
              cx="100"
              cy="80"
              r="35"
              animate={{
                r: [35, 36, 35],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Curly Hair */}
            <motion.path
              d="M65 50 Q60 40 70 45 Q75 35 80 45 Q85 35 90 45 Q95 35 100 45 Q105 35 110 45 Q115 35 120 45 Q125 35 130 45 Q135 40 130 50"
              animate={{
                d: [
                  "M65 50 Q60 40 70 45 Q75 35 80 45 Q85 35 90 45 Q95 35 100 45 Q105 35 110 45 Q115 35 120 45 Q125 35 130 45 Q135 40 130 50",
                  "M65 48 Q60 38 70 43 Q75 33 80 43 Q85 33 90 43 Q95 33 100 43 Q105 33 110 43 Q115 33 120 43 Q125 33 130 43 Q135 38 130 48",
                  "M65 50 Q60 40 70 45 Q75 35 80 45 Q85 35 90 45 Q95 35 100 45 Q105 35 110 45 Q115 35 120 45 Q125 35 130 45 Q135 40 130 50"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Eyes */}
            <motion.circle
              cx="90"
              cy="75"
              r="3"
              fill="currentColor"
              animate={{
                cy: [75, 76, 75],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.circle
              cx="110"
              cy="75"
              r="3"
              fill="currentColor"
              animate={{
                cy: [75, 76, 75],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Nose */}
            <circle cx="100" cy="85" r="1" fill="currentColor" />

            {/* Mouth */}
            <motion.path
              d="M95 95 Q100 100 105 95"
              animate={{
                d: [
                  "M95 95 Q100 100 105 95",
                  "M95 96 Q100 101 105 96",
                  "M95 95 Q100 100 105 95"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Ears */}
            <ellipse cx="65" cy="80" rx="8" ry="15" />
            <ellipse cx="135" cy="80" rx="8" ry="15" />

            {/* Neck */}
            <rect x="90" y="115" width="20" height="15" />

            {/* Collar */}
            <motion.path
              d="M80 130 L85 125 L90 130 L100 125 L110 130 L115 125 L120 130"
              animate={{
                d: [
                  "M80 130 L85 125 L90 130 L100 125 L110 130 L115 125 L120 130",
                  "M80 131 L85 126 L90 131 L100 126 L110 131 L115 126 L120 131",
                  "M80 130 L85 125 L90 130 L100 125 L110 130 L115 125 L120 130"
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Body */}
            <motion.rect
              x="70"
              y="130"
              width="60"
              height="50"
              rx="10"
              animate={{
                height: [50, 52, 50],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Question marks floating around */}
            <motion.text
              x="40"
              y="60"
              fontSize="20"
              fill="currentColor"
              animate={{
                y: [60, 55, 60],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ?
            </motion.text>
            <motion.text
              x="160"
              y="100"
              fontSize="16"
              fill="currentColor"
              animate={{
                y: [100, 95, 100],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              ?
            </motion.text>
            <motion.text
              x="30"
              y="120"
              fontSize="14"
              fill="currentColor"
              animate={{
                y: [120, 115, 120],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              ?
            </motion.text>
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-mono text-primary">
          WHO am i?<span className="animate-pulse">_</span>
        </h2>

        <div className="flex items-center space-x-2">
          <Terminal className="text-green-500 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-muted-foreground text-xs sm:text-sm font-mono">
            they call me Mishra{" "}
            <motion.span
              className="relative inline-block cursor-pointer"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              onClick={() => setCurrentName(prev => prev === "G" ? "Ji" : "G")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                key={currentName}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-bold text-sm"
              >
                {currentName}
              </motion.span>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                >
                  Click to toggle!
                </motion.div>
              )}
            </motion.span>
          </span>
        </div>

        <p className="text-muted-foreground font-mono leading-relaxed text-xs sm:text-sm">
          i'm just a chill guy from{" "}
          <span className="relative group">
            <strong className="text-green-500 cursor-pointer">737101</strong>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Gangtok, Sikkim
            </span>
          </span>
          , currently living in{" "}
          <span className="relative group">
            <strong className="text-green-500 cursor-pointer">Punjab</strong>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Bhatinda, Punjab
            </span>
          </span>
          ,
          pursuing <strong>B.Tech in AI & ML</strong>. Creator and Former Owner of{" "}
          <code className="text-accent">UnLocker</code>, &{" "}
          <code className="text-accent">UnBlur Services</code> (used by 100k+ engineering undergrads).<br />
          Currently I'm building something <strong>insane</strong> in AI for NEW GENERATION teen productivity.
        </p>

        <p className="text-muted-foreground font-mono italic">
        </p>

        <div className="flex flex-wrap gap-1 sm:gap-2 mt-4 sm:mt-6">
          <span className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-mono border border-blue-500/20 whitespace-nowrap">
            Music Production
          </span>
          <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-mono border border-green-500/20 whitespace-nowrap">
            Writing
          </span>
          <span className="px-2 py-1 bg-purple-500/10 text-purple-500 rounded-full text-xs font-mono border border-purple-500/20 whitespace-nowrap">
            Solo Travelling
          </span>
          <span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-mono border border-yellow-500/20 whitespace-nowrap">
            Philosophy
          </span>
          <span className="px-2 py-1 bg-orange-500/10 text-orange-500 rounded-full text-xs font-mono border border-orange-500/20 whitespace-nowrap">
            Programming
          </span>
        </div>
      </div>
    </motion.section>
  );
}
