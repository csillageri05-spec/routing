import { Link } from 'react-router-dom'


function Admin() {
  return (
    <section>
      <h1>Admin oldal</h1>
      <p>Üdvözöljük az admin oldalon!</p>
      <Link to="/termek/5">5-ös termék megtekintése</Link>
    </section>
  )
}

export default Admin
