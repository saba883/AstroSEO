import React from 'react';
import { cn } from '@/lib/utils';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
  className?: string;
}

export function TableOfContents({ headings, className }: TableOfContentsProps) {
  if (!headings || headings.length === 0) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={cn("bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8", className)}>
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Table of Contents
      </h2>
      <nav aria-label="Table of contents">
        <ol className="space-y-2">
          {headings.map((heading, index) => (
            <li
              key={heading.id}
              className={cn(
                "transition-colors",
                heading.level === 2 && "ml-0",
                heading.level === 3 && "ml-4",
                heading.level === 4 && "ml-8"
              )}
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline flex items-start"
              >
                <span className="mr-2 text-gray-500 dark:text-gray-400">
                  {index + 1}.
                </span>
                <span className="line-clamp-2">{heading.text}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

// Utility function to extract headings from markdown content
export function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = [];
  const lines = content.split('\n');
  
  lines.forEach((line) => {
    const match = line.match(/^(#{2,4})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      
      headings.push({ id, text, level });
    }
  });
  
  return headings;
}

// Component to render markdown with IDs for headings
export function MarkdownWithIds({ content }: { content: string }) {
  const processedContent = content.replace(
    /^(#{2,4})\s+(.+)$/gm,
    (match, hashes, text) => {
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      
      return `${hashes} <span id="${id}">${text}</span>`;
    }
  );
  
  return (
    <div 
      className="prose prose-lg dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}
