import Titles from "../components/helmet"

export default function Login() {

    return (
        <div>
        <Titles title={"Login"} />
            <h1>Login</h1>
            <form>
                <labe>Insira seu nome de usuário</labe>
                <input></input>
                <br/>
                <button>Fazer login</button>
            </form>
        </div>
    )
}