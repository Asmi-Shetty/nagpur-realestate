from .database import SessionLocal, engine
from . import models

def seed_data():
    models.Base.metadata.create_all(bind=engine)
    db = SessionLocal()

    # Check if already seeded
    if db.query(models.Locality).first():
        db.close()
        return

    # Localities
    localities = [
        models.Locality(
            name="Dharampeth", 
            description="Premium residential area with upscale shopping and dining.",
            avg_price_per_sq_ft=8500.0,
            tags=["Premium", "Residential", "Central"],
            coordinates={"lat": 21.1408, "lng": 79.0664}
        ),
        models.Locality(
            name="Wardha Road",
            description="Rapidly developing corridor with great connectivity to airport and MIHAN.",
            avg_price_per_sq_ft=5500.0,
            tags=["Connectivity", "Developing", "Metro"],
            coordinates={"lat": 21.0827, "lng": 79.0601}
        ),
        models.Locality(
            name="MIHAN",
            description="The emerging IT and aerospace hub of Nagpur.",
            avg_price_per_sq_ft=4500.0,
            tags=["IT Hub", "Growth", "Investment"],
            coordinates={"lat": 21.0371, "lng": 79.0253}
        )
    ]

    for loc in localities:
        db.add(loc)
    
    db.commit()

    # Properties
    dharampeth = db.query(models.Locality).filter(models.Locality.name == "Dharampeth").first()
    wardha_road = db.query(models.Locality).filter(models.Locality.name == "Wardha Road").first()

    properties = [
        models.Property(
            title="Godrej Anandam",
            description="Luxury apartment complex in Central Nagpur.",
            price_range="₹75 L - 2.5 Cr",
            price_min=7500000,
            price_max=25000000,
            type="Buy",
            property_type="Flat",
            bhk="2, 3, 4 BHK",
            area="1250 - 3200 sq.ft",
            images=["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"],
            locality_id=dharampeth.id,
            lat=21.1450,
            lng=79.0700,
            amenities=["Clubhouse", "Gym", "Swimming Pool", "24/7 Security"]
        ),
        models.Property(
            title="Bloomfield Villas",
            description="Spacious row houses with modern amenities.",
            price_range="₹1.2 Cr - 3.8 Cr",
            price_min=12000000,
            price_max=38000000,
            type="Buy",
            property_type="Villa",
            bhk="4 BHK Row Houses",
            area="2400 - 4500 sq.ft",
            images=["https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800"],
            locality_id=wardha_road.id,
            lat=21.0900,
            lng=79.0650,
            amenities=["Private Garden", "Power Backup", "Car Parking"]
        )
    ]

    for prop in properties:
        db.add(prop)
    
    db.commit()
    db.close()

if __name__ == "__main__":
    seed_data()
    print("Data seeded successfully!")
