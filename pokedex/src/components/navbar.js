import styled from 'styled-components'
import { CgPokemon, CgProfile } from 'react-icons/cg';
import { IoExitOutline,  IoHomeOutline} from "react-icons/io5";
import { useHistory } from "react-router-dom"
import { useState } from 'react';

export const Menu = styled.header`
    text-align: right;
    text-decoration: none;
    background-color: rgb(255,0,68);
    #border-radius: 1rem;
    border: 1px solid white;
    margin: 1rem;
    display: inline-block;
    width: 100%;
`

export const A = styled.a`
    display: inline-block;
    color: #2d2d2d;
    font-size: 1.3rem;
    text-decoration: none;
    text-align: right;
    margin: 1rem;
    padding: 1rem 2rem;
    display: inline-block;
    &:hover{
        background-color: white;
        border-radius: 5px;
    }
`

export const Exit = styled.div`
    font-size: 1.6rem;
    display: inline-block;
    margin-top: 1rem;
`
    
function Navbar(props) {
    const [user, setUsers] = useState("")
    const [value, setValue] = useState("")
    let history = useHistory()
    function unlog(){
        setUsers(null)
        localStorage.setItem('user', value);
        history.push("/main")
    }

    return(
        <Menu>
            <ul>
                <A href="../main"><IoHomeOutline/> Início</A>
                <A href="../pokemons"><CgProfile/> Perfil</A>
                <A onClick={unlog} href="../login"><Exit>
                    <IoExitOutline />
                </Exit> Logar/Sair</A>
            </ul>
        </Menu>
    )
}

export default Navbar
