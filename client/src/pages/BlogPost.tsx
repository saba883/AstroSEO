import React, { useEffect, useState, useMemo } from 'react';
import { Link, useParams } from 'wouter';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  User, 
  Bookmark,
  Twitter,
  Linkedin,
  Facebook,
  Link2,
  CheckCircle,
  Eye,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import RelatedPosts from '@/components/RelatedPosts';
import RelatedServices from '@/components/RelatedServices';
import { TableOfContents, extractHeadings } from '@/components/TableOfContents';
import { staticBlogPosts } from '@/data/staticData';


const BlogPost: React.FC = () => {
  const params = useParams();
  const slug = params.slug;
  const [copied, setCopied] = useState(false);
  const [readProgress, setReadProgress] = useState(0);

  // Get the blog post from static data
  const post = useMemo(() => {
    return staticBlogPosts.find(p => p.slug === slug);
  }, [slug]);

  const isLoading = false;
  const error = !post ? new Error('Post not found') : null;

  // Track reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Copy link to clipboard
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Share functions
  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post?.title || '')}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const formatContent = (content: string) => {
    // Enhanced markdown-like formatting with proper structure
    let formatted = content
      // Headers with proper hierarchy and styling
      .replace(/^#### (.*$)/gim, (match, text) => {
        const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').trim();
        return `<h4 id="${id}" class="text-lg font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">${text}</h4>`;
      })
      .replace(/^### (.*$)/gim, (match, text) => {
        const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').trim();
        return `<h3 id="${id}" class="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100">${text}</h3>`;
      })
      .replace(/^## (.*$)/gim, (match, text) => {
        const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').trim();
        return `<h2 id="${id}" class="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100 border-b pb-2">${text}</h2>`;
      })
      .replace(/^# (.*$)/gim, (match, text) => {
        const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').trim();
        return `<h1 id="${id}" class="text-3xl font-bold mt-10 mb-6 text-gray-900 dark:text-gray-100">${text}</h1>`;
      })
      // Lists
      .replace(/^\* (.+)$/gim, '<li class="ml-6 mb-2 list-disc">$1</li>')
      .replace(/^\d+\. (.+)$/gim, '<li class="ml-6 mb-2 list-decimal">$1</li>')
      .replace(/(<li.*<\/li>\n)(<li)/gim, '$1$2')
      .replace(/(<li.*<\/li>)(?!\n<li)/gim, '<ul class="mb-6">$1</ul>')
      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-gray-100">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-gray-800 dark:text-gray-200">$1</em>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline">$1</a>')
      // Blockquotes
      .replace(/^> (.+)$/gim, '<blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-4 italic text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-950/20">$1</blockquote>')
      // Code blocks
      .replace(/```([^`]+)```/g, '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4"><code class="text-sm">$1</code></pre>')
      // Inline code
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">$1</code>')
      // Paragraphs
      .replace(/\n\n/g, '</p><p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">');
    
    // Wrap in paragraph tags
    formatted = `<p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">${formatted}</p>`;
    
    // Clean up empty paragraphs
    formatted = formatted.replace(/<p[^>]*>[\s]*<\/p>/g, '');
    
    return formatted;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <Header />
        <main className="container-custom py-16">
          <div className="flex items-center justify-center h-64">
            <div className="text-lg text-gray-600 dark:text-gray-400">Loading blog post...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <Header />
        <main className="container-custom py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Post Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <Helmet>
          <title>{post.metaTitle || post.title} | RegisterInKSA</title>
          <meta name="description" content={post.metaDescription || ''} />
          <meta property="og:title" content={post.metaTitle || post.title} />
          <meta property="og:description" content={post.metaDescription || ''} />
          <meta property="og:image" content={post.featuredImage || ''} />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        {/* Reading Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 transition-all duration-300"
            style={{ width: `${readProgress}%` }}
          />
        </div>

        <Header />
        
        <main className="container-custom py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
                <span>/</span>
                <span className="text-gray-900 dark:text-white truncate max-w-xs">{post.title}</span>
              </nav>

              {/* Article */}
              <article className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-8 md:p-12">
                <header className="mb-8">
                  {/* Categories */}
                  <div className="flex gap-2 mb-4">
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400">
                      {post.category === 'business-setup' ? 'Business Setup' : 
                       post.category === 'legal' ? 'Legal' : 
                       post.category === 'tax' ? 'Tax' : 'Guide'}
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400">Saudi Arabia</Badge>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                    {post.title}
                  </h1>
                  
                  {post.metaDescription && (
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {post.metaDescription}
                    </p>
                  )}

                  {/* Author and Meta Info */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/images/general/team-support-1.jpg" />
                        <AvatarFallback>AA</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{post.author}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.createdAt)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            2.5k views
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Share Buttons */}
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={shareOnTwitter}
                        className="hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/30"
                      >
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={shareOnLinkedIn}
                        className="hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/30"
                      >
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={shareOnFacebook}
                        className="hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/30"
                      >
                        <Facebook className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={copyLink}
                        className="hover:bg-green-50 hover:text-green-600 dark:hover:bg-green-950/30"
                      >
                        {copied ? <CheckCircle className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                      </Button>
                      <Button variant="outline" size="icon">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Featured Image */}
                  {post.featuredImage && (
                    <div className="aspect-video overflow-hidden rounded-2xl mb-8 shadow-lg">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </header>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-950/20 prose-blockquote:py-2 prose-blockquote:px-4 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-pre:border"
                  dangerouslySetInnerHTML={{ 
                    __html: formatContent(post.content) 
                  }}
                />

                {/* Article Footer */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Tags:</span>
                    {post.category === 'business-setup' && (
                      <>
                        <Badge variant="secondary">Business Setup</Badge>
                        <Badge variant="secondary">Company Formation</Badge>
                      </>
                    )}
                    {post.category === 'legal' && (
                      <>
                        <Badge variant="secondary">Legal</Badge>
                        <Badge variant="secondary">Regulations</Badge>
                      </>
                    )}
                    <Badge variant="secondary">Saudi Arabia</Badge>
                    <Badge variant="secondary">Foreign Investment</Badge>
                  </div>

                  {/* Author Bio */}
                  <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-orange-950/20 rounded-2xl p-6 mb-8">
                    <div className="flex gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="/images/general/team-support-1.jpg" />
                        <AvatarFallback>AA</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">About the Author</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                          The RegisterInKSA team consists of business formation experts with over 15 years of experience 
                          helping international companies establish their presence in Saudi Arabia.
                        </p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <User className="w-4 h-4 mr-2" />
                            View Profile
                          </Button>
                          <Button variant="outline" size="sm">
                            <Twitter className="w-4 h-4 mr-2" />
                            Follow
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Share CTA */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Found this article helpful?</h3>
                        <p className="text-white/90">
                          Share it with your network to help others succeed in Saudi Arabia.
                        </p>
                      </div>
                      <Button 
                        onClick={shareOnLinkedIn}
                        className="bg-white hover:bg-gray-100 text-gray-900"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Article
                      </Button>
                    </div>
                  </div>
                </div>
              </article>

              {/* Related Posts */}
              <div className="mt-12">
                {slug && <RelatedPosts currentSlug={slug} />}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    Table of Contents
                  </h3>
                  <TableOfContents headings={extractHeadings(post.content)} />
                </div>

                {/* Related Services */}
                <div>
                  <RelatedServices 
                    serviceIds={['llc-formation', 'misa-license', 'commercial-registration']} 
                  />
                </div>

                {/* Newsletter CTA */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                  <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
                  <p className="text-sm text-white/90 mb-4">
                    Get the latest insights on business setup in Saudi Arabia delivered to your inbox.
                  </p>
                  <Button className="w-full bg-white hover:bg-gray-100 text-gray-900">
                    Subscribe to Newsletter
                  </Button>
                </div>

                {/* Quick Help */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Need Immediate Help?</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Free Consultation
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="https://wa.me/966507688714" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Support
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/#cost-calculator">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        Calculate Setup Cost
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>

        {/* Bottom CTA */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Get Started Today</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Business in Saudi Arabia?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join over 3,200 successful companies we've helped establish in the Kingdom
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-6 text-base font-medium rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/">Get Free Consultation</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/50 px-8 py-6 text-base font-medium rounded-2xl transition-all duration-300"
                >
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </HelmetProvider>
  );
};

export default BlogPost;
