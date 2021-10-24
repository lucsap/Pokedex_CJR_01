import Titles from "../components/helmet"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LoginStyles, Contents } from '../styles/login'

function Login() {

    const [users, setUsers] = useState("")
    const [value, setValue] = useState("")
    const [criar, setCriar] = useState("")

    // Pegar usuários
    // useEffect(()=>{
    //     axios.get("https://pokedex20201.herokuapp.com/users/"+value)
    //     .then((resp)=>{
    //         console.log(resp.data)
    //         console.log(resp.data[0])
    //         setUsers(resp.data)
    //     })
    // }, [])

    function handleSubmit() {
        axios.get("https://pokedex20201.herokuapp.com/users/" + value)
        .then((resp)=>{
            console.log(resp.data.user.username)
            setUsers(resp.data.user.username)
            localStorage.setItem('user', value);
        }).catch(window.alert('deu ruim'))
    }

    function handleCreate() {
        axios.post("https://pokedex20201.herokuapp.com/users/", {username: value})
        .then((resp)=>{
            window.alert('deu bom')
            setUsers(resp.data)
        }).catch((error)=>(console.log()))
    }

    return (
        <div className="bodyLogin">
            <Titles title={"Login"} />
            <LoginStyles>Cadastre-se ou faça Login</LoginStyles>
            <Contents>
                <label placeholder="" onChange="">Entrar: </label>
                <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                />
                <label>Criar conta: </label>
                <input
                type="text"
                value={criar}
                onChange={e => setCriar(e.target.value)}
                />
                <br/>
                <br/>
                <button onClick={handleSubmit}>Fazer login</button>
                <button onClick={handleCreate}>Criar usuário</button>
            </Contents>
            
        </div>
    )
}

export default Login