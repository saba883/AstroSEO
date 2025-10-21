import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className={cn("prose prose-lg dark:prose-invert max-w-none", className)}
      components={{
        // Headings with proper styling
        h1: ({ children, ...props }) => (
          <h1 className="text-4xl font-bold mt-10 mb-6 text-gray-900 dark:text-gray-100" {...props}>
            {children}
          </h1>
        ),
        h2: ({ children, ...props }) => (
          <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2" {...props}>
            {children}
          </h2>
        ),
        h3: ({ children, ...props }) => (
          <h3 className="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100" {...props}>
            {children}
          </h3>
        ),
        h4: ({ children, ...props }) => (
          <h4 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200" {...props}>
            {children}
          </h4>
        ),
        h5: ({ children, ...props }) => (
          <h5 className="text-lg font-semibold mt-3 mb-2 text-gray-800 dark:text-gray-200" {...props}>
            {children}
          </h5>
        ),
        h6: ({ children, ...props }) => (
          <h6 className="text-base font-semibold mt-3 mb-2 text-gray-800 dark:text-gray-200" {...props}>
            {children}
          </h6>
        ),
        // Paragraphs with proper spacing
        p: ({ children, ...props }) => (
          <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base" {...props}>
            {children}
          </p>
        ),
        // Lists with proper styling
        ul: ({ children, ...props }) => (
          <ul className="mb-6 ml-6 list-disc space-y-2" {...props}>
            {children}
          </ul>
        ),
        ol: ({ children, ...props }) => (
          <ol className="mb-6 ml-6 list-decimal space-y-2" {...props}>
            {children}
          </ol>
        ),
        li: ({ children, ...props }) => (
          <li className="text-gray-700 dark:text-gray-300" {...props}>
            {children}
          </li>
        ),
        // Blockquotes
        blockquote: ({ children, ...props }) => (
          <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 italic text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50" {...props}>
            {children}
          </blockquote>
        ),
        // Code blocks
        pre: ({ children, ...props }) => (
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-6" {...props}>
            {children}
          </pre>
        ),
        code: ({ children, className, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <code className="text-sm font-mono" {...props}>
              {children}
            </code>
          ) : (
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono" {...props}>
              {children}
            </code>
          );
        },
        // Links
        a: ({ children, href, ...props }) => (
          <a 
            href={href} 
            className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary transition-colors"
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            {...props}
          >
            {children}
          </a>
        ),
        // Strong and emphasis
        strong: ({ children, ...props }) => (
          <strong className="font-semibold text-gray-900 dark:text-gray-100" {...props}>
            {children}
          </strong>
        ),
        em: ({ children, ...props }) => (
          <em className="italic text-gray-800 dark:text-gray-200" {...props}>
            {children}
          </em>
        ),
        // Tables
        table: ({ children, ...props }) => (
          <div className="overflow-x-auto my-6">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props}>
              {children}
            </table>
          </div>
        ),
        thead: ({ children, ...props }) => (
          <thead className="bg-gray-50 dark:bg-gray-800" {...props}>
            {children}
          </thead>
        ),
        tbody: ({ children, ...props }) => (
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700" {...props}>
            {children}
          </tbody>
        ),
        th: ({ children, ...props }) => (
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" {...props}>
            {children}
          </th>
        ),
        td: ({ children, ...props }) => (
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300" {...props}>
            {children}
          </td>
        ),
        // Horizontal rule
        hr: ({ ...props }) => (
          <hr className="my-8 border-gray-200 dark:border-gray-700" {...props} />
        ),
        // Images
        img: ({ src, alt, ...props }) => (
          <img 
            src={src} 
            alt={alt} 
            className="rounded-lg shadow-md my-6 max-w-full h-auto"
            loading="lazy"
            {...props} 
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

// Component for article metadata
interface ArticleMetaProps {
  date: string;
  readingTime: number;
  author?: string;
  category?: string;
}

export function ArticleMeta({ date, readingTime, author, category }: ArticleMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
      <time className="flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {new Date(date).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </time>
      <span className="flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {readingTime} min read
      </span>
      {author && (
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          {author}
        </span>
      )}
      {category && (
        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
          {category}
        </span>
      )}
    </div>
  );
}

// Component for article header
interface ArticleHeaderProps {
  title: string;
  description?: string;
  image?: string;
}

export function ArticleHeader({ title, description, image }: ArticleHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      
      {description && (
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
            {description}
          </p>
        </div>
      )}
      
      {image && (
        <div className="aspect-video overflow-hidden rounded-xl shadow-lg mb-8">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      )}
    </header>
  );
}
