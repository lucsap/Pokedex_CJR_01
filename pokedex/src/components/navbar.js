import styled from 'styled-components'

export const Menu = styled.header`
    align-items: center;
    text-decoration: none;
    background-color: yellow;
`

export const A = styled.a`
    display: inline-block;
    color: blue;
    text-decoration: none;
    padding: 1.0rem;
    text-align: right;
`

function Navbar() {
        
    return(
        <Menu>
            <ul>
                <A href="../main">Início</A>
                <A href="../pokemons">Perfil</A>
                <A href="../login">Sair</A>
            </ul>
        </Menu>
    )
}

export default Navbar