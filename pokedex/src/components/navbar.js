import styled from 'styled-components'

export const Menu = styled.header`
    text-align: right;
    text-decoration: none;
    background-color: #F5E750;
    border-radius: 1rem;
    margin: 1rem;
`

export const A = styled.a`
    display: inline-block;
    color: blue;
    text-decoration: none;
    text-align: right;
    margin: 1rem;
    padding: 1rem 2rem;
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