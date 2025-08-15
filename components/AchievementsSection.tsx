'use client';

import { Trophy, Target, Briefcase, Zap, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const achievements = [
  {
    title: "100k+ users served",
    description: "UnLocker and UnBlur served more tha 100,000 engineering students on Discord and Telegram ",
    type: "impact",
    icon: Target
  },
  {
    title: "Built n sold SaaS products",
    description: "Successfully monetized and sold two SaaS products.",
    type: "business",
    icon: Briefcase
  },
  {
    title: "National Youth Festival 2024 ",
    description: "1st Prize (State and District Level);",
    type: "award",
    icon: Trophy
  },
  {
    title: "RBVP 2024",
    description: "Represented School and state at Haryana",
    type: "award",
    icon: Trophy
  },
  {
    title: "EISF 2024",
    description: "Represented School and state at Kolkata",
    type: "award",
    icon: Trophy
  }
];

export default function AchievementsSection() {
  const [expandedAchievements, setExpandedAchievements] = useState([]);

  const toggleAchievement = (index) => {
    if (expandedAchievements.includes(index)) {
      setExpandedAchievements(expandedAchievements.filter((i) => i !== index));
    } else {
      setExpandedAchievements([...expandedAchievements, index]);
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "impact":
        return <Target className="w-4 h-4 text-blue-500" />;
      case "business":
        return <Briefcase className="w-4 h-4 text-green-500" />;
      case "technical":
        return <Zap className="w-4 h-4 text-purple-500" />;
      case "award":
        return <Trophy className="w-4 h-4 text-yellow-500" />;
      default:
        return <Trophy className="w-4 h-4 text-yellow-500" />;
    }
  };

  return (
    <div className="relative">
      {/* Programming-style background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-2 left-2 text-green-500 font-mono text-xs">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="mb-1">
              {i % 3 === 0 ? 'achievements.map(a => {' : i % 3 === 1 ? '  return a.celebrate();' : '});'}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <h2 className="text-lg sm:text-xl font-bold font-mono text-primary">~/achievements/</h2>
        </div>

        <div className="ml-3 sm:ml-4 md:ml-6 space-y-2 sm:space-y-3">
          <div className="text-muted-foreground font-mono text-xs sm:text-sm mb-3 sm:mb-4">
            const milestones = new Map();
          </div>

          {achievements.map((achievement, i) => (
            <div key={i} className="space-y-2">
              <div
                onClick={() => toggleAchievement(i)}
                className="flex items-center justify-between gap-2 sm:gap-3 p-2 sm:p-3 hover:bg-muted/20 rounded transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  {expandedAchievements.includes(i) ? (
                    <ChevronDown className="w-3 h-3 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="w-3 h-3 text-muted-foreground" />
                  )}
                  {achievement.icon && <achievement.icon className="w-4 h-4 text-primary" />}
                  <div className="flex-1 min-w-0">
                    <div className="text-primary font-mono font-semibold group-hover:text-yellow-500 transition-colors text-sm sm:text-base">
                      {achievement.title.replace(/\s+/g, '_').toLowerCase()}
                    </div>
                  </div>
                </div>
              </div>

              {expandedAchievements.includes(i) && (
                <div className="ml-8 sm:ml-10 p-3 bg-muted/10 rounded border border-muted-foreground/20">
                  <div className="text-muted-foreground font-mono text-xs mb-2">
                    {achievement.description}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
