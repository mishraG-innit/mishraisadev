
'use client';

import { Music, Disc3 } from 'lucide-react';

const albums = [
  {
    title: "Mr. Morale & The Big Steppers",
    artist: "Kendrick Lamar",
    link: "https://open.spotify.com/album/79ONNoS4M9tfIA1mYLBYVX"
  },
  {
    title: "2 Ka Pahada EP",
    artist: "Seedhe Maut", 
    link: "https://open.spotify.com/album/3SMrgzryTZVFHBhYAXrDLJ"
  },
  {
    title: "Sifar",
    artist: "Lucky Ali",
    link: "https://open.spotify.com/album/0aHRE11myjLyOfFgEb8LpF"
  }
];

export default function SpotifySection() {
  return (
    <div className="relative">
      {/* Programming-style background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-2 right-2 text-green-500 font-mono text-xs text-right">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="mb-1">
              {i % 4 === 0 ? 'music.play({' : i % 4 === 1 ? '  album: top_albums[i],' : i % 4 === 2 ? '  platform: "spotify"' : '});'}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <Music className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
          <h2 className="text-lg sm:text-xl font-bold font-mono text-primary">~/music/</h2>
        </div>

        <div className="ml-3 sm:ml-4 md:ml-6 space-y-2 sm:space-y-3">
          <div className="text-muted-foreground font-mono text-xs sm:text-sm mb-3 sm:mb-4">
            const top_albums = await spotify.getTopAlbums();
          </div>

          {albums.map((album, i) => (
            <a
              key={i}
              href={album.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 hover:bg-muted/20 rounded transition-colors group cursor-pointer"
            >
              <Disc3 className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-primary font-mono font-semibold group-hover:text-green-500 transition-colors text-sm sm:text-base truncate">
                  {album.title.toLowerCase().replace(/\s+/g, ' ')}
                </div>
                <div className="text-muted-foreground font-mono text-xs sm:text-xs mt-1 truncate">
                  {album.artist}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
