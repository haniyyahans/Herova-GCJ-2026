import { useState } from 'react'
import DirectoryPage from './components/DirectoryPage'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import SiteHeader from './components/SiteHeader'
import './App.css'

function AppShell({ page, onNavigate }) {
  return (
    <div className="app-page">
      <SiteHeader mode="app" page={page} onNavigate={onNavigate} />
      {page === 'home' ? <HomePage onNavigate={onNavigate} /> : <DirectoryPage />}
      <Footer/>
    </div>
  )
}

function App() {
  const [view, setView] = useState(window.location.pathname === '/login' ? 'login' : window.location.pathname === '/app' ? 'home' : 'landing')

  const navigate = (nextView) => {
    setView(nextView)
    const path = nextView === 'landing' ? '/' : nextView === 'login' ? '/login' : '/app'
    window.history.pushState({}, '', path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (view === 'landing') return <LandingPage onLogin={() => navigate('login')} onExplore={() => navigate('login')} />
  if (view === 'login') return <LoginPage onLogin={() => navigate('home')} onBack={() => navigate('landing')} />
  return <AppShell page={view} onNavigate={navigate} />
}

export default App