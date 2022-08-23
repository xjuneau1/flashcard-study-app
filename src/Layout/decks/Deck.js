import React, { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";

import Study from "./Study";
import EditDeck from "./EditDeck";
import EditCard from "../cards/EditCard";
import AddCard from "../cards/AddCard";
import Breadcrumb from "./Breadcrumb";

import { readDeck } from "../../utils/api";

function Deck() {
  const { path, params } = useRouteMatch();
  const [deck, setDeck] = useState({});

  useEffect(() => {
    async function getDeckById() {
      try {
        setDeck(await readDeck(params.deckId));
      } catch (error) {
        console.log(error);
      }
    }
    getDeckById();
  }, [params.deckId]);

  return (
    <div className="container">
      <Switch>
        <Route exact path={path}>
          <div className="container">
            <Breadcrumb deck={deck} />
            <h1>{deck.name}</h1>
            <p>{deck.description}</p>
            <NavLink to={`/decks/${deck.id}/edit`}>Edit</NavLink>
            <NavLink to="">Study</NavLink>
            <NavLink to="">Add Cards</NavLink>
          </div>
        </Route>
        <Route exact path={`${path}/study`}>
          <Study deck={deck} setDeck={setDeck} pageName={"Study"} />
        </Route>
        <Route path={`${path}/edit`}>
          <EditDeck deck={deck} pageName={"Edit Deck"} />
        </Route>
        <Route path={`${path}/cards/new`}>
          <AddCard deck={deck} pageName={"Add Card"} />
        </Route>
        <Route path={`${path}/cards/:cardId/edit`}>
          <EditCard deck={deck} pageName={"Edit Card"} />
        </Route>
      </Switch>
    </div>
  );
}

export default Deck;
