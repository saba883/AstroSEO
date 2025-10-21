import Database from 'better-sqlite3';
import path from 'path';

// Blog image mapping
const blogImages = {
  'llc-guide': '/images/blog/llc-guide-1.jpg',
  'misa-requirements': '/images/blog/misa-requirements-1.jpg', 
  'business-setup-overview': '/images/blog/business-setup-overview-1.jpg'
};

// Default blog image
const defaultBlogImage = '/images/general/business-partnership-1.jpg';

async function updateBlogImages() {
  const db = new Database('data.db');
  
  try {
    // Get all blog posts
    const posts = db.prepare('SELECT id, slug FROM blogPosts').all();
    
    console.log(`Found ${posts.length} blog posts to update`);
    
    // Update each post with appropriate image
    const updateStmt = db.prepare('UPDATE blogPosts SET featuredImage = ? WHERE id = ?');
    
    posts.forEach(post => {
      let imageUrl = defaultBlogImage;
      
      // Check if we have a specific image for this post
      for (const [key, image] of Object.entries(blogImages)) {
        if (post.slug.includes(key)) {
          imageUrl = image;
          break;
        }
      }
      
      updateStmt.run(imageUrl, post.id);
      console.log(`Updated ${post.slug} with image: ${imageUrl}`);
    });
    
    console.log('\n✅ Blog images updated successfully!');
    
  } catch (error) {
    console.error('Error updating blog images:', error);
  } finally {
    db.close();
  }
}

updateBlogImages();
