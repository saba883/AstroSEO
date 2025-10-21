from openai import OpenAI
import requests
import os
import time

# Initialize the client with the provided API key
client = OpenAI(
    api_key="ddc-a4f-b0aa18cb214544e8b2ba7d5cd2c33425",
    base_url="https://api.a4f.co/v1"
)

def generate_test_image():
    """Generate a test image to verify the setup works"""
    try:
        print("Generating test image...")
        
        response = client.images.generate(
            model="provider-3/FLUX.1.1-pro-ultra",
            prompt="Modern Riyadh business district skyline, Kingdom Tower, professional photography, clear day, no people",
            n=1,
            size="1024x1024"
        )
        
        image_url = response.data[0].url
        print(f"Generated image URL: {image_url}")
        
        # Create directory if it doesn't exist
        if not os.path.exists("public/images/test"):
            os.makedirs("public/images/test")
        
        # Download the image
        img_response = requests.get(image_url)
        if img_response.status_code == 200:
            filename = "public/images/test/test-riyadh-skyline.jpg"
            with open(filename, 'wb') as f:
                f.write(img_response.content)
            print(f"Image saved as {filename}")
            return True
        else:
            print("Failed to download image")
            return False
            
    except Exception as e:
        print(f"Error generating image: {e}")
        return False

if __name__ == "__main__":
    print("Testing image generation for AstroSEO...")
    success = generate_test_image()
    if success:
        print("\nTest successful! You can now run the full image generation script.")
    else:
        print("\nTest failed. Please check the error messages above.")
