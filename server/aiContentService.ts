import { generateSEOContent } from './contentGenerator';

interface A4FConfig {
  baseUrl: string;
  apiKey: string;
  modelId: string;
}

interface AIGenerationRequest {
  service: string;
  city: string;
  industry?: string;
  contentType: 'service' | 'industry' | 'comparison' | 'blog';
  targetLength?: number;
  useAI?: boolean;
}

interface AIResponse {
  content: string;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// A4F API Configuration
const A4F_CONFIG: A4FConfig = {
  baseUrl: 'https://api.a4f.co/v1',
  apiKey: process.env.A4F_API_KEY || 'ddc-a4f-b0aa18cb214544e8b2ba7d5cd2c33425',
  modelId: 'claude-3-opus-20240229' // Updated to use standard Claude model ID
};

// AI-powered content enhancement
export async function generateAIEnhancedContent(request: AIGenerationRequest) {
  // First, generate base content using templates
  const baseContent = await generateSEOContent({
    service: request.service,
    city: request.city,
    industry: request.industry,
    contentType: request.contentType,
    targetLength: request.targetLength || 3000
  });

  // If AI enhancement is not requested, return base content
  if (!request.useAI) {
    return baseContent;
  }

  try {
    // Enhance content with AI
    const enhancedContent = await enhanceWithAI(baseContent, request);
    return enhancedContent;
  } catch (error) {
    console.error('AI enhancement failed, returning base content:', error);
    return baseContent;
  }
}

async function enhanceWithAI(baseContent: any, request: AIGenerationRequest) {
  const prompt = createAIPrompt(baseContent, request);
  
  try {
    const response = await callA4FAPI(prompt);
    
    // Parse and integrate AI response
    const aiContent = parseAIResponse(response);
    
    // Merge AI content with base content
    return mergeAIContent(baseContent, aiContent);
  } catch (error) {
    console.error('Error calling A4F API:', error);
    throw error;
  }
}

function createAIPrompt(baseContent: any, request: AIGenerationRequest): string {
  const { service, city, industry, contentType, targetLength = 3000 } = request;
  
  let prompt = `You are an expert SEO content writer specializing in Saudi Arabian business formation services. 
Your task is to enhance and expand the following content to make it more engaging, informative, and SEO-optimized.

Context:
- Service: ${service}
- City: ${city}
${industry ? `- Industry: ${industry}` : ''}
- Content Type: ${contentType}
- Target Length: ${targetLength} words
- Target Audience: International investors and entrepreneurs looking to establish businesses in Saudi Arabia

Current Content Structure:
Title: ${baseContent.title}
Meta Description: ${baseContent.metaDescription}
Keywords: ${baseContent.keywords.join(', ')}

Requirements:
1. Maintain all technical accuracy about Saudi Arabian business regulations
2. Keep the content SEO-optimized for the provided keywords
3. Add unique insights and value propositions
4. Include specific examples and case studies relevant to ${city}
5. Ensure the content flows naturally and engages the reader
6. Add industry-specific information if applicable
7. Include current market trends and opportunities
8. Maintain a professional yet approachable tone

Please enhance the following content sections:

${baseContent.content}

Additional Instructions:
- Expand each section with more detailed information
- Add relevant statistics and data points
- Include practical tips and actionable advice
- Ensure all information is accurate and up-to-date
- Make the content comprehensive enough to rank well in search engines
- Target a reading level appropriate for business professionals

Output the enhanced content in markdown format, maintaining the same structure but with richer, more detailed information.`;

  return prompt;
}

async function callA4FAPI(prompt: string): Promise<AIResponse> {
  const requestBody = {
    model: A4F_CONFIG.modelId,
    messages: [
      {
        role: 'system',
        content: 'You are an expert SEO content writer specializing in Saudi Arabian business formation services. You provide accurate, detailed, and engaging content that helps businesses understand the process of setting up in Saudi Arabia.'
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    temperature: 0.7,
    max_tokens: 4000,
    top_p: 0.9,
    frequency_penalty: 0.3,
    presence_penalty: 0.3
  };

  try {
    const response = await fetch(`${A4F_CONFIG.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${A4F_CONFIG.apiKey}`
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('A4F API Error Response:', errorText);
      throw new Error(`A4F API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    
    return {
      content: data.choices[0].message.content,
      usage: data.usage
    };
  } catch (error) {
    console.error('Error calling A4F API:', error);
    throw error;
  }
}

function parseAIResponse(response: AIResponse): any {
  // Extract and structure the AI-generated content
  const content = response.content;
  
  // Parse markdown sections
  const sections = content.split(/^##\s+/m).filter(Boolean);
  
  return {
    enhancedContent: content,
    sections: sections,
    usage: response.usage
  };
}

function mergeAIContent(baseContent: any, aiContent: any): any {
  // Merge AI-enhanced content with base content structure
  return {
    ...baseContent,
    content: aiContent.enhancedContent,
    aiEnhanced: true,
    usage: aiContent.usage,
    generatedAt: new Date().toISOString()
  };
}

// Batch content generation for programmatic SEO
export async function generateBulkContent(
  services: string[],
  cities: string[],
  options: {
    contentType: 'service' | 'industry' | 'comparison' | 'blog';
    useAI?: boolean;
    targetLength?: number;
  }
) {
  const results = [];
  
  for (const service of services) {
    for (const city of cities) {
      try {
        const content = await generateAIEnhancedContent({
          service,
          city,
          contentType: options.contentType,
          useAI: options.useAI,
          targetLength: options.targetLength
        });
        
        results.push({
          service,
          city,
          content,
          slug: `${service.toLowerCase().replace(/ /g, '-')}-${city.toLowerCase()}`,
          status: 'success'
        });
      } catch (error) {
        results.push({
          service,
          city,
          error: error instanceof Error ? error.message : String(error),
          slug: `${service.toLowerCase().replace(/ /g, '-')}-${city.toLowerCase()}`,
          status: 'error'
        });
      }
    }
  }
  
  return results;
}

// Generate industry-specific content
export async function generateIndustryContent(
  industries: string[],
  cities: string[],
  options: {
    useAI?: boolean;
    targetLength?: number;
  }
) {
  const results = [];
  
  for (const industry of industries) {
    for (const city of cities) {
      try {
        const content = await generateAIEnhancedContent({
          service: `${industry} Business Setup`,
          city,
          industry,
          contentType: 'industry',
          useAI: options.useAI,
          targetLength: options.targetLength
        });
        
        results.push({
          industry,
          city,
          content,
          slug: `${industry.toLowerCase().replace(/ /g, '-')}-business-setup-${city.toLowerCase()}`,
          status: 'success'
        });
      } catch (error) {
        results.push({
          industry,
          city,
          error: error instanceof Error ? error.message : String(error),
          slug: `${industry.toLowerCase().replace(/ /g, '-')}-business-setup-${city.toLowerCase()}`,
          status: 'error'
        });
      }
    }
  }
  
  return results;
}

// Generate comparison content
export async function generateComparisonContent(
  comparisons: Array<{ optionA: string; optionB: string }>,
  options: {
    useAI?: boolean;
    targetLength?: number;
  }
) {
  const results = [];
  
  for (const comparison of comparisons) {
    try {
      const content = await generateAIEnhancedContent({
        service: `${comparison.optionA} vs ${comparison.optionB}`,
        city: 'Saudi Arabia',
        contentType: 'comparison',
        useAI: options.useAI,
        targetLength: options.targetLength
      });
      
      results.push({
        comparison,
        content,
        slug: `${comparison.optionA.toLowerCase().replace(/ /g, '-')}-vs-${comparison.optionB.toLowerCase().replace(/ /g, '-')}`,
        status: 'success'
      });
    } catch (error) {
      results.push({
        comparison,
        error: error instanceof Error ? error.message : String(error),
        slug: `${comparison.optionA.toLowerCase().replace(/ /g, '-')}-vs-${comparison.optionB.toLowerCase().replace(/ /g, '-')}`,
        status: 'error'
      });
    }
  }
  
  return results;
}

// Generate blog content with AI
export async function generateBlogContent(
  topics: Array<{ title: string; service: string; city: string; industry?: string }>,
  options: {
    useAI?: boolean;
    targetLength?: number;
  }
) {
  const results = [];
  
  for (const topic of topics) {
    try {
      const content = await generateAIEnhancedContent({
        service: topic.service,
        city: topic.city,
        industry: topic.industry,
        contentType: 'blog',
        useAI: options.useAI,
        targetLength: options.targetLength || 3000
      });
      
      // Customize blog title
      content.title = topic.title;
      content.h1 = topic.title;
      
      results.push({
        topic,
        content,
        slug: topic.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        status: 'success'
      });
    } catch (error) {
      results.push({
        topic,
        error: error instanceof Error ? error.message : String(error),
        slug: topic.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        status: 'error'
      });
    }
  }
  
  return results;
}

// Content optimization with AI
export async function optimizeExistingContent(
  content: string,
  metadata: {
    currentTitle: string;
    currentKeywords: string[];
    targetKeywords: string[];
    contentType: string;
  }
): Promise<any> {
  const prompt = `Please optimize the following content for SEO:

Current Title: ${metadata.currentTitle}
Current Keywords: ${metadata.currentKeywords.join(', ')}
Target Keywords: ${metadata.targetKeywords.join(', ')}
Content Type: ${metadata.contentType}

Current Content:
${content}

Please:
1. Optimize the content for the target keywords
2. Improve readability and engagement
3. Add relevant internal linking suggestions
4. Enhance meta descriptions
5. Suggest header optimizations
6. Add schema markup recommendations

Output the optimized content with clear sections for each optimization.`;

  try {
    const response = await callA4FAPI(prompt);
    return parseAIResponse(response);
  } catch (error) {
    console.error('Error optimizing content:', error);
    throw error;
  }
}

// Export all functions for use in routes
export default {
  generateAIEnhancedContent,
  generateBulkContent,
  generateIndustryContent,
  generateComparisonContent,
  generateBlogContent,
  optimizeExistingContent
};
