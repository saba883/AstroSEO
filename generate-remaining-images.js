import OpenAI from 'openai';
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const client = new OpenAI({
  apiKey: "ddc-a4f-b0aa18cb214544e8b2ba7d5cd2c33425",
  baseURL: "https://api.a4f.co/v1"
});

// Remaining images to generate
const remainingPrompts = {
  services: {
    "pro-services": [
      "Modern office building entrance, professional architecture, business environment, no people, no text",
      "Clean desk with visa documents and paperwork, professional setup, no people, no text"
    ]
  },
  locations: {
    "riyadh": "Kingdom Tower and modern skyline, business district, contemporary architecture, no people, no text",
    "jeddah": "Jeddah waterfront modern buildings, business district along coast, no people, no text",
    "dammam": "Dammam modern business district, contemporary buildings, Eastern Province, no people, no text",
    "al-khobar": "Al Khobar modern waterfront buildings, business district, contemporary design, no people, no text",
    "tabuk": "Tabuk modern business district, contemporary buildings, professional environment, no people, no text",
    "abha": "Abha modern business area, contemporary buildings, mountain backdrop, no people, no text"
  },
  general: {
    "hero-image": "Futuristic Saudi business district skyline, modern architecture, golden hour, no people, no text",
    "business-partnership": "Two hands shaking in professional setting, business handshake closeup, formal attire, no faces visible",
    "success-growth": "Abstract growth visualization, upward trending lines, modern design, no text",
    "trust-security": "Modern secure office building, professional architecture, safety concept, no people, no text",
    "team-support": "Modern open office space, collaborative environment, no people visible, no text"
  },
  blog: {
    "llc-guide": "Modern office building entrance, professional architecture, business concept, no people, no text",
    "misa-requirements": "Contemporary government building, modern architecture, official setting, no people, no text",
    "business-setup-overview": "Saudi modern business district overview, contemporary skyline, no people, no text"
  }
};

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

async function generateImage(category, name, prompt, imageNumber = 1) {
  try {
    console.log(`Generating ${category} image for ${name}...`);
    
    const fullPrompt = `${prompt}, professional photography, high quality, 4K, ultra realistic, no watermarks`;
    
    const response = await client.images.generate({
      model: "provider-3/FLUX.1.1-pro-ultra",
      prompt: fullPrompt,
      n: 1,
      size: "1024x1024"
    });
    
    const imageUrl = response.data[0].url;
    const filename = path.join('public', 'images', category, `${name}-${imageNumber}.jpg`);
    
    await downloadImage(imageUrl, filename);
    console.log(`✅ Saved: ${filename}`);
    return filename;
    
  } catch (error) {
    console.error(`❌ Error for ${name}: ${error.message}`);
    return null;
  }
}

async function main() {
  console.log("Generating remaining images for AstroSEO...\n");
  
  // Generate remaining service images
  console.log("=== PRO Services Images ===");
  for (let i = 0; i < remainingPrompts.services["pro-services"].length; i++) {
    await generateImage("services", "pro-services", remainingPrompts.services["pro-services"][i], i + 1);
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  
  // Generate location images
  console.log("\n=== Location Images ===");
  for (const [location, prompt] of Object.entries(remainingPrompts.locations)) {
    await generateImage("locations", location, prompt);
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  
  // Generate general images
  console.log("\n=== General Images ===");
  for (const [name, prompt] of Object.entries(remainingPrompts.general)) {
    await generateImage("general", name, prompt);
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  
  // Generate blog images
  console.log("\n=== Blog Images ===");
  for (const [name, prompt] of Object.entries(remainingPrompts.blog)) {
    await generateImage("blog", name, prompt);
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  
  console.log("\n✅ Image generation complete!");
}

main().catch(console.error);
