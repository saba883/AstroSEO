import { storage } from './storage';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export async function generateSitemap(): Promise<string> {
  const baseUrl = 'https://analytix.sa';
  const urls: SitemapUrl[] = [];

  // Static pages
  urls.push(
    { loc: '/', changefreq: 'weekly', priority: 1.0 },
    { loc: '/services', changefreq: 'weekly', priority: 0.9 },
    { loc: '/locations', changefreq: 'monthly', priority: 0.8 },
    { loc: '/blog', changefreq: 'daily', priority: 0.8 },
  );

  // Get all services from database
  const services = await db.services.findMany();
  for (const service of services) {
    urls.push({
      loc: `/services/${service.slug}`,
      lastmod: service.updatedAt,
      changefreq: 'monthly',
      priority: 0.8,
    });

    // Add city-specific service pages
    if (service.city) {
      urls.push({
        loc: `/services/${service.slug}/${service.city.toLowerCase().replace(/\s+/g, '-')}`,
        lastmod: service.updatedAt,
        changefreq: 'monthly',
        priority: 0.7,
      });
    }
  }

  // Get all blog posts from database
  const blogPosts = await db.blogPosts.findMany({
    orderBy: { createdAt: 'desc' },
  });

  for (const post of blogPosts) {
    urls.push({
      loc: `/blog/${post.slug}`,
      lastmod: post.updatedAt,
      changefreq: 'monthly',
      priority: 0.6,
    });
  }

  // Get all location pages
  const cities = [
    'riyadh', 'jeddah', 'dammam', 'al-khobar', 'mecca', 
    'medina', 'khamis-mushait', 'tabuk', 'buraidah', 'jubail'
  ];

  for (const city of cities) {
    urls.push({
      loc: `/locations/${city}`,
      changefreq: 'monthly',
      priority: 0.7,
    });
  }

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.map(url => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${new Date(url.lastmod).toISOString().split('T')[0]}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority !== undefined ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return xml;
}

// Generate sitemap index for large sites
export async function generateSitemapIndex(): Promise<string> {
  const baseUrl = 'https://analytix.sa';
  const sitemaps = [
    { loc: '/sitemap-pages.xml', lastmod: new Date().toISOString() },
    { loc: '/sitemap-services.xml', lastmod: new Date().toISOString() },
    { loc: '/sitemap-blog.xml', lastmod: new Date().toISOString() },
    { loc: '/sitemap-locations.xml', lastmod: new Date().toISOString() },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sitemap => `  <sitemap>
    <loc>${baseUrl}${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod.split('T')[0]}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

  return xml;
}

// Generate separate sitemaps for different content types
export async function generatePagesSitemap(): Promise<string> {
  const baseUrl = 'https://analytix.sa';
  const urls: SitemapUrl[] = [
    { loc: '/', changefreq: 'weekly', priority: 1.0 },
    { loc: '/services', changefreq: 'weekly', priority: 0.9 },
    { loc: '/locations', changefreq: 'monthly', priority: 0.8 },
    { loc: '/blog', changefreq: 'daily', priority: 0.8 },
  ];

  return generateXML(baseUrl, urls);
}

export async function generateServicesSitemap(): Promise<string> {
  const baseUrl = 'https://analytix.sa';
  const urls: SitemapUrl[] = [];

  const services = await db.services.findMany();
  for (const service of services) {
    urls.push({
      loc: `/services/${service.slug}`,
      lastmod: service.updatedAt,
      changefreq: 'monthly',
      priority: 0.8,
    });
  }

  return generateXML(baseUrl, urls);
}

export async function generateBlogSitemap(): Promise<string> {
  const baseUrl = 'https://analytix.sa';
  const urls: SitemapUrl[] = [];

  const blogPosts = await db.blogPosts.findMany({
    orderBy: { createdAt: 'desc' },
  });

  for (const post of blogPosts) {
    urls.push({
      loc: `/blog/${post.slug}`,
      lastmod: post.updatedAt,
      changefreq: 'monthly',
      priority: 0.6,
    });
  }

  return generateXML(baseUrl, urls);
}

export async function generateLocationsSitemap(): Promise<string> {
  const baseUrl = 'https://analytix.sa';
  const urls: SitemapUrl[] = [];

  const cities = [
    'riyadh', 'jeddah', 'dammam', 'al-khobar', 'mecca', 
    'medina', 'khamis-mushait', 'tabuk', 'buraidah', 'jubail'
  ];

  for (const city of cities) {
    urls.push({
      loc: `/locations/${city}`,
      changefreq: 'monthly',
      priority: 0.7,
    });
  }

  // Add city + service combination pages
  const services = await db.services.findMany({
    where: { city: { not: null } }
  });

  for (const service of services) {
    if (service.city) {
      urls.push({
        loc: `/services/${service.slug}/${service.city.toLowerCase().replace(/\s+/g, '-')}`,
        lastmod: service.updatedAt,
        changefreq: 'monthly',
        priority: 0.7,
      });
    }
  }

  return generateXML(baseUrl, urls);
}

function generateXML(baseUrl: string, urls: SitemapUrl[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.map(url => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${new Date(url.lastmod).toISOString().split('T')[0]}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority !== undefined ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;
}
