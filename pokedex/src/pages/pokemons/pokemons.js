import Titles from '../../components/helmet'
import Navbar from '../../components/navbar'
import Pokemon from '../../components/Pokemon'
import api from '../../resources/api';
import { Hi } from '../main/styles_main';


import { useState,useEffect } from 'react'

export default function Pokemons(props) {
    const [fvpkm, setFvpkm] = useState([])
    const user = localStorage.getItem('user'); // tem o usuário logado

    function getFavPokemons(){
        api.get("/users/"+user)
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
            <Hi>
              <h1>Seus Pokemons</h1>
            </Hi>
            <Pokemon pk={fvpkm}/>
        </div>
    )
}
