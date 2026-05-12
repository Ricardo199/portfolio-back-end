# Portfolio Back-End API

A Node.js + Express REST API for the portfolio application, backed by MongoDB with Mongoose.

## Overview

This service provides CRUD endpoints for:
- **Contacts** (`/api/contacts`)
- **Users** (`/api/users`)

It is designed as a lightweight backend that exposes JSON-based endpoints for portfolio-related data management.

## Tech Stack

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Morgan (request logging)
- dotenv (environment variable management)

## Project Structure

```text
.
├── config/
│   ├── config.js        # Environment and DB connection string setup
│   ├── express.js       # Express app and middleware setup
│   └── mongoose.js      # MongoDB connection bootstrap
├── controllers/
│   ├── contacts.js      # Contacts handlers
│   └── users.js         # Users handlers
├── models/
│   ├── contacts.js      # Contact schema
│   └── users.js         # User schema
├── routes/
│   ├── contacts.js      # Contacts routes
│   ├── index.js         # Root route
│   └── users.js         # Users routes
└── server.js            # API entrypoint
```

## API Endpoints

### Health / Root
- `GET /`

### Contacts
- `GET /api/contacts` — List all contacts
- `POST /api/contacts` — Create a contact
- `GET /api/contacts/:id` — Get one contact
- `PUT /api/contacts/:id` — Update a contact
- `DELETE /api/contacts/:id` — Delete a contact

### Users
- `GET /api/users` — List all users
- `POST /api/users` — Create a user
- `GET /api/users/:id` — Get one user
- `PUT /api/users/:id` — Update a user
- `DELETE /api/users/:id` — Delete a user

## Getting Started

### Prerequisites

- Node.js **16.x**
- npm
- MongoDB Atlas database

### Installation

```bash
git clone https://github.com/Ricardo199/portfolio-back-end.git
cd portfolio-back-end
npm install
```

### Environment Variables

Create the file:

```text
/home/runner/work/portfolio-back-end/portfolio-back-end/config/secrets.env
```

Add:

```env
DB_PASSWORD=your_mongodb_password
PORT=3000
```

> `DB_PASSWORD` is used in `config/config.js` to build the MongoDB Atlas connection string.

### Run the Server

```bash
npm start
```

Default local URL:

```text
http://localhost:3000
```

## Scripts

- `npm start` — Start the API server
- `npm test` — Placeholder script (currently not implemented)

## License

This project is licensed under the **GPL-3.0** license.
