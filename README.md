# Raqeb Food

## IoT and AI system for intelligent school food delivery monitoring

**Student:** Yassine Ben Hamadi
**Course:** Internet of Things
**Academic year:** 2024/2025
**Professor:** Prof. Luigi Patrono
**Tutor:** Ing. Teo Montanaro

---

## Project overview

Raqeb Food is an Internet of Things and Artificial Intelligence prototype designed for intelligent monitoring of school food deliveries.

The term **“Raqeb”** comes from Arabic **“راقب”**, meaning **“to monitor”** or **“to watch”**.

The system combines IoT sensing, smartphone GPS tracking, a Flask backend, a SQLite database, a React dashboard and an AI recommendation module. Its goal is to provide visibility over the delivery process and support the administrator in assigning the most suitable available driver to a school food request.

---

## Main scenario

The system is based on three main actors:

* **School:** creates food delivery requests, selects food items and quantities, adds the requested delivery time and follows the request status.
* **Administrator:** views requests, asks the AI module for a driver recommendation, assigns drivers, monitors deliveries and checks final reports.
* **Driver:** views assigned deliveries, starts the delivery from the smartphone dashboard, sends GPS coordinates and completes the delivery.

During an active delivery, the Raspberry Pi reads temperature, humidity and tilt sensor values. The driver smartphone provides GPS coordinates through the browser Geolocation API. The backend stores meaningful monitoring events and generates a final delivery report after completion.

---

## System architecture

The prototype is composed of the following parts:

* **React frontend dashboard** for administrator, school and driver users;
* **Flask backend API** running on Raspberry Pi 5;
* **SQLite database** for users, requests, deliveries and monitoring records;
* **DHT11 sensor** for temperature and humidity monitoring;
* **KY-017 tilt sensor** for box instability detection;
* **Driver smartphone GPS** using the Browser Geolocation API;
* **AI recommendation module** using scikit-learn and a Decision Tree Classifier;
* **Cloudflare Tunnel** for HTTPS access during the local GPS demonstration;
* **GitHub Pages** for the public presentation website.

---

## Web of Things stack mapping

The project can be mapped to the Web of Things stack as follows:

* **Networked Things:** Raspberry Pi 5, DHT11 sensor, KY-017 tilt sensor and driver smartphone GPS.
* **Layer 1 – Access:** Flask REST API, HTTP, JSON and backend endpoints.
* **Layer 2 – Find:** SQLite resource retrieval for drivers, requests, deliveries and reports.
* **Layer 3 – Share:** authentication, sessions and role-based access.
* **Layer 4 – Compose:** React web application, delivery workflow, AI recommendation and report generation.

---

## AI recommendation module

The AI module recommends the most suitable available driver for a selected delivery request.

It does not judge driver quality in general. Instead, it predicts the **delivery-condition risk** for a specific driver-request combination.

A scikit-learn Decision Tree Classifier is trained on an 800-row prototype delivery-risk dataset. During assignment, the backend builds a feature vector for each available driver, predicts the risk level and converts the result into a suitability score shown to the administrator.

---

## Event-based monitoring

The system does not store every sensor reading. Instead, it uses event-based storage.

A monitoring record is saved only when a meaningful event occurs, such as:

* monitoring start;
* alert generation;
* tilt state change;
* significant temperature or humidity variation;
* GPS availability during an active delivery.

This approach reduces redundant database records and makes the final delivery report easier to read.

---

## Functional validation

The prototype was validated through an end-to-end use case:

1. school login;
2. school creates a delivery request;
3. administrator login;
4. AI-assisted driver assignment;
5. driver login from smartphone;
6. delivery start and live monitoring;
7. delivery completion.

This validates the complete workflow from request creation to assignment, monitoring and final completion.

---

## Project repositories

### Backend / IoT / AI

Repository containing the Flask backend, Raspberry Pi sensor logic, SQLite database handling and AI recommendation module.

https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-part1-YassineBH26

### Frontend dashboard

Repository containing the React dashboard for administrator, school and driver users.

https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-part2-YassineBH26

### Presentation website

Repository containing the GitHub Pages showcase website for the project.

https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-presentation-YassineBH26

---

## Technologies used

* Raspberry Pi 5
* DHT11 temperature and humidity sensor
* KY-017 tilt sensor
* Python
* Flask
* SQLite
* React
* Browser Geolocation API
* scikit-learn
* Decision Tree Classifier
* Cloudflare Tunnel
* GitHub Pages

---

## Limitations and future work

Raqeb Food is an academic prototype and not a certified food-safety system.

Future improvements include:

* collecting a real operational dataset;
* deploying the system with production HTTPS;
* adding a real-time map and route tracking;
* using stronger food-grade sensors;
* adding notifications for alerts and delays;
* improving the AI model with real delivery data;
* adding analytics dashboards for delivery history.
