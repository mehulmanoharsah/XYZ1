# Wellyura Production Deployment Guide

This guide describes how to deploy the Wellyura portal live to a production server and connect it to a cloud database once you are ready to launch.

---

## 1. Database Setup (MongoDB Atlas)

To store user and university data securely in the cloud, set up a managed MongoDB instance:

1. **Create an Account**: Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free account.
2. **Create a Cluster**: Spin up a free shared cluster (M0) in a region close to your target audience.
3. **Network Access**: Add IP address `0.0.0.0/30` in the "Network Access" settings to allow your backend server to connect to the database (or restrict it to your backend provider's static IP once deployed).
4. **Database User**: Create a database user with read/write access and note the username and password.
5. **Get Connection String**: Click **Connect** → **Drivers** to copy your connection string. It will look like:
   ```env
   mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority
   ```

---

## 2. Backend Deployment (FastAPI)

Deploy the backend API to service providers like **Railway**, **Render**, or **DigitalOcean App Platform**:

### A. Hosting Settings
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

### B. Environment Variables (Production Configurations)
Configure these variables in your hosting provider's dashboard:

| Variable | Description / Value |
| :--- | :--- |
| `MONGODB_URL` | Your MongoDB Atlas connection string (from Step 1) |
| `DB_NAME` | `wellyura_db` (or any custom name) |
| `SECRET_KEY` | Generate a long random string (e.g., `openssl rand -hex 32`) |
| `ALGORITHM` | `HS256` |
| `ACCESS_TOKEN_EXPIRE_MINUTES` | `10080` (7 days) |
| `CORS_ORIGINS` | Your live frontend URL (e.g., `https://wellyura.com`) |

---

## 3. Frontend Deployment (React / Vite)

Deploy the frontend React app to static hosting providers like **Vercel**, **Netlify**, or **GitHub Pages**:

### A. Hosting Settings
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### B. Environment Variables
Provide the URL of your live FastAPI backend in the hosting dashboard:

| Variable | Value |
| :--- | :--- |
| `VITE_API_URL` | `https://api.wellyura.com/api` (or your backend provider's URL + `/api`) |

---

## 4. Seeding Your Production Database

Once both services are running and connected to MongoDB Atlas, load the university dataset:

1. In your local development folder, update the `MONGODB_URL` in `backend/.env` temporarily to your live MongoDB Atlas connection string.
2. Run the seeding commands from your local machine to populate the cloud database:
   ```bash
   # Activate virtualenv
   source backend/venv/bin/activate
   cd backend
   
   # Seed all countries
   mongosh "mongodb+srv://..." canada_universities_seed.js
   mongosh "mongodb+srv://..." usa_universities_seed.js
   mongosh "mongodb+srv://..." uk_universities_seed.js
   mongosh "mongodb+srv://..." australia_universities_seed.js
   mongosh "mongodb+srv://..." germany_universities_seed.js
   python scratch/parse_france_to_db.py
   python scratch/parse_netherlands_to_db.py
   ```
3. Change your local `MONGODB_URL` back to `mongodb://localhost:27017` to continue local development.

---

## 5. Domain Configuration

To map custom domains (e.g., `wellyura.com` and `api.wellyura.com`):

1. **Frontend Custom Domain**: Add a CNAME or A Record pointing to Vercel/Netlify in your Domain registrar (GoDaddy, Namecheap, Route 53).
2. **Backend Subdomain**: Create a subdomain record (e.g., `api.wellyura.com`) pointing to Render/Railway.
3. Make sure SSL certificates are active (most hosts provide free Auto-SSL via Let's Encrypt).
