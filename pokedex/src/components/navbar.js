import styled from 'styled-components'
import { CgPokemon, CgProfile } from 'react-icons/cg';
import { IoExitOutline,  IoHomeOutline} from "react-icons/io5";

export const Menu = styled.header`
    text-align: right;
    text-decoration: none;
    background-color: #F5E750;
    border-radius: 1rem;
    margin: 1rem;
`

export const A = styled.a`
    display: inline-block;
    color: black;
    font-size: 1.3rem;
    text-decoration: none;
    text-align: right;
    margin: 1rem;
    padding: 1rem 2rem;
`

function Navbar() {
        
    return(
        <Menu>
            <ul>
                <A href="../main"><IoHomeOutline/> Início</A>
                <A href="../pokemons"><CgProfile/> Perfil</A>
                <A href="../login"><IoExitOutline/> Sair</A>
            </ul>
        </Menu>
    )
}

export default Navbar