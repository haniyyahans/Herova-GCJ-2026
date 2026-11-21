import { useState } from 'react'
import Icon from './Icon'
import Logo from './Logo'

function SiteHeader({ mode = 'public', page, onNavigate, onLogin }) {
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <header className={`site-header ${mode === 'app' ? 'app-header' : ''}`}>
      <button className="brand-button" onClick={() => onNavigate(mode === 'app' ? 'home' : 'landing')} aria-label="Kembali ke Herova"><Logo /></button>
      {mode === 'public' ? (
        <button className="header-login" onClick={onLogin}>Login</button>
      ) : (
        <>
          <nav className="main-nav" aria-label="Navigasi utama">
            <button className={page === 'home' ? 'active' : ''} onClick={() => onNavigate('home')}>Beranda</button>
            <button className={page === 'directory' ? 'active' : ''} onClick={() => onNavigate('directory')}>Direktori</button>
          </nav>
          <div className="profile-menu-wrap">
            <button className="profile-button" onClick={() => setProfileOpen((open) => !open)} aria-expanded={profileOpen}>
              <strong>Alifya</strong><span className="profile-icon"><Icon name="user" size={19} /></span><Icon name="chevron" size={17} />
            </button>
            {profileOpen && <div className="profile-popover"><strong>Alifya</strong><span>Profil kamu 60% lengkap</span><button onClick={() => setProfileOpen(false)}>Tutup menu</button></div>}
          </div>
        </>
      )}
    </header>
  )
}

export default SiteHeader
