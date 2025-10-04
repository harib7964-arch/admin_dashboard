import { LayoutDashboard, BookOpen, Users, BarChart3, Settings, FileText, Award, Calendar } from 'lucide-react'

function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'courses', icon: BookOpen, label: 'Courses' },
    { id: 'students', icon: Users, label: 'Students' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'assignments', icon: FileText, label: 'Assignments' },
    { id: 'certificates', icon: Award, label: 'Certificates' },
    { id: 'schedule', icon: Calendar, label: 'Schedule' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon">📚</div>
        <h2>EduAdmin</h2>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              className={`nav-item ${activePage === item.id ? 'active' : ''}`}
              onClick={() => setActivePage(item.id)}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export default Sidebar
