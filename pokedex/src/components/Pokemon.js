import { useState } from "react"
import styled from "styled-components"
import { CgPokemon } from 'react-icons/cg';
import api from "../resources/api";

const Li = styled.button`
    width: 180px;
    margin-left: auto;
    margin-right: 15px;
    border-radius: ${props => `${(props.pkid==props.pkidhover ? 50 : 10)}px`};
    margin-bottom: 16px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-image: linear-gradient(-45deg,${props => props.pkid==props.pkidhover ? (`${props.kindcol[props.kindp[0]]},${(props.kindp.length==2 ? props.kindcol[props.kindp[1]] : props.kindcol[props.kindp[0]])}`): `${"#2d2d2d"},${"#2d2d2d"}`});
    list-style-type: none;
    display: inline-block;
    border-color: #8d7272;
    border-style: ${props => `${(props.pkid==props.pkidhover ? "none ": "dashed")}`};
    border-width: 0.05cm;
`

const Line = styled.line`
  width: 180px;
  margin-left: auto;
  margin-right: 15px;
  border-radius: 5px;
  margin-bottom: 16px;
  padding-left: 5px;
  padding-top: 1px;
  padding-right: 5px;
  padding-bottom: 4px;
  background: ${props => `${props.pkid==props.pkidhover ? null : props.bg}`};
  list-style-type: none;
`

const Button = styled.button`
  background: rgba(255, 165, 0, 0.00);
  border-color: rgba(255, 165, 0, 0.00);
`

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
