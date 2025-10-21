# Content Generation System Documentation

## Overview

The AstroSEO Content Generation System provides both template-based and AI-enhanced content generation for SEO-optimized pages. It supports generating content for services, industries, comparisons, and blog posts with full programmatic SEO capabilities.

## Features

### 1. Template-Based Content Generation
- Pre-built SEO-optimized templates following instruction.md guidelines
- Generates content with proper structure, keywords, and schema markup
- Supports multiple content types: services, industries, comparisons, blogs
- Includes FAQs, internal links, and meta tags

### 2. AI-Enhanced Content Generation
- Integration with A4F API (Claude Opus model)
- Enhances template content with unique insights
- Maintains technical accuracy while improving engagement
- Generates 3000+ word articles optimized for search engines

### 3. Bulk Content Generation
- Generate multiple pages at once
- Service-city combinations (7 services × 10 cities = 70 pages)
- Industry-city combinations (10 industries × 10 cities = 100 pages)
- Comparison pages for different business structures

## Architecture

### Server Components

#### 1. `server/contentGenerator.ts`
- Core content generation logic
- Template-based content creation
- SEO optimization functions
- Schema markup generation

#### 2. `server/aiContentService.ts`
- A4F API integration
- AI content enhancement
- Bulk generation orchestration
- Content optimization features

#### 3. `server/contentRoutes.ts`
- REST API endpoints
- Request validation
- Response formatting

### Client Components

#### 1. `client/src/pages/admin/ContentGenerator.tsx`
- Admin interface for content generation
- Single and bulk generation options
- AI toggle and configuration
- Content preview and download

## API Endpoints

### Generate Single Content
```
POST /api/content/generate
{
  "service": "LLC Formation",
  "city": "Riyadh",
  "industry": "Technology", // optional
  "contentType": "service", // service|industry|comparison|blog
  "targetLength": 3000,
  "useAI": true
}
```

### Generate Bulk Services
```
POST /api/content/bulk/services
{
  "services": ["LLC Formation", "MISA License"],
  "cities": ["Riyadh", "Jeddah"],
  "useAI": false,
  "targetLength": 3000
}
```

### Generate Bulk Industries
```
POST /api/content/bulk/industries
{
  "industries": ["Restaurant", "E-commerce"],
  "cities": ["Riyadh", "Jeddah"],
  "useAI": false,
  "targetLength": 3000
}
```

### Generate Comparisons
```
POST /api/content/bulk/comparisons
{
  "comparisons": [
    { "optionA": "LLC", "optionB": "Branch Office" }
  ],
  "useAI": false,
  "targetLength": 3000
}
```

### Generate Blog Content
```
POST /api/content/bulk/blogs
{
  "topics": [
    {
      "title": "Complete Guide to Business Setup in Saudi Arabia",
      "service": "Business Setup",
      "city": "Riyadh",
      "industry": "General"
    }
  ],
  "useAI": true,
  "targetLength": 3000
}
```

### Get Content Options
```
GET /api/content/options
```

Returns available services, cities, industries, and content types.

## Configuration

### A4F API Configuration

Set the following environment variables:

```env
A4F_API_KEY=your-api-key-here
```

Or update the configuration in `server/aiContentService.ts`:

```typescript
const A4F_CONFIG: A4FConfig = {
  baseUrl: 'https://api.a4f.co/v1',
  apiKey: process.env.A4F_API_KEY || 'your-api-key',
  modelId: 'provider-7/claude-opus-4-1-20250805'
};
```

## Content Structure

### Generated Content Includes:

1. **SEO Elements**
   - Title tag (50-60 characters)
   - Meta description (150-160 characters)
   - H1 heading
   - Target keywords
   - Internal links

2. **Schema Markup**
   - Organization schema
   - LocalBusiness schema
   - BreadcrumbList schema
   - FAQ schema

3. **Content Sections**
   - Introduction with keyword optimization
   - Why Choose section with location benefits
   - Process breakdown (4 steps)
   - Cost analysis with detailed breakdown
   - Document requirements
   - Timeline expectations
   - FAQs (5+ questions)
   - Additional sections for length

## Usage Guide

### Admin Interface

1. Navigate to `/admin/content-generator`
2. Choose between Single or Bulk generation
3. Toggle AI enhancement if needed
4. Set target word count (default: 3000)
5. Select content parameters
6. Generate content
7. Preview and download results

### Programmatic Usage

```javascript
// Generate single content
const response = await fetch('/api/content/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    service: 'LLC Formation',
    city: 'Riyadh',
    contentType: 'service',
    useAI: true,
    targetLength: 3000
  })
});

const { content } = await response.json();
```

## SEO Best Practices

### Keyword Optimization
- Primary keyword in title, H1, and first paragraph
- Keyword density: 1-2%
- LSI keywords throughout content
- Natural keyword placement

### Content Structure
- Clear heading hierarchy (H1 → H2 → H3)
- Short paragraphs (2-3 sentences)
- Bullet points for easy scanning
- Tables for comparisons

### Internal Linking
- 3-5 internal links per page
- Link to related services
- Link to other city pages
- Link to hub pages

### Schema Implementation
- Multiple schema types per page
- Accurate business information
- Proper breadcrumb structure
- FAQ schema for featured snippets

## Performance Considerations

### Template Generation
- Fast: ~100ms per page
- No external API calls
- Suitable for bulk generation

### AI Enhancement
- Slower: 5-10 seconds per page
- API rate limits apply
- Best for high-value pages
- Costs per API call

### Bulk Generation
- Process in batches
- Monitor API usage
- Consider using template-only for large batches
- AI enhancement for key pages only

## Troubleshooting

### Common Issues

1. **API Key Invalid**
   - Check A4F_API_KEY environment variable
   - Verify key format and permissions

2. **Content Too Short**
   - Increase targetLength parameter
   - Enable AI enhancement
   - Check template completeness

3. **Bulk Generation Timeout**
   - Reduce batch size
   - Disable AI for bulk operations
   - Process in smaller chunks

4. **Schema Validation Errors**
   - Verify JSON structure
   - Check required fields
   - Validate with Google's tool

## Future Enhancements

1. **Multi-language Support**
   - Arabic content generation
   - RTL layout support
   - Localized keywords

2. **Advanced AI Features**
   - Custom training data
   - Industry-specific models
   - Tone customization

3. **Analytics Integration**
   - Track generated content performance
   - A/B testing capabilities
   - Conversion optimization

4. **Workflow Automation**
   - Auto-publish to CMS
   - Scheduled generation
   - Content refresh cycles

## Support

For issues or questions:
- Check server logs for API errors
- Verify configuration settings
- Review generated content structure
- Contact support with error details
