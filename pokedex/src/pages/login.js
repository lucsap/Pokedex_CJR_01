import Titles from "../components/helmet"

export default function Login() {

    return (
        <div>
            <Titles title={"Login"} />
            <h1>Cadastre-se ou faça Login</h1>
            <input placeholder="Nome de usuário"></input>
            <br/>
            <button>Fazer login</button>
        </div>
    )
}