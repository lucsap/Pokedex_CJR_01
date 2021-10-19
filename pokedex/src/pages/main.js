import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokemon from '../components/Pokemon';

function Main(){
      const [pages,setPage] = useState(1)
      const [pokemons,setPokemon] = useState([])

      async function getPokemons(){
        axios.get("https://pokedex20201.herokuapp.com/pokemons?page="+pages)
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

    return(
    <div className="App">
      <h1>Pokedex</h1>
      <Pokemon pk={pokemons}/>
      <br/>
      <input type="button" value="Next Page" onClick={nextPage}/>
      <h1>{pages-1}</h1>
    </div>
  )
}

export default Main
