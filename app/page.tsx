import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import HobbiesSection from '@/components/HobbiesSection';
import BooksSection from '@/components/BooksSection';
import SpotifySection from '@/components/SpotifySection';
import SocialSection from '@/components/SocialSection';
import AchievementsSection from '@/components/AchievementsSection';
import PoetrySection from '@/components/PoetrySection';
import Footer from '@/components/Footer';
import { FileText, Folder, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-mono">
      {/* Terminal-like header */}
      <div className="border-b border-muted bg-muted/5 p-3 sm:p-4">
        <div className="max-w-4xl mx-auto flex items-center gap-2">
          <Terminal className="w-4 h-4 text-green-500" />
          <span className="text-muted-foreground text-sm">~/portfolio/mishra_g</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6 space-y-3 sm:space-y-4 md:space-y-6">
        {/* Hero Section - Like a main file */}
        <div className="bg-background border rounded-lg shadow-sm">
          <div className="border-b border-muted px-4 py-2 flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-mono text-muted-foreground">README.md</span>
          </div>
          <div className="p-4 sm:p-6">
            <HeroSection />
          </div>
        </div>

        {/* Main Content - Like a src/ directory */}
        <div className="bg-background border rounded-lg shadow-sm">
          <div className="border-b border-muted px-4 py-2 flex items-center gap-2">
            <Folder className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-mono text-muted-foreground">src/</span>
          </div>
          <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-8 sm:space-y-10 md:space-y-14">
            <ProjectsSection />
            <div className="border-t border-muted/30 my-6 sm:my-8"></div>
            <AchievementsSection />
            <div className="border-t border-muted/30 my-6 sm:my-8"></div>
            <HobbiesSection />
            <div className="border-t border-muted/30 my-6 sm:my-8"></div>
            <BooksSection />
            <div className="border-t border-muted/30 my-6 sm:my-8"></div>
            <PoetrySection />
            <div className="border-t border-muted/30 my-6 sm:my-8"></div>
            <SpotifySection />
          </div>
        </div>

        {/* Social Section - Like package.json */}
        <div className="bg-background border rounded-lg shadow-sm">
          <div className="border-b border-muted px-4 py-2 flex items-center gap-2">
            <FileText className="w-4 h-4 text-green-500" />
            <span className="text-sm font-mono text-muted-foreground">package.json</span>
          </div>
          <div className="p-4 sm:p-6">
            <SocialSection />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}