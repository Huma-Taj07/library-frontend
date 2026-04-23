# Travel Diary Website - Quick Start Guide

## Prerequisites

- Node.js 16+
- npm or yarn
- MongoDB (local or cloud)

## Frontend Setup

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Configure Environment

```bash
# Copy the example env file
cp .env.local.example .env.local

# Update .env.local with your API URL
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
npm start
```

## Backend Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

```bash
# Copy the example env file
cp .env.example .env

# Fill in your configuration:
MONGODB_URI=mongodb://localhost:27017/travel-diary
PORT=5000
JWT_SECRET=your_secret_key_here
```

### 3. Run Development Server

```bash
npm run dev
```

API will be available at `http://localhost:5000/api`

### 4. Test Health Check

```bash
curl http://localhost:5000/api/health
```

## Project Structure

```
travel-diary-website/
├── frontend/          # Next.js React app
├── backend/           # Express.js API
├── docs/             # Documentation
└── README.md
```

## Available Scripts

### Frontend

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript check
```

### Backend

```bash
npm run dev    # Start with nodemon (watch mode)
npm start      # Start production server
npm run lint   # Run ESLint
npm run test   # Run tests
```

## Features

### Public Pages

- Home with featured content
- Travel Diaries with search/filter
- Destinations exploration
- Photo Gallery with lightbox
- About page with author biography
- Contact form

### Admin CMS

- Dashboard with statistics
- Diary management (create, edit, delete)
- Destination management
- Gallery management
- Newsletter subscribers

## Database - MongoDB Collections

**Users**

```javascript
{
  _id: ObjectId,
  email: String,
  password: String (hashed),
  name: String,
  role: String (admin/user),
  createdAt: Date
}
```

**Diaries**

```javascript
{
  _id: ObjectId,
  title: String,
  excerpt: String,
  content: String,
  category: String,
  featuredImage: String (URL),
  author: ObjectId (ref User),
  status: String (draft/published),
  views: Number,
  createdAt: Date,
  updatedAt: Date
}
```

## API Endpoints (To Be Implemented)

```
GET    /api/health
GET    /api/diaries
POST   /api/diaries
GET    /api/diaries/:id
PUT    /api/diaries/:id
DELETE /api/diaries/:id

GET    /api/destinations
POST   /api/destinations
GET    /api/destinations/:id

GET    /api/gallery
POST   /api/gallery
DELETE /api/gallery/:id

POST   /api/contact
POST   /api/newsletter/subscribe

POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
```

## Deployment

### Frontend (Vercel)

```bash
vercel deploy
```

### Backend (Heroku/Railway/Render)

```bash
# Set environment variables in your hosting platform
git push heroku main
```

## Troubleshooting

**CORS Issues**

- Ensure backend has frontend URL in CORS config

**Database Connection**

- Verify MongoDB is running
- Check MONGODB_URI in .env

**Port Already in Use**

- Change PORT in .env
- Kill process using port: `lsof -i :5000`

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Docs](https://docs.mongodb.com)
- [Tailwind CSS](https://tailwindcss.com)

---

For more details, see documentation in `/docs` folder.
