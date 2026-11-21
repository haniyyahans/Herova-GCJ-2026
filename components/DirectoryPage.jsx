import { useMemo, useState } from 'react'
import Icon from './Icon'
import Mascot from './Mascot-Directory-Page'
import PersonCard from './PersonCard'
import { categories, people } from './data'

function EmptyDirectory({ onReset }) {
  return (
    <section className="empty-directory">
      <div className="empty-icon"><Icon name="search" size={29} /></div>
      <h2>Belum ada yang cocok</h2>
      <p>Tidak ada hasil untuk “Product &amp; Business” dengan filter ini. Coba nama, skill, atau program studi lain.</p>
      <button className="primary-button" onClick={onReset}>Reset filter</button>
    </section>
  )
}

function DirectoryPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Semua')
  const [program, setProgram] = useState('Semua program studi')

  const filteredPeople = useMemo(() => people.filter((person) => {
    const matchesSearch = `${person.name} ${person.major} ${person.tags.join(' ')}`.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'Semua' || (category === 'Product & Business' && search.length > 0)
    const matchesProgram = program === 'Semua program studi' || person.major === program
    return matchesSearch && matchesCategory && matchesProgram
  }), [search, category, program])

  const reset = () => {
    setSearch('')
    setCategory('Semua')
    setProgram('Semua program studi')
  }

  return (
    <main className="directory-page shell">
      <section className="directory-title"><h1>Direktori</h1><div className="directory-mascot"><Mascot variant="directory" /></div></section>
      <section className="filter-card">
        <div className="filter-top">
          <label className="directory-search"><Icon name="search" size={20} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Cari nama mahasiswi" aria-label="Cari nama mahasiswi" /></label>
          <label className="select-wrap"><select value={program} onChange={(event) => setProgram(event.target.value)} aria-label="Pilih program studi"><option>Semua program studi</option><option>Teknik Informatika</option><option>Sistem Informasi</option><option>Ilmu Komunikasi</option><option>Teknik Industri</option><option>Desain Komunikasi Visual</option></select><Icon name="chevron" size={18} /></label>
        </div>
        <div className="category-row"><button className={category === 'Semua' ? 'selected' : ''} onClick={() => setCategory('Semua')}>Semua</button>{categories.map((item) => <button key={item} className={category === item ? 'selected' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div>
        <button className="reset-link" onClick={reset}>Reset filter</button>
      </section>
      {filteredPeople.length === 0 ? <EmptyDirectory onReset={reset} /> : <section className="directory-results"><div className="results-heading"><h2>Anggota HEROVA</h2><span>Menampilkan {filteredPeople.length} Mahasiswi</span></div><div className="directory-grid">{filteredPeople.map((person) => <PersonCard key={person.name} person={person} />)}</div></section>}
    </main>
  )
}

export default DirectoryPage
