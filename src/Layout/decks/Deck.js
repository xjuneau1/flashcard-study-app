import React, { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";

import Study from "./Study";
import EditDeck from "./EditDeck";
import EditCard from "../cards/EditCard";
import AddCard from "../cards/AddCard";
import DeckView from "./DeckView";

import { readDeck, deleteDeck } from "../../utils/api";

function Deck({edit}) {
  const { path, params } = useRouteMatch();
  const [deck, setDeck] = useState({});
  const history = useHistory()
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
  
  const handleDeleteDeck = () => {
    if(window.confirm("Are you sure you want to delete this deck? \n\n You will not be able to undo these changes.")){
      deleteDeck(params.deckId)
      history.push('/')
    }
  };
  
  return (
    <div className="container">
      <Switch>
        <Route exact path={path}>
          <DeckView
            deck={deck}
            handleDeleteDeck={handleDeleteDeck}
          />
        </Route>
        <Route exact path={`${path}/study`}>
          <Study deck={deck} setDeck={setDeck} pageName={"Study"} />
        </Route>
        <Route path={`${path}/edit`}>
          <EditDeck edit={edit} deck={deck} pageName={"Edit Deck"} />
        </Route>
        <Route path={`${path}/cards/new`}>
          <AddCard deck={deck} pageName={"Add Card"} />
        </Route>
        <Route path={`${path}/cards/:cardId/edit`}>
          <EditCard deck={deck} />
        </Route>
      </Switch>
    </div>
  );
}

export default Deck;
