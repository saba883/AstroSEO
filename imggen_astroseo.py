from openai import OpenAI
import requests
import os
import time

# Initialize the client with the provided API key
client = OpenAI(
    api_key="ddc-a4f-b0aa18cb214544e8b2ba7d5cd2c33425",
    base_url="https://api.a4f.co/v1"
)

# Image prompts for AstroSEO services - professional business imagery
service_prompts = {
    # Main services
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
}

# Location-specific images
location_prompts = {
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
}

# Home page and general images
general_prompts = {
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
}

# Blog post images
blog_prompts = {
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
}

def generate_image(category, name, prompt, image_number):
    """Generate an image for a specific category and name"""
    try:
        print(f"Generating {category} image {image_number} for {name}...")
        
        response = client.images.generate(
            model="provider-3/FLUX.1.1-pro-ultra",
            prompt=prompt + ", professional photography, high quality, business context, Saudi Arabia",
            n=1,
            size="1024x1024"
        )
        
        image_url = response.data[0].url
        print(f"Generated image URL for {name}-{image_number}: {image_url}")
        
        # Download the image
        img_response = requests.get(image_url)
        if img_response.status_code == 200:
            # Create directory structure
            dir_path = f"public/images/{category}"
            if not os.path.exists(dir_path):
                os.makedirs(dir_path)
                
            filename = f"{dir_path}/{name}-{image_number}.jpg"
            with open(filename, 'wb') as f:
                f.write(img_response.content)
            print(f"Image saved as {filename}")
            return filename
        else:
            print(f"Failed to download image for {name}-{image_number}")
            return None
            
    except Exception as e:
        print(f"Error generating image for {name}-{image_number}: {e}")
        return None

def main():
    print("Starting image generation for AstroSEO website...")
    
    # Ensure base directories exist
    base_dirs = ["public/images/services", "public/images/locations", "public/images/general", "public/images/blog"]
    for dir_path in base_dirs:
        if not os.path.exists(dir_path):
            os.makedirs(dir_path)
    
    generated_images = {
        "services": {},
        "locations": {},
        "general": {},
        "blog": {}
    }
    
    # Generate service images
    print("\n=== Generating Service Images ===")
    for service, prompts in service_prompts.items():
        service_images = []
        for i, prompt in enumerate(prompts[:2], 1):  # Generate 2 images per service
            image_path = generate_image("services", service, prompt, i)
            if image_path:
                service_images.append(image_path)
            time.sleep(3)  # Rate limiting
        generated_images["services"][service] = service_images
    
    # Generate location images
    print("\n=== Generating Location Images ===")
    for location, prompts in location_prompts.items():
        location_images = []
        for i, prompt in enumerate(prompts[:1], 1):  # Generate 1 image per location
            image_path = generate_image("locations", location, prompt, i)
            if image_path:
                location_images.append(image_path)
            time.sleep(3)
        generated_images["locations"][location] = location_images
    
    # Generate general images
    print("\n=== Generating General Images ===")
    for category, prompts in general_prompts.items():
        category_images = []
        for i, prompt in enumerate(prompts, 1):
            image_path = generate_image("general", category, prompt, i)
            if image_path:
                category_images.append(image_path)
            time.sleep(3)
        generated_images["general"][category] = category_images
    
    # Generate blog images
    print("\n=== Generating Blog Images ===")
    for blog, prompts in blog_prompts.items():
        blog_images = []
        for i, prompt in enumerate(prompts[:1], 1):  # Generate 1 image per blog post
            image_path = generate_image("blog", blog, prompt, i)
            if image_path:
                blog_images.append(image_path)
            time.sleep(3)
        generated_images["blog"][blog] = blog_images
    
    # Create summary report
    print("\n=== Image Generation Complete ===")
    print("\nGenerated images summary:")
    
    with open("public/images/generated-images-summary.md", "w") as f:
        f.write("# Generated Images Summary for AstroSEO\n\n")
        f.write("Generated on: " + time.strftime("%Y-%m-%d %H:%M:%S") + "\n\n")
        
        f.write("## Service Images\n")
        for service, images in generated_images["services"].items():
            f.write(f"\n### {service.replace('-', ' ').title()}\n")
            for image in images:
                f.write(f"- `{image}`\n")
        
        f.write("\n## Location Images\n")
        for location, images in generated_images["locations"].items():
            f.write(f"\n### {location.replace('-', ' ').title()}\n")
            for image in images:
                f.write(f"- `{image}`\n")
        
        f.write("\n## General Images\n")
        for category, images in generated_images["general"].items():
            f.write(f"\n### {category.replace('-', ' ').title()}\n")
            for image in images:
                f.write(f"- `{image}`\n")
        
        f.write("\n## Blog Images\n")
        for blog, images in generated_images["blog"].items():
            f.write(f"\n### {blog.replace('-', ' ').title()}\n")
            for image in images:
                f.write(f"- `{image}`\n")
        
        f.write("\n## Usage Instructions\n")
        f.write("1. Service images: Use in service pages and service cards\n")
        f.write("2. Location images: Use in location-specific pages\n")
        f.write("3. General images: Use for hero sections, about us, etc.\n")
        f.write("4. Blog images: Use as featured images for blog posts\n")
    
    print("\nSummary saved to: public/images/generated-images-summary.md")
    
    # Print final statistics
    total_images = sum(len(images) for category in generated_images.values() for images in category.values())
    print(f"\nTotal images generated: {total_images}")
    print(f"- Service images: {sum(len(images) for images in generated_images['services'].values())}")
    print(f"- Location images: {sum(len(images) for images in generated_images['locations'].values())}")
    print(f"- General images: {sum(len(images) for images in generated_images['general'].values())}")
    print(f"- Blog images: {sum(len(images) for images in generated_images['blog'].values())}")

if __name__ == "__main__":
    main()
