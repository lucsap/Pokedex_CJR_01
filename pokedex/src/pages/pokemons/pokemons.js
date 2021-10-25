import Titles from '../../components/helmet'
import Navbar from '../../components/navbar'
import Pokemon from '../../components/Pokemon'
import api from '../../resources/api';

import { useState,useEffect } from 'react'

export default function Pokemons(props) {
    const [fvpkm, setFvpkm] = useState([])
    const user = localStorage.getItem('user'); // tem o usuário logado

    function getFavPokemons(){
        api.get("https://pokedex20201.herokuapp.com/users/"+user)
        .then((resp)=>{
          console.log("Debuglist",resp)
          setFvpkm(resp.data.pokemons)
          console.log("Pokelist:",fvpkm)
        })// eslint-disable-next-line
    }
    
    useEffect(()=>{
      getFavPokemons()
    },[])

    return (
        <div className="App">
            <Titles title={"Pokémons favoritos"} />
            <Navbar />
            <h1>Seus Pokemons</h1>
            <Pokemon pk={fvpkm}/>
        </div>
    )
}
