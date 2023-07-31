import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";

import AllCats from "./components/AllCats/AllCats";
import AddCats from "./components/AddCats/AddCats";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Início
                </NavLink>
              </li>
              <li>
                <NavLink to="/allcats">Gatinhos para Adoção</NavLink>
              </li>
              <li>
                <NavLink to="/addcats">Cadastro de Gatinhos</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/allcats">
              <AllCats />
            </Route>
            <Route path="/addcats">
              <AddCats />
            </Route>
            <Route path="*">
              <h1>404</h1>
              <p>Página não encontrada!</p>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
