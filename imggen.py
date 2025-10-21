from openai import OpenAI
import requests
import os
import time

# Initialize the client with the provided API key
client = OpenAI(
    api_key="ddc-a4f-b0aa18cb214544e8b2ba7d5cd2c33425",
    base_url="https://api.a4f.co/v1"
)

# Gallery image prompts for each service - 2 variations per service
gallery_prompts = {
 

def generate_gallery_image(service_name, prompt, image_number):
    """Generate a gallery image for a specific service"""
    try:
        print(f"Generating gallery image {image_number} for {service_name}...")
        
        response = client.images.generate(
            model="provider-3/FLUX.1.1-pro-ultra",
            prompt=prompt,
            n=1,
            size="1024x1024"
        )
        
        image_url = response.data[0].url
        print(f"Generated image URL for {service_name}-{image_number}: {image_url}")
        
        # Download the image
        img_response = requests.get(image_url)
        if img_response.status_code == 200:
            filename = f"images/gallery/{service_name}-{image_number}.jpg"
            with open(filename, 'wb') as f:
                f.write(img_response.content)
            print(f"Image saved as {filename}")
            return filename
        else:
            print(f"Failed to download image for {service_name}-{image_number}")
            return None
            
    except Exception as e:
        print(f"Error generating image for {service_name}-{image_number}: {e}")
        return None

def main():
    print("Starting gallery image generation for AM Enterprises services...")
    
    # Ensure gallery directory exists
    if not os.path.exists("images/gallery"):
        os.makedirs("images/gallery")
    
    # Generate gallery images for each service
    generated_images = {}
    
    for service, prompts in gallery_prompts.items():
        service_images = []
        # Check if service already has images
        existing_images = [f for f in os.listdir("images/gallery") if f.startswith(service)]
        if len(existing_images) >= 2:
            print(f"Skipping {service} - already has {len(existing_images)} images")
            continue
            
        for i, prompt in enumerate(prompts[:2], 1):  # Generate only 2 images per service
            image_path = generate_gallery_image(service, prompt, i)
            if image_path:
                service_images.append(image_path)
            # Add delay to avoid rate limiting
            time.sleep(3)
        
        generated_images[service] = service_images
    
    print("\nGallery image generation completed!")
    print("Generated gallery images:")
    for service, images in generated_images.items():
        print(f"- {service}: {len(images)} images")
        for image in images:
            print(f"  - {image}")
    
    # Create a summary file
    with open("images/gallery-images-summary.md", "w") as f:
        f.write("# Gallery Images Summary\n\n")
        for service, images in generated_images.items():
            f.write(f"## {service.replace('-', ' ').title()}\n")
            for image in images:
                f.write(f"- `{image}`\n")
            f.write("\n")

if __name__ == "__main__":
    main()
