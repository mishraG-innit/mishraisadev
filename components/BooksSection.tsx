
'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const authors = [
  {
    name: "Carl Jung",
    books: [
      { title: "Man n His Symbols", link: "#" },
      { title: "Modern Man in Search of a Soul", link: "#" },
      { title: "The Undiscovered Self", link: "#" },
      { title: "The Archetypes and the Collective Unconscious", link: "#" }
    ]
  },
  {
    name: "Suryakant Tripathi Nirala",
    books: [
      { title: "Anamika", link: "#" }
    ]
  },
  {
    name: "Tupac Amaru Shakur",
    books: [
      { title: "The Rose that Grew from Concrete", link: "#" }
    ]
  }
];

export default function BooksSection() {
  const [expandedAuthors, setExpandedAuthors] = useState<number[]>([]);

  const toggleAuthor = (index: number) => {
    setExpandedAuthors(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="relative">
      {/* Programming-style background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-2 left-2 text-blue-500 font-mono text-xs">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="mb-1">
              {i % 4 === 0 ? 'library.forEach(book => {' : i % 4 === 1 ? '  mind.absorb(book);' : i % 4 === 2 ? '  wisdom.grow();' : '});'}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <span className="text-muted-foreground font-mono text-sm">📁</span>
          <h2 className="text-lg sm:text-xl font-bold font-mono text-primary">~/fav_books/</h2>
        </div>

        <div className="ml-3 sm:ml-4 md:ml-6 space-y-3 sm:space-y-4">
          <div className="text-muted-foreground font-mono text-xs sm:text-sm mb-3 sm:mb-4">
            import wisdom from './library';
          </div>

          {authors.map((author, i) => (
            <div key={i} className="space-y-2 sm:space-y-3 p-2 sm:p-3 hover:bg-muted/10 rounded transition-colors">
              <div 
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => toggleAuthor(i)}
              >
                {expandedAuthors.includes(i) ? (
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-3 h-3 text-muted-foreground" />
                )}
                <span className="text-muted-foreground font-mono text-sm">👤</span>
                <span className="text-primary font-mono font-semibold text-sm sm:text-base">
                  {author.name.replace(/\s+/g, '_').toLowerCase()}/
                </span>
              </div>

              {expandedAuthors.includes(i) && (
                <div className="ml-6 sm:ml-8 space-y-1 sm:space-y-2">
                  {author.books.map((book, j) => (
                    <a
                      key={j}
                      href={book.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-start gap-2 p-1 sm:p-2 hover:bg-muted/20 rounded transition-colors group"
                    >
                      <span className="text-muted-foreground font-mono text-xs flex-shrink-0 mt-0.5">📄</span>
                      <span className="text-muted-foreground font-mono text-xs sm:text-xs group-hover:text-primary transition-colors flex-1 leading-tight">
                        {book.title.replace(/\s+/g, ' ').toLowerCase()}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
