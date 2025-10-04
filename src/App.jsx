import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatsCards from './components/StatsCards'
import CourseTable from './components/CourseTable'
import ActivityChart from './components/ActivityChart'
import RecentStudents from './components/RecentStudents'

function App() {
  const [activePage, setActivePage] = useState('dashboard')

  return (
    <div className="app">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="main-content">
        <Header />
        <div className="dashboard-content">
          <StatsCards />
          <div className="charts-section">
            <ActivityChart />
            <RecentStudents />
          </div>
          <CourseTable />
        </div>
      </div>
    </div>
  )
}

export default App
