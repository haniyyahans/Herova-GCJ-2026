import Icon from './Icon'
import Footer from './Footer'
import Mascot from './Mascot-Landing-Page'
import SiteHeader from './SiteHeader'

function JourneyStep({ icon, title, text }) {
  return (
    <div className="journey-step">
      <div className="journey-icon">{icon === 'handshake' ? <span className="handshake-mark">⌁</span> : <Icon name={icon} size={34} />}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

function LandingPage({ onLogin, onExplore }) {
  return (
    <div className="landing-page">
      <div className="landing-top">
        <SiteHeader onLogin={onLogin} onNavigate={() => {}} />
        <div className="landing-hero shell">
          <div className="hero-copy">
            <p className="eyebrow">A SPACE TO GROW TOGETHER</p>
            <h1>Find your people,<br /><span>build your potential.</span></h1>
            <p className="hero-description">Discover talented women, connect with like-minded peers, and find the perfect teammates for your next project or competition. Your next great collaboration starts here!</p>
            <button className="primary-button" onClick={onExplore}>Explore HEROVA <Icon name="arrow" size={17} /></button>
          </div>
          <div className="landing-visual"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><Mascot variant="landing" /></div>
        </div>
      </div>
      <section className="journey-section">
        <div className="shell journey-inner">
          <p className="eyebrow center">HOW IT WORKS</p>
          <h2>Your Journey Starts Here</h2>
          <p className="section-lead">Three simple steps to discover connections and create<br className="desktop-break" /> meaningful collaborations.</p>
          <div className="journey-grid">
            <JourneyStep icon="search" title="Discover" text="Explore profiles and find people with skills that match your needs." />
            <JourneyStep icon="user" title="Connect" text="Get to know talented peers and start building new connections." />
            <JourneyStep icon="handshake" title="Collaborate" text="Bring your strengths together and create something meaningful." />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default LandingPage