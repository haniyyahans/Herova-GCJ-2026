function ProfileProgress() {
  return (
    <div className="side-card progress-card">
      <div className="side-card-title"><strong>Kelengkapan profil</strong><b>60%</b></div>
      <div className="progress-track"><span /></div>
      <p>Sedikit lagi! Tambahkan pengalaman dan pencapaianmu.</p>
      <button className="filled-wide">Lengkapi profil</button>
    </div>
  )
}

function ContactCard() {
  return (
    <div className="side-card contact-card">
      <strong>Kontak: belum dibagikan</strong>
      <p>Kamu memegang kendali. Tentukan kontak yang ingin dibagikan.</p>
      <button className="outline-wide">Atur kontak</button>
    </div>
  )
}

function ProfileSidebar() {
  return <aside className="home-sidebar"><ProfileProgress /><ContactCard /></aside>
}

export default ProfileSidebar
