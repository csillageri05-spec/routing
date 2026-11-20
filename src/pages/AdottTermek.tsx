import { Link, useParams } from 'react-router-dom'


function AdottTermek() {

    const {id} = useParams()
    return (
        <section>
            <h1>Termék részletei</h1>
            <p>Termék ID: {id}</p>
            <Link to="/termek/5">5-ös termék megtekintése</Link>
        </section>
    )
}

export default AdottTermek
