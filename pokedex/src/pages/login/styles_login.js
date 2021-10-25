import styled from 'styled-components'

export const LoginStyles = styled.h1`
  color: white;
  margin-top: 10rem;
  text-align: center;
  align-content: center;
  display: inline-block;
  width: 100%;
`;

export const LoginLabel = styled.div`
  color: white;
`
export const Input = styled.input`
  border-radius: 0.3rem;
  margin: 1em;
`

export const LoginButton = styled.div`
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
    background-color: black;
    color: white;
  }
`;

export const Contents = styled.div`
  text-align: center;
`;
