

#  Space Weather Monitoring System (Backend)

A **Spring Boot–based real-time backend system** designed to simulate a **Space Weather Monitoring System**.

This project collects **live space weather data from NOAA APIs**, processes it using alert evaluation logic, stores it in a database, and pushes **real-time alerts using WebSockets**.

---

##  Project Overview

Space weather events such as **solar flares**, **coronal mass ejections (CMEs)**, and **geomagnetic storms** can impact:

- Satellites 
- Communication systems 
- GPS navigation   
- Power grids   

This system simulates how a **real-world backend**:

- Fetches real-time data from external APIs (NOAA)
- Processes and evaluates alert levels
- Stores data in a relational database
- Pushes **live alerts using WebSockets**
- Exposes REST APIs for frontend consumption

---

##  Key Features

- **Real-time data integration (NOAA APIs)**
-  **WebSocket-based live alert system**
-  **Scheduled data fetching (auto-ingestion)**
-  Domain-based data modeling
-  PostgreSQL database integration
- Automatic table creation (Hibernate)
-  Alert-level evaluation engine
-  Layered architecture (Controller, Service, Repository)
-  Ready for Spring Security & frontend integration

---

##  Real-Time Flow
Scheduler → NOAA API → DTO → Service Layer → DB
↓
WebSocket Alerts
↓
Frontend (Live)


---

##  Alert Level Logic

###  SEVERE
- Kp Index ≥ 7  
- Radiation Level ≥ 8  

###  WARNING
- Kp Index ≥ 5  
- Solar Wind Speed > 700 km/s  

###  NORMAL
- All other cases  

---

##  External APIs Used (NOAA)

- Kp Index → `planetary_k_index_1m.json`
- Solar Wind → `plasma-1-hour.json`
- Radiation → `xrays-6-hour.json`

---

##  Why This Project Matters

This project demonstrates:

- Real-time backend system design  
- External API integration (multi-source data aggregation)  
- Event-driven architecture using WebSockets  
- Clean separation of concerns  
- Scalable and extensible backend design  

---

##  Tech Stack

- **Java**
- **Spring Boot**
- **Spring Web**
- **Spring Data JPA**
- **Spring WebSocket**
- **Hibernate**
- **PostgreSQL**
- **Maven**
- **Postman**

---

##  Project Architecture
src/main/java
└── com.spaceweather.demo
├── controller
│ └── SpaceWeatherController.java
├── service
│ ├── WeatherService.java
│ ├── NOAAService.java
│ └── AlertWebSocketService.java
├── repository
│ └── WeatherRepository.java
├── model
│ └── WeatherData.java
├── dto
│ └── SpaceWeatherDTO.java
├── scheduler
│ └── WeatherScheduler.java
└── config
└── WebSocketConfig.java


---

##  REST API Endpoints

### ➤ Fetch & Process Data (Manual Trigger)
**POST**
/api/weather/fetch
---

### ➤ Get Latest Data
**GET**
/api/weather/latest
---

### ➤ Get Severe Alerts
**GET**
/api/weather/alerts/severe
---

##  WebSocket Endpoint

### Connection Endpoint:
/ws

### Subscribe to Alerts:
/topic/alerts

### Sample Payload:
```json
{
  "message": " Severe Space Weather Detected!",
  "level": "SEVERE",
  "kpIndex": 8.2,
  "solarWind": 780,
  "radiation": 9.1,
  "time": "2026-05-05T12:30:00"
}


