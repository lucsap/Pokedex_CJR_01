import api from '../../resources/api';
import Titles from "../../components/helmet"
import { useState } from 'react';
import { LoginStyles, Contents , LoginButton, Input, LoginLabel } from './styles_login'
import { useHistory } from "react-router-dom"

function Login() {
    let history = useHistory()
    const [user, setUsers] = useState("")
    const [value, setValue] = useState("")
    const [criar, setCriar] = useState("")

    function handleSubmit() {
        api.get("/users/" + value)
        .then((resp)=>{
            console.log(resp.data.user.username)
            setUsers(resp.data.user.username)
            localStorage.setItem('user', value);
            history.push("/main")
        }).catch((err)=>{
            window.alert("Ocorreu um erro" + err)
        })
    }

    function handleCreate() {
        api.post("/users/", {username: value})
        .then((resp)=>{
            window.alert('deu bom')
            setUsers(resp.data)
        }).catch((err)=>(
            window.alert("Ocorreu um erro" + err)
        ))
    }

    return (
        <div className="App">
            <Titles title={"Login"} />
            <LoginStyles>Cadastre-se ou faça Login</LoginStyles>
            <Contents>
                <LoginLabel placeholder="" onChange="">Entrar </LoginLabel>
                <Input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                />
                <LoginLabel >Criar conta </LoginLabel>
                <Input
                type="text"
                value={criar}
                onChange={e => setCriar(e.target.value)}
                />
                <br/>
                <br/>
                <form method="get" action="../main/main">
                    <LoginButton type="submit" onClick={handleSubmit}>Fazer login</LoginButton>
                    <LoginButton type="submit" onClick={handleCreate}>Criar usuário</LoginButton>
                </form>
            </Contents>
            
        </div>
    )
}

export default Login
