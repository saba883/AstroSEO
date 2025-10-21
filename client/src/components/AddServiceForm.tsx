import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, Save, Eye } from 'lucide-react';

interface ServiceFormData {
  title: string;
  slug: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
}

const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

const AddServiceForm: React.FC = () => {
  const [, setLocation] = useLocation();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<ServiceFormData>({
    title: '',
    slug: '',
    content: '',
    metaTitle: '',
    metaDescription: '',
  });

  // Create service mutation
  const createServiceMutation = useMutation({
    mutationFn: async (serviceData: ServiceFormData) => {
      const response = await fetch('/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create service');
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Service created successfully!',
      });
      setLocation('/admin/services');
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const handleInputChange = (field: keyof ServiceFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      // Auto-generate slug when title changes
      ...(field === 'title' && { slug: generateSlug(value) }),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createServiceMutation.mutate(formData);
  };

  const handlePreview = () => {
    // For now, just show a preview in console or alert
    // In a real app, you might want to open a preview modal
    alert('Preview functionality would open a modal showing how the service page will look');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setLocation('/admin/services')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Button>
        <h1 className="text-3xl font-bold">Create New Service</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Service Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Enter service title"
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
              <Label htmlFor="content">Content *</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => handleInputChange('content', e.target.value)}
                placeholder="Describe your service in detail..."
                rows={8}
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
            disabled={createServiceMutation.isPending || !formData.title || !formData.content || !formData.slug}
          >
            <Save className="w-4 h-4 mr-2" />
            {createServiceMutation.isPending ? 'Creating...' : 'Create Service'}
        </Button>
      </div>
    </form>
    </div>
  );
};

export default AddServiceForm;
