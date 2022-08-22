import React, {useState} from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./home/Home";
import Decks from "./decks/Decks";
import { Switch, Route, NavLink } from "react-router-dom";

function Layout() {
  const [decks, setDecks] = useState([]);
  return (
    <div>
      <Header />
      <Switch>

        <Route exact path="/">
          <div className="container">
            <Home decks={decks} setDecks={setDecks} />
          </div>
        </Route>
        <Route path="/decks">
            <Decks />
        </Route>
        <Route>
          <div className="container text-center">
            <NotFound />
          </div>
        </Route>

      </Switch>
    </div>
  );
}

export default Layout;
