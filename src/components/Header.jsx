import { Search, Bell, Mail } from 'lucide-react'

function Header() {
  return (
    <header className="header">
      <div className="search-bar">
        <Search size={20} />
        <input type="text" placeholder="Search courses, students, analytics..." />
      </div>
      
      <div className="header-actions">
        <button className="icon-button">
          <Mail size={20} />
          <span className="badge">3</span>
        </button>
        <button className="icon-button">
          <Bell size={20} />
          <span className="badge">5</span>
        </button>
        <div className="user-profile">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" />
          <div className="user-info">
            <span className="user-name">Sarah Johnson</span>
            <span className="user-role">Administrator</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
