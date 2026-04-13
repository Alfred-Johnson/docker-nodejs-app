# 🚀 DevOps CI/CD Pipeline Project (Node.js + Docker + AWS + Nginx)

## 📌 Project Overview

This project demonstrates a complete **CI/CD pipeline** for deploying a Node.js application using modern DevOps tools.

The application is:

* 🐳 Containerized using Docker
* ⚙️ Automatically built & deployed using GitHub Actions
* ☁️ Hosted on AWS EC2
* 🌐 Served via Nginx Reverse Proxy
* 🔒 Secured with HTTPS (SSL using Certbot)

---

## 🏗️ Architecture

```
Developer → GitHub → GitHub Actions → DockerHub → AWS EC2 → Nginx → Users
```

### 🔄 Flow Explanation

1. Developer pushes code to GitHub
2. GitHub Actions pipeline triggers automatically
3. Docker image is built and pushed to DockerHub
4. AWS EC2 server pulls latest Docker image
5. Container runs on port 3000
6. Nginx acts as reverse proxy (port 80/443 → 3000)
7. Users access application via domain (HTTPS)

---

## 🔗 Repository Link

👉 https://github.com/Alfred-Johnson/docker-nodejs-app

---

## 🛠️ Tech Stack

* Node.js
* Docker
* GitHub Actions
* AWS EC2
* Nginx
* Certbot (SSL)

---

## 📂 Project Structure

```
docker-nodejs-app/
│── app.js
│── package.json
│── Dockerfile
│── .github/workflows/deploy.yml
│── screenshots/
│── README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone Repository

```
git clone https://github.com/Alfred-Johnson/docker-nodejs-app.git
cd docker-nodejs-app
```

---

### 2️⃣ Run Locally

```
npm install
node app.js
```

App runs on:

```
http://localhost:3000
```

---

### 3️⃣ Docker Setup

#### Build Image

```
docker build -t node-app .
```

#### Run Container

```
docker run -d -p 3000:3000 node-app
```

---

## 🔁 CI/CD Pipeline (GitHub Actions)

Workflow file:

```
.github/workflows/deploy.yml
```

### Pipeline Steps:

* Checkout code
* Build Docker image
* Push to DockerHub
* SSH into EC2
* Pull latest image
* Stop old container
* Run new container

---

## ☁️ AWS Deployment

* EC2 Instance (Ubuntu)
* Docker installed
* Security Groups:

  * Port 22 (SSH)
  * Port 80 (HTTP)
  * Port 443 (HTTPS)
  * Port 3000 (internal app)

---

## 🌐 Nginx Reverse Proxy

```
http://your-domain → http://localhost:3000
```

---

## 🔒 SSL Setup (HTTPS)

```
sudo certbot --nginx -d your-domain
```

---

## 📸 Project Screenshots

All screenshots are stored inside the `screenshots/` folder.

### 🌐 Website

![Website](https://raw.githubusercontent.com/Alfred-Johnson/docker-nodejs-app/main/screenshots/website.png)

### ⚙️ GitHub Actions (CI/CD)

![Actions](https://raw.githubusercontent.com/Alfred-Johnson/docker-nodejs-app/main/screenshots/actions.png)

### 🌍 Domain + HTTPS

![Domain](https://raw.githubusercontent.com/Alfred-Johnson/docker-nodejs-app/main/screenshots/domain.png)

### 🐳 Docker Running

![Docker](https://raw.githubusercontent.com/Alfred-Johnson/docker-nodejs-app/main/screenshots/docker.png)

### 🔁 Nginx Reverse Proxy

![Nginx](https://raw.githubusercontent.com/Alfred-Johnson/docker-nodejs-app/main/screenshots/nginx.png)

---

## ✅ Features

* Fully automated CI/CD pipeline
* Dockerized application
* Live deployment on AWS
* Nginx reverse proxy
* HTTPS enabled
* Zero manual deployment

---

## 🎯 Key Learnings

* CI/CD pipeline implementation
* Docker containerization
* Cloud deployment (AWS EC2)
* Reverse proxy configuration (Nginx)
* SSL certificate setup

---

## 🚀 Future Improvements

* Kubernetes deployment
* Monitoring (Prometheus + Grafana)
* Auto-scaling setup
* Blue-Green Deployment

---

## 👨‍💻 Author

**Alfred Johnson**

---

## ⭐ Conclusion

This project showcases a real-world **DevOps workflow** from development to production deployment using industry-standard tools.

---
