import fs from 'fs';
import path from 'path';

function checkImages(dir) {
  const categories = ['services', 'locations', 'general', 'blog'];
  let totalImages = 0;
  let totalSize = 0;
  
  console.log('=== Clean Image Generation Status ===\n');
  
  categories.forEach(category => {
    const categoryPath = path.join('public/images', category);
    if (fs.existsSync(categoryPath)) {
      const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
      let categorySize = 0;
      
      console.log(`${category.toUpperCase()} (${files.length} images):`);
      files.forEach(file => {
        const filePath = path.join(categoryPath, file);
        const stats = fs.statSync(filePath);
        const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
        categorySize += stats.size;
        
        if (stats.size === 0) {
          console.log(`  ❌ ${file} - 0 bytes (failed download)`);
        } else {
          console.log(`  ✅ ${file} - ${sizeMB} MB`);
        }
      });
      
      totalImages += files.length;
      totalSize += categorySize;
      console.log(`  Total: ${(categorySize / 1024 / 1024).toFixed(2)} MB\n`);
    }
  });
  
  console.log(`\nTotal images: ${totalImages}`);
  console.log(`Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Average size: ${totalImages > 0 ? ((totalSize / totalImages) / 1024 / 1024).toFixed(2) : 0} MB per image`);
}

checkImages();
