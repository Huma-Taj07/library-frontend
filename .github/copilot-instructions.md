# Travel Diary Website - Development Instructions

## Project Overview

A modern, responsive travel diary website with Next.js frontend, Express.js backend, and MongoDB database. Features include travel diaries, destinations, gallery, admin CMS, and SEO optimization.

## Tech Stack

- **Frontend:** Next.js 14+, React 18, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, JWT Auth
- **File Storage:** Cloudinary/AWS S3
- **Styling:** Tailwind CSS + CSS Modules

## Project Structure

- `frontend/` - Next.js application for public-facing website
- `backend/` - Express.js REST API server
- `docs/` - Project documentation

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow ESLint configuration
- Component-based architecture
- Separation of concerns (Models, Controllers, Services)

### Database

- MongoDB with Mongoose ODM
- Schema validation at model level
- Proper indexing for performance

### API Structure

- RESTful endpoints
- JWT-based authentication
- Error handling & validation middleware
- Rate limiting for production

### Frontend Best Practices

- Server-side rendering with Next.js
- Image optimization
- SEO-friendly meta tags
- Responsive mobile-first design
- Custom hooks for logic reusability
- Context API for state management

## Setup Instructions

1. Install dependencies: `npm install` in both frontend & backend
2. Configure `.env` files from `.env.example`
3. Start MongoDB locally or use cloud service
4. Run backend: `npm run dev` in backend/
5. Run frontend: `npm run dev` in frontend/

## Available Scripts

- `npm run dev` - Development mode
- `npm run build` - Production build
- `npm start` - Start production server
- `npm run lint` - Lint code
- `npm run type-check` - TypeScript validation

## Next Steps

1. Create database models (Diary, Destination, User, Gallery)
2. Build API endpoints (CRUD operations)
3. Setup authentication system
4. Create frontend components
5. Implement admin panel
