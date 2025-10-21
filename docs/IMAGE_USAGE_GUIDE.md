# Image Usage Guide for AstroSEO Website

This guide explains where to use the generated images throughout the AstroSEO website.

## Service Images

### LLC Formation
- `llc-formation-1.jpg`: Modern corporate office building - Use as hero image on LLC Formation service page
- `llc-formation-2.jpg`: Business documents on desk - Use in service details section

### MISA License
- `misa-license-1.jpg`: Ministry of Investment building (if generated) - Use as hero image
- `misa-license-2.jpg`: License documents - Use in process explanation section

### Commercial Registration
- `commercial-registration-1.jpg`: Business district - Use as hero image
- `commercial-registration-2.jpg`: CR certificate - Use in documentation section

### Branch Office Setup
- `branch-office-setup-1.jpg`: International business center - Use as hero image
- `branch-office-setup-2.jpg`: Modern office interior - Use in benefits section

### Business Licensing
- `business-licensing-1.jpg`: Saudi skyline - Use as hero image
- `business-licensing-2.jpg`: Multiple licenses - Use in services overview

### PRO Services
- `pro-services-1.jpg`: Government relations building - Use as hero image
- `pro-services-2.jpg`: Visa documentation - Use in services details

## Location Images

Use these for location-specific pages and local SEO:
- `riyadh-1.jpg`: Riyadh skyline - Use on Riyadh location page
- `jeddah-1.jpg`: Jeddah corniche - Use on Jeddah location page
- `dammam-1.jpg`: Dammam business district - Use on Dammam location page
- `al-khobar-1.jpg`: Al Khobar waterfront - Use on Al Khobar location page
- `mecca-1.jpg`: Mecca business district - Use on Mecca location page
- `medina-1.jpg`: Medina business area - Use on Medina location page

## General Images (Home Page & Common Areas)

### Hero Section
- `hero-image-1.jpg`: Vision 2030 skyline - Use as main hero background

### Trust & Credibility
- `business-partnership-1.jpg`: Handshake - Use in "Why Choose Us" section
- `business-partnership-2.jpg`: Team meeting - Use in "About Us" section

### Success Metrics
- `success-growth-1.jpg`: Growth charts - Use in statistics section
- `success-growth-2.jpg`: Success visualization - Use in achievements section

### Security & Trust
- `trust-security-1.jpg`: Secure environment - Use in compliance section
- `trust-security-2.jpg`: Certification badges - Use in credentials section

### Support
- `team-support-1.jpg`: Consultants meeting - Use in team section
- `team-support-2.jpg`: Customer support - Use in contact section

## Blog Images

### Featured Images for Blog Posts
- `llc-guide-1.jpg`: LLC formation visualization - Use for "Complete Guide to LLC Formation" post
- `misa-requirements-1.jpg`: MISA process - Use for "MISA License Requirements" post
- `business-setup-overview-1.jpg`: Setup flowchart - Use for "Saudi Arabia Business Setup" post

## Implementation Tips

1. **Optimize Images**: Compress all images before using them in production
2. **Alt Text**: Add descriptive alt text for SEO and accessibility
3. **Lazy Loading**: Implement lazy loading for better performance
4. **Responsive Images**: Use srcset for different screen sizes
5. **WebP Format**: Consider converting to WebP for better compression

## Example Implementation

```jsx
// Hero Section
<div className="hero-section" style={{ backgroundImage: `url('/images/general/hero-image-1.jpg')` }}>
  <h1>Business Formation Services in Saudi Arabia</h1>
</div>

// Service Card
<img 
  src="/images/services/llc-formation-1.jpg" 
  alt="LLC Formation Services in Saudi Arabia"
  loading="lazy"
  className="service-hero-image"
/>

// Location Page
<img 
  src="/images/locations/riyadh-1.jpg" 
  alt="Business Services in Riyadh"
  className="location-hero"
/>
```

## SEO Considerations

1. **File Names**: Keep descriptive file names for SEO
2. **Image Sitemaps**: Include images in XML sitemap
3. **Schema Markup**: Add ImageObject schema for key images
4. **CDN**: Consider using a CDN for faster loading
5. **Compression**: Aim for images under 200KB each
