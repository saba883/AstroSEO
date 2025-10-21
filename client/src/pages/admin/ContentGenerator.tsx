import React, { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, Download, Eye, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContentOptions {
  services: string[];
  cities: string[];
  industries: string[];
  contentTypes: string[];
  comparisons: Array<{ optionA: string; optionB: string }>;
}

interface GeneratedContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string;
  keywords: string[];
  aiEnhanced?: boolean;
}

const ContentGenerator: React.FC = () => {
  const { toast } = useToast();
  const [selectedTab, setSelectedTab] = useState('single');
  const [useAI, setUseAI] = useState(false);
  const [targetLength, setTargetLength] = useState(3000);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);

  // Single content generation state
  const [service, setService] = useState('');
  const [city, setCity] = useState('');
  const [industry, setIndustry] = useState('');
  const [contentType, setContentType] = useState('service');

  // Bulk generation state
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

  // Fetch content options
  const { data: options, isLoading: optionsLoading } = useQuery<ContentOptions>({
    queryKey: ['contentOptions'],
    queryFn: async () => {
      const response = await fetch('/api/content/options');
      if (!response.ok) throw new Error('Failed to fetch options');
      return response.json();
    }
  });

  // Generate single content mutation
  const generateSingle = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch('/api/content/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Failed to generate content');
      return response.json();
    },
    onSuccess: (data) => {
      setGeneratedContent(data.content);
      toast({
        title: 'Content Generated',
        description: `Successfully generated ${useAI ? 'AI-enhanced' : 'template-based'} content`,
      });
    },
    onError: (error) => {
      toast({
        title: 'Generation Failed',
        description: error.message,
        variant: 'destructive',
      });
    }
  });

  // Generate bulk content mutation
  const generateBulk = useMutation({
    mutationFn: async (data: any) => {
      const endpoint = data.type === 'services' 
        ? '/api/content/bulk/services'
        : data.type === 'industries'
        ? '/api/content/bulk/industries'
        : '/api/content/bulk/comparisons';
        
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Failed to generate bulk content');
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: 'Bulk Generation Complete',
        description: `Generated ${data.successful} items successfully, ${data.failed} failed`,
      });
    },
    onError: (error) => {
      toast({
        title: 'Bulk Generation Failed',
        description: error.message,
        variant: 'destructive',
      });
    }
  });

  const handleSingleGenerate = () => {
    if (!service || !city || !contentType) {
      toast({
        title: 'Missing Fields',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    generateSingle.mutate({
      service,
      city,
      industry: contentType === 'industry' ? industry : undefined,
      contentType,
      targetLength,
      useAI
    });
  };

  const handleBulkGenerate = (type: string) => {
    if (type === 'services' && (!selectedServices.length || !selectedCities.length)) {
      toast({
        title: 'Missing Selection',
        description: 'Please select at least one service and one city',
        variant: 'destructive',
      });
      return;
    }

    if (type === 'industries' && (!selectedIndustries.length || !selectedCities.length)) {
      toast({
        title: 'Missing Selection',
        description: 'Please select at least one industry and one city',
        variant: 'destructive',
      });
      return;
    }

    generateBulk.mutate({
      type,
      services: selectedServices,
      cities: selectedCities,
      industries: selectedIndustries,
      useAI,
      targetLength
    });
  };

  const downloadContent = () => {
    if (!generatedContent) return;

    const blob = new Blob([generatedContent.content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${generatedContent.title.toLowerCase().replace(/\s+/g, '-')}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (optionsLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Content Generator</h1>
        <p className="text-muted-foreground mt-2">
          Generate SEO-optimized content for services, industries, and blog posts
        </p>
      </div>

      {/* AI Toggle */}
      <Card>
        <CardHeader>
          <CardTitle>AI Enhancement</CardTitle>
          <CardDescription>
            Enable AI to enhance content with unique insights and better SEO optimization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Switch
              checked={useAI}
              onCheckedChange={setUseAI}
              id="ai-toggle"
            />
            <Label htmlFor="ai-toggle" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Use AI Enhancement (A4F API)
            </Label>
          </div>
          <div className="mt-4">
            <Label htmlFor="target-length">Target Length (words)</Label>
            <Input
              id="target-length"
              type="number"
              value={targetLength}
              onChange={(e) => setTargetLength(parseInt(e.target.value) || 3000)}
              min={1000}
              max={10000}
              step={500}
            />
          </div>
        </CardContent>
      </Card>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="single">Single Content</TabsTrigger>
          <TabsTrigger value="bulk">Bulk Generation</TabsTrigger>
        </TabsList>

        {/* Single Content Generation */}
        <TabsContent value="single" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Generate Single Content</CardTitle>
              <CardDescription>
                Create a single piece of content with specific parameters
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="content-type">Content Type</Label>
                  <Select value={contentType} onValueChange={setContentType}>
                    <SelectTrigger id="content-type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {options?.contentTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="service">Service</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {options?.services.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="city">City</Label>
                  <Select value={city} onValueChange={setCity}>
                    <SelectTrigger id="city">
                      <SelectValue placeholder="Select a city" />
                    </SelectTrigger>
                    <SelectContent>
                      {options?.cities.map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {contentType === 'industry' && (
                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <Select value={industry} onValueChange={setIndustry}>
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="Select an industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {options?.industries.map((i) => (
                          <SelectItem key={i} value={i}>{i}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              <Button 
                onClick={handleSingleGenerate}
                disabled={generateSingle.isPending}
                className="w-full"
              >
                {generateSingle.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Content'
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Content Preview */}
          {generatedContent && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{generatedContent.title}</CardTitle>
                    <CardDescription>{generatedContent.metaDescription}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">
                      {generatedContent.content.split(/\s+/).filter(word => word.length > 0).length} words
                    </Badge>
                    {generatedContent.aiEnhanced && (
                      <Badge variant="secondary">
                        <Sparkles className="w-3 h-3 mr-1" />
                        AI Enhanced
                      </Badge>
                    )}
                    <Button size="sm" variant="outline" onClick={downloadContent}>
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label>Keywords</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {generatedContent.keywords.map((keyword, index) => (
                        <Badge key={index} variant="outline">{keyword}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label>Content Preview</Label>
                    <Textarea
                      value={generatedContent.content.substring(0, 500) + '...'}
                      readOnly
                      className="mt-2 h-32"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Bulk Content Generation */}
        <TabsContent value="bulk" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bulk Service Content</CardTitle>
              <CardDescription>
                Generate content for multiple service-city combinations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Select Services</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {options?.services.map((s) => (
                    <div key={s} className="flex items-center space-x-2">
                      <Checkbox
                        id={`service-${s}`}
                        checked={selectedServices.includes(s)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedServices([...selectedServices, s]);
                          } else {
                            setSelectedServices(selectedServices.filter(srv => srv !== s));
                          }
                        }}
                      />
                      <Label 
                        htmlFor={`service-${s}`} 
                        className="text-sm font-normal cursor-pointer"
                      >
                        {s}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label>Select Cities</Label>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {options?.cities.map((c) => (
                    <div key={c} className="flex items-center space-x-2">
                      <Checkbox
                        id={`city-${c}`}
                        checked={selectedCities.includes(c)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedCities([...selectedCities, c]);
                          } else {
                            setSelectedCities(selectedCities.filter(city => city !== c));
                          }
                        }}
                      />
                      <Label 
                        htmlFor={`city-${c}`} 
                        className="text-sm font-normal cursor-pointer"
                      >
                        {c}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Alert>
                <AlertDescription>
                  This will generate {selectedServices.length * selectedCities.length} content pieces
                </AlertDescription>
              </Alert>

              <Button 
                onClick={() => handleBulkGenerate('services')}
                disabled={generateBulk.isPending}
                className="w-full"
              >
                {generateBulk.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Service Content'
                )}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bulk Industry Content</CardTitle>
              <CardDescription>
                Generate content for multiple industry-city combinations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Select Industries</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {options?.industries.map((i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <Checkbox
                        id={`industry-${i}`}
                        checked={selectedIndustries.includes(i)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedIndustries([...selectedIndustries, i]);
                          } else {
                            setSelectedIndustries(selectedIndustries.filter(ind => ind !== i));
                          }
                        }}
                      />
                      <Label 
                        htmlFor={`industry-${i}`} 
                        className="text-sm font-normal cursor-pointer"
                      >
                        {i}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Alert>
                <AlertDescription>
                  This will generate {selectedIndustries.length * selectedCities.length} content pieces
                </AlertDescription>
              </Alert>

              <Button 
                onClick={() => handleBulkGenerate('industries')}
                disabled={generateBulk.isPending}
                className="w-full"
              >
                {generateBulk.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Industry Content'
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentGenerator;
