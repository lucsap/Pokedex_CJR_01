import styled from 'styled-components'
import { CgPokemon, CgProfile } from 'react-icons/cg';
import { IoExitOutline,  IoHomeOutline} from "react-icons/io5";

export const Menu = styled.header`
    text-align: right;
    text-decoration: none;
    background-color: #82b0a6;
    border-radius: 1rem;
    margin: 1rem;
`

export const A = styled.a`
    display: inline-block;
    color: #2d2d2d;
    font-size: 1.3rem;
    text-decoration: none;
    text-align: right;
    margin: 1rem;
    padding: 1rem 2rem;
`

function Navbar(props) {
    return(
        <Menu>
            <ul>
                <A href="../main">Início</A>
                <A href="../pokemons">Perfil</A>
                <A href="../login">Logar/Sair</A>
            </ul>
        </Menu>
    )
}

export default Navbar
