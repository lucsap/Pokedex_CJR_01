import styled from 'styled-components'
import { CgProfile } from 'react-icons/cg';
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

export const Exit = styled.div`
    font-size: 1.6rem;
    display: inline-block;
    margin-top: 1rem;
`


function Navbar(props) {
    return(
        <Menu>
            <ul>
                <A href="../main"><IoHomeOutline/> Início</A>
                <A href="../pokemons"><CgProfile/> Perfil</A>
                <A href="../login"><Exit>
                    <IoExitOutline />
                </Exit> Logar/Sair</A>
            </ul>
        </Menu>
    )
}

export default Navbar
