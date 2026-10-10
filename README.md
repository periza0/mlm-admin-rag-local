MLM Sports Club

https://www.mlmsportsclub.online/

A production-ready full-stack sports club management platform for **MLM Sports Club** featuring a responsive public website, secure admin dashboard, dynamic achievements, gallery management, and optimized backend performance.

## Features

### Public Website

* Responsive React frontend
* Home, About, Coaching, Membership, Gallery, and Achievements pages
* Swiper-powered gallery carousel
* Dynamic achievement player profiles
* Mobile-friendly UI

### Admin Dashboard

* Secure admin authentication using JWT
* Password hashing with bcrypt
* Protected CRUD APIs
* Manage achievements and gallery images
* Cloudinary image uploads

### Performance & Reliability

* In-memory backend caching for frequently accessed data
* CDN cache headers for faster content delivery
* Automatic cache invalidation after updates
* Graceful fallback to stale cached data during temporary database failures
* Client-side fallback data to prevent broken pages when APIs are unavailable
* Fresh-data bypass for admin operations

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Router
* Swiper

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Tokens)
* bcryptjs

### File Uploads

* Multer
* Cloudinary
* multer-storage-cloudinary

### Deployment

* Vercel

---

## Project Structure

```text
mlm-admin-version/
│
├── src/
│   ├── components/
│   ├── pages/
│   └── config.js
│
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   │   └── readCache.js
│   ├── createAdmin.js
│   └── server.js
│
└── public/
```

---

## Environment Variables

Create a `.env` file inside the `backend` directory.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

ADMIN_NAME=your_admin_username
# Use a strong, unique password. This value is hashed before it is saved.
ADMIN_PASSWORD=your_admin_password

# Required for Gemini-generated answers. Keep this secret server-side.
GEMINI_API_KEY=your_gemini_api_key

PORT=8000
```

---

## Running Locally

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Create Admin Account

```bash
cd backend
node createAdmin.js
```

---

## API Endpoints

### Public APIs

```http
GET /api/ach
```

Returns all achievement players.

```http
GET /api/gallery
```

Returns all gallery images.

```http
POST /api/auth/login
```

Authenticates the admin user.

---

### Protected APIs

Require:

```http
Authorization: Bearer <JWT_TOKEN>
```

```http
POST /api/upload
```

Upload images to Cloudinary.

```http
POST /api/ach
```

Create a new achievement player.

```http
DELETE /api/ach/:id
```

Delete an achievement player.

```http
POST /api/gallery
```

Add a gallery image.

```http
DELETE /api/gallery/:id
```

Delete a gallery image.

---

## Performance Optimizations

* Backend in-memory caching for read-heavy endpoints
* Cache-Control headers for CDN/browser caching
* Automatic cache invalidation after create/delete operations
* Stale cache fallback if MongoDB is temporarily unavailable
* Local client-side fallback to improve resilience during API failures
* Admin requests bypass cache to always display fresh data

---

## Resume Summary

Built and deployed a full-stack sports club management platform using **React, Express.js, MongoDB, Cloudinary, and JWT authentication**, featuring secure admin content management, optimized REST APIs, dynamic achievement and gallery modules, backend caching, cache invalidation, and resilient client/server data handling for improved performance and reliability.
