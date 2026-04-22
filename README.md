# Nagpur Real Estate Platform

A production-ready full-stack web application for exploring real estate in Nagpur.

## Features
- **Homepage**: Hero search, featured projects, and locality highlights.
- **Listing View**: Filterable grid of properties in Nagpur.
- **Detail View**: Comprehensive property information, gallery, and contact CTAs.
- **Backend API**: FastAPI powered endpoints for properties and localities.
- **Clean Architecture**: Modular React components and SQLAlchemy database models.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS, Lucide Icons.
- **Backend**: Python, FastAPI, SQLAlchemy.
- **Database**: SQLite (Default) / PostgreSQL.

## Quick Setup

### 1. Automated Setup
Run the `setup.bat` file in the root directory:
```bash
./setup.bat
```

### 2. Manual Setup

#### Backend:
```bash
cd backend
pip install -r requirements.txt
python -m app.seed
python -m uvicorn app.main:app --reload
```

#### Frontend:
```bash
cd frontend
npm install
npm run dev
```

## Nagpur Focus
This platform is specifically designed for Nagpur, featuring localities like Dharampeth, Wardha Road, MIHAN, and Manish Nagar.
