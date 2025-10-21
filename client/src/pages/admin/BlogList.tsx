import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { toast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Eye, Calendar, User } from 'lucide-react';
import AdminLayout from './AdminLayout';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  metaTitle: string | null;
  metaDescription: string | null;
  featuredImage: string | null;
  authorId: string | null;
  relatedServices: string | null;
  createdAt: string;
  updatedAt: string;
}

const BlogList: React.FC = () => {
  const [, setLocation] = useLocation();
  const queryClient = useQueryClient();
  const [deletePostId, setDeletePostId] = useState<string | null>(null);

  // Fetch blog posts
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: async () => {
      const response = await fetch('/api/blog/posts');
      if (!response.ok) throw new Error('Failed to fetch blog posts');
      return response.json() as Promise<BlogPost[]>;
    },
  });

  // Delete blog post mutation
  const deletePostMutation = useMutation({
    mutationFn: async (postId: string) => {
      const response = await fetch(`/api/blog/posts/${postId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete blog post');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogPosts'] });
      toast({
        title: 'Success',
        description: 'Blog post deleted successfully!',
      });
      setDeletePostId(null);
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const handleDelete = (postId: string) => {
    deletePostMutation.mutate(postId);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const truncateContent = (content: string, maxLength: number = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading blog posts...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Blog Posts</h1>
          <Button onClick={() => setLocation('/admin/blog/new')}>
            <Plus className="w-4 h-4 mr-2" />
            Create New Post
          </Button>
        </div>

        {posts.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <div className="text-muted-foreground mb-4">
                <Edit className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold mb-2">No blog posts yet</h3>
                <p>Create your first blog post to get started.</p>
              </div>
              <Button onClick={() => setLocation('/admin/blog/new')}>
                <Plus className="w-4 h-4 mr-2" />
                Create Your First Post
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.createdAt)}
                        </div>
                        {post.updatedAt !== post.createdAt && (
                          <Badge variant="secondary">Updated</Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setLocation(`/admin/blog/edit/${post.id}`)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setDeletePostId(post.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Blog Post</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete "{post.title}"? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(post.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      {truncateContent(post.content)}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <span className="text-muted-foreground">
                          Slug: <code className="bg-muted px-1 rounded">{post.slug}</code>
                        </span>
                        {post.featuredImage && (
                          <Badge variant="outline">Has Image</Badge>
                        )}
                        {post.metaTitle && (
                          <Badge variant="outline">SEO Optimized</Badge>
                        )}
                        {post.relatedServices && (
                          <Badge variant="outline">Related Services</Badge>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setLocation(`/blog/${post.slug}`)}
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </div>
      </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default BlogList;
