import OpenAI from 'openai';
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize the client
const client = new OpenAI({
  apiKey: "ddc-a4f-b0aa18cb214544e8b2ba7d5cd2c33425",
  baseURL: "https://api.a4f.co/v1"
});

// Clean prompts - no text, no women, no religious places
const servicePrompts = {
  "llc-formation": [
    "Modern glass office building in business district, contemporary architecture, clear blue sky, professional photography, no people, no text",
    "Clean office desk with laptop and documents, modern workspace, minimalist design, no people, no text"
  ],
  "misa-license": [
    "Modern government building exterior, contemporary Saudi architecture, professional photography, no people, no text",
    "Professional office desk with official documents and stamps, clean setup, no people, no text"
  ],
  "commercial-registration": [
    "Saudi Arabia modern business district skyline, glass buildings, professional photography, no people, no text",
    "Office desk with official certificate and seal, professional setting, no people, no text"
  ],
  "branch-office-setup": [
    "International business center building, modern architecture, glass facade, no people, no text",
    "Modern conference room interior, professional furniture, clean design, no people, no text"
  ],
  "business-licensing": [
    "Contemporary office buildings in Saudi business district, modern architecture, no people, no text",
    "Professional desk with multiple official documents, organized workspace, no people, no text"
  ],
  "pro-services": [
    "Modern office building entrance, professional architecture, business environment, no people, no text",
    "Clean desk with visa documents and paperwork, professional setup, no people, no text"
  ]
};

const locationPrompts = {
  "riyadh": [
    "Kingdom Tower and modern skyline, business district, contemporary architecture, no people, no text"
  ],
  "jeddah": [
    "Jeddah waterfront modern buildings, business district along coast, no people, no text"
  ],
  "dammam": [
    "Dammam modern business district, contemporary buildings, Eastern Province, no people, no text"
  ],
  "al-khobar": [
    "Al Khobar modern waterfront buildings, business district, contemporary design, no people, no text"
  ],
  "tabuk": [
    "Tabuk modern business district, contemporary buildings, professional environment, no people, no text"
  ],
  "abha": [
    "Abha modern business area, contemporary buildings, mountain backdrop, no people, no text"
  ]
};

const generalPrompts = {
  "hero-image": [
    "Futuristic Saudi business district skyline, modern architecture, golden hour, no people, no text"
  ],
  "business-partnership": [
    "Two hands shaking in professional setting, business handshake closeup, formal attire, no faces visible",
    "Modern meeting room with conference table, professional setting, no people, no text"
  ],
  "success-growth": [
    "Abstract growth visualization, upward trending lines, modern design, no text",
    "Modern office building reaching skyward, success concept, no people, no text"
  ],
  "trust-security": [
    "Modern secure office building, professional architecture, safety concept, no people, no text",
    "Abstract shield design with modern elements, security concept, no text"
  ],
  "team-support": [
    "Modern open office space, collaborative environment, no people visible, no text",
    "Professional help desk area, modern office design, no people, no text"
  ]
};

const blogPrompts = {
  "llc-guide": [
    "Modern office building entrance, professional architecture, business concept, no people, no text"
  ],
  "misa-requirements": [
    "Contemporary government building, modern architecture, official setting, no people, no text"
  ],
  "business-setup-overview": [
    "Saudi modern business district overview, contemporary skyline, no people, no text"
  ]
};

// Helper functions
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
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function generateImage(category, name, prompt, imageNumber) {
  try {
    console.log(`Generating ${category} image ${imageNumber} for ${name}...`);
    
    const fullPrompt = `${prompt}, professional photography, high quality, 4K, ultra realistic, no watermarks`;
    
    const response = await client.images.generate({
      model: "provider-3/FLUX.1.1-pro-ultra",
      prompt: fullPrompt,
      n: 1,
      size: "1024x1024"
    });
    
    const imageUrl = response.data[0].url;
    console.log(`Generated image URL: ${imageUrl}`);
    
    const dirPath = path.join('public', 'images', category);
    ensureDirectoryExists(dirPath);
    
    const filename = path.join(dirPath, `${name}-${imageNumber}.jpg`);
    
    await downloadImage(imageUrl, filename);
    console.log(`Image saved as ${filename}`);
    return filename;
    
  } catch (error) {
    console.error(`Error generating image for ${name}-${imageNumber}:`, error.message);
    return null;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log("Starting clean image generation for AstroSEO...");
  console.log("Guidelines: No text in images, no women, no religious places");
  console.log("=" + "=".repeat(59));
  
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
      await sleep(3000);
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
  
  let summaryContent = "# Clean Images Summary for AstroSEO\n\n";
  summaryContent += `Generated on: ${new Date().toLocaleString()}\n`;
  summaryContent += "Guidelines: No text, no women, no religious places\n\n";
  
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
  
  fs.writeFileSync("public/images/clean-images-summary.md", summaryContent);
  console.log("\nSummary saved to: public/images/clean-images-summary.md");
  
  const totalImages = Object.values(generatedImages).reduce((total, category) => 
    total + Object.values(category).reduce((catTotal, images) => catTotal + images.length, 0), 0
  );
  
  console.log(`\nTotal images generated: ${totalImages}`);
}

main().catch(console.error);
