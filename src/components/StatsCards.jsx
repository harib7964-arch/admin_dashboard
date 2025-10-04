import { useState, useEffect } from 'react'
import { Users, BookOpen, TrendingUp, Award } from 'lucide-react'
import { analyticsAPI } from '../api'

function StatsCards() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await analyticsAPI.getStats()
        if (response.success) {
          setStats(response.data)
        }
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return <div className="stats-grid">Loading stats...</div>
  }

  const statsConfig = [
    {
      icon: Users,
      label: 'Total Students',
      value: stats?.totalStudents?.toLocaleString() || '0',
      change: '+12.5%',
      positive: true,
      color: '#6366f1'
    },
    {
      icon: BookOpen,
      label: 'Active Courses',
      value: stats?.activeCourses || '0',
      change: '+8.2%',
      positive: true,
      color: '#8b5cf6'
    },
    {
      icon: TrendingUp,
      label: 'Completion Rate',
      value: `${stats?.completionRate || 0}%`,
      change: '+3.1%',
      positive: true,
      color: '#06b6d4'
    },
    {
      icon: Award,
      label: 'Certificates Issued',
      value: stats?.certificatesIssued?.toLocaleString() || '0',
      change: '+15.3%',
      positive: true,
      color: '#10b981'
    },
  ]

  return (
    <div className="stats-grid">
      {statsConfig.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div key={index} className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}15` }}>
              <Icon size={24} style={{ color: stat.color }} />
            </div>
            <div className="stat-content">
              <p className="stat-label">{stat.label}</p>
              <div className="stat-value-row">
                <h3 className="stat-value">{stat.value}</h3>
                <span className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StatsCards
