from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Nagpur Real Estate API")

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to Nagpur Real Estate API"}

@app.get("/api/properties")
async def get_properties():
    # Placeholder for property listings
    return [
        {
            "id": 1,
            "title": "Godrej Anandam",
            "price": "₹75 L - 2.5 Cr",
            "location": "Ganeshpeth, Nagpur",
            "bhk": "2, 3, 4 BHK",
            "image": "https://via.placeholder.com/400x300?text=Godrej+Anandam",
            "tags": ["New Launch"]
        },
        {
            "id": 2,
            "title": "Bloomfield Villas",
            "price": "₹1.2 Cr - 3.8 Cr",
            "location": "Wardha Road, Nagpur",
            "bhk": "4 BHK Row Houses",
            "image": "https://via.placeholder.com/400x300?text=Bloomfield+Villas",
            "tags": ["Ready to Move"]
        },
        {
            "id": 3,
            "title": "Vrindavan Township",
            "price": "₹45 L - 1.1 Cr",
            "location": "Jamtha, Nagpur",
            "bhk": "1, 2, 3 BHK",
            "image": "https://via.placeholder.com/400x300?text=Vrindavan+Township",
            "tags": ["Eco-Friendly"]
        }
    ]

@app.get("/api/localities")
async def get_localities():
    return [
        {"name": "Dharampeth", "tagline": "Premium Residential", "icon": "home"},
        {"name": "Wardha Road", "tagline": "Connectivity Hub", "icon": "truck"},
        {"name": "MIHAN", "tagline": "IT & Aerospace", "icon": "briefcase"},
        {"name": "Manish Nagar", "tagline": "Lifestyle & Retail", "icon": "shopping-bag"},
        {"name": "Hingna", "tagline": "Industrial & Education", "icon": "book"}
    ]
