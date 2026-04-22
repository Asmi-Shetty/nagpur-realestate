from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .database import Base

class Locality(Base):
    __tablename__ = "localities"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String)
    avg_price_per_sq_ft = Column(Float)
    tags = Column(JSON)  # List of strings like ["Premium", "IT Hub"]
    coordinates = Column(JSON)  # {"lat": float, "lng": float}

    properties = relationship("Property", back_populates="locality")

class Property(Base):
    __tablename__ = "properties"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    price_range = Column(String)
    price_min = Column(Float)
    price_max = Column(Float)
    type = Column(String)  # Buy/Rent
    property_type = Column(String)  # Flat/Villa/Plot
    bhk = Column(String)
    area = Column(String)
    images = Column(JSON)  # List of image URLs
    locality_id = Column(Integer, ForeignKey("localities.id"))
    lat = Column(Float)
    lng = Column(Float)
    amenities = Column(JSON)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    locality = relationship("Locality", back_populates="properties")

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    full_name = Column(String)

class Favorite(Base):
    __tablename__ = "favorites"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    property_id = Column(Integer, ForeignKey("properties.id"))
