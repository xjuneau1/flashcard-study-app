import React from "react";
import { NavLink, useParams } from "react-router-dom";

import Breadcrumb from "../Breadcrumb";

function DeckView({ deck, handleDeleteCard, handleDeleteDeck }) {
  const { path } = useParams();
  return (
    <div className="container">
      <Breadcrumb deck={deck} />
      <h1>{deck.name}</h1>
      <p>{deck.description}</p>
      <NavLink className="mr-1" to={`/decks/${deck.id}/edit`}>
        Edit
      </NavLink>
      <NavLink className="mr-1" to={`/decks/${deck.id}/study`}>
        Study
      </NavLink>
      <NavLink to={`/decks/${deck.id}/cards/new`}>Add Cards</NavLink>
      <button onClick={handleDeleteDeck}>Delete Deck</button>
      {Object.keys(deck).length
        ? deck.cards.map((card, index) => {
            if (!card.cards) {
              return (
                <div className="d-flex border" key={index}>
                  <div className="">
                    <h6>{card.front}</h6>
                  </div>
                  <div className="column">
                    <h6>{card.back}</h6>
                    <NavLink to={`${path}/cards/${card.id}/edit`}>Edit</NavLink>
                    <button onClick={handleDeleteCard}>Delete</button>
                  </div>
                </div>
              );
            }
          })
        : null}
    </div>
  );
}

export default DeckView;
