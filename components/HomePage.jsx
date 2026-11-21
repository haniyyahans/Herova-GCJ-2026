import { useState } from 'react'
import Icon from './Icon'
import Mascot from './Mascot-Home-Page'
import PersonCard from './PersonCard'
import ProfileSidebar from './ProfileSidebar'
import { categories, people } from './data'

function HomePage({ onNavigate }) {
  const [search, setSearch] = useState('')

  return (
    <main className="home-page shell">
      <section className="home-intro">
        <div>
          <h1>Halo, Alifya</h1>
          <p>Temukan teman kolaborasi. Tumbuhkan potensimu.</p>
          <label className="home-search"><Icon name="search" size={20} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Cari nama atau skill" aria-label="Cari nama atau skill" /></label>
          <div className="quick-search">
            <strong>Mulai dari skill yang kamu cari</strong>
            <div>{categories.map((category) => <button key={category} onClick={() => setSearch(category)}>{category}</button>)}</div>
          </div>
        </div>
        <div className="home-mascot"><Mascot variant="home" /></div>
      </section>
      <section className="home-content">
        <div className="recommendation-panel">
          <div className="panel-heading"><h2>Rekomendasi Teman</h2><button onClick={() => onNavigate('directory')}>Lihat semua <Icon name="arrow" size={17} /></button></div>
          <div className="recommendation-grid">{people.slice(2, 5).map((person) => <PersonCard key={person.name} person={person} compact />)}</div>
        </div>
        <ProfileSidebar />
      </section>
    </main>
  )
}

export default HomePage
