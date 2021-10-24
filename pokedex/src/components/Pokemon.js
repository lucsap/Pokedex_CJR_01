import { useState } from "react"
import styled from "styled-components"

const Li = styled.li`
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

    // reestruturar html

    return (
      <>
        {props.pk.map(
          (pkm)=>
            <Li
            onClick={Alerta} onMouseEnter={() => setPokeId(pkm.id)} onMouseLeave={() => setPokeId(0)} 
            pkidhover={pokeId} pkid={pkm.id} rd={radius} kindcol={type_color}
            kindp={pkm.kind.split(";")}
            >
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
