import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import BlogCard from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { Search, Filter, TrendingUp, Clock, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { data: posts, isLoading } = useQuery({
    queryKey: ['/api/blog/posts'],
  });

  const categories = [
    { id: 'all', name: 'All Posts', icon: Star },
    { id: 'business-setup', name: 'Business Setup', icon: TrendingUp },
    { id: 'legal', name: 'Legal', icon: Filter },
    { id: 'tax', name: 'Tax', icon: Clock },
  ];

  const filteredPosts = Array.isArray(posts) ? posts.filter((post: any) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }) : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-orange-950/20 opacity-50" />
        </div>
        
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Business Insights & Guides
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Expert advice and insights for doing business in Saudi Arabia
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="sticky top-20 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900'
                      : 'border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container-custom py-16">
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg animate-pulse">
                <div className="h-48 bg-gray-200 dark:bg-gray-800" />
                <div className="p-6">
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded mb-3" />
                  <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded mb-2" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredPosts?.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No articles found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts?.map((post: any) => (
              <BlogCard
                key={post.id}
                id={post.id}
                slug={post.slug}
                title={post.title}
                excerpt={post.metaDescription || post.content?.substring(0, 150) + '...'}
                author="RegisterInKSA Team"
                date={post.createdAt}
                readTime="5 min read"
                category="Business Setup"
                image={post.featuredImage}
              />
            ))}
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Business Insights
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Get the latest news and guides for doing business in Saudi Arabia delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-xl font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
