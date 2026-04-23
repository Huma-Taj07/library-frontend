# 🌍 Travel Diary Website

A modern, responsive travel diary platform with immersive storytelling, CMS capabilities, and SEO optimization.

## 📋 Project Overview

**Tech Stack:**

- **Frontend:** Next.js 14+ (React, TypeScript)
- **Backend:** Node.js + Express.js
- **Database:** MongoDB
- **Styling:** Tailwind CSS + CSS Modules
- **Authentication:** JWT
- **File Management:** Cloudinary/AWS S3

## 🏗️ Project Structure

```
travel-diary-website/
├── frontend/                 # Next.js frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/          # Next.js pages & routes
│   │   ├── styles/         # Global & module styles
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API client services
│   │   ├── utils/          # Utility functions
│   │   └── context/        # React Context for state
│   ├── package.json
│   └── next.config.js
│
├── backend/                  # Express.js backend API
│   ├── src/
│   │   ├── routes/         # API routes
│   │   ├── controllers/    # Route handlers
│   │   ├── models/         # MongoDB schemas
│   │   ├── middleware/     # Auth, validation, errors
│   │   ├── config/         # Config files
│   │   ├── utils/          # Utility functions
│   │   └── server.js       # Entry point
│   ├── .env.example
│   └── package.json
│
├── docs/                     # Project documentation
├── .github/
│   └── copilot-instructions.md
└── README.md
```

## ✨ Key Features

- **Travel Diaries** - Blog-style posts with rich media
- **Destinations** - Curated location guides
- **Gallery** - Photo albums & collections
- **About** - Traveler profile & story
- **Contact** - Inquiry form
- **Admin CMS** - Easy content management
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags, sitemaps, structured data
- **Fast Performance** - Image optimization, caching

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- MongoDB
- npm or yarn

### Installation

**Frontend:**

```bash
cd frontend
npm install
npm run dev
```

**Backend:**

```bash
cd backend
npm install
npm run dev
```

Visit `http://localhost:3000` for frontend and `http://localhost:5000` for backend API.

## 📚 Documentation

- [Backend Setup](docs/BACKEND_SETUP.md)
- [Frontend Setup](docs/FRONTEND_SETUP.md)
- [Database Schema](docs/DATABASE_SCHEMA.md)
- [API Documentation](docs/API_DOCS.md)

## 📝 License

MIT
