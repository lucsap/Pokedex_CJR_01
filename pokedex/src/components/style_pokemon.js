import styled from "styled-components"
import { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Li = styled.button`
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

export const Line = styled.line`
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

export const Button = styled.div`
  background: rgba(255, 165, 0, 0.00);
  border-color: rgba(255, 165, 0, 0.00);
  &:hover{
    animation: ${rotate} 2s linear infinite;
  }
`
