import { Router } from 'express';
import aiContentService from './aiContentService';
import { generateSEOContent } from './contentGenerator';

const router = Router();

// Generate single content piece
router.post('/api/content/generate', async (req, res) => {
  try {
    const { service, city, industry, contentType, targetLength, useAI } = req.body;
    
    if (!service || !city || !contentType) {
      return res.status(400).json({ 
        error: 'Missing required fields: service, city, and contentType are required' 
      });
    }
    
    const content = await aiContentService.generateAIEnhancedContent({
      service,
      city,
      industry,
      contentType,
      targetLength: targetLength || 3000,
      useAI: useAI || false
    });
    
    res.json({ success: true, content });
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).json({ 
      error: 'Failed to generate content',
      message: error instanceof Error ? error.message : String(error)
    });
  }
});

// Generate bulk service content
router.post('/api/content/bulk/services', async (req, res) => {
  try {
    const { services, cities, useAI, targetLength } = req.body;
    
    if (!services || !cities || !Array.isArray(services) || !Array.isArray(cities)) {
      return res.status(400).json({ 
        error: 'Services and cities must be provided as arrays' 
      });
    }
    
    const results = await aiContentService.generateBulkContent(
      services,
      cities,
      {
        contentType: 'service',
        useAI: useAI || false,
        targetLength: targetLength || 3000
      }
    );
    
    res.json({ 
      success: true, 
      total: results.length,
      successful: results.filter(r => r.status === 'success').length,
      failed: results.filter(r => r.status === 'error').length,
      results 
    });
  } catch (error) {
    console.error('Error generating bulk content:', error);
    res.status(500).json({ 
      error: 'Failed to generate bulk content',
      message: error instanceof Error ? error.message : String(error)
    });
  }
});

// Generate industry-specific content
router.post('/api/content/bulk/industries', async (req, res) => {
  try {
    const { industries, cities, useAI, targetLength } = req.body;
    
    if (!industries || !cities || !Array.isArray(industries) || !Array.isArray(cities)) {
      return res.status(400).json({ 
        error: 'Industries and cities must be provided as arrays' 
      });
    }
    
    const results = await aiContentService.generateIndustryContent(
      industries,
      cities,
      {
        useAI: useAI || false,
        targetLength: targetLength || 3000
      }
    );
    
    res.json({ 
      success: true, 
      total: results.length,
      successful: results.filter(r => r.status === 'success').length,
      failed: results.filter(r => r.status === 'error').length,
      results 
    });
  } catch (error) {
    console.error('Error generating industry content:', error);
    res.status(500).json({ 
      error: 'Failed to generate industry content',
      message: error instanceof Error ? error.message : String(error)
    });
  }
});

// Generate comparison content
router.post('/api/content/bulk/comparisons', async (req, res) => {
  try {
    const { comparisons, useAI, targetLength } = req.body;
    
    if (!comparisons || !Array.isArray(comparisons)) {
      return res.status(400).json({ 
        error: 'Comparisons must be provided as an array of objects with optionA and optionB' 
      });
    }
    
    const results = await aiContentService.generateComparisonContent(
      comparisons,
      {
        useAI: useAI || false,
        targetLength: targetLength || 3000
      }
    );
    
    res.json({ 
      success: true, 
      total: results.length,
      successful: results.filter(r => r.status === 'success').length,
      failed: results.filter(r => r.status === 'error').length,
      results 
    });
  } catch (error) {
    console.error('Error generating comparison content:', error);
    res.status(500).json({ 
      error: 'Failed to generate comparison content',
      message: error instanceof Error ? error.message : String(error)
    });
  }
});

// Generate blog content
router.post('/api/content/bulk/blogs', async (req, res) => {
  try {
    const { topics, useAI, targetLength } = req.body;
    
    if (!topics || !Array.isArray(topics)) {
      return res.status(400).json({ 
        error: 'Topics must be provided as an array of objects with title, service, city, and optional industry' 
      });
    }
    
    const results = await aiContentService.generateBlogContent(
      topics,
      {
        useAI: useAI || false,
        targetLength: targetLength || 3000
      }
    );
    
    res.json({ 
      success: true, 
      total: results.length,
      successful: results.filter(r => r.status === 'success').length,
      failed: results.filter(r => r.status === 'error').length,
      results 
    });
  } catch (error) {
    console.error('Error generating blog content:', error);
    res.status(500).json({ 
      error: 'Failed to generate blog content',
      message: error instanceof Error ? error.message : String(error)
    });
  }
});

// Optimize existing content
router.post('/api/content/optimize', async (req, res) => {
  try {
    const { content, currentTitle, currentKeywords, targetKeywords, contentType } = req.body;
    
    if (!content || !currentTitle || !targetKeywords) {
      return res.status(400).json({ 
        error: 'Content, currentTitle, and targetKeywords are required' 
      });
    }
    
    const optimized = await aiContentService.optimizeExistingContent(
      content,
      {
        currentTitle,
        currentKeywords: currentKeywords || [],
        targetKeywords,
        contentType: contentType || 'general'
      }
    );
    
    res.json({ success: true, optimized });
  } catch (error) {
    console.error('Error optimizing content:', error);
    res.status(500).json({ 
      error: 'Failed to optimize content',
      message: error instanceof Error ? error.message : String(error)
    });
  }
});

// Get content preview (without AI)
router.post('/api/content/preview', async (req, res) => {
  try {
    const { service, city, industry, contentType, targetLength } = req.body;
    
    if (!service || !city || !contentType) {
      return res.status(400).json({ 
        error: 'Missing required fields: service, city, and contentType are required' 
      });
    }
    
    const content = await generateSEOContent({
      service,
      city,
      industry,
      contentType,
      targetLength: targetLength || 3000
    });
    
    res.json({ success: true, content });
  } catch (error) {
    console.error('Error generating preview:', error);
    res.status(500).json({ 
      error: 'Failed to generate preview',
      message: error instanceof Error ? error.message : String(error)
    });
  }
});

// Get available templates and options
router.get('/api/content/options', (req, res) => {
  res.json({
    services: [
      'Company Formation',
      'LLC Registration',
      'Branch Office Setup',
      'MISA License',
      'Commercial Registration',
      'Business Setup',
      'Company Registration'
    ],
    cities: [
      'Riyadh',
      'Jeddah',
      'Dammam',
      'Al Khobar',
      'Mecca',
      'Medina',
      'Khamis Mushait',
      'Tabuk',
      'Buraidah',
      'Jubail'
    ],
    industries: [
      'Restaurant',
      'E-commerce',
      'Trading',
      'Manufacturing',
      'Consulting',
      'Technology',
      'Healthcare',
      'Real Estate',
      'Construction',
      'Retail'
    ],
    contentTypes: ['service', 'industry', 'comparison', 'blog'],
    comparisons: [
      { optionA: 'LLC', optionB: 'Branch Office' },
      { optionA: 'Mainland', optionB: 'Free Zone' },
      { optionA: 'Riyadh', optionB: 'Jeddah' },
      { optionA: 'Riyadh', optionB: 'Dammam' }
    ]
  });
});

export default router;
