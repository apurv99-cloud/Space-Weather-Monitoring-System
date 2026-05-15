#  Space Weather Monitoring System

A futuristic **real-time Space Weather Intelligence Platform** built using **Spring Boot, React, WebSockets, NOAA APIs, and PostgreSQL/MySQL**.

This system continuously tracks live space weather conditions such as:

- Geomagnetic storms
- Solar wind activity
- Radiation anomalies
- Kp Index fluctuations

and visualizes them through a **modern real-time analytics dashboard** with live WebSocket updates and historical trend analysis.

---

#  Project Vision

Space weather events can severely impact:

- Satellites
- GPS navigation
- Aviation communication
- Radio systems
- Power grids
- Military infrastructure

This project simulates how modern monitoring systems process and broadcast real-time scientific data using an **event-driven architecture**.

---

#  Features

##  Real-Time Monitoring
Continuously fetches live NOAA space-weather data at scheduled intervals.

---

##  Live WebSocket Alerts
Pushes instant alerts to the frontend whenever severe space weather conditions are detected.

No page refresh required.

---

##  Interactive Analytics Dashboard
Modern dashboard with:

- Real-time metrics
- Kp Index trend graphs
- Solar wind activity charts
- Historical activity feed
- Alert distribution analytics

---

##  Futuristic UI
Built with:

- TailwindCSS
- Framer Motion
- Recharts
- Animated Earth visualization
- Glassmorphism effects
- Neon cyber-style dashboard

---

##  Alert Evaluation Engine

Automatically classifies events into:

###  SEVERE
- Kp Index ≥ 7
- Radiation Level ≥ 8

###  WARNING
- Kp Index ≥ 5
- Solar Wind Speed > 700 km/s

###  NORMAL
- Stable space conditions

---

##  NOAA API Integration

Integrated multiple real-time NOAA APIs:

- Kp Index API
- Solar Wind Plasma API
- X-Ray Radiation API

---

##  Historical Data Tracking

Stores historical records inside the database for:

- Trend analysis
- Chart visualization
- Future ML prediction models

---

##  Event-Driven Architecture

Backend automatically:

1. Fetches live data
2. Processes alerts
3. Stores records
4. Broadcasts events
5. Updates frontend in real-time

---

#  Tech Stack

## Backend
- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Spring WebSocket
- Hibernate
- Maven

---

## Frontend
- React
- TailwindCSS
- Recharts
- Framer Motion
- React Icons
- CountUp.js

---

## Database
- PostgreSQL / MySQL

---

## APIs
- NOAA Space Weather APIs

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
Database Storage
     ↓
WebSocket Broadcasting
     ↓
React Dashboard (Live Updates)

