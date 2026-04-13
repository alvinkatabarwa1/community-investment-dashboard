# Kigali Community Invest

A full-stack community investment dashboard that allows users to explore projects, track funding progress, and simulate investments across local opportunities.

Built as a developer-focused demo to showcase how a clean API + frontend can be combined into a scalable, real-world product experience.

---

## 🚀 Live Demo

> Coming soon (deployment in progress)

---

## 📸 Preview

> Add screenshots here after deployment

---

## 🎯 Purpose

This project demonstrates:

- Building a clean, data-driven dashboard UI  
- Structuring and exposing REST APIs  
- Connecting frontend and backend systems  
- Designing a developer-friendly, extensible application  

It reflects a real-world scenario where community members invest in local infrastructure or real estate projects.

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- React Router
- Custom CSS (SaaS-inspired design system)

### Backend
- Node.js
- Express.js
- REST API architecture
- In-memory data layer (mock database)

---

## 📦 Features

### Dashboard
- Investment summary (total invested, ROI, active projects)
- Funding progress visualization
- Featured projects
- Real-time activity feed
- Quick investment simulation

### Projects
- Full list of investment opportunities
- Progress tracking per project
- ROI and funding metrics

### Investments
- Table view of all investments
- Linked to projects
- Timestamped activity

### Activity
- Real-time feed of investment activity
- Investor + project tracking

---

## 🔌 API Endpoints

- GET /api/health → Health check  
- GET /api/projects → List all projects  
- GET /api/summary → Dashboard data  
- GET /api/activity → Recent activity  
- GET /api/investments → All investments  
- POST /api/investments → Create investment  

---

## ⚙️ Getting Started

### 1. Clone the repository

    git clone https://github.com/alvinkatabarwa1/community-investment-dashboard.git
    cd community-investment-dashboard

---

### 2. Install dependencies

Frontend:

    cd client
    npm install

Backend:

    cd ../server
    npm install

---

### 3. Run the app

Start backend:

    cd server
    npm run dev

Backend runs on:
http://localhost:5000

---

Start frontend:

    cd ../client
    npm run dev

Frontend runs on:
http://localhost:5173

---

## 🧠 Architecture

    client/
      src/
        api/
        components/
        pages/
        layout/

    server/
      routes/
      data/
      utils/

### Key ideas

- Clear separation of frontend and backend  
- API-first design  
- Reusable UI components  
- Centralized data fetching layer  

---

## 📈 Design Decisions

- Lean backend using in-memory data  
- Modular component-based UI  
- Client-side routing  
- Minimal dependencies for clarity  

---

## 🧪 Trade-offs

- No database  
- No authentication  
- No payment integration  

Focus was on:

- Developer experience  
- Architecture clarity  
- Speed  

---

## 🌍 Future Improvements

- Authentication (JWT / OAuth)  
- Database integration  
- Payment systems  
- Analytics dashboards  
- Full cloud deployment  

---

## 🎥 Demo Walkthrough

> Add your demo video link here

---

## 🤝 Why This Project

This project demonstrates:

- Full-stack development ability  
- Clean architecture thinking  
- Strong UI + API integration  
- Developer-focused design mindset  

---

## 📬 Contact

Alvin Katabarwa  
Software Engineer  
Kigali, Rwanda  

Email: Alvinkatabarwa@gmail.com  
LinkedIn: https://www.linkedin.com/in/alvin-katabarwa-6489b2252  
GitHub: https://github.com/alvinkatabarwa1