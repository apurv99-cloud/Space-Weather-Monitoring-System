

#  Project Overview

The **Space Weather Monitoring System** is a real-time monitoring platform designed to simulate how modern scientific intelligence systems process and broadcast space weather events.

The system continuously fetches data from live NOAA APIs, evaluates risk conditions, stores historical records, and broadcasts updates to connected clients through WebSockets.

This project demonstrates:
- Real-time backend systems
- Event-driven architecture
- Full-stack integration
- Live analytics dashboards
- Production deployment workflows
- Containerized DevOps infrastructure

---
#  Live Deployment

##  Frontend (Vercel)

### Public Working URL

https://space-weather-monitoring-system.vercel.app

---

##  Backend API (Render)

### Public Working URL

https://space-weather-monitoring-system-2.onrender.com

---

#  Why Space Weather Matters

Space weather events can severely affect:

-  Satellites
-  Radio communication
-  Aviation systems
-  GPS navigation
-  Power grids
-  Military infrastructure
-  Communication systems

Modern governments and scientific agencies actively monitor these events.

This project simulates such monitoring infrastructure using modern software engineering practices.

---

#  Core Features

#  Real-Time Monitoring Engine

The backend continuously fetches live NOAA data using scheduled jobs.

Monitored parameters include:
- Kp Index
- Solar wind speed
- Radiation intensity
- Geomagnetic activity

---

# 📡 Live WebSocket Communication

The system uses:
- Spring WebSocket
- STOMP Protocol

to instantly push severe alerts to all connected frontend clients.

No manual refresh required.

---

#  Advanced Analytics Dashboard

The React dashboard provides:

- Real-time monitoring cards
- Kp Index trend visualization
- Solar wind activity charts
- Alert severity analytics
- Historical activity feed
- Animated statistics
- Live updating components

---

#  Futuristic User Interface

Designed using:
- TailwindCSS
- Framer Motion
- Recharts
- React Globe
- Glassmorphism effects
- Neon cyber aesthetics

The UI simulates a futuristic mission-control dashboard.

---

#  Alert Evaluation Engine

The backend automatically classifies events into:

---

##  SEVERE

Conditions:
- Kp Index ≥ 7
- Radiation Level ≥ 8

---

##  WARNING

Conditions:
- Kp Index ≥ 5
- Solar Wind Speed > 700 km/s

---

##  NORMAL

Conditions:
- Stable space weather environment

---

#  NOAA API Integration

Integrated live APIs from NOAA Space Weather Services.

Data Sources:
- Kp Index API
- Solar Wind Plasma API
- X-Ray Radiation API

---

#  Historical Data Tracking

All incoming weather records are stored inside PostgreSQL.

Used for:
- Historical analysis
- Graph visualization
- Future machine learning integration
- Trend monitoring

---

#  Event-Driven System Workflow

The backend automatically performs:

1. Fetch live NOAA data
2. Process incoming metrics
3. Evaluate threat levels
4. Store records in PostgreSQL
5. Broadcast WebSocket events
6. Update frontend dashboard

---

#  System Architecture

```text
NOAA APIs
     ↓
Weather Scheduler
     ↓
NOAA Service Layer
     ↓
Alert Evaluation Engine
     ↓
PostgreSQL Database
     ↓
WebSocket Broadcasting
     ↓
React Dashboard (Live Updates)
```

---

#  Dockerized Infrastructure

The complete system is fully containerized using Docker.

Containers include:

- Spring Boot Backend
- React + Nginx Frontend
- PostgreSQL Database

Orchestrated using:
- Docker Compose

---

#  Tech Stack

# Backend

- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA
- Spring WebSocket
- Hibernate
- Maven

---

# Frontend

- React
- Vite
- TailwindCSS
- Recharts
- Framer Motion
- React Globe
- Axios
- React Icons

---

# Database

- PostgreSQL

---

# DevOps & Deployment

- Docker
- Docker Compose
- Nginx
- Render
- Vercel

---

# APIs

- NOAA Space Weather APIs

---

#  Project Structure

```text
Space-Weather-Monitoring-System
│
├── demo/                         # Spring Boot Backend
│
├── frontend/Space/               # React Frontend
│
├── docker-compose.yml
│
├── nginx.conf
│
└── README.md
```

---

#  Running Locally With Docker

# 1️ Clone Repository

```bash
git clone https://github.com/your-username/Space-Weather-Monitoring-System.git
```

---

#  Navigate Into Project

```bash
cd Space-Weather-Monitoring-System
```

---

# 3️ Run Docker Containers

```bash
docker compose up --build
```

---

#  Local Services

| Service | URL |
|---|---|
| Frontend | http://localhost:3000 |
| Backend | http://localhost:8080 |
| PostgreSQL | localhost:5432 |

---

#  Key Engineering Concepts Used

- Event-Driven Architecture
- Real-Time Systems
- REST APIs
- WebSockets
- Containerization
- Database Persistence
- Frontend State Management
- Production Deployment
- Microservice-style Communication

---

#  Challenges Solved

- Real-time WebSocket broadcasting
- Cross-origin communication (CORS)
- Docker multi-container orchestration
- Frontend-backend synchronization
- Cloud deployment configuration
- Environment variable management
- PostgreSQL cloud integration
- Production-ready builds

---

#  Future Improvements

Planned upgrades include:

-  AI-based prediction models
-  Kubernetes deployment
-  Kafka event streaming
-  Redis caching
-  Authentication & Authorization
-  Fully optimized mobile UI
-  Advanced observability dashboards
-  Machine learning anomaly detection
-  CI/CD pipelines

---

#  Author

# Apurv Sinha

Passionate about:
- Backend Engineering
- Real-Time Systems
- Scalable Architectures
- DevOps
- Futuristic Software Products

---

# ⭐ Support

If you found this project interesting, consider giving it a ⭐ on GitHub.

It helps the project grow and motivates future improvements 🚀
