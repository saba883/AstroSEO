import OpenAI from 'openai';
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize the client with the provided API key
const client = new OpenAI({
  apiKey: "ddc-a4f-b0aa18cb214544e8b2ba7d5cd2c33425",
  baseURL: "https://api.a4f.co/v1"
});

// Image prompts for AstroSEO services - professional business imagery
const servicePrompts = {
  // Main services
  "llc-formation": [
    "Modern corporate office building in Riyadh Saudi Arabia, glass facade, professional business environment, clear blue sky, no people visible",
    "Professional business documents and contracts on modern office desk, company formation paperwork, clean minimal setup, no people"
  ],
  "misa-license": [
    "Saudi Arabia Ministry of Investment building exterior, modern architecture, government building, professional photography, no people",
    "Professional business license documents with official stamps, investment paperwork on desk, clean office environment, no people"
  ],
  "commercial-registration": [
    "Modern business district in Saudi Arabia, commercial buildings, professional environment, clear day, no people visible",
    "Official commercial registration certificate with Saudi Arabia emblem, professional documentation, clean desk setup, no people"
  ],
  "branch-office-setup": [
    "International business center in Riyadh, modern office buildings, multinational corporate environment, no people",
    "Professional branch office interior, modern meeting room, corporate furniture, clean design, no people"
  ],
  "business-licensing": [
    "Saudi Arabia business district skyline, modern commercial buildings, professional environment, no people",
    "Multiple business licenses and permits arranged professionally on desk, official documents, no people"
  ],
  "pro-services": [
    "Government relations office building in Saudi Arabia, modern architecture, professional setting, no people",
    "Professional visa and documentation services desk, organized paperwork, clean office setup, no people"
  ]
};

// Location-specific images
const locationPrompts = {
  "riyadh": [
    "Riyadh business district skyline with Kingdom Tower, modern cityscape, professional photography, clear day, no people",
    "King Abdullah Financial District in Riyadh, modern architecture, business environment, no people"
  ],
  "jeddah": [
    "Jeddah corniche business area, modern buildings along Red Sea coast, professional cityscape, no people",
    "Jeddah Islamic Port area business district, commercial buildings, professional environment, no people"
  ],
  "dammam": [
    "Dammam business district, Eastern Province commercial center, modern buildings, no people",
    "King Fahd Causeway business corridor, Dammam skyline, professional photography, no people"
  ],
  "al-khobar": [
    "Al Khobar waterfront business district, modern commercial buildings, professional setting, no people",
    "Al Khobar Corniche business area, modern architecture, clear day, no people"
  ],
  "mecca": [
    "Mecca modern business district, commercial buildings, professional environment, respectful view, no people",
    "Mecca commercial center, modern architecture, business setting, no people"
  ],
  "medina": [
    "Medina business district, modern commercial area, professional buildings, no people",
    "Medina Knowledge Economic City, modern business environment, no people"
  ]
};

// Home page and general images
const generalPrompts = {
  "hero-image": [
    "Saudi Arabia Vision 2030 business district, futuristic skyline, modern architecture, professional photography, golden hour lighting, no people"
  ],
  "business-partnership": [
    "Professional handshake between business partners, formal business attire, modern office setting, close-up shot",
    "Business meeting in modern Saudi office, professionals discussing documents, diverse team, formal setting"
  ],
  "success-growth": [
    "Business growth chart on modern display, upward trending graphs, professional analytics dashboard, no people",
    "Modern Saudi Arabia business success, skyline with growth indicators overlay, professional visualization"
  ],
  "trust-security": [
    "Secure business environment concept, modern office building with security features, professional setting, no people",
    "Trust and compliance symbols, professional business certification badges, clean design"
  ],
  "team-support": [
    "Professional business consultants in meeting, modern Saudi office, formal attire, diverse team",
    "Customer support center, modern office environment, professional setting, helping clients"
  ]
};

// Blog post images
const blogPrompts = {
  "llc-guide": [
    "LLC formation process visualization, professional infographic style, Saudi Arabia business context, no people",
    "Modern office with LLC documentation, professional business setup, clean environment, no people"
  ],
  "misa-requirements": [
    "MISA license application process, professional documentation, Saudi investment context, no people",
    "Investment opportunities in Saudi Arabia, modern business visualization, professional graphics"
  ],
  "business-setup-overview": [
    "Saudi Arabia business setup flowchart, professional infographic, modern design, no people",
    "Complete business formation package, professional documentation display, organized setup, no people"
  ]
};

// Helper function to download image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(filepath);
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file on error
      reject(err);
    });
  });
}

// Helper function to ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Generate image function
async function generateImage(category, name, prompt, imageNumber) {
  try {
    console.log(`Generating ${category} image ${imageNumber} for ${name}...`);
    
    const response = await client.images.generate({
      model: "provider-3/FLUX.1.1-pro-ultra",
      prompt: prompt + ", professional photography, high quality, business context, Saudi Arabia",
      n: 1,
      size: "1024x1024"
    });
    
    const imageUrl = response.data[0].url;
    console.log(`Generated image URL for ${name}-${imageNumber}: ${imageUrl}`);
    
    // Create directory structure
    const dirPath = path.join('public', 'images', category);
    ensureDirectoryExists(dirPath);
    
    const filename = path.join(dirPath, `${name}-${imageNumber}.jpg`);
    
    // Download the image
    await downloadImage(imageUrl, filename);
    console.log(`Image saved as ${filename}`);
    return filename;
    
  } catch (error) {
    console.error(`Error generating image for ${name}-${imageNumber}:`, error);
    return null;
  }
}

// Sleep function for rate limiting
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main function
async function main() {
  console.log("Starting image generation for AstroSEO website...");
  
  // Ensure base directories exist
  const baseDirs = ["public/images/services", "public/images/locations", "public/images/general", "public/images/blog"];
  baseDirs.forEach(dir => ensureDirectoryExists(dir));
  
  const generatedImages = {
    services: {},
    locations: {},
    general: {},
    blog: {}
  };
  
  // Generate service images
  console.log("\n=== Generating Service Images ===");
  for (const [service, prompts] of Object.entries(servicePrompts)) {
    const serviceImages = [];
    for (let i = 0; i < Math.min(2, prompts.length); i++) {
      const imagePath = await generateImage("services", service, prompts[i], i + 1);
      if (imagePath) {
        serviceImages.push(imagePath);
      }
      await sleep(3000); // Rate limiting
    }
    generatedImages.services[service] = serviceImages;
  }
  
  // Generate location images
  console.log("\n=== Generating Location Images ===");
  for (const [location, prompts] of Object.entries(locationPrompts)) {
    const locationImages = [];
    for (let i = 0; i < Math.min(1, prompts.length); i++) {
      const imagePath = await generateImage("locations", location, prompts[i], i + 1);
      if (imagePath) {
        locationImages.push(imagePath);
      }
      await sleep(3000);
    }
    generatedImages.locations[location] = locationImages;
  }
  
  // Generate general images
  console.log("\n=== Generating General Images ===");
  for (const [category, prompts] of Object.entries(generalPrompts)) {
    const categoryImages = [];
    for (let i = 0; i < prompts.length; i++) {
      const imagePath = await generateImage("general", category, prompts[i], i + 1);
      if (imagePath) {
        categoryImages.push(imagePath);
      }
      await sleep(3000);
    }
    generatedImages.general[category] = categoryImages;
  }
  
  // Generate blog images
  console.log("\n=== Generating Blog Images ===");
  for (const [blog, prompts] of Object.entries(blogPrompts)) {
    const blogImages = [];
    for (let i = 0; i < Math.min(1, prompts.length); i++) {
      const imagePath = await generateImage("blog", blog, prompts[i], i + 1);
      if (imagePath) {
        blogImages.push(imagePath);
      }
      await sleep(3000);
    }
    generatedImages.blog[blog] = blogImages;
  }
  
  // Create summary report
  console.log("\n=== Image Generation Complete ===");
  console.log("\nGenerated images summary:");
  
  let summaryContent = "# Generated Images Summary for AstroSEO\n\n";
  summaryContent += `Generated on: ${new Date().toLocaleString()}\n\n`;
  
  summaryContent += "## Service Images\n";
  for (const [service, images] of Object.entries(generatedImages.services)) {
    summaryContent += `\n### ${service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}\n`;
    images.forEach(image => {
      summaryContent += `- \`${image}\`\n`;
    });
  }
  
  summaryContent += "\n## Location Images\n";
  for (const [location, images] of Object.entries(generatedImages.locations)) {
    summaryContent += `\n### ${location.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}\n`;
    images.forEach(image => {
      summaryContent += `- \`${image}\`\n`;
    });
  }
  
  summaryContent += "\n## General Images\n";
  for (const [category, images] of Object.entries(generatedImages.general)) {
    summaryContent += `\n### ${category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}\n`;
    images.forEach(image => {
      summaryContent += `- \`${image}\`\n`;
    });
  }
  
  summaryContent += "\n## Blog Images\n";
  for (const [blog, images] of Object.entries(generatedImages.blog)) {
    summaryContent += `\n### ${blog.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}\n`;
    images.forEach(image => {
      summaryContent += `- \`${image}\`\n`;
    });
  }
  
  summaryContent += "\n## Usage Instructions\n";
  summaryContent += "1. Service images: Use in service pages and service cards\n";
  summaryContent += "2. Location images: Use in location-specific pages\n";
  summaryContent += "3. General images: Use for hero sections, about us, etc.\n";
  summaryContent += "4. Blog images: Use as featured images for blog posts\n";
  
  fs.writeFileSync("public/images/generated-images-summary.md", summaryContent);
  console.log("\nSummary saved to: public/images/generated-images-summary.md");
  
  // Print final statistics
  const totalImages = Object.values(generatedImages).reduce((total, category) => 
    total + Object.values(category).reduce((catTotal, images) => catTotal + images.length, 0), 0
  );
  
  console.log(`\nTotal images generated: ${totalImages}`);
  console.log(`- Service images: ${Object.values(generatedImages.services).reduce((t, imgs) => t + imgs.length, 0)}`);
  console.log(`- Location images: ${Object.values(generatedImages.locations).reduce((t, imgs) => t + imgs.length, 0)}`);
  console.log(`- General images: ${Object.values(generatedImages.general).reduce((t, imgs) => t + imgs.length, 0)}`);
  console.log(`- Blog images: ${Object.values(generatedImages.blog).reduce((t, imgs) => t + imgs.length, 0)}`);
}

// Run the main function
main().catch(console.error);
