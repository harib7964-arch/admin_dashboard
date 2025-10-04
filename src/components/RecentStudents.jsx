import { useState, useEffect } from 'react'
import { studentsAPI } from '../api'

function RecentStudents() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecentStudents = async () => {
      try {
        const response = await studentsAPI.getRecent(5)
        if (response.success) {
          setStudents(response.data)
        }
      } catch (error) {
        console.error('Error fetching students:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRecentStudents()
  }, [])

  if (loading) {
    return <div className="recent-students-card">Loading students...</div>
  }

  return (
    <div className="recent-students-card">
      <div className="card-header">
        <h3>Recent Students</h3>
        <button className="view-all-btn">View All</button>
      </div>
      <div className="students-list">
        {students.map((student) => (
          <div key={student.id} className="student-item">
            <img 
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.avatar}`} 
              alt={student.name}
              className="student-avatar"
            />
            <div className="student-info">
              <h4>{student.name}</h4>
              <p>{student.currentCourse}</p>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${student.progress}%` }}
                ></div>
              </div>
            </div>
            <span className="progress-value">{student.progress}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentStudents
