import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  metaTitle: string | null;
  metaDescription: string | null;
  featuredImage: string | null;
  authorId: string | null;
  createdAt: string;
  updatedAt: string;
}

interface RelatedPostsProps {
  currentSlug: string;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentSlug }) => {
  const { data: relatedPosts = [], isLoading } = useQuery({
    queryKey: ['relatedPosts', currentSlug],
    queryFn: async () => {
      const response = await fetch(`/api/blog/posts/related/${currentSlug}`);
      if (!response.ok) throw new Error('Failed to fetch related posts');
      return response.json() as Promise<BlogPost[]>;
    },
    enabled: !!currentSlug,
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const truncateContent = (content: string, maxLength: number = 120) => {
    const plainText = content.replace(/#{1,6}\s+/g, '').replace(/\*\*/g, '').replace(/\*/g, '');
    if (plainText.length <= maxLength) return plainText;
    return plainText.substring(0, maxLength) + '...';
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Related Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4">
            <div className="text-muted-foreground">Loading related posts...</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Related Articles</CardTitle>
        <p className="text-sm text-muted-foreground">
          Continue exploring our insights on business setup in Saudi Arabia
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          {relatedPosts.map((post) => (
            <article key={post.id} className="group">
              <div className="flex gap-4">
                {post.featuredImage && (
                  <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {post.metaDescription || truncateContent(post.content)}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.createdAt)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {getReadingTime(post.content)} min
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t">
          <Button asChild variant="outline" className="w-full">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatedPosts;
