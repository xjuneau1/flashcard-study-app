import React, {useState} from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./home/Home";
import CreateDeck from "./decks/CreateDeck"
import Deck from "./decks/Deck"
import { Switch, Route } from "react-router-dom";

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

        <Route path="/decks/new">
            <CreateDeck decks={decks} pageName={'Create Deck'}/>
        </Route>

        <Route path="/decks/:deckId">
            <Deck />
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
