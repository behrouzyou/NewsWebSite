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
Requires Node.js, npm, and MySQL. In `backend/`, install dependencies and configure the local environment using `.env.example` copied to `.env`. Then start the API with `npm start`; the current server listens on port `5000`.

In a second terminal, run `cd front && npm install && npm run dev`. Vite prints the local frontend URL.

## Important project status
The frontend package manifest, application routes, and lockfile had committed merge-conflict markers; these have been cleaned up, but the project still needs a local install/build check. Review CORS/API URLs before deployment.

## Security
Never commit `.env` files or production credentials. Rotate any database credentials that were previously committed to Git history.
