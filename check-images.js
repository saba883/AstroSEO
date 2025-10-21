import fs from 'fs';
import path from 'path';

function countImages(dir) {
  let count = 0;
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    if (file.isDirectory()) {
      count += countImages(path.join(dir, file.name));
    } else if (file.name.endsWith('.jpg') || file.name.endsWith('.png')) {
      count++;
    }
  }
  
  return count;
}

function listImages(dir, prefix = '') {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  const images = [];
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      images.push(...listImages(fullPath, prefix + file.name + '/'));
    } else if (file.name.endsWith('.jpg') || file.name.endsWith('.png')) {
      images.push(prefix + file.name);
    }
  }
  
  return images;
}

console.log('=== Image Generation Progress ===\n');

const imageDir = 'public/images';
if (fs.existsSync(imageDir)) {
  const totalImages = countImages(imageDir);
  console.log(`Total images generated: ${totalImages}\n`);
  
  // Check each category
  const categories = ['services', 'locations', 'general', 'blog'];
  for (const category of categories) {
    const categoryPath = path.join(imageDir, category);
    if (fs.existsSync(categoryPath)) {
      const images = listImages(categoryPath);
      console.log(`${category.toUpperCase()} (${images.length} images):`);
      images.forEach(img => console.log(`  - ${img}`));
      console.log();
    }
  }
} else {
  console.log('Images directory not found!');
}

console.log('\nExpected totals:');
console.log('- Services: 12 images (2 per service × 6 services)');
console.log('- Locations: 6 images (1 per location)');
console.log('- General: 9 images (various home page images)');
console.log('- Blog: 3 images (1 per blog post)');
console.log('- TOTAL: 30 images');
