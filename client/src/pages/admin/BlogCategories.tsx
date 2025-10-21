import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
import { Plus, Edit, Trash2, Tag } from 'lucide-react';
import AdminLayout from './AdminLayout';

interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

const BlogCategories: React.FC = () => {
  const queryClient = useQueryClient();
  const [isCreating, setIsCreating] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '', slug: '' });
  const [editingCategory, setEditingCategory] = useState<BlogCategory | null>(null);
  const [editForm, setEditForm] = useState({ name: '', slug: '' });

  // Fetch categories
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['blogCategories'],
    queryFn: async () => {
      const response = await fetch('/api/blog/categories');
      if (!response.ok) throw new Error('Failed to fetch categories');
      return response.json() as Promise<BlogCategory[]>;
    },
  });

  // Create category mutation
  const createCategoryMutation = useMutation({
    mutationFn: async (categoryData: { name: string; slug: string }) => {
      const response = await fetch('/api/blog/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoryData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create category');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogCategories'] });
      toast({
        title: 'Success',
        description: 'Category created successfully!',
      });
      setIsCreating(false);
      setNewCategory({ name: '', slug: '' });
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  // Update category mutation
  const updateCategoryMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: { name: string; slug: string } }) => {
      const response = await fetch(`/api/blog/categories/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update category');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogCategories'] });
      toast({
        title: 'Success',
        description: 'Category updated successfully!',
      });
      setEditingCategory(null);
      setEditForm({ name: '', slug: '' });
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  // Delete category mutation
  const deleteCategoryMutation = useMutation({
    mutationFn: async (categoryId: string) => {
      const response = await fetch(`/api/blog/categories/${categoryId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete category');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogCategories'] });
      toast({
        title: 'Success',
        description: 'Category deleted successfully!',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const generateSlug = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleCreateCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategory.name.trim()) return;
    
    const categoryData = {
      name: newCategory.name.trim(),
      slug: newCategory.slug.trim() || generateSlug(newCategory.name),
    };
    
    createCategoryMutation.mutate(categoryData);
  };

  const handleEditCategory = (category: BlogCategory) => {
    setEditingCategory(category);
    setEditForm({ name: category.name, slug: category.slug });
  };

  const handleUpdateCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCategory || !editForm.name.trim()) return;
    
    const categoryData = {
      name: editForm.name.trim(),
      slug: editForm.slug.trim() || generateSlug(editForm.name),
    };
    
    updateCategoryMutation.mutate({
      id: editingCategory.id,
      data: categoryData,
    });
  };

  const handleDeleteCategory = (categoryId: string) => {
    deleteCategoryMutation.mutate(categoryId);
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading categories...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Blog Categories</h1>
          <Button onClick={() => setIsCreating(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Category
          </Button>
        </div>

        {/* Create Category Form */}
        {isCreating && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Create New Category</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreateCategory} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="categoryName">Category Name *</Label>
                    <Input
                      id="categoryName"
                      value={newCategory.name}
                      onChange={(e) => setNewCategory(prev => ({
                        ...prev,
                        name: e.target.value,
                        slug: prev.slug || generateSlug(e.target.value)
                      }))}
                      placeholder="e.g., Business Setup"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="categorySlug">Slug *</Label>
                    <Input
                      id="categorySlug"
                      value={newCategory.slug}
                      onChange={(e) => setNewCategory(prev => ({
                        ...prev,
                        slug: e.target.value
                      }))}
                      placeholder="business-setup"
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button type="submit" disabled={createCategoryMutation.isPending}>
                    {createCategoryMutation.isPending ? 'Creating...' : 'Create Category'}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsCreating(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Edit Category Form */}
        {editingCategory && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Edit Category</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpdateCategory} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="editCategoryName">Category Name *</Label>
                    <Input
                      id="editCategoryName"
                      value={editForm.name}
                      onChange={(e) => setEditForm(prev => ({
                        ...prev,
                        name: e.target.value,
                        slug: prev.slug || generateSlug(e.target.value)
                      }))}
                      placeholder="e.g., Business Setup"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="editCategorySlug">Slug *</Label>
                    <Input
                      id="editCategorySlug"
                      value={editForm.slug}
                      onChange={(e) => setEditForm(prev => ({
                        ...prev,
                        slug: e.target.value
                      }))}
                      placeholder="business-setup"
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button type="submit" disabled={updateCategoryMutation.isPending}>
                    {updateCategoryMutation.isPending ? 'Updating...' : 'Update Category'}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => {
                      setEditingCategory(null);
                      setEditForm({ name: '', slug: '' });
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Categories List */}
        {categories.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <div className="text-muted-foreground mb-4">
                <Tag className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold mb-2">No categories yet</h3>
                <p>Create your first blog category to get started.</p>
              </div>
              <Button onClick={() => setIsCreating(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Create Your First Category
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-md transition-shadow">
                <CardContent className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Tag className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <h3 className="font-semibold">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Slug: <code className="bg-muted px-1 rounded">{category.slug}</code>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditCategory(category)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Category</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete "{category.name}"? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDeleteCategory(category.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
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

export default BlogCategories;
