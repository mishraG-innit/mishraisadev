
'use client';

import { useState } from 'react';
import { Speaker, Compass, PenTool, Terminal, Brain, AlertTriangle, BookOpen } from 'lucide-react';

const hobbies = [
  {
    name: "Music Production",
    icon: Speaker,
    link: "#",
    hasModal: false
  },
  {
    name: "Writing",
    icon: PenTool,
    link: "https://www.instagram.com/g.likhta_hu/",
    hasModal: false
  },
  {
    name: "Solo Travelling",
    icon: Compass,
    link: "#",
    hasModal: true
  },
  {
    name: "Philosophy",
    icon: Brain,
    link: "#",
    hasModal: false
  },
  {
    name: "Programming",
    icon: Terminal,
    link: "#",
    hasModal: true
  }
];

const visitedStates = [
  { name: "Punjab", visited: true, icon: "🌾" },
  { name: "Delhi", visited: true, icon: "🏛️" },
  { name: "Uttar Pradesh", visited: true, icon: "🕌" },
  { name: "Bihar", visited: true, icon: "📚" },
  { name: "West Bengal", visited: true, icon: "🎭" },
  { name: "Karnataka", visited: true, icon: "💻" },
  { name: "Kerala", visited: true, icon: "🥥" },
  { name: "Haryana", visited: true, icon: "🌾" },
  { name: "Gujarat", visited: true, icon: "🦁" },
  { name: "Assam", visited: true, icon: "🍃" },
  { name: "Meghalaya", visited: true, icon: "☁️" },
  { name: "Sikkim", visited: true, icon: "🏔️" }
];

export default function HobbiesSection() {
  const [showModal, setShowModal] = useState(null);

  const handleClick = (hobby, index) => {
    if (hobby.hasModal) {
      setShowModal(hobby.name);
      return;
    }

    if (hobby.link && hobby.link !== "#") {
      window.open(hobby.link, '_blank');
    }
  };

  const closeModal = () => {
    setShowModal(null);
  };

  const IndiaMapModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={closeModal}>
      <div className="bg-background border rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-mono text-primary">India Travel Map</h3>
          <button 
            onClick={closeModal}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            ✕
          </button>
        </div>
        
        {/* Simple India Map Outline */}
        <div className="relative bg-muted/10 rounded-lg p-6 mb-4">
          <div className="text-center mb-4">
            <h4 className="text-sm font-mono text-primary mb-2">States I've Explored</h4>
          </div>
          
          {/* India Map SVG */}
          <svg viewBox="0 0 400 500" className="w-full h-64 border border-muted-foreground/20 rounded">
            {/* Basic India outline */}
            <path 
              d="M100 50 L300 50 L320 80 L350 120 L360 200 L340 280 L300 350 L250 400 L200 420 L150 400 L100 350 L80 280 L70 200 L80 120 Z" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="text-muted-foreground"
            />
            
            {/* State markers */}
            {visitedStates.map((state, i) => {
              const positions = {
                "Punjab": { x: 140, y: 100 },
                "Delhi": { x: 160, y: 120 },
                "Uttar Pradesh": { x: 180, y: 140 },
                "Bihar": { x: 220, y: 150 },
                "West Bengal": { x: 250, y: 160 },
                "Karnataka": { x: 200, y: 280 },
                "Kerala": { x: 180, y: 340 },
                "Haryana": { x: 150, y: 110 },
                "Gujarat": { x: 120, y: 180 },
                "Assam": { x: 280, y: 140 },
                "Meghalaya": { x: 270, y: 150 },
                "Sikkim": { x: 240, y: 130 }
              };
              
              const pos = positions[state.name] || { x: 200, y: 200 };
              
              return (
                <g key={i}>
                  <circle 
                    cx={pos.x} 
                    cy={pos.y} 
                    r="6" 
                    fill="#22c55e" 
                    className="animate-pulse"
                  />
                  <text 
                    x={pos.x} 
                    y={pos.y - 15} 
                    textAnchor="middle" 
                    fontSize="10" 
                    className="fill-current text-muted-foreground font-mono text-xs"
                  >
                    {state.icon}
                  </text>
                </g>
              );
            })}
          </svg>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
            {visitedStates.map((state, i) => (
              <div key={i} className="flex items-center gap-2 p-2 bg-green-500/10 rounded border border-green-500/20">
                <span className="text-sm">{state.icon}</span>
                <span className="text-xs font-mono text-green-600">{state.name}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-3 bg-green-500/10 rounded border border-green-500/20 text-center">
            <div className="text-sm font-mono text-green-600">
              📍 {visitedStates.length} states explored across India
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProgrammingModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={closeModal}>
      <div className="bg-background border rounded-lg p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-mono text-primary">Programming Skills</h3>
          <button 
            onClick={closeModal}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="p-4 bg-red-500/10 rounded border border-red-500/20">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-sm font-mono text-red-500">Error 404</span>
          </div>
          <div className="text-xs font-mono text-muted-foreground">
            Programming skills too advanced to display 😄
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Programming-style background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-2 left-2 text-purple-500 font-mono text-xs">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="mb-1">
              {i % 3 === 0 ? 'hobbies.filter(h => {' : i % 3 === 1 ? '  return h.passion > 9;' : '});'}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <BookOpen className="w-5 h-5 text-green-500" />
          <h2 className="text-lg sm:text-xl font-bold font-mono text-primary">~/interests/</h2>
        </div>

        <div className="ml-3 sm:ml-4 md:ml-6 space-y-2 sm:space-y-3">
          <div className="text-muted-foreground font-mono text-xs sm:text-sm mb-3 sm:mb-4">
            const interests = new Set();
          </div>

          {hobbies.map((hobby, i) => (
            <div key={i} className="space-y-2">
              <button
                onClick={() => handleClick(hobby, i)}
                className="w-full text-left flex items-center gap-2 sm:gap-3 p-2 sm:p-3 hover:bg-muted/20 rounded transition-colors group cursor-pointer"
              >
                <hobby.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-primary font-mono font-semibold group-hover:text-green-500 transition-colors text-sm sm:text-base">
                    {hobby.name.replace(/\s+/g, '_').toLowerCase()}
                  </div>
                </div>
                {hobby.name === "Programming" && (
                  <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {showModal === "Solo Travelling" && <IndiaMapModal />}
      {showModal === "Programming" && <ProgrammingModal />}
    </div>
  );
}
