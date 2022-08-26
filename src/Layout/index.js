import React, {useState} from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./home/Home";
import CreateDeck from "./decks/CreateDeck"
import Deck from "./decks/Deck"
import { Switch, Route } from "react-router-dom";

function Layout() {
  const [decks, setDecks] = useState([]);
  const [toggle, setToggle] = useState(true)
  const edit = true
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
            <CreateDeck edit={edit} toggle={toggle} decks={decks} setDecks={setDecks}/>
        </Route>

        <Route path="/decks/:deckId">
            <Deck edit={edit} />
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
