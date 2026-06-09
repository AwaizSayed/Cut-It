# 🔗 Cut-It

A full-stack URL Shortener application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). The application allows users to generate shortened URLs, create QR codes, and manage links through a simple and intuitive interface.

---

## 🌐 Live Demo

### 🚀 Live Application:

https://cut-it-orf6.vercel.app/

⚠️ **Important:** The backend is hosted on Vercel's free serverless tier. The first request after a period of inactivity may take a few seconds to load due to a cold start. Please allow a moment for the application to initialize.

---

## 📌 Overview

Cut-It is designed to simplify link sharing by transforming long URLs into short, manageable links. Alongside URL shortening, the application automatically generates QR codes, making it easier to share links across both digital and physical mediums.

The project demonstrates full-stack web development concepts including REST APIs, database integration, QR code generation, state management, and deployment.

---

## 🎬 Project Demo

[Add GIF Demo Here]

---

## 🎯 Key Features

- Generate shortened URLs
- Generate QR codes for shortened URLs
- Copy shortened URLs instantly
- Print generated QR codes
- Delete existing URLs
- Responsive user interface
- REST API integration
- MongoDB Atlas database integration
- Full-stack MERN architecture

---

## 📸 Screenshots & User Walkthrough

### Step 1: Open the Application

[Add Screenshot Here]

Description:
The user lands on the Cut-It homepage where URL shortening services are available.

---

### Step 2: Enter a Long URL

[Add Screenshot Here]

Description:
Users can enter a long URL that they wish to shorten.

---

### Step 3: Generate Short URL

[Add Screenshot Here]

Description:
The application generates a shortened version of the provided URL.

---

### Step 4: Generate QR Code

[Add Screenshot Here]

Description:
A QR code is automatically generated for the shortened URL, enabling quick sharing and scanning.

---

### Step 5: Copy Short URL

[Add Screenshot Here]

Description:
Users can copy the generated shortened URL with a single click.

---

### Step 6: Print QR Code

[Add Screenshot Here]

Description:
Users can print the generated QR code for offline usage and sharing.

---

### Step 7: Delete URL

[Add Screenshot Here]

Description:
Users can remove previously generated URLs that are no longer required.

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript (ES6+)
- Bootstrap
- HTML5
- CSS3

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Deployment

- Vercel

---

## 📦 Libraries & Dependencies

### Frontend Dependencies

- react
- axios
- bootstrap

### Backend Dependencies

- express
- mongoose
- cors
- dotenv

---

## 📂 Project Structure

```plaintext

Cut-It/
│
├── Backend/
│   ├── deprecated_config/              # Mongoose schemas(not in use)
│   ├── src/
│   │   ├── config/                     # Database config
│   │   ├── controllers/                # Business logic
│   │   ├── models/                     # Mongoose schemas
│   │   └── routers/                    # API routes
│   │
│   ├── index.js                        # Express server
│   └── vercel.json                     # Vercel backend config
│
├── cut-it/
│   ├── src/
│   │   ├── Components/                 # Reusable UI components
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation & Execution

### Clone Repository

```bash
git clone https://github.com/AwaizSayed/Cut-It.git
```

### Backend Setup

```bash
cd Backend
npm install
npm start
```

### Frontend Setup

```bash
cd cut-it
npm install
npm run dev
```

### Environment Variables

Backend `.env`

```env
MONGODB_URI=
```

Frontend `.env`

```env
VITE_REACT_APP_BACKEND_BASE_URL=
```

---

## 👨‍💻 Author

**Awaiz Sayed**

GitHub: https://github.com/AwaizSayed
