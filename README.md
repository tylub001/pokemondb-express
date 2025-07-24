# Pokefinal 🐾

A full-stack Pokémon database application built with Express and MongoDB on the backend, and React on the frontend. Users can search Pokemon, register, log in, and save and delete favorite pokemonCards to and from thier profile.

## 🌟 Features

- User authentication with JWT
- Secure password hashing using bcrypt
- Email validation with `validator`
- RESTful API endpoints for user and Pokémon data
- Environment-based backend URL configuration
- Modular structure with controllers, models, and routes
- ESLint and Prettier integration for clean code

## 🚀 Technologies

- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** React (deployed separately)
- **Auth:** JWT, bcrypt
- **Validation:** validator
- **Linting:** ESLint (Airbnb base), Prettier


## 🌍 Deployment (Google Cloud)

The Pokefinal app is deployed via **Google Cloud**, with separate services for the frontend and backend:

### 🔹 Frontend  
**URL:** [www.pokefinal.jumpingcrab.com](https://www.pokefinal.jumpingcrab.com)  
Built with React and served as a static site. It provides a polished user interface for exploring Pokémon data and managing user sessions.

### 🔹 Backend  
**URL:** [api.pokefinal.jumpingcrab.com](https://api.pokefinal.jumpingcrab.com)  
Powered by Express and MongoDB. This RESTful API handles user authentication, data validation, and secure communication with the frontend.

Both services are configured for production use, with environment-based routing and secure deployment practices.
