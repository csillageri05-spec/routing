import { Link } from 'react-router-dom'

function PublicPage() {
  return (
    <section>
      <h1>Nyilvános oldal</h1>
      <p>Üdvözöljük az alkalmazásban!</p>
      <Link to="/termek/5">5-ös termék megtekintése</Link>
    </section>
  )
}

export default PublicPage
