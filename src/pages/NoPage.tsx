import { Link } from 'react-router-dom'

function NoPage() {
  return (
    <section>
      <h1>404 – Az oldal nem található</h1>
      <Link to="/">Vissza a főoldalra</Link>
    </section>
  )
}

export default NoPage
