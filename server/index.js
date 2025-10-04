const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Import data
const {
  mockCourses,
  mockStudents,
  mockInstructors,
  mockAnalytics,
  mockAssignments,
  mockCertificates
} = require('./data/mockData');

// CORS configuration
const whitelist = [
  'http://localhost:5173',
  'http://localhost:3000',
  process.env.FRONTEND_URL
].filter(Boolean);

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// ============ COURSES ROUTES ============

app.get('/api/courses', (req, res) => {
  const { status, category, search } = req.query;
  let courses = [...mockCourses];

  if (status) {
    courses = courses.filter(c => c.status === status);
  }

  if (category) {
    courses = courses.filter(c => c.category === category);
  }

  if (search) {
    const searchLower = search.toLowerCase();
    courses = courses.filter(c =>
      c.name.toLowerCase().includes(searchLower) ||
      c.instructor.toLowerCase().includes(searchLower)
    );
  }

  res.json({
    success: true,
    data: courses,
    total: courses.length
  });
});

app.get('/api/courses/:id', (req, res) => {
  const course = mockCourses.find(c => c.id === parseInt(req.params.id));

  if (!course) {
    return res.status(404).json({
      success: false,
      error: 'Course not found'
    });
  }

  res.json({
    success: true,
    data: course
  });
});

app.post('/api/courses', (req, res) => {
  const newCourse = {
    id: mockCourses.length + 1,
    ...req.body,
    students: 0,
    enrolled: 0,
    progress: 0,
    status: 'Draft',
    rating: 0,
    createdAt: new Date().toISOString().split('T')[0],
    updatedAt: new Date().toISOString().split('T')[0]
  };

  mockCourses.push(newCourse);

  res.status(201).json({
    success: true,
    data: newCourse,
    message: 'Course created successfully'
  });
});

app.put('/api/courses/:id', (req, res) => {
  const index = mockCourses.findIndex(c => c.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({
      success: false,
      error: 'Course not found'
    });
  }

  mockCourses[index] = {
    ...mockCourses[index],
    ...req.body,
    updatedAt: new Date().toISOString().split('T')[0]
  };

  res.json({
    success: true,
    data: mockCourses[index],
    message: 'Course updated successfully'
  });
});

app.delete('/api/courses/:id', (req, res) => {
  const index = mockCourses.findIndex(c => c.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({
      success: false,
      error: 'Course not found'
    });
  }

  mockCourses.splice(index, 1);

  res.json({
    success: true,
    message: 'Course deleted successfully'
  });
});

// ============ STUDENTS ROUTES ============

app.get('/api/students', (req, res) => {
  const { search, sortBy } = req.query;
  let students = [...mockStudents];

  if (search) {
    const searchLower = search.toLowerCase();
    students = students.filter(s =>
      s.name.toLowerCase().includes(searchLower) ||
      s.email.toLowerCase().includes(searchLower)
    );
  }

  if (sortBy === 'progress') {
    students.sort((a, b) => b.progress - a.progress);
  }

  res.json({
    success: true,
    data: students,
    total: students.length
  });
});

app.get('/api/students/recent', (req, res) => {
  const limit = parseInt(req.query.limit) || 5;
  const recentStudents = mockStudents
    .sort((a, b) => new Date(b.lastActive) - new Date(a.lastActive))
    .slice(0, limit);

  res.json({
    success: true,
    data: recentStudents
  });
});

app.get('/api/students/:id', (req, res) => {
  const student = mockStudents.find(s => s.id === parseInt(req.params.id));

  if (!student) {
    return res.status(404).json({
      success: false,
      error: 'Student not found'
    });
  }

  res.json({
    success: true,
    data: student
  });
});

app.post('/api/students/:id/enroll', (req, res) => {
  const student = mockStudents.find(s => s.id === parseInt(req.params.id));
  const { courseId } = req.body;

  if (!student) {
    return res.status(404).json({
      success: false,
      error: 'Student not found'
    });
  }

  if (!student.enrolledCourses.includes(courseId)) {
    student.enrolledCourses.push(courseId);
  }

  res.json({
    success: true,
    data: student,
    message: 'Student enrolled successfully'
  });
});

// ============ INSTRUCTORS ROUTES ============

app.get('/api/instructors', (req, res) => {
  res.json({
    success: true,
    data: mockInstructors,
    total: mockInstructors.length
  });
});

app.get('/api/instructors/:id', (req, res) => {
  const instructor = mockInstructors.find(i => i.id === parseInt(req.params.id));

  if (!instructor) {
    return res.status(404).json({
      success: false,
      error: 'Instructor not found'
    });
  }

  res.json({
    success: true,
    data: instructor
  });
});

// ============ ANALYTICS ROUTES ============

app.get('/api/analytics/stats', (req, res) => {
  res.json({
    success: true,
    data: mockAnalytics.stats
  });
});

app.get('/api/analytics/activity', (req, res) => {
  res.json({
    success: true,
    data: mockAnalytics.platformActivity
  });
});

app.get('/api/analytics/top-courses', (req, res) => {
  const limit = parseInt(req.query.limit) || 3;
  res.json({
    success: true,
    data: mockAnalytics.topCourses.slice(0, limit)
  });
});

// ============ ASSIGNMENTS ROUTES ============

app.get('/api/assignments', (req, res) => {
  const { courseId } = req.query;
  let assignments = [...mockAssignments];

  if (courseId) {
    assignments = assignments.filter(a => a.courseId === parseInt(courseId));
  }

  res.json({
    success: true,
    data: assignments,
    total: assignments.length
  });
});

app.get('/api/assignments/:id', (req, res) => {
  const assignment = mockAssignments.find(a => a.id === parseInt(req.params.id));

  if (!assignment) {
    return res.status(404).json({
      success: false,
      error: 'Assignment not found'
    });
  }

  res.json({
    success: true,
    data: assignment
  });
});

app.post('/api/assignments', (req, res) => {
  const newAssignment = {
    id: mockAssignments.length + 1,
    ...req.body,
    submissions: 0,
    status: 'Active'
  };

  mockAssignments.push(newAssignment);

  res.status(201).json({
    success: true,
    data: newAssignment,
    message: 'Assignment created successfully'
  });
});

// ============ CERTIFICATES ROUTES ============

app.get('/api/certificates', (req, res) => {
  const { studentId, courseId } = req.query;
  let certificates = [...mockCertificates];

  if (studentId) {
    certificates = certificates.filter(c => c.studentId === parseInt(studentId));
  }

  if (courseId) {
    certificates = certificates.filter(c => c.courseId === parseInt(courseId));
  }

  res.json({
    success: true,
    data: certificates,
    total: certificates.length
  });
});

app.post('/api/certificates', (req, res) => {
  const newCertificate = {
    id: mockCertificates.length + 1,
    ...req.body,
    issuedDate: new Date().toISOString().split('T')[0],
    certificateNumber: `CERT-2024-${String(mockCertificates.length + 1).padStart(3, '0')}`,
    status: 'Issued'
  };

  mockCertificates.push(newCertificate);

  res.status(201).json({
    success: true,
    data: newCertificate,
    message: 'Certificate issued successfully'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
