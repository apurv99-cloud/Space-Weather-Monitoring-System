<div align="center">

#  Space Weather Monitoring System

### Real-Time Space Weather Intelligence Platform
<img width="1890" height="968" alt="image" src="https://github.com/user-attachments/assets/9481eb10-86e1-4ab4-ab8c-a9d5bbc236be" />


A full-stack real-time monitoring system that continuously collects live space weather data from NOAA APIs, analyzes geomagnetic activity, stores historical records in a cloud database, and instantly broadcasts severe alerts to connected clients using WebSockets.

Designed with modern backend engineering, event-driven architecture, cloud deployment, containerization, and futuristic UI principles.

---

[![Java](https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=openjdk)]()
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=springboot)]()
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)]()
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-336791?style=for-the-badge&logo=postgresql)]()
[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker)]()
[![WebSocket](https://img.shields.io/badge/WebSocket-Live_Updates-success?style=for-the-badge)]()
[![Render](https://img.shields.io/badge/Backend-Render-000000?style=for-the-badge)]()
[![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?style=for-the-badge&logo=vercel)]()

---

###  Live Application

 **Frontend**

https://space-weather-monitoring-system.vercel.app

 **Backend API**

https://space-weather-monitoring-system-2.onrender.com

---

</div>

#  Project Overview

The **Space Weather Monitoring System** is a production-style full-stack application that simulates how modern scientific monitoring systems collect, process, analyze, and broadcast real-time space weather information.

The backend continuously fetches live NOAA data, evaluates potential threats using predefined alert rules, stores historical records inside a cloud-hosted PostgreSQL database, and instantly pushes severe alerts to connected clients using WebSockets.

The frontend visualizes this information through a modern mission-control dashboard featuring animated statistics, interactive charts, historical analytics, and real-time notifications.

---

#  Highlights

-  Live NOAA Space Weather API Integration
-  Real-Time WebSocket Communication
-  Interactive Analytics Dashboard
-  Historical Weather Tracking
-  Automated Alert Classification
-  Space Weather Intelligence Simulation
-  Dockerized Multi-Container Deployment
-  Cloud Deployment using Render + Vercel
-  Neon PostgreSQL Cloud Database
-  Modern Futuristic User Interface

---

#  Application Preview

## Landing Page

<p align="center">

<img width="1917" height="967" alt="image" src="https://github.com/user-attachments/assets/c59ca7ae-4859-4ab1-928c-c24ca1f490c9" />
<img width="1911" height="967" alt="image" src="https://github.com/user-attachments/assets/d89dad5d-69f0-4ea7-8aa2-1d6ce3c172dd" />



</p>

> Elegant futuristic landing page built using React, TailwindCSS, Framer Motion and glassmorphism-inspired UI.

---

## Mission Control Dashboard

<p align="center">
<img width="1881" height="966" alt="image" src="https://github.com/user-attachments/assets/34e9d540-8bf1-41dc-a74a-15d51cfe62c0" />
<img width="1890" height="972" alt="image" src="https://github.com/user-attachments/assets/f9fa19cc-b2f7-4496-9dd2-1eb20a98e4e1" />
<img width="1898" height="965" alt="image" src="https://github.com/user-attachments/assets/6371b4bd-b592-4ea6-a380-3934cf197175" />




</p>

> Live monitoring dashboard displaying NOAA data, alert levels, historical activity, analytics, and real-time WebSocket updates.

---

#  Why Space Weather Matters

Space weather significantly impacts critical infrastructure worldwide.

Major geomagnetic storms can affect:

-  Satellites
-  Communication Systems
-  GPS Navigation
-  Aviation Routes
-  Electrical Power Grids
-  Military Infrastructure
-  Internet Backbone
-  Space Missions

Government agencies such as **NOAA**, **NASA**, and international space organizations continuously monitor these events to reduce operational risks.

This project simulates a real-world monitoring platform inspired by such systems using modern software engineering practices.

---

#  Core Features

##  Live NOAA Data Collection

The backend continuously retrieves live space weather information directly from NOAA APIs.

Collected metrics include:

- Kp Index
- Solar Wind Speed
- Solar Radiation
- Geomagnetic Activity

---

##  Real-Time Event Processing

Every scheduled execution automatically performs:

- Fetch latest NOAA data
- Process incoming metrics
- Evaluate alert severity
- Persist historical records
- Broadcast severe alerts
- Update connected dashboards

No manual intervention is required.

---

##  Instant WebSocket Broadcasting

The application uses:

- Spring WebSocket
- STOMP Messaging Protocol

to instantly push newly generated alerts to every connected frontend client.

This enables true real-time monitoring without refreshing the browser.

---

##  Advanced Monitoring Dashboard

The React frontend provides:

-  Live Analytics
-  Current Space Weather Conditions
-  Alert Severity Indicators
-  Historical Trends
-  Interactive Charts
-  Animated Statistics
-  Real-Time Notifications
-  Futuristic Mission Control UI

---

##  Intelligent Alert Engine

Incoming weather metrics are automatically classified into three categories:

| Alert Level | Conditions |
|-------------|------------|
| 🟢 NORMAL | Stable Space Weather |
| 🟡 WARNING | Kp ≥ 5 OR Solar Wind > 700 km/s |
| 🔴 SEVERE | Kp ≥ 7 OR High Radiation |

The evaluation engine immediately broadcasts severe events to all connected users via WebSockets.

---
#  System Architecture

<p align="center">

<img src="screenshots/architecture.png" width="90%">

</p>

The application follows an **event-driven layered architecture** that continuously collects live space weather data, evaluates incoming events, stores historical records, and broadcasts critical alerts in real time.

---

#  High-Level Workflow

```text
                     NOAA Space Weather APIs
                              │
                              ▼
                   Scheduled Weather Fetcher
                              │
                              ▼
                     NOAA Service Layer
                              │
                              ▼
                 Alert Evaluation Engine
                              │
              ┌───────────────┴───────────────┐
              ▼                               ▼
       Neon PostgreSQL              WebSocket Server
              │                               │
              ▼                               ▼
     Historical Analytics          React Live Dashboard
```

---

#  Event Processing Pipeline

Every scheduled execution follows this workflow:

```text
Scheduler Trigger
        │
        ▼
Fetch Live NOAA Data
        │
        ▼
Parse Incoming JSON
        │
        ▼
Generate Weather Model
        │
        ▼
Evaluate Alert Severity
        │
        ▼
Persist Record
        │
        ▼
Broadcast Severe Alerts
        │
        ▼
Frontend Updates Instantly
```

---

#  WebSocket Communication Flow

The project uses **Spring WebSocket + STOMP** to eliminate manual refreshes.

```text
Backend
   │
   ▼
Alert Generated
   │
   ▼
Spring WebSocket
   │
   ▼
STOMP Broker
   │
   ▼
Connected Clients
   │
   ▼
React Dashboard Updates
```

Whenever a severe space weather event is detected, every connected dashboard receives the update immediately.

---

#  Data Collection Pipeline

The backend continuously retrieves live information from NOAA Space Weather Services.

Collected metrics include:

-  Planetary Kp Index
-  Solar Wind Speed
-  X-Ray Radiation Flux
-  Geomagnetic Activity

Each record is normalized before persistence.

---

#  Alert Evaluation Engine

Incoming weather metrics are automatically evaluated using predefined thresholds.

```text
Incoming NOAA Data
        │
        ▼
+-----------------------------+
|  Kp Index >= 7 ?            |
|  Radiation >= Threshold ?   |
+-----------------------------+
        │
        ▼
      SEVERE
        │
        ▼
Broadcast WebSocket Event
```

Otherwise:

```text
Kp >= 5
OR
Solar Wind > 700 km/s
```

↓

```text
WARNING
```

Else:

```text
NORMAL
```

---

#  Database Architecture

Production database:

> **Neon PostgreSQL**

Local development:

> **PostgreSQL Docker Container**

The application automatically stores every processed weather event for:

- Historical Analysis
- Dashboard Charts
- Alert History
- Trend Visualization
- Future ML Training

Current Entity:

```text
WeatherData
──────────────
id
kpIndex
solarSpeedOfWind
levelOfRadiation
alertLevel
timeStamp
```

Hibernate automatically synchronizes the schema using:

```properties
spring.jpa.hibernate.ddl-auto=update
```

---

#  REST API Architecture

The backend exposes REST endpoints for retrieving processed weather information.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/weather/latest` | Latest weather records |
| GET | `/api/weather/alerts/severe` | Severe alerts |
| POST | `/api/weather/fetch` | Manually trigger NOAA fetch |

---

#  Production Deployment Architecture

```text
                 User
                  │
                  ▼
        Vercel React Frontend
                  │
        REST + WebSocket
                  │
                  ▼
      Spring Boot Backend (Render)
                  │
                  ▼
      Neon PostgreSQL Database
                  │
                  ▼
         NOAA Live Space APIs
```

---

# 🐳 Docker Architecture

The project is fully containerized.

```text
Docker Compose
│
├── Spring Boot Backend
│
├── PostgreSQL
│
└── React + Nginx
```

Docker Compose automatically creates the complete local development environment using a single command.

```bash
docker compose up --build
```

---

#  Engineering Highlights

✔ Event-Driven Architecture

✔ Real-Time Data Streaming

✔ Spring WebSocket + STOMP

✔ Cloud PostgreSQL Integration

✔ Dockerized Infrastructure

✔ Production Deployment

✔ RESTful API Design

✔ Layered Spring Boot Architecture

✔ Historical Data Persistence

✔ Responsive Modern React UI

✔ Live Dashboard Synchronization

✔ Cloud Native Deployment

---
#  Technology Stack

##  Backend

| Technology | Purpose |
|------------|----------|
| Java 21 | Core Programming Language |
| Spring Boot | Backend Framework |
| Spring Web | REST APIs |
| Spring Data JPA | ORM Layer |
| Hibernate | Database Mapping |
| Spring WebSocket | Real-Time Communication |
| STOMP | Messaging Protocol |
| Maven | Dependency Management |

---

##  Frontend

| Technology | Purpose |
|------------|----------|
| React | Frontend Framework |
| Vite | Build Tool |
| TailwindCSS | Styling |
| Framer Motion | Animations |
| Recharts | Analytics Charts |
| Axios | API Communication |
| React Icons | UI Icons |

---

##  Database

| Technology | Purpose |
|------------|----------|
| PostgreSQL | Local Development Database |
| Neon PostgreSQL | Cloud Production Database |

---

##  DevOps & Deployment

| Technology | Purpose |
|------------|----------|
| Docker | Containerization |
| Docker Compose | Multi-container orchestration |
| Nginx | Frontend Reverse Proxy |
| Render | Spring Boot Deployment |
| Vercel | React Deployment |
| GitHub | Version Control |

---

#  APIs Used

## NOAA Space Weather APIs

The backend continuously retrieves live scientific data from NOAA.

Integrated APIs include:

-  Planetary Kp Index
-  Solar Wind Speed
-  X-Ray Radiation
-  Space Weather Monitoring Services

---

#  Local Development

## 1️ Clone Repository

```bash
git clone https://github.com/your-username/Space-Weather-Monitoring-System.git
```

---

## 2️ Navigate into Project

```bash
cd Space-Weather-Monitoring-System
```

---

#  Backend Setup

```bash
cd demo
```

Install dependencies

```bash
mvn clean install
```

Run Spring Boot

```bash
mvn spring-boot:run
```

Backend runs on

```
http://localhost:8081
```

---

#  Frontend Setup

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run React

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🐳 Docker Setup

The complete project can be started using Docker Compose.

```bash
docker compose up --build
```

This automatically starts

- Spring Boot Backend
- PostgreSQL Database
- React Frontend
- Nginx

---

## Local Docker Services

| Service | URL |
|----------|-----|
| Frontend | http://localhost:3000 |
| Backend | http://localhost:8081 |
| PostgreSQL | localhost:5432 |

---

#  Environment Variables

## Backend (.env or Render Environment)

```properties
SPRING_DATASOURCE_URL=
SPRING_DATASOURCE_USERNAME=
SPRING_DATASOURCE_PASSWORD=

PORT=8081
```

Production uses

- Neon PostgreSQL

Local development uses

- PostgreSQL Docker Container

---

## Frontend (.env)

```properties
VITE_API_BASE_URL=https://space-weather-monitoring-system-2.onrender.com
```

For local development

```properties
VITE_API_BASE_URL=http://localhost:8081
```

---

#  Production Deployment

## Frontend

Hosted on

**Vercel**

```
https://space-weather-monitoring-system.vercel.app
```

---

## Backend

Hosted on

**Render**

```
https://space-weather-monitoring-system-2.onrender.com
```

---

## Database

Hosted on

**Neon PostgreSQL**

Cloud-hosted PostgreSQL database providing persistent storage for weather history and alert records.

---

#  REST API Documentation

## Fetch Latest Records

```http
GET /api/weather/latest
```

Response

```json
[
  {
    "kpIndex": 4.2,
    "solarSpeedOfWind": 520,
    "levelOfRadiation": 0.000003,
    "alertLevel": "NORMAL",
    "timeStamp": "2026-07-24T20:18:00"
  }
]
```

---

## Severe Alerts

```http
GET /api/weather/alerts/severe
```

Returns all severe weather events stored in the database.

---

## Manual Fetch

```http
POST /api/weather/fetch
```

Triggers immediate NOAA data retrieval.

---

#  WebSocket Endpoint

The frontend connects to

```
/ws
```

using STOMP messaging.

Whenever a severe event is detected, all connected clients instantly receive the update.

---

#  Performance Highlights

- Scheduled background processing
- Lightweight REST APIs
- Persistent cloud database
- Real-time WebSocket broadcasting
- Responsive React dashboard
- Cloud-native deployment
- Dockerized development workflow

---

#  Scalability Considerations

The current architecture can be extended with:

- Redis Caching
- Kafka Event Streaming
- Kubernetes
- Microservices
- API Gateway
- JWT Authentication
- Role-Based Access Control (RBAC)
- CI/CD Pipelines
- Monitoring & Logging
- AI-powered Prediction Engine


---
#  Engineering Concepts Demonstrated

This project showcases several software engineering principles commonly used in production systems.

### Backend Engineering

- Layered Architecture
- RESTful API Design
- Dependency Injection
- Service-Oriented Design
- Repository Pattern
- DTO Pattern
- Exception Handling
- Scheduled Background Jobs

---

### Real-Time Systems

- Event-Driven Architecture
- Publish–Subscribe Communication
- Spring WebSocket
- STOMP Messaging Protocol
- Live Dashboard Synchronization

---

### Database Engineering

- ORM using Hibernate
- Spring Data JPA
- Historical Data Persistence
- Cloud PostgreSQL Integration
- Automatic Schema Migration

---

### Frontend Engineering

- Component-Based Architecture
- Responsive UI Design
- State Management
- API Integration
- Real-Time Rendering
- Interactive Data Visualization

---

### DevOps

- Docker
- Docker Compose
- Multi-Container Architecture
- Cloud Deployment
- Environment Variable Management
- Production Build Optimization

---

#  Challenges Solved

During development, several real-world engineering challenges were addressed.

### Real-Time Communication

- Implemented Spring WebSocket with STOMP messaging.
- Eliminated manual browser refreshes.

---

### NOAA API Integration

- Parsed multiple live NOAA endpoints.
- Normalized incoming JSON structures.
- Handled unavailable endpoints and API failures gracefully.

---

### Cloud Database Migration

Migrated from Render PostgreSQL to **Neon PostgreSQL** after Render free-tier database limitations.

---

### Docker Multi-Container Setup

Successfully containerized:

- Spring Boot Backend
- React Frontend
- PostgreSQL
- Nginx

using Docker Compose.

---

### Production Deployment

Successfully deployed:

- React → Vercel
- Spring Boot → Render
- Database → Neon PostgreSQL

---

### Environment Configuration

Configured production-ready environment variables for:

- Database
- Backend
- Frontend
- Docker

---

#  Future Roadmap

Planned improvements include:

-  AI-based Space Weather Prediction
-  Kubernetes Deployment
-  Kafka Event Streaming
-  Redis Caching
-  Authentication & Authorization (JWT)
-  Fully Responsive Mobile UI
-  Machine Learning Anomaly Detection
-  CI/CD using GitHub Actions
-  Multi-Region Deployment


---

#  Learning Outcomes

This project strengthened practical understanding of:

- Spring Boot
- React
- PostgreSQL
- Docker
- Cloud Deployment
- WebSockets
- REST APIs
- Hibernate
- Event-Driven Systems
- Production Debugging
- Modern Frontend Development

---

#  Ideal Use Cases

This project demonstrates skills relevant for roles such as:

- Backend Developer
- Full Stack Developer
- Java Developer
- Spring Boot Developer
- Software Engineer
- Cloud Engineer
- Platform Engineer

---

#  Author

## Apurv Sinha

Backend Engineer | Full Stack Developer | Java Enthusiast

Passionate about building scalable backend systems, real-time applications, cloud-native software, and modern developer experiences.

### Areas of Interest

- Backend Engineering
- Distributed Systems
- System Design
- Cloud Computing
- DevOps
- Real-Time Applications
- Artificial Intelligence
- Scalable Software Architecture

---

#  Connect With Me

GitHub

https://github.com/your-username

LinkedIn

https://linkedin.com/in/your-profile

Portfolio

https://your-portfolio.vercel.app

Email

your-email@example.com

---

# ⭐ Support

If you found this project helpful or interesting,

please consider giving it a ⭐ on GitHub.

Your support motivates future improvements and helps others discover this project.

---

# 📄 License

This project is licensed under the **MIT License**.

Feel free to use, modify, and learn from this project.

---

#  Acknowledgements

Special thanks to:

- NOAA Space Weather Prediction Center
- Spring Boot Team
- React Team
- Docker Community
- PostgreSQL Community
- Neon
- Render
- Vercel
- Open Source Community

for providing the technologies and services that made this project possible.

---

<div align="center">

##  Built with Java, Spring Boot, React, Docker, and ❤️

### ⭐ If you enjoyed this project, don't forget to star the repository!

</div>


