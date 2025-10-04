# EduAdmin Backend API

Express.js REST API for the EduAdmin e-learning platform.

## Features

- ✅ RESTful API endpoints
- ✅ CORS enabled for frontend communication
- ✅ Mock data for development
- ✅ Full CRUD operations
- ✅ Error handling
- ✅ Health check endpoint

## Installation

```bash
cd server
npm install
```

## Configuration

Create a `.env` file:

```env
PORT=3001
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

## Running

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

## API Endpoints

### Health Check
- `GET /health` - Server health check

### Courses
- `GET /api/courses` - Get all courses (supports ?search, ?status, ?category)
- `GET /api/courses/:id` - Get course by ID
- `POST /api/courses` - Create new course
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course

### Students
- `GET /api/students` - Get all students (supports ?search, ?sortBy)
- `GET /api/students/recent` - Get recent students (?limit)
- `GET /api/students/:id` - Get student by ID
- `POST /api/students/:id/enroll` - Enroll student in course

### Instructors
- `GET /api/instructors` - Get all instructors
- `GET /api/instructors/:id` - Get instructor by ID

### Analytics
- `GET /api/analytics/stats` - Platform statistics
- `GET /api/analytics/activity` - Platform activity over time
- `GET /api/analytics/top-courses` - Top performing courses (?limit)

### Assignments
- `GET /api/assignments` - Get all assignments (?courseId)
- `GET /api/assignments/:id` - Get assignment by ID
- `POST /api/assignments` - Create assignment

### Certificates
- `GET /api/certificates` - Get all certificates (?studentId, ?courseId)
- `POST /api/certificates` - Issue certificate

## Project Structure

```
server/
├── data/
│   └── mockData.js          # Mock data
├── index.js                 # Express server & routes
├── package.json
├── .env.example
└── README.md
```

## Deployment

See the main [DEPLOYMENT.md](../DEPLOYMENT.md) file for deployment instructions.
