# Design Guidelines: Registerinksa Business Formation Consultancy

## Design Approach

**Selected Approach**: Hybrid Reference + Professional System
- Primary inspiration: Professional consulting platforms (Stripe, Deloitte Digital, McKinsey)
- Secondary reference: Saudi Vision 2030 aesthetic (modern, progressive, trustworthy)
- Design system foundation: Tailwind with custom professional components

**Key Design Principles**:
1. Trust & Authority: Establish credibility through sophisticated design
2. Clarity & Efficiency: Information-dense content presented cleanly
3. Cultural Resonance: Subtle Saudi Arabian visual elements
4. Conversion-Focused: Strategic CTAs and clear user journeys

## Core Design Elements

### A. Color Palette

**Primary Colors (Professional Authority)**:
- Deep Navy: `215 85% 15%` - Primary brand, headers, trust elements
- Rich Blue: `215 75% 35%` - Interactive elements, CTAs, links
- Light Blue: `215 60% 95%` - Backgrounds, cards, subtle accents

**Accent Colors (Saudi Cultural Touch)**:
- Desert Gold: `40 85% 55%` - Limited use for premium highlights, awards, achievements
- Success Green: `150 65% 45%` - For success states, positive metrics

**Neutrals**:
- Charcoal: `220 15% 20%` - Body text
- Slate Gray: `220 10% 50%` - Secondary text
- Light Gray: `220 8% 95%` - Borders, dividers

**Light Mode**: White backgrounds with navy text
**Dark Mode**: `220 20% 10%` backgrounds with light text

### B. Typography

**Font Stack**:
- **Primary**: Inter (Google Fonts) - Modern, highly legible for UI and body text
- **Headings**: Poppins (Google Fonts) - Professional authority for H1-H3
- **Accent**: Space Grotesk (Google Fonts) - For statistics, numbers, highlights

**Hierarchy**:
- H1: `text-5xl md:text-6xl font-bold` (Poppins)
- H2: `text-3xl md:text-4xl font-semibold` (Poppins)
- H3: `text-2xl md:text-3xl font-semibold` (Poppins)
- Body: `text-base md:text-lg` (Inter)
- Small: `text-sm` (Inter)
- Stats/Numbers: `text-4xl md:text-5xl font-bold` (Space Grotesk)

### C. Layout System

**Spacing Primitives**: Use Tailwind units of **4, 8, 12, 16, 20, 24, 32**
- Component padding: `p-8 md:p-12 lg:p-16`
- Section spacing: `py-16 md:py-24 lg:py-32`
- Card gaps: `gap-8 md:gap-12`
- Container max-width: `max-w-7xl mx-auto px-4`

**Grid Strategy**:
- Service cards: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Feature highlights: `grid-cols-1 lg:grid-cols-2` (text + visual)
- Location pages: `grid-cols-1 md:grid-cols-2`
- Blog grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### D. Component Library

**Navigation**:
- Sticky header with logo left, navigation center, CTA button right
- Mega menu dropdown for services (organized by type)
- Mobile: Slide-in drawer with clear hierarchy
- Quick access: Phone number and WhatsApp prominent

**Hero Sections**:
- Large hero with diagonal split: Content left (60%), Image/visual right (40%)
- H1 with gradient text effect (navy to blue)
- Statistics bar below hero: "2200+ Clients | 100% Foreign Ownership | Fast Processing"
- Dual CTAs: Primary "Get Free Consultation", Secondary "Calculate Cost"

**Service Cards**:
- Elevated cards with subtle shadow and border
- Icon top (Material Icons via CDN), title, description, "Learn More" link
- Hover: Slight lift effect, border color change to blue

**Forms**:
- Two-column layout on desktop
- Input style: Border-b only, focus shows full border
- Labels floating above inputs
- Submit button: Full-width on mobile, right-aligned on desktop

**Testimonials**:
- Card-based with client photo, quote, name, company, location
- 5-star rating display
- Grid of 3 columns on desktop, slider on mobile

**Statistics/Metrics**:
- Large numbers with Space Grotesk font
- Icon + Number + Label vertical stack
- Background: Light blue card or transparent with border

**Interactive Calculator**:
- Step-by-step wizard interface
- Progress indicator at top
- Radio/checkbox inputs with custom styling
- Real-time cost calculation display
- Result card with breakdown table

**Resource Cards**:
- PDF/Checklist icon, title, description, download button
- Category tags (visa, licensing, formation)
- Download counter: "Downloaded 2,400+ times"

### E. Page-Specific Layouts

**Homepage**:
1. Hero with diagonal split design
2. Trust indicators bar (partners logos)
3. Services grid (6 cards, 3 columns)
4. "Why Choose Registerinksa" - comparison table
5. Success metrics section
6. Client testimonials carousel
7. Location map with coverage areas
8. CTA section: "Ready to Start Your Business?"
9. Footer with newsletter, links, contact

**Service Pages**:
1. Page hero with breadcrumb
2. Overview section (2-column: benefits + process)
3. Requirements checklist
4. Pricing table comparison
5. FAQ accordion
6. Related services cards
7. CTA: "Schedule Consultation"

**Location Pages**:
1. City-specific hero with skyline image
2. Local statistics (market size, industries)
3. Office location with map embed
4. Local success stories (3 testimonials)
5. City-specific services grid
6. Contact form with local office details

**Blog**:
1. Featured article hero (large card)
2. Category filter tabs
3. Article grid with thumbnail, title, excerpt, read time
4. Sidebar: Recent posts, popular guides, newsletter signup

## Images

**Hero Images** (Required):
- Homepage hero: Modern Saudi business district (Riyadh skyline), professional office setting
- Service pages: Relevant business imagery (documents, handshakes, office spaces)
- Location pages: City-specific landmarks (Kingdom Tower for Riyadh, Corniche for Jeddah)

**Supporting Visuals**:
- Partner logos: Saudi government entities, chambers of commerce
- Icon illustrations for services (custom or from unDraw)
- Client testimonial photos: Professional headshots
- Process diagrams: Visual workflows for business setup steps
- Team photos: Office and staff imagery

**Image Treatment**:
- Subtle overlay gradients (navy to transparent) on hero images
- Rounded corners: `rounded-xl` for cards, `rounded-2xl` for hero sections
- Lazy loading implemented for all images below fold
- Alt text: Descriptive and SEO-optimized

## Conversion Elements

**CTAs**:
- Primary: `bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold`
- Secondary: `border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg`
- Floating WhatsApp: Bottom-right, green with icon, "Chat with us"

**Trust Badges**:
- Government partnership logos in footer
- "2200+ Companies Trust Us" with counter animation
- Security badges near forms
- Money-back guarantee seal (if applicable)

**Exit Intent**: Modal with "Free Saudi Business Setup Guide 2025" download
**Live Chat**: WhatsApp widget, bottom-right, always visible

## Animation Guidelines

**Minimal & Purposeful**:
- Scroll fade-in for sections (opacity 0 to 1)
- Number counters animate on view (statistics)
- Card hover: `transform scale-105 transition-transform duration-300`
- No parallax, no complex animations
- Page transitions: Simple fade

This design creates a professional, conversion-optimized website that establishes trust while making complex business information accessible and actionable.
