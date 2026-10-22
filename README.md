# News Website

A full-stack news publishing website with a React frontend and an Express/Sequelize backend. The frontend contains public-facing news pages and an administration interface for managing news, categories, videos, and users.

## Stack
- Frontend: React, Vite, React Router, Bulma, Axios, Formik/Yup, React Toastify
- Backend: Node.js, Express, Sequelize, MySQL
- Authentication-related dependencies: bcrypt, JSON Web Tokens, cookie-parser
- Email: Nodemailer

## Repository layout
- `front/` — React frontend
- `backend/` — Express API, Sequelize models, routes, middleware, and public uploads

## Setup

### Backend
Requires a supported Node.js version and a MySQL database.

```bash
cd backend
npm install
```

Copy `.env.example` to `.env` and fill in the database settings and any email/authentication configuration used by the application. Then start the API:

```bash
npm start
```

The current server code listens on port `5000`.

### Frontend
In a second terminal:

```bash
cd front
npm install
npm run dev
```

Vite prints the local frontend URL.

## Important project status
The current frontend files contain Git merge-conflict markers in at least `package.json` and `src/App.jsx`. Resolve these conflicts before expecting `npm install` or the production build to work reliably. Review CORS/API URLs before deployment.

## Security
Never commit `.env` files or production credentials. The backend reads database settings from environment variables; rotate any credentials that were previously committed to Git history.
