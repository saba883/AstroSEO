import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ArrowRight, Info, AlertCircle, TrendingUp, Shield, Users, Briefcase } from 'lucide-react';

interface ServiceContentProps {
  content: string;
  serviceName?: string;
}

const ServiceContent: React.FC<ServiceContentProps> = ({ content, serviceName }) => {
  // Parse the content to extract sections
  const sections = content.split(/(?=^#{1,3}\s)/gm).filter(Boolean);
  
  // Function to parse markdown-like content
  const parseContent = (text: string) => {
    // Extract heading level and text
    const headingMatch = text.match(/^(#{1,3})\s(.+)$/m);
    const level = headingMatch ? headingMatch[1].length : 0;
    const heading = headingMatch ? headingMatch[2] : '';
    
    // Remove the heading from content
    const bodyContent = text.replace(/^#{1,3}\s.+$/m, '').trim();
    
    // Parse lists
    const listItems = bodyContent.match(/^[-*]\s(.+)$/gm);
    const paragraphs = bodyContent
      .split(/\n\n/)
      .filter(p => !p.match(/^[-*]\s/))
      .filter(Boolean);
    
    return { level, heading, paragraphs, listItems };
  };
  
  // Function to get icon based on content
  const getIcon = (heading: string) => {
    const lowerHeading = heading.toLowerCase();
    if (lowerHeading.includes('why') || lowerHeading.includes('benefit')) return <TrendingUp className="w-5 h-5" />;
    if (lowerHeading.includes('process') || lowerHeading.includes('step')) return <ArrowRight className="w-5 h-5" />;
    if (lowerHeading.includes('requirement')) return <CheckCircle2 className="w-5 h-5" />;
    if (lowerHeading.includes('compliance') || lowerHeading.includes('legal')) return <Shield className="w-5 h-5" />;
    if (lowerHeading.includes('team') || lowerHeading.includes('support')) return <Users className="w-5 h-5" />;
    if (lowerHeading.includes('service') || lowerHeading.includes('solution')) return <Briefcase className="w-5 h-5" />;
    if (lowerHeading.includes('important') || lowerHeading.includes('note')) return <AlertCircle className="w-5 h-5" />;
    return <Info className="w-5 h-5" />;
  };
  
  // Function to format text with bold and italic
  const formatText = (text: string) => {
    // Handle bold text
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');
    // Handle italic text
    formatted = formatted.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
    return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
  };

  // Limit content to first few sections for better page structure
  const displaySections = sections.slice(0, 3); // Show only first 3 sections
  
  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium">
              Comprehensive Information
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Detailed insights and requirements for {serviceName || 'our services'} in Saudi Arabia
            </p>
          </div>

          {/* Content Sections - Limited Display */}
          <div className="space-y-8">
            {displaySections.map((section, index) => {
              const { level, heading, paragraphs, listItems } = parseContent(section);
              
              if (!heading && paragraphs.length === 0 && !listItems) return null;
              
              // Main title (h1) - display as hero content
              if (level === 1) {
                return (
                  <Card key={index} className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-50" />
                    <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm relative z-10">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary">
                        {heading}
                      </h3>
                    </CardHeader>
                    <CardContent className="py-8 px-6 md:px-8 relative z-10">
                      {paragraphs.slice(0, 2).map((para, pIndex) => (
                        <p key={pIndex} className="text-lg leading-relaxed mb-4 last:mb-0 text-foreground/90">
                          {formatText(para)}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                );
              }
              
              // Section headings (h2)
              if (level === 2) {
                return (
                  <div key={index} className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl text-primary shadow-md">
                        {getIcon(heading)}
                      </div>
                      <h3 className="text-2xl font-bold">{heading}</h3>
                    </div>
                    
                    {paragraphs.length > 0 && (
                      <div className="prose prose-lg max-w-none">
                        {paragraphs.map((para, pIndex) => (
                          <p key={pIndex} className="text-muted-foreground mb-4">
                            {formatText(para)}
                          </p>
                        ))}
                      </div>
                    )}
                    
                    {listItems && listItems.length > 0 && (
                      <div className="grid md:grid-cols-2 gap-4 mt-6">
                        {listItems.map((item, lIndex) => {
                          const itemText = item.replace(/^[-*]\s/, '');
                          const [title, ...descParts] = itemText.split(':');
                          const description = descParts.join(':').trim();
                          
                          return (
                            <Card key={lIndex} className="border-0 bg-gradient-to-br from-card via-card/98 to-card/95 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                              <CardContent className="py-5 px-6">
                                <div className="flex gap-3">
                                  <div className="p-1.5 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                                      {formatText(title)}
                                    </h4>
                                    {description && (
                                      <p className="text-sm text-muted-foreground">
                                        {formatText(description)}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              
              // Subsection headings (h3)
              if (level === 3) {
                return (
                  <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-muted/50 via-muted/30 to-muted/20">
                    <CardContent className="py-6 px-6">
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg shadow-sm">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        {heading}
                      </h4>
                      
                      {paragraphs.map((para, pIndex) => (
                        <p key={pIndex} className="text-muted-foreground mb-3 last:mb-0">
                          {formatText(para)}
                        </p>
                      ))}
                      
                      {listItems && listItems.length > 0 && (
                        <ul className="space-y-3 mt-4">
                          {listItems.map((item, lIndex) => (
                            <li key={lIndex} className="flex gap-3">
                              <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {formatText(item.replace(/^[-*]\s/, ''))}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                );
              }
              
              // Regular paragraphs without heading
              return (
                <div key={index} className="prose prose-lg max-w-none">
                  {paragraphs.map((para, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground mb-4">
                      {formatText(para)}
                    </p>
                  ))}
                  
                  {listItems && listItems.length > 0 && (
                    <ul className="space-y-3 my-6">
                      {listItems.map((item, lIndex) => (
                        <li key={lIndex} className="flex gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{formatText(item.replace(/^[-*]\s/, ''))}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContent;
