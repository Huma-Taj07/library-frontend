# Project Structure Overview

## 📁 Directory Layout

```
travel-diary-website/
│
├── frontend/                    # Next.js Frontend Application
│   ├── public/                 # Static assets
│   │   ├── images/
│   │   ├── icons/
│   │   └── favicons/
│   │
│   ├── src/
│   │   ├── app/               # Next.js app directory
│   │   │   └── layout.tsx     # Root layout
│   │   │
│   │   ├── pages/             # Next.js pages
│   │   │   ├── index.tsx      # Home page
│   │   │   ├── diaries/       # Travel diaries section
│   │   │   ├── destinations/  # Destinations section
│   │   │   ├── gallery/       # Photo gallery
│   │   │   ├── about/         # About page
│   │   │   ├── contact/       # Contact page
│   │   │   └── admin/         # Admin CMS
│   │   │
│   │   ├── components/        # React Components
│   │   │   ├── common/        # Shared components (Header, Footer, Nav)
│   │   │   ├── sections/      # Page sections
│   │   │   ├── cards/         # Card components
│   │   │   ├── forms/         # Form components
│   │   │   └── modals/        # Modal components
│   │   │
│   │   ├── hooks/             # Custom React Hooks
│   │   │   ├── useAuth.ts
│   │   │   ├── useFetch.ts
│   │   │   └── useForm.ts
│   │   │
│   │   ├── services/          # API Client Services
│   │   │   ├── api.ts         # Base axios instance
│   │   │   ├── auth.service.ts
│   │   │   ├── diary.service.ts
│   │   │   ├── destination.service.ts
│   │   │   └── gallery.service.ts
│   │   │
│   │   ├── context/           # React Context
│   │   │   ├── AuthContext.tsx
│   │   │   └── UIContext.tsx
│   │   │
│   │   ├── utils/             # Utility Functions
│   │   │   ├── validators.ts
│   │   │   ├── formatters.ts
│   │   │   ├── constants.ts
│   │   │   └── helpers.ts
│   │   │
│   │   └── styles/            # Global Styles
│   │       ├── globals.css
│   │       └── variables.css
│   │
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── package.json
│   └── .env.local.example
│
├── backend/                     # Express.js Backend API
│   ├── src/
│   │   ├── routes/            # API Routes
│   │   │   ├── auth.routes.js
│   │   │   ├── diary.routes.js
│   │   │   ├── destination.routes.js
│   │   │   ├── gallery.routes.js
│   │   │   ├── user.routes.js
│   │   │   └── contact.routes.js
│   │   │
│   │   ├── controllers/       # Route Handlers
│   │   │   ├── authController.js
│   │   │   ├── diaryController.js
│   │   │   ├── destinationController.js
│   │   │   ├── galleryController.js
│   │   │   ├── userController.js
│   │   │   └── contactController.js
│   │   │
│   │   ├── models/            # Mongoose Schemas
│   │   │   ├── User.js
│   │   │   ├── Diary.js
│   │   │   ├── Destination.js
│   │   │   ├── GalleryImage.js
│   │   │   └── Contact.js
│   │   │
│   │   ├── middleware/        # Custom Middleware
│   │   │   ├── auth.middleware.js
│   │   │   ├── errorHandler.middleware.js
│   │   │   ├── validation.middleware.js
│   │   │   └── upload.middleware.js
│   │   │
│   │   ├── config/            # Configuration Files
│   │   │   ├── database.js
│   │   │   ├── cloudinary.js
│   │   │   └── email.js
│   │   │
│   │   ├── utils/             # Utility Functions
│   │   │   ├── tokenGenerator.js
│   │   │   ├── emailSender.js
│   │   │   ├── validators.js
│   │   │   └── logger.js
│   │   │
│   │   └── server.js          # Entry Point
│   │
│   ├── package.json
│   ├── .env.example
│   └── .eslintrc.json
│
├── docs/                        # Documentation
│   ├── PROJECT_STRUCTURE.md    # This file
│   ├── API_DOCUMENTATION.md    # API endpoints
│   ├── DATABASE_SCHEMA.md      # DB models
│   ├── SETUP_GUIDE.md          # Setup instructions
│   └── DEPLOYMENT.md           # Deployment guide
│
├── .github/
│   └── copilot-instructions.md # AI assistant instructions
│
├── .gitignore
└── README.md
```

## 📋 Key Folders Explained

### Frontend Directories

**pages/** - Each file automatically becomes a route

- Direct mapping to URLs
- SEO-friendly structure
- Dynamic routes for blogs/destinations

**components/** - Reusable React components

- Organized by feature type
- Small, focused components
- Props-based configuration

**services/** - API communication layer

- Centralized API calls
- Error handling
- Request/response interceptors

**hooks/** - Custom React logic

- Authentication hooks
- Fetch hooks
- Form management hooks

**context/** - Global state management

- User authentication state
- UI theme/preferences
- Notification state

### Backend Directories

**routes/** - Express route definitions

- REST endpoint definitions
- Route parameters
- HTTP method handlers

**controllers/** - Business logic

- Request validation
- Database operations
- Response formatting

**models/** - Database schemas

- Mongoose schema definitions
- Validation rules
- Custom methods

**middleware/** - Express middleware

- Authentication checks
- Error handling
- Validation
- File uploads

## 🔗 Data Flow

```
Frontend (Next.js)
   ↓
API Services (axios)
   ↓
Backend Routes (Express)
   ↓
Middleware (auth, validation)
   ↓
Controllers (business logic)
   ↓
Models (Mongoose)
   ↓
MongoDB Database
```

## 🎯 Development Approach

1. **Models First** - Define database schemas
2. **Controllers & Routes** - Implement backend APIs
3. **Services** - Create frontend API clients
4. **Components** - Build UI components
5. **Integration** - Connect frontend to backend

This structure ensures scalability, maintainability, and clear separation of concerns.
