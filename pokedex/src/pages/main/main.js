import api from '../../resources/api';
import { useEffect, useState } from 'react';
import Pokemon from '../../components/Pokemon';
import Titles from '../../components/helmet';
import Navbar from '../../components/navbar';
import { CgPokemon } from 'react-icons/cg';
import styled from 'styled-components';

const Input = styled.div`
  background-color: rgb(255,0,68);
  color: black;
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  text-decoration: black;
  &:hover {
    background-color: #ffbf00;
  }
`;

const Hi = styled.div`
  color: #82b0a6;
`

function Main(){
      const [pages,setPage] = useState(1)
      const [pokemons,setPokemon] = useState([])
      const [fvpkm, setFvpkm] = useState([])
      const user = localStorage.getItem('user'); // tem o usuário logado

      // Pegar usuários
      useEffect(()=>{
        const resp = api.get("/users/")
        console.log(resp)
      }, [])

      function getFavPokemons(){
        api.get("https://pokedex20201.herokuapp.com/users/"+user)
        .then((resp)=>{
          console.log("Debugfav",resp)
          setFvpkm(resp.data.pokemons)
          console.log("Favlist:",fvpkm)
        })// eslint-disable-next-line
      }

      function getPokemons(){
        api.get("/pokemons?page="+pages)
        .then((resp)=>{
          console.log("Debuglist",resp)
          setPokemon(resp.data.data)
          console.log("Pokelist:",pokemons)
        })// eslint-disable-next-line
      }

      useEffect(()=>{
          getPokemons()
          nextPage()
        },[])
        

      const nextPage = ()=>{
        if (pages < 33){
          console.log(pages)
          setPage(pages+1)
          console.log(pokemons)
        }
        else{
          console.log(pages)
          setPage(1)
          console.log(pokemons)
        }
        getPokemons()
        
      }

      const prevPage = ()=>{
        if (pages > -1){
          console.log(pages)
          setPage(pages-1)
          console.log(pokemons)
        }
        getPokemons()
        
      }

      function changeBackground(){
        console.log("ALERTA")
      }

      function isLogged() {
        if (user){
          return "Sair"
        }
        else {
          return "Logar"
        }
      }

    return (
      <div className="App">
        {/* <div className="Navbar"> */}
          {/* <h1>Nav bar</h1> */}
          {/* <ul>
            <li><a href="/main">Início</a></li>
            <br/>
            <li><a href="/pokemons">Perfil</a></li>
            <br/>
            <li><a href="/login">Sair</a></li>
          </ul>
        </div> */}
        <div>
        <Titles title={"Pokedex - Home"} />
          <Navbar us={isLogged}/>
          <Hi>
            <h2>Olá {user}!</h2>
            <h1>Pokédex</h1>
          </Hi>
        </div>
        <Input type="button"  onClick={prevPage}> &larr; Página anterior </Input>
        <Input type="button" onClick={nextPage}> Próxima página &rarr; </Input>
        <br/>
        <br/>
        <Pokemon pk={pokemons} us={user}/>
        <br/>
        <Input type="button"  onClick={prevPage}> &larr; Página anterior </Input>
        <Input type="button" onClick={nextPage}> Próxima página &rarr; </Input>
      </div>
  )
}

export default Main
