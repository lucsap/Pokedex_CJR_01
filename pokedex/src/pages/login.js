import { Navbar } from "../components/cpnt_login"
import Titles from "../components/helmet"
import { useEffect, useState } from 'react';
import axios from 'axios';

function Login() {

    const [users, setUsers] = useState([])

    // Pegar usuários
    useEffect(()=>{
        axios.get("https://pokedex20201.herokuapp.com/users/")
        .then((resp)=>{
            console.log(resp.data)
            console.log(resp.data[0])
            setUsers(resp.data)
        })
      }, [])

    return (
        <div>
            <Titles title={"Login"} />
            <Navbar>Cadastre-se ou faça Login</Navbar>
            <input placeholder="Nome de usuário"></input>
            <br/>
            <button>Fazer login</button>
            
        </div>
    )
}

export default Login