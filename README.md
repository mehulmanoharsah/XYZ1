<<<<<<< HEAD
# XYZ1
this is the codes for my website which represent my business named as WELLYURA.
=======
# 🎓 Wellyura — International University Directory

A full-stack university directory for international students.
**Backend:** Python (FastAPI) · **Frontend:** React (Vite) · **Database:** MongoDB

---

## 📁 Project Structure

```
university-portal/
├── backend/          # FastAPI Python backend
│   ├── app/
│   │   ├── api/      # Route handlers
│   │   ├── middleware/
│   │   ├── models/   # Pydantic schemas
│   │   └── utils/
│   ├── requirements.txt
│   └── run.py
├── frontend/         # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── lib/
│   └── package.json
└── README.md
```

---

## ⚙️ Prerequisites

- Python 3.10+
- Node.js 18+
- MongoDB (local or MongoDB Atlas)

---

## 🚀 Setup & Run

### 1. MongoDB

Start MongoDB locally:
```bash
mongod --dbpath /data/db
```
Or use a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster.

### 2. Seed the Database

Copy your `canadian_universities_seed.js` into the project root and run:
```bash
mongosh canadian_institutions canadian_universities_seed.js
```

### 3. Backend

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env with your MongoDB URL and a secret key

# Run the server
python run.py
```
Backend runs at: **http://localhost:8000**
API docs at: **http://localhost:8000/docs**

### 4. Frontend

```bash
cd frontend

# Install dependencies
npm install

# Run dev server
npm run dev
```
Frontend runs at: **http://localhost:5173**

---

## 🔧 Environment Variables (backend/.env)

```env
MONGODB_URL=mongodb://localhost:27017
DB_NAME=canadian_institutions
SECRET_KEY=your-super-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=10080
CORS_ORIGINS=http://localhost:5173
```

---

## 👤 Creating an Admin User

After registering a normal account, open MongoDB shell:
```bash
mongosh canadian_institutions
db.users.updateOne({ email: "your@email.com" }, { $set: { is_admin: true } })
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login |
| GET | /api/auth/me | Current user |
| GET | /api/institutions | List institutions |
| GET | /api/institutions/country/{name} | By country |
| GET | /api/institutions/{id} | Single institution |
| GET | /api/programs/{institutionId} | Programs |
| GET | /api/search?q= | Global search |
| GET/POST/DELETE | /api/favorites | Manage favorites |
| GET | /api/admin/stats | Admin analytics |
| GET | /api/admin/users | Manage users |

---

## 🏗️ Build for Production

```bash
# Frontend build
cd frontend && npm run build

# Serve frontend with a static server or configure FastAPI to serve /dist
```

---

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | FastAPI, Motor (async MongoDB), PyJWT, bcrypt |
| Frontend | React 18, Vite, React Router v6, Zustand, Axios |
| Database | MongoDB |
| Styling | Custom CSS design system (no Tailwind needed) |
>>>>>>> df12730 (Initial commit)
