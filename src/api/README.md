# Mock API Documentation

This directory contains mock API functions that simulate backend data fetching for the e-learning dashboard.

## Available APIs

### 1. Courses API (`coursesAPI`)

```javascript
import { coursesAPI } from './api'

// Get all courses
const response = await coursesAPI.getAll()
const response = await coursesAPI.getAll({ status: 'Active' })
const response = await coursesAPI.getAll({ category: 'Web Development' })
const response = await coursesAPI.getAll({ search: 'python' })

// Get course by ID
const response = await coursesAPI.getById(1)

// Create new course
const response = await coursesAPI.create({
  name: 'New Course',
  instructor: 'John Doe',
  instructorId: 106,
  category: 'Programming',
  duration: '40 hours',
  description: 'Course description',
  price: 79.99
})

// Update course
const response = await coursesAPI.update(1, {
  name: 'Updated Course Name',
  price: 89.99
})

// Delete course
const response = await coursesAPI.delete(1)
```

### 2. Students API (`studentsAPI`)

```javascript
import { studentsAPI } from './api'

// Get all students
const response = await studentsAPI.getAll()
const response = await studentsAPI.getAll({ search: 'emma' })
const response = await studentsAPI.getAll({ sortBy: 'progress' })

// Get student by ID
const response = await studentsAPI.getById(1)

// Get recent students
const response = await studentsAPI.getRecent(5)

// Enroll student in course
const response = await studentsAPI.enroll(1, 3)
```

### 3. Instructors API (`instructorsAPI`)

```javascript
import { instructorsAPI } from './api'

// Get all instructors
const response = await instructorsAPI.getAll()

// Get instructor by ID
const response = await instructorsAPI.getById(101)
```

### 4. Analytics API (`analyticsAPI`)

```javascript
import { analyticsAPI } from './api'

// Get platform statistics
const response = await analyticsAPI.getStats()
// Returns: { totalStudents, activeStudents, totalCourses, activeCourses, completionRate, certificatesIssued, totalRevenue, averageRating }

// Get platform activity over time
const response = await analyticsAPI.getActivity()
// Returns array of monthly data: [{ month, students, courses, revenue }]

// Get top performing courses
const response = await analyticsAPI.getTopCourses(3)
```

### 5. Assignments API (`assignmentsAPI`)

```javascript
import { assignmentsAPI } from './api'

// Get all assignments
const response = await assignmentsAPI.getAll()
const response = await assignmentsAPI.getAll({ courseId: 1 })

// Get assignment by ID
const response = await assignmentsAPI.getById(1)

// Create assignment
const response = await assignmentsAPI.create({
  title: 'New Assignment',
  courseId: 1,
  courseName: 'Course Name',
  dueDate: '2024-02-15',
  totalStudents: 100
})
```

### 6. Certificates API (`certificatesAPI`)

```javascript
import { certificatesAPI } from './api'

// Get all certificates
const response = await certificatesAPI.getAll()
const response = await certificatesAPI.getAll({ studentId: 1 })
const response = await certificatesAPI.getAll({ courseId: 1 })

// Issue certificate
const response = await certificatesAPI.issue({
  studentId: 1,
  studentName: 'John Doe',
  courseId: 1,
  courseName: 'Course Name'
})
```

## Response Format

All API functions return a Promise that resolves to an object with the following structure:

### Success Response
```javascript
{
  success: true,
  data: {...}, // or [...]
  total: 10, // (optional) for list endpoints
  message: 'Operation successful' // (optional) for create/update/delete
}
```

### Error Response
```javascript
{
  success: false,
  error: 'Error message'
}
```

## Usage in Components

```javascript
import { useState, useEffect } from 'react'
import { coursesAPI } from '../api'

function MyComponent() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true)
        const response = await coursesAPI.getAll()
        
        if (response.success) {
          setCourses(response.data)
        } else {
          setError(response.error)
        }
      } catch (err) {
        setError('Failed to fetch courses')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>{course.name}</div>
      ))}
    </div>
  )
}
```

## Features

- ✅ Simulated network delay (500ms)
- ✅ Full CRUD operations for courses
- ✅ Search and filter functionality
- ✅ Realistic data structure
- ✅ Error handling
- ✅ Consistent response format

## Future Enhancements

To connect to a real backend API:

1. Replace the mock data with actual API endpoints
2. Update the base URL in a config file
3. Add authentication headers
4. Implement proper error handling
5. Add request caching if needed

Example:
```javascript
const API_BASE_URL = 'https://api.yourdomain.com'

export const coursesAPI = {
  getAll: async (params) => {
    const response = await fetch(`${API_BASE_URL}/courses`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    return response.json()
  }
}
```
