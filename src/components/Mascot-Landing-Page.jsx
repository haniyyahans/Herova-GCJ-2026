import mascotImg1 from '../assets/mascot-landing-page.svg';

function Mascot_LandingPage({ variant = 'floating' }) {
  return (
    <div className={`mascot mascot-${variant}`} aria-hidden="true">
      {
        <img
          src={mascotImg1}
          alt=""
          className="mascot-landing"
        />
      }
    </div>
  )
}

export default Mascot_LandingPage
