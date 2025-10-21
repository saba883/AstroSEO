import React from 'react';
import { Link } from 'wouter';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

interface BlogCardProps {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  slug,
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  image
}) => {
  const categoryColors = {
    'Business Setup': 'blue',
    'Legal': 'purple',
    'Tax': 'orange',
    'Guides': 'pink',
  };

  const color = categoryColors[category as keyof typeof categoryColors] || 'blue';

  return (
    <Link href={`/blog/${slug}`}>
      <article className="group h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        {image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className={`inline-flex items-center px-3 py-1 text-xs font-medium text-white rounded-full bg-gradient-to-r ${
                color === 'blue' ? 'from-blue-500 to-blue-600' :
                color === 'purple' ? 'from-purple-500 to-purple-600' :
                color === 'orange' ? 'from-orange-500 to-orange-600' :
                'from-pink-500 to-pink-600'
              }`}>
                {category}
              </span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
            {excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{author}</span>
            </div>
            
            <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:gap-2 transition-all">
              Read More
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
