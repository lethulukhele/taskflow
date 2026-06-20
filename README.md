# TaskFlow - Project Management Web App

A modern, full-stack project management application built with **React**, **SpringBoot**, and **PostgreSQL**. TaskFlow enables teams to collaborate efficiently with real-time task updates, role-based access control, and intuitive workflows.

## 🎯 Features

- ✅ **Real-time Task Management** - Create, update, and track tasks in real-time
- 👥 **Team Collaboration** - Invite team members and assign tasks
- 🔐 **Role-Based Access Control** - Admin, Manager, and User roles
- 📊 **Project Analytics** - Track progress and productivity metrics
- 🔔 **Notifications** - Real-time alerts for task updates
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile

## 🛠 Tech Stack

### Backend
- **Java 17+**
- **Spring Boot 3.x** - REST API framework
- **Spring Security** - Authentication & Authorization
- **Spring Data JPA** - Database ORM
- **PostgreSQL** - Relational database
- **JWT** - Token-based authentication

### Frontend
- **React 18+** - UI library
- **Redux** - State management
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **React Router** - Navigation

## 📋 Prerequisites

- **Java 17+** installed
- **Node.js 16+** and npm installed
- **PostgreSQL 12+** installed and running
- **Git** for version control

## 🚀 Quick Start

### Backend Setup

```bash
# Clone the repository
git clone https://github.com/lethulukhele/taskflow.git
cd taskflow/backend

# Install dependencies
mvn clean install

# Configure database
# Update application.properties with your PostgreSQL credentials

# Run the application
mvn spring-boot:run

# API runs on http://localhost:8080
```

### Frontend Setup

```bash
# Navigate to frontend directory
cd taskflow/frontend

# Install dependencies
npm install

# Start development server
npm start

# Application runs on http://localhost:3000
```

## 📁 Project Structure

```
taskflow/
├── backend/
│   ├── src/
│   │   ├── main/java/com/taskflow/
│   │   │   ├── controller/
│   │   │   ├── service/
│   │   │   ├── model/
│   │   │   ├── repository/
│   │   │   └── security/
│   │   └── resources/
│   │       └── application.properties
│   └── pom.xml
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   └── services/
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh JWT token

### Projects
- `GET /api/projects` - List all projects
- `POST /api/projects` - Create new project
- `GET /api/projects/{id}` - Get project details
- `PUT /api/projects/{id}` - Update project

### Tasks
- `GET /api/tasks` - List all tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/{id}` - Update task
- `DELETE /api/tasks/{id}` - Delete task

## 🧪 Testing

```bash
# Run backend tests
cd backend
mvn test

# Run frontend tests
cd ../frontend
npm test
```

## 📦 Deployment

### Backend (Docker)
```bash
cd backend
docker build -t taskflow-api .
docker run -p 8080:8080 taskflow-api
```

### Frontend (Netlify/Vercel)
```bash
cd frontend
npm run build
# Deploy the build/ folder
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Lethulukhele** - Full-stack Developer

## 📞 Support

For issues and questions, please open an issue on GitHub or contact me directly.

---

**Built with ❤️ by Lethulukhele**
