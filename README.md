**🔐 Google OAuth2 Authentication (Authorization Code Flow) – Node.js + React**

A secure authentication system built using Google OAuth 2.0 (Authorization Code Flow with OpenID Connect) integrated into a Node.js + Express backend and React frontend.

This project demonstrates how to implement Google Login and manage user sessions using JWT stored in HttpOnly cookies, with protected API routes.

**🚀 Features
🔑 Google OAuth2 Login**

Redirects user to Google Consent Screen

Exchanges authorization code for ID token

Extracts user profile (email, name, picture)

**🎟️ JWT-Based Session Management**

Backend generates its own JWT after Google authentication

JWT stored in HttpOnly cookie

Cookie automatically sent with every request

Secure session verification using middleware

**🛡️ Protected Routes**

Custom authMiddleware verifies JWT

Unauthorized users receive 401 response

Only authenticated users can access /user/posts

**⚛️ React Frontend**

Dedicated Login Page

OAuth Callback Handler

Dashboard view for logged-in users

Automatic login state detection

**🏗️ Tech Stack**

Frontend

React

React Router

Axios

Backend

Node.js

Express.js

JSON Web Token (JWT)

Axios (Google token exchange)

Cookie-Parser

CORS

Authentication

Google OAuth 2.0

OpenID Connect (OIDC)

Authorization Code Flow

**🔄 Authentication Flow**

1️⃣ User clicks Login with Google
2️⃣ Redirected to Google Consent Screen
3️⃣ Google returns an authorization code
4️⃣ Backend exchanges code for id_token
5️⃣ Backend creates its own JWT session token
6️⃣ JWT stored in HttpOnly cookie
7️⃣ Protected routes verify token via middleware

**📂 Project Structure**
server/
  config/
  controllers/
  middlewares/
  routes/
  utils/
  app.js

client/
  auth/
  pages/
  App.jsx

**🎯 Learning Outcomes**

This project demonstrates:

Implementation of OAuth 2.0 Authorization Code Flow

Integration of OpenID Connect for user identity

Secure session management using JWT

Cookie-based authentication

Route protection using middleware

CORS configuration for credential-based requests

🛠️ Setup

Create Google OAuth Client ID (Web Application)

Configure .env:

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
TOKEN_SECRET=
CLIENT_URL=
REDIRECT_URL=


Start backend:

npm install
npm run dev


Start frontend:

npm install
npm start

**💡 Why This Project?**

This project focuses on implementing:

✔ Clean separation of routes, controllers, and services
✔ Secure Google authentication
✔ JWT-based session management
✔ Real-world protected API architecture
