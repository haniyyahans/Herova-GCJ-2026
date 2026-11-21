import mascotImg3 from '../assets/mascot-direktori.svg';

function Mascot_DirectoryPage({ variant = 'floating' }) {
  return (
    <div className={`mascot mascot-${variant}`} aria-hidden="true">
      {
        <img
          src={mascotImg3}
          alt=""
          className="mascot-image-directory"
        />
      }
    </div>
  )
}

export default Mascot_DirectoryPage
