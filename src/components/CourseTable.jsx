import { useState, useEffect } from 'react'
import { MoreVertical, Users } from 'lucide-react'
import { coursesAPI } from '../api'

function CourseTable() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = async (search = '') => {
    setLoading(true)
    try {
      const response = await coursesAPI.getAll({ search })
      if (response.success) {
        setCourses(response.data)
      }
    } catch (error) {
      console.error('Error fetching courses:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    fetchCourses(value)
  }

  if (loading) {
    return <div className="course-table-card">Loading courses...</div>
  }

  return (
    <div className="course-table-card">
      <div className="table-header">
        <h3>Active Courses</h3>
        <div className="table-actions">
          <input 
            type="text" 
            placeholder="Search courses..." 
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <button className="filter-btn">Filter</button>
          <button className="add-btn">+ Add Course</button>
        </div>
      </div>
      
      <div className="table-wrapper">
        <table className="course-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Instructor</th>
              <th>Students</th>
              <th>Progress</th>
              <th>Rating</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>
                  <div className="course-name-cell">
                    <span className="course-name">{course.name}</span>
                  </div>
                </td>
                <td>{course.instructor}</td>
                <td>
                  <div className="students-cell">
                    <Users size={16} />
                    <span>{course.students}</span>
                  </div>
                </td>
                <td>
                  <div className="progress-cell">
                    <div className="mini-progress-bar">
                      <div 
                        className="mini-progress-fill" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <span>{course.progress}%</span>
                  </div>
                </td>
                <td>
                  <div className="rating-cell">
                    <span className="star">⭐</span>
                    <span>{course.rating}</span>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${course.status === 'Active' ? 'active' : 'in-progress'}`}>
                    {course.status}
                  </span>
                </td>
                <td>
                  <button className="action-btn">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CourseTable
