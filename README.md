# 🌍 Kigali Community Investment Dashboard

A full-stack web application that simulates a community-based investment platform where users can explore projects, invest, and track activity in real time.

---

## 🎥 Demo Video

👉 https://drive.google.com/file/d/1QQlvnS4Ah5vXLnuGTq8qDETYTZFfth3L/view?usp=sharing

---

## 🚀 Live Demo (Strettch Cloud Deployment)

👉 http://41.186.186.187:5000

---

## 🧠 Overview

This project was built to demonstrate how a modern full-stack application can be designed, developed, and deployed using a clean architecture and real cloud infrastructure.

The platform allows users to:
- Explore investment opportunities
- Make contributions to projects
- Track activity and performance metrics
- Navigate seamlessly across different views

The application uses in-memory data for simplicity, but the architecture is designed to easily support a database in a production environment.

---

## ⚙️ Tech Stack

### Frontend
- React
- Vite
- JavaScript (ES6)
- CSS (Custom styling)

### Backend
- Node.js
- Express.js

### Deployment
- Strettch Cloud (Linux VM)
- SSH-based manual deployment

---

## ✨ Features

- 📊 Dashboard with key investment metrics
- 📈 Project funding progress visualization
- 💸 Quick Invest functionality (POST request to backend)
- 🧾 Activity tracking system
- 🔄 Real-time UI updates after user actions
- 🧭 Client-side routing (single-page application)
- ☁️ Full deployment on Strettch Cloud

---

## 🏗️ Architecture

Client (React)  
↓  
API Layer (fetch calls)  
↓  
Express Server (Node.js)  
↓  
In-Memory Data (Projects & Investments)  
↓  
Summary Calculation Utility  

---

## 📦 Project Structure

community-investment-dashboard/  
│  
├── client/        # React frontend  
├── server/        # Express backend  
│   ├── routes/  
│   ├── data/  
│   ├── utils/  
└── README.md  

---

## 🛠️ How to Run Locally

### 1. Clone the repository

```
git clone https://github.com/alvinkatabarwa1/community-investment-dashboard.git
cd community-investment-dashboard
```

### 2. Start backend

```
cd server
npm install
node server.js
```

Backend runs on:
http://localhost:5000

### 3. Start frontend

```
cd ../client
npm install
npm run dev
```

Frontend runs on:
http://localhost:5173

---

## ☁️ Deployment (Strettch Cloud)

This application is deployed on Strettch Cloud using a Linux virtual machine.

### Key Steps:
- Created compute instance (Ubuntu)
- Connected via SSH
- Installed Node.js
- Cloned repository
- Built frontend (`npm run build`)
- Served frontend via Express
- Configured API routes to use relative paths

### Result:
- Single server hosting both frontend and backend
- Accessible via public IP

---

## ⚠️ Challenges & Learnings

- Fixed CORS issues when moving from local to production
- Resolved Node.js version compatibility problems
- Debugged stale server processes affecting API responses
- Handled incorrect data calculations and ensured proper validation
- Learned full deployment lifecycle using SSH and Linux environments

---

## 🚀 Future Improvements

- Add authentication (login/signup)
- Integrate a real database (PostgreSQL / MongoDB)
- Implement real-time updates (WebSockets)
- Improve scalability and performance
- Enhance UI/UX with animations and better responsiveness

---

## 👨‍💻 Author

Alvin Katabarwa

Email: Alvinkatabarwa@gmail.com  
LinkedIn: https://www.linkedin.com/in/alvin-katabarwa-6489b2252

---

## 💡 Final Note

This project demonstrates the full lifecycle of building a production-ready application — from frontend design to backend logic and real-world cloud deployment on African infrastructure.