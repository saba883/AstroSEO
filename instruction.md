# Programmatic SEO Implementation Guide

## Meta Tags Structure

```html
<title>{Service} in {City} | 100% Foreign Ownership | Analytix</title>
<meta name="description" content="Expert {service} in {city}. 2200+ clients served. Fast LLC registration, MISA license, CR processing. Free consultation.">
```

## Schema Markup Templates

### Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Analytix",
  "url": "https://yoursite.com",
  "logo": "https://yoursite.com/logo.png"
}
```

### LocalBusiness Schema
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Analytix - {City}",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "{City}",
    "addressCountry": "SA"
  }
}
```

### FAQ Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "{Question}",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "{Answer}"
    }
  }]
}
```

### BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://yoursite.com"
  }]
}
```


## URL Structure Templatess q

### Service Pages
- `/company-formation-{city}/`
- `/llc-formation-{city}/`
- `/branch-office-registration-{city}/`
- `/misa-license-{city}/`
- `/commercial-registration-{city}/`

### Industry Pages
- `/{industry}-business-setup-saudi-arabia/`
- `/{industry}-license-saudi-arabia/`

### Comparison Pages
- `/llc-vs-branch-office-saudi-arabia/`
- `/mainland-vs-free-zone-saudi-arabia/`
- `/{city1}-vs-{city2}-business-setup/`

## Target Cities (Variables)
- Riyadh
- Jeddah
- Dammam
- Al Khobar
- Mecca
- Medina
- Khamis Mushait
- Tabuk
- Buraidah
- Jubail

## Target Industries (Variables)
- Restaurant
- E-commerce
- Trading
- Manufacturing
- Consulting
- Technology
- Healthcare 
- Real Estate
- Construction
- Retail

-

## Target Services (Variables)
- Company Formation
- LLC Registration for health 
- Branch Office Setup
- MISA License 
- Commercial Registration
- Business Setup
- Company Registration

## High-Value Keywords by Category

### How-To Keywords
- how to register a company in saudi arabia (1,400/mo)     
- how to get misa license (890/mo)
- how much does it cost to open llc in saudi arabia (720/mo)
- how to get commercial registration in saudi (650/mo)
- step by step business setup saudi arabia (580/mo)

### Location-Based Keywords
- business setup in {city}   
- company formation {city}   
- business consultants {city}
- llc registration {city}
- commercial registration {city}   

### Industry Keywords
- {industry} business setup saudi arabia
- {industry} license saudi arabia                         
- {industry} company formation ksa
- how to start {industry} business in saudi arabia

### Comparison Keywords
- llc vs branch office saudi arabia
- mainland vs free zone saudi arabia
- best cities for business setup saudi arabia
- {city1} vs {city2} for business setup

## Content Templates

### Service Page Template (H1)
```
{Service} in {City} | Fast & Reliable Setup
```

### Service Page Structure
```markdown
# {Service} in {City}

## Why Choose {Service} in {City}?

## {Service} Process in {City}
1. Step 1
2. Step 2
3. Step 3

## Cost of {Service} in {City}

## Documents Required for {Service} in {City}

## Timeline for {Service} in {City}

## FAQ: {Service} in {City}
```

### Industry Page Template (H1)
```
{Industry} Business Setup in Saudi Arabia | Complete Guide
```

### Comparison Page Template (H1)
```
{Option A} vs {Option B} in Saudi Arabia: Which is Better?
```

## On-Page SEO Checklist
- [ ] Unique H1 with primary keyword
- [ ] Meta title (50-60 characters)
- [ ] Meta description (150-160 characters)
- [ ] Alt text for all images: "{keyword} - {description}"
- [ ] Internal links to 3-5 related pages
- [ ] External link to 1-2 authoritative sources
- [ ] Schema markup implemented
- [ ] Images compressed (<100KB)
- [ ] Lazy loading enabled
- [ ] Mobile responsive
- [ ] CTA above the fold

## Featured Snippet Optimization

### Question Format
```markdown
## How much does LLC cost in Saudi Arabia?

LLC formation in Saudi Arabia typically costs between 15,000-25,000 SAR, depending on business activity and location.

**Cost Breakdown:**
- Commercial Registration: 1,200 SAR
- MISA License: 5,000-15,000 SAR
- Legal Documentation: 3,000-5,000 SAR
- Office Space: Variable
```

### Table Format for Comparisons
```markdown
| Feature | LLC | Branch Office |
|---------|-----|---------------|
| Cost | 15,000-25,000 SAR | 20,000-30,000 SAR |
| Setup Time | 2-3 weeks | 3-4 weeks |
| Ownership | 100% foreign | Parent company |
```

## Internal Linking Strategy

### Hub & Spoke Model
**Hub Pages (Main Services):**
- /business-setup-saudi-arabia/
- /llc-formation-saudi-arabia/
- /misa-license-saudi-arabia/

**Spoke Pages (City-Specific):**
- Link from hub to all city variations
- Link from city pages back to hub
- Cross-link between related cities

### Anchor Text Variations
- Exact match: "{service} in {city}"
- Partial match: "learn more about {service}"
- Branded: "Analytix {service}"
- Generic: "click here for more information"

## Image Optimization

### Naming Convention
```
{service}-{city}-{number}.jpg
Example: llc-formation-riyadh-01.jpg
```

### Alt Text Format
```
{Service} in {City} - {Description}
Example: LLC Formation in Riyadh - Office Setup Process
```


## Technical SEO Requirements

### Core Web Vitals
- LCP: <2.5s
- FID: <100ms
- CLS: <0.1

### Mobile Optimization
- Responsive design
- Touch-friendly buttons (44x44px minimum)
- Readable font size (16px minimum)
- Page size: <1MB

### Robots.txt
```
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

### XML Sitemap Structure
```xml
<url>
  <loc>https://yoursite.com/{service}-{city}/</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```


## Programmatic Content Variables

### CSV Structure for Bulk Generation
```csv
service,city,industry,cost_min,cost_max,timeline
LLC Formation,Riyadh,General,15000,25000,2-3 weeks
LLC Formation,Jeddah,General,15000,25000,2-3 weeks
Company Formation,Riyadh,Restaurant,20000,30000,3-4 weeks
```

### Dynamic Content Blocks
```
{service_name} in {city_name} typically costs between {cost_min}-{cost_max} SAR and takes approximately {timeline} to complete.
```



## Video SEO

### Video Title Format
```
{Service} in {City} | Step-by-Step Guide 2025
```

### Blog  Description Template
```
Learn how to {service} in {city}. This guide covers costs, documents, timeline, and process. Get expert help at [URL].

Timestamps:
0:00 Introduction
0:30 Requirements
2:00 Process Steps
5:00 Costs & Timeline
```

## Conversion Optimization

### CTA Variations
- "Get Free Consultation"
- "Calculate Your Cost"
- "Download Setup Checklist"
- "Speak with Expert"
- "Start Your Business Today"

