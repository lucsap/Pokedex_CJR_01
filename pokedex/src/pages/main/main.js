import api from '../../resources/api';
import { useEffect, useState } from 'react';
import Pokemon from '../../components/Pokemon';
import Titles from '../../components/helmet';
import Navbar from '../../components/navbar';

function Main(){
      const [pages,setPage] = useState(1)
      const [pokemons,setPokemon] = useState([])
      const user = localStorage.getItem('user'); // tem o usuário logado

      // Pegar usuários
      useEffect(()=>{
        const resp = api.get("/users/")
        console.log(resp)
      }, [])

      async function getPokemons(){
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

      function changeBackground(){
        console.log("ALERTA")
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
          <Navbar />
          <h2>Olá {user}!</h2>
        </div>
        <Titles title={"Pokedex - Home"} />
        <h1>Pokédex</h1>
        <Pokemon pk={pokemons}/>
        <br/>
        <input type="button" value="Next Page" onClick={nextPage}/>
        <h1>{pages-1}</h1>
      </div>
  )
}

export default Main
