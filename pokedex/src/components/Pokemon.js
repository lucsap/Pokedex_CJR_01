import styled from "styled-components"
//import LinearGradient from "react-native-linear-gradient"

const Li = styled.li`
  width: 180px;
  margin-left: auto;
  margin-right: 15px;
  border-radius: ${props => `${props.rd}px`};
  margin-bottom: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  background: rgb(196, 196, 197);
  list-style-type: none;
  display: inline-block;
  border-color: white;
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
  background: ${props => `${props.bg}`};
  list-style-type: none;
`

const Div = styled.div`
  display: inline-block;
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
    function Alerta(){
      console.log("ALERTA")
    }
    
    var radius = 30

    function getKind(pkm){
      var temp = pkm.kind.split(";")
      if (temp.length > 1){
        return type_color[temp[0]]
      }
      else{
        return type_color[pkm.kind]
      }
    }
    
    function splitKind(pkm){
      var temp = pkm.kind.split(";")
      if (temp.length > 1){
        return (
          <>
            <Line bg={type_color[temp[0]]}>{temp[0]}</Line>
            <Line bg={type_color[temp[1]]}>{temp[1]}</Line>
          </>
        )}
      else{
        return(
            <Line bg={type_color[temp[0]]}>{temp[0]}</Line>
        )
      }
    }

    // reestruturar html

    return(
      <>
        {props.pk.map(
          (pkm)=>
          <Li onClick={Alerta} onMouseOver={Alerta} rd={radius}>

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
