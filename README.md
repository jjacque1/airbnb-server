# Airbnb Clone (MERN)

A production-style Airbnb clone built with the MERN stack to practice full-stack architecture, authentication, and scalable API design.

The goal of this project is to replicate the **core backend architecture of Airbnb**, including authentication, listing management, and booking flows.

---

# Tech Stack

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Authentication

- JWT (JSON Web Tokens)
- httpOnly cookies
- bcrypt password hashing

## Frontend

- React
- Vite
- React Router
- Context API
- Axios
- React DayPicker

## Other Planned Tools

- date-fns
- Cloudinary (image storage)
- Mapbox (maps)

---

# Current Frontend Features

## Authentication UI

- Register page
- Login page
- Logout flow
- Protected routes
- AuthContext for global user state

## Listings UI

- Homepage listings grid
- Listing details page
- User listings dashboard
- Create listing form
- Edit listing form
- Delete listing flow

## Booking UI

- Reservation form on listing details page
- Availability calendar with disabled unavailable dates
- Booking validation before submission
- User bookings page
- Booking details page
- Booking cancellation flow

## UX Features

- Skeleton loading states
- Responsive layouts
- Error and success messaging
- Disabled submit states during async requests
- Consistent reusable card layouts

## Authentication

Secure user authentication using JWT stored in httpOnly cookies.

### Routes

- POST /auth/register
- POST /auth/login
- GET /auth/profile
- POST /auth/logout

### Security Features

- bcrypt password hashing
- JWT token signing
- httpOnly cookie storage
- authentication middleware (`requireAuth`)

---

## Listings (Places)

Hosts can create and manage listings.

### Routes

- POST /places → create a listing
- GET /places → fetch all listings
- GET /places/:id → fetch a single listing
- GET /user-places → fetch listings owned by logged-in user
- PUT /places/:id → update full listing
- PATCH /places/:id → partial update
- DELETE /places/:id → delete listing

### Listing Fields

- title
- address
- photos []
- description
- perks []
- extraInfo
- checkIn
- checkOut
- maxGuests
- price
- owner (ObjectId → User)

---

## Bookings

Users can book listings with full validation and availability checks.

### Routes

- POST /bookings → create booking
- GET /bookings → get current user's bookings
- GET /bookings/:id → get single booking
- PATCH /bookings/:id/cancel → cancel booking

### Booking Features

- Prevent booking your own listing
- Date validation (checkOut > checkIn)
- Frontend + backend overlap validation
- Overlapping booking prevention
- Availability based on active bookings only
- Disabled unavailable dates in calendar UI
- Booking cancellation (status-based, not deletion)
- Cancelled bookings reopen availability

### Booking Fields

- place (ObjectId → Place)
- user (ObjectId → User)
- checkIn
- checkOut
- numberOfGuests
- name
- phone
- price
- status ("active" | "cancelled")

---

# Database Models

## User

- email
- passwordHash
- fullName

## Place

- owner (ObjectId → User)
- title
- address
- photos []
- description
- perks []
- extraInfo
- checkIn
- checkOut
- maxGuests
- price

## Booking

- place (ObjectId → Place)
- user (ObjectId → User)
- checkIn
- checkOut
- numberOfGuests
- name
- phone
- price
- status

---

# Core Flows

## Authentication

- Email/password login
- Password hashing with bcrypt
- JWT stored in httpOnly cookies

## Listings

- Hosts create and manage listings
- Listings linked to owner

## Booking System

- Users can reserve listings through a calendar-based booking flow
- Frontend validates unavailable date ranges before submission
- Backend enforces overlap protection as the source of truth
- Active bookings block overlapping reservations
- Cancelled bookings no longer block availability
- Users can cancel reservations from the booking details page

## User Dashboard

- Users can view their listings
- Users can view their bookings

---

# API Structure

## Auth

- POST /auth/register
- POST /auth/login
- GET /auth/profile
- POST /auth/logout

## Places

- POST /places
- GET /places
- GET /places/:id
- GET /user-places
- PUT /places/:id
- PATCH /places/:id
- DELETE /places/:id

## Bookings

- POST /bookings
- GET /bookings
- GET /bookings/:id
- PATCH /bookings/:id/cancel

---

# Planned Features

## Search

- location filtering
- guest count
- price filters
- date availability

## Reviews

- only completed stays can review

## Host Dashboard

- manage listings
- manage bookings

## User Profile

- trips
- wishlists

---

# Production Concerns

- Input validation
- Error handling
- Rate limiting
- CORS + cookies configuration
- Secure headers
- Environment variables
- Logging

## Infrastructure

- Image uploads (Cloudinary)
- Deployment (Render / Vercel / MongoDB Atlas)

---

# Project Goal

This project is designed to practice building a **production-style REST API** using the MERN stack with proper authentication, relational data modeling, and scalable backend architecture.

---

# Status

Backend complete (Auth, Places, Bookings)

Frontend currently includes:
- Authentication flows
- Listings pages
- Booking flows
- Availability calendar UX
- Booking management pages

Additional UI polish and advanced features are in progress.

---
