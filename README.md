# Product Listing Application

This project is a product listing web application with:

**Backend API**  
**Frontend React interface**

Products are loaded from a JSON file, priced dynamically based on live gold prices, and displayed in a responsive carousel.

---

## Project Structure

product-listing/
├── backend/ # Node.js Express API
│ ├── server.js
│ └── products.json
├── product-listing-frontend/ # React frontend
│ ├── src/
│ ├── public/
│ └── package.json

---

## Prerequisites

- Node.js (v14 or newer)
- npm

---

## Backend Setup

1- Open a terminal in the `backend` folder:

cd backend

2- Install dependencies:

npm install

3- Start the server:

node server.js

The backend will run on:

http://localhost:5000

API Endpoint:

GET /products

---

## Frontend Setup

1- Open another terminal in the `frontend` folder:

cd product-listing-frontend

2- Install dependencies:

npm install

3- Start the development server:

npm start

The frontend will open in your browser at:

http://localhost:3000

---