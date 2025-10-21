from openai import OpenAI
import requests
import os
import time

# Initialize the client with the provided API key
client = OpenAI(
    api_key="ddc-a4f-b0aa18cb214544e8b2ba7d5cd2c33425",
    base_url="https://api.a4f.co/v1"
)

# Image prompts - no text, no women, no religious places
service_prompts = {
    # Main services
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
}

# Location-specific images - avoiding religious places
location_prompts = {
    "riyadh": [
        "Kingdom Tower and modern skyline, business district, contemporary architecture, no people, no text",
        "King Abdullah Financial District, modern buildings, business environment, no people, no text"
    ],
    "jeddah": [
        "Jeddah waterfront modern buildings, business district along coast, no people, no text",
        "Modern commercial buildings in Jeddah, business architecture, no people, no text"
    ],
    "dammam": [
        "Dammam modern business district, contemporary buildings, Eastern Province, no people, no text",
        "Modern office buildings in Dammam, business environment, no people, no text"
    ],
    "al-khobar": [
        "Al Khobar modern waterfront buildings, business district, contemporary design, no people, no text",
        "Contemporary business architecture in Al Khobar, modern buildings, no people, no text"
    ],
    "tabuk": [
        "Tabuk modern business district, contemporary buildings, professional environment, no people, no text",
        "Modern commercial buildings in Tabuk, business architecture, no people, no text"
    ],
    "abha": [
        "Abha modern business area, contemporary buildings, mountain backdrop, no people, no text",
        "Modern office buildings in Abha, business environment, no people, no text"
    ]
}

# Home page and general images - simple, no text
general_prompts = {
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
}

# Blog post images - simple, no text
blog_prompts = {
    "llc-guide": [
        "Modern office building entrance, professional architecture, business concept, no people, no text",
        "Clean desk with laptop and documents, business setup concept, no people, no text"
    ],
    "misa-requirements": [
        "Contemporary government building, modern architecture, official setting, no people, no text",
        "Professional desk with official documents, investment concept, no people, no text"
    ],
    "business-setup-overview": [
        "Saudi modern business district overview, contemporary skyline, no people, no text",
        "Modern office interior, business environment, professional setting, no people, no text"
    ]
}

def generate_image(category, name, prompt, image_number):
    """Generate an image for a specific category and name"""
    try:
        print(f"Generating {category} image {image_number} for {name}...")
        
        # Add consistent style to all prompts
        full_prompt = f"{prompt}, professional photography, high quality, 4K, ultra realistic, no watermarks"
        
        response = client.images.generate(
            model="provider-3/FLUX.1.1-pro-ultra",
            prompt=full_prompt,
            n=1,
            size="1024x1024"
        )
        
        image_url = response.data[0].url
        print(f"Generated image URL: {image_url}")
        
        # Create directory structure
        dir_path = f"public/images/{category}"
        if not os.path.exists(dir_path):
            os.makedirs(dir_path)
            
        filename = f"{dir_path}/{name}-{image_number}.jpg"
        
        # Download the image
        img_response = requests.get(image_url)
        if img_response.status_code == 200:
            with open(filename, 'wb') as f:
                f.write(img_response.content)
            print(f"Image saved as {filename}")
            return filename
        else:
            print(f"Failed to download image")
            return None
            
    except Exception as e:
        print(f"Error generating image: {e}")
        return None

def main():
    print("Starting improved image generation for AstroSEO...")
    print("Guidelines: No text in images, no women, no religious places")
    print("=" * 60)
    
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
        for i, prompt in enumerate(prompts[:2], 1):
            image_path = generate_image("services", service, prompt, i)
            if image_path:
                service_images.append(image_path)
            time.sleep(3)  # Rate limiting
        generated_images["services"][service] = service_images
    
    # Generate location images
    print("\n=== Generating Location Images ===")
    for location, prompts in location_prompts.items():
        location_images = []
        for i, prompt in enumerate(prompts[:1], 1):
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
        for i, prompt in enumerate(prompts[:1], 1):
            image_path = generate_image("blog", blog, prompt, i)
            if image_path:
                blog_images.append(image_path)
            time.sleep(3)
        generated_images["blog"][blog] = blog_images
    
    # Create summary report
    print("\n=== Image Generation Complete ===")
    
    with open("public/images/improved-images-summary.md", "w") as f:
        f.write("# Improved Images Summary for AstroSEO\n\n")
        f.write("Generated on: " + time.strftime("%Y-%m-%d %H:%M:%S") + "\n")
        f.write("Guidelines: No text, no women, no religious places\n\n")
        
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
    
    print("\nSummary saved to: public/images/improved-images-summary.md")
    
    # Print final statistics
    total_images = sum(len(images) for category in generated_images.values() for images in category.values())
    print(f"\nTotal images generated: {total_images}")

if __name__ == "__main__":
    main()
