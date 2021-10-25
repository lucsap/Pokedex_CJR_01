import { useState } from "react"
import { CgPokemon } from 'react-icons/cg';
import api from "../resources/api";
import { Li , Line , Button } from "./style_pokemon";

function Pokemon(props){
  const type_color = {
    "bug": "#7ED578",
    "electric": "#FFF34B",
    "fairy": "#FF7EE5",
    "fighting": "#F17373",
    "fire": "#FFB433",
    "flying": "#D7F1E9",
    "ghost": "#E2E2E2",
    "grass": "#5EFF53",
    "ground": "#AA8546",
    "ice": "#AEE3FB",
    "normal": "#D7DBA8",
    "poison": "#CE52F9",
    "psychic": "#FFC157",
    "rock": "#757575",
    "steel": "#A1A1A1",
    "water": "#7192FF",
    "dragon": "#43372D",
    "dark": "#707070"
}

const [radius, setRadius] = useState(30);
const [pokeId,setPokeId] = useState(0);
const user = localStorage.getItem('user'); // tem o usuário logado
const [fvpkm, setFvpkm] = useState([])

function Alerta(){
      console.log("ALERTA")
    }
    
    function splitKind(pkm){
      var temp = pkm.kind.split(";")
      if (temp.length > 1){
        return (
          <>
            <Line bg={type_color[temp[0]]} pkidhover={pokeId} pkid={pkm.id}> {temp[0]} </Line>
            <Line bg={type_color[temp[1]]} pkidhover={pokeId} pkid={pkm.id}> {temp[1]} </Line>
          </>
        )}
      else{
        return(
            <Line bg={type_color[temp[0]]} pkidhover={pokeId} pkid={pkm.id}> {temp[0]} </Line>
        )
      }
    }

    // reestruturar html - llIIIIlllIIlIlIlllIlIIl

    function getFavPokemons(){
      api.get("https://pokedex20201.herokuapp.com/users/"+user)
      .then((resp)=>{
        console.log("Debuglist",resp)
        setFvpkm(resp.data.pokemons)
        console.log("Pokelist:",fvpkm)
      })// eslint-disable-next-line
    }

    function unfav(name){
      api.delete("https://pokedex20201.herokuapp.com/users/"+props.us+"/starred/"+name)
        .then((resp)=>{
            window.alert('Você deixou seu '+name+' ir embora...')
        }).catch((error)=>(console.log()))
      }

    function favorite(name) {
      // check for pokemon
      getFavPokemons()
      fvpkm.map(
        (favor)=>{
          if (name==favor.name){
            return unfav(name)
          }
        }
      )
      console.log(name)
      api.post("https://pokedex20201.herokuapp.com/users/"+props.us+"/starred/"+name)
        .then((resp)=>{
            window.alert('Você capturou um '+name+' selvagem')
        }).catch((error)=>(console.log()))
    }

    return (
      <>
        {props.pk.map(
          (pkm)=>
            <Li
            onMouseEnter={() => setPokeId(pkm.id)} onMouseLeave={() => setPokeId(0)} 
            pkidhover={pokeId} pkid={pkm.id} rd={radius} kindcol={type_color}
            kindp={pkm.kind.split(";")}
            >
            <Button onClick={()=>favorite(pkm.name)}>
              <CgPokemon size="17px" color={"white"} title="favoritar"/>
            </Button>
            {pkm.name}
            <br/>
            <img src={pkm.image_url}/>
            <br/>
            <li>{splitKind(pkm)}</li>
          </Li>
          
        )}
      </>
    )
    
}

export default Pokemon
