import './App.css';
import Main from "./pages/main/main";
import Login from "./pages/login/login";
import Pokemons from './pages/pokemons/pokemons';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/pokemons">
          <Pokemons/>
        </Route>
        <Route path="/">
          <Main/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
