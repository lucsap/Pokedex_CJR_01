import './App.css';
import Main from "./pages/main";
import Profile from "./pages/profile";
import Login from "./pages/login"
import Pokemons from './pages/pokemons';

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
