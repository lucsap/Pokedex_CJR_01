import Titles from "../components/Pokemon"

export default function Profile() {

    return (
        <div>
            <Titles title={"Perfil"} />
            <div className="menu">
                <li>Pokémons</li>
                <li>Perfil</li>
                <li>Sair</li>
            </div>
            <div>
                <h1>Meus Pokémons Favoritos</h1>
            </div>
            <div>
                <button>Voltar</button>
            </div>
        </div>
    )
}