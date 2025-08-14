
'use client';

import { Instagram, Linkedin, Github, Code2, FileText } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/__mishr.a_/",
    username: "→",
    icon: Instagram
  },
  {
    name: "X", 
    href: "https://x.com/mishraG_innit",
    username: "→",
    icon: FaXTwitter
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sushant-kumar-mishra-a80125368",
    username: "→",
    icon: Linkedin
  },
  {
    name: "GitHub",
    href: "https://github.com/mishraG-innit/",
    username: "→",
    icon: Github
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/mishraG_innit/",
    username: "→",
    icon: Code2
  }
];

export default function SocialSection() {
  return (
    <section className="bg-background border rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg space-y-3 sm:space-y-4 my-4 sm:my-6 md:my-8 relative overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-4 h-4 text-blue-500" />
        <h2 className="text-xl font-bold font-mono text-primary">~/connect/</h2>
      </div>

      <div className="ml-6 space-y-3">
        <div className="text-muted-foreground font-mono text-sm mb-4">
          function connect_with_me()
        </div>

        <div className="ml-4 space-y-2">
          {socials.map(({ name, href, username, icon: Icon }, i) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-2 p-2 rounded-lg hover:bg-muted/20 transition-all duration-200 group"
            >
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                <span className="text-muted-foreground font-mono text-sm group-hover:text-primary transition-colors truncate">
                  {name.toLowerCase().replace('.', '')}
                </span>
              </div>
              <span className="text-muted-foreground font-mono text-xs flex-shrink-0">
                {username}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
