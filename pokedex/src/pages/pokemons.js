import Titles from '../components/helmet'
import Navbar from '../components/navbar'

export default function Pokemons() {

    return (
        <div>
            <Titles title={"Pokémons favoritos"} />
            <Navbar />
            <h1>Favoritos</h1>
        </div>
    )
}