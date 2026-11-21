import mascotImg2 from '../assets/mascot-home-page.svg';

function Mascot_HomePage({ variant = 'floating' }) {
  return (
    <div className={`mascot mascot-${variant}`} aria-hidden="true">
      {
        <img
          src={mascotImg2}
          alt=""
          className="mascot-image-home"
        />
      }
    </div>
  )
}

export default Mascot_HomePage