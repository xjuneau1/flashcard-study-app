import React, { useEffect } from "react";
import DeckList from "./DeckList";
import { NavLink, Switch, Route } from "react-router-dom";
import { listDecks } from "../../utils/api";

function Home({ decks, setDecks }) {
  useEffect(() => {
    async function getDecks() {
      listDecks()
        .then((data) => setDecks(data))
        .then(console.log(decks));
    }
    getDecks();
  }, []);
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <NavLink
            className="btn-primary rounded p-2 text-decoration-none"
            to="/decks/new"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            Create Deck
          </NavLink>
          <DeckList decks={decks} setDecks={setDecks} />
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
