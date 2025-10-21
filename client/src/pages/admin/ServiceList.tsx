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
import { Plus, Edit, Trash2, Eye, Calendar, FileText } from 'lucide-react';
import AdminLayout from './AdminLayout';

interface Service {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
}

const ServiceList: React.FC = () => {
  const [, setLocation] = useLocation();
  const queryClient = useQueryClient();
  const [deleteServiceId, setDeleteServiceId] = useState<string | null>(null);

  // Fetch services
  const { data: services = [], isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await fetch('/api/services');
      if (!response.ok) throw new Error('Failed to fetch services');
      return response.json() as Promise<Service[]>;
    },
  });

  // Delete service mutation
  const deleteServiceMutation = useMutation({
    mutationFn: async (serviceId: string) => {
      const response = await fetch(`/api/services/${serviceId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete service');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['services'] });
      toast({
        title: 'Success',
        description: 'Service deleted successfully!',
      });
      setDeleteServiceId(null);
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const handleDelete = (serviceId: string) => {
    deleteServiceMutation.mutate(serviceId);
  };

  const truncateContent = (content: string | null, maxLength: number = 150) => {
    if (!content) return 'No content available';
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading services...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Services</h1>
          <Button onClick={() => setLocation('/admin/services/new')}>
            <Plus className="w-4 h-4 mr-2" />
            Create New Service
          </Button>
        </div>

        {services.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <div className="text-muted-foreground mb-4">
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold mb-2">No services yet</h3>
                <p>Create your first service to get started.</p>
      </div>
              <Button onClick={() => setLocation('/admin/services/new')}>
                <Plus className="w-4 h-4 mr-2" />
                Create Your First Service
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
              {services.map((service) => (
              <Card key={service.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          Service Page
                        </div>
                        <span className="text-muted-foreground">
                          Slug: <code className="bg-muted px-1 rounded">{service.slug}</code>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setLocation(`/admin/services/edit/${service.id}`)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setDeleteServiceId(service.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Service</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete "{service.title}"? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(service.id)}
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
                      {truncateContent(service.content)}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        {service.metaTitle && (
                          <Badge variant="outline">SEO Optimized</Badge>
                        )}
                        {service.metaDescription && (
                          <Badge variant="outline">Meta Description</Badge>
                        )}
                        {!service.content && (
                          <Badge variant="secondary">No Content</Badge>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setLocation(`/services/${service.slug}`)}
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

export default ServiceList;
