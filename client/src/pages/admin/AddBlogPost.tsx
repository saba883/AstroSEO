import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, Save, Eye } from 'lucide-react';
import AdminLayout from './AdminLayout';

interface BlogPostFormData {
  title: string;
  slug: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  featuredImage: string;
  categoryId: string;
  relatedServices: string[];
}

const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

const AddBlogPost: React.FC = () => {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState<BlogPostFormData>({
    title: '',
    slug: '',
    content: '',
    metaTitle: '',
    metaDescription: '',
    featuredImage: '',
    categoryId: '',
    relatedServices: [],
  });

  // Fetch categories for the select dropdown
  const { data: categories = [] } = useQuery({
    queryKey: ['blogCategories'],
    queryFn: async () => {
      const response = await fetch('/api/blog/categories');
      if (!response.ok) throw new Error('Failed to fetch categories');
      return response.json();
    },
  });

  // Fetch services for related services selection
  const { data: services = [] } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await fetch('/api/services');
      if (!response.ok) throw new Error('Failed to fetch services');
      return response.json();
    },
  });

  // Create blog post mutation
  const createPostMutation = useMutation({
    mutationFn: async (postData: BlogPostFormData) => {
      const response = await fetch('/api/blog/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create blog post');
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Blog post created successfully!',
      });
      setLocation('/admin/blog');
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const handleInputChange = (field: keyof BlogPostFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      // Auto-generate slug when title changes
      ...(field === 'title' && { slug: generateSlug(value) }),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPostMutation.mutate(formData);
  };

  const handlePreview = () => {
    // For now, just show a preview in console or alert
    // In a real app, you might want to open a preview modal
    alert('Preview functionality would open a modal showing how the post will look');
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLocation('/admin/blog')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
          <h1 className="text-3xl font-bold">Create New Blog Post</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Post Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="Enter blog post title"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">Slug *</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => handleInputChange('slug', e.target.value)}
                    placeholder="url-friendly-slug"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.categoryId}
                  onValueChange={(value) => handleInputChange('categoryId', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category: any) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="featuredImage">Featured Image URL</Label>
                <Input
                  id="featuredImage"
                  value={formData.featuredImage}
                  onChange={(e) => handleInputChange('featuredImage', e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="space-y-2">
                <Label>Related Services</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 border rounded-lg">
                  {services.map((service: any) => (
                    <div key={service.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`service-${service.id}`}
                        checked={formData.relatedServices.includes(service.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setFormData(prev => ({
                              ...prev,
                              relatedServices: [...prev.relatedServices, service.id]
                            }));
                          } else {
                            setFormData(prev => ({
                              ...prev,
                              relatedServices: prev.relatedServices.filter(id => id !== service.id)
                            }));
                          }
                        }}
                      />
                      <Label 
                        htmlFor={`service-${service.id}`} 
                        className="text-sm font-normal cursor-pointer"
                      >
                        {service.title}
                      </Label>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Select services that are related to this blog post content.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content *</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => handleInputChange('content', e.target.value)}
                  placeholder="Write your blog post content here..."
                  rows={12}
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  value={formData.metaTitle}
                  onChange={(e) => handleInputChange('metaTitle', e.target.value)}
                  placeholder="SEO title for search engines"
                  maxLength={60}
                />
                <p className="text-sm text-muted-foreground">
                  {formData.metaTitle.length}/60 characters
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  value={formData.metaDescription}
                  onChange={(e) => handleInputChange('metaDescription', e.target.value)}
                  placeholder="Brief description for search engines"
                  rows={3}
                  maxLength={160}
                />
                <p className="text-sm text-muted-foreground">
                  {formData.metaDescription.length}/160 characters
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={handlePreview}
              disabled={!formData.title || !formData.content}
            >
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button
              type="submit"
              disabled={createPostMutation.isPending || !formData.title || !formData.content || !formData.slug}
            >
              <Save className="w-4 h-4 mr-2" />
              {createPostMutation.isPending ? 'Creating...' : 'Create Post'}
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddBlogPost;
