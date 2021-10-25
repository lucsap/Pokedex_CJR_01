import api from '../../resources/api';
import Titles from "../../components/helmet"
import { useState } from 'react';
import { LoginStyles, Contents , LoginButton } from './styles_login'

function Login() {

    const [user, setUsers] = useState("")
    const [value, setValue] = useState("")
    const [criar, setCriar] = useState("")

    function handleSubmit() {
        api.get("/users/" + value)
        .then((resp)=>{
            console.log(resp.data.user.username)
            setUsers(resp.data.user.username)
            localStorage.setItem('user', value);
        }).catch((err)=>{
            // redirecionar página
            window.alert("Ocorreu um erro" + err)
        })
    }

    function handleCreate() {
        api.post("/users/", {username: value})
        .then((resp)=>{
            window.alert('deu bom')
            setUsers(resp.data)
        }).catch((error)=>(console.log()))
    }

    return (
        <div className="App">
            <Titles title={"Login"} />
            <LoginStyles>Cadastre-se ou faça Login</LoginStyles>
            <Contents>
                <label placeholder="" onChange="">Entrar: </label>
                <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                />
                <label >Criar conta: </label>
                <input
                type="text"
                value={criar}
                onChange={e => setCriar(e.target.value)}
                />
                <br/>
                <br/>
                <form method="get" action="../main/main">
                    <button type="submit" onClick={handleSubmit}>Fazer login</button>
                    <button type="submit" onClick={handleCreate}>Criar usuário</button>
                </form>
            </Contents>
            
        </div>
    )
}

export default Login
