
'use client';

export default function PoetrySection() {
  return (
    <div className="relative">
      {/* Programming-style background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-2 right-2 text-purple-500 font-mono text-xs text-right">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="mb-1">
              {i % 3 === 0 ? 'poems.forEach(verse => {' : i % 3 === 1 ? '  soul.express(verse);' : '});'}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <span className="text-muted-foreground font-mono text-sm">📁</span>
          <h2 className="text-lg sm:text-xl font-bold font-mono text-primary">~/poetry/</h2>
        </div>

        <div className="ml-3 sm:ml-4 md:ml-6 space-y-3 sm:space-y-4">
          <div className="text-muted-foreground font-mono text-xs sm:text-sm mb-3 sm:mb-4">
            writing_metaphors/
          </div>

          <div className="flex items-center justify-center p-6 sm:p-8 border border-dashed border-muted-foreground/30 rounded-lg">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="text-red-500 font-mono text-sm sm:text-base">
                ❌ Error: Failed to load poems by G
              </div>
              <div className="text-muted-foreground font-mono text-xs sm:text-sm">
                // Connection timeout: verses_not_found
              </div>
              <a
                href="https://www.instagram.com/g.likhta_hu/"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-3 sm:px-4 py-2 bg-purple-500/10 text-purple-500 rounded-lg hover:bg-purple-500/20 transition-colors font-mono text-xs sm:text-sm border border-purple-500/20"
              >
                view_on_instagram() →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
