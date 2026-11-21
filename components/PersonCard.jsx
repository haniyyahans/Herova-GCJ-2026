function Avatar({ tone, name }) {
  return <div className={`avatar avatar-${tone}`} aria-label={`Foto profil ${name}`}><span>{name.split(' ').map((part) => part[0]).join('')}</span></div>
}

function PersonCard({ person, compact = false }) {
  return (
    <article className={`person-card ${compact ? 'compact' : ''}`}>
      <Avatar tone={person.tone} name={person.name} />
      <div className="person-info">
        <h3>{person.name}</h3>
        <p>{person.major} · {person.year}</p>
        <span>{person.bio}</span>
      </div>
      <div className="tag-row">{person.tags.map((tag) => <small key={tag}>{tag}</small>)}</div>
      <button className="profile-link">Lihat profil</button>
    </article>
  )
}

export default PersonCard
