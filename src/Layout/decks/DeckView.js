import React from "react";
import { NavLink } from "react-router-dom";

import Breadcrumb from "../Breadcrumb";
import { deleteCard } from "../../utils/api";
function DeckView({ deck, handleDeleteDeck }) {

  return (
    <div className="container">
      <Breadcrumb deck={deck} />
      <div>
        <h4>{deck.name}</h4>
        <p>{deck.description}</p>
        <NavLink
          className="badge-secondary rounded p-2 mr-2 text-decoration-none"
          to={`/decks/${deck.id}/edit`}
        >
          Edit
        </NavLink>
        <NavLink
          className="badge-primary rounded mr-2 p-2 text-decoration-none"
          to={`/decks/${deck.id}/study`}
        >
          Study
        </NavLink>
        <NavLink
          className="badge-primary rounded mr-4 p-2 text-decoration-none"
          to={`/decks/${deck.id}/cards/new`}
        >
          Add Cards
        </NavLink>
        <button className="btn-danger rounded p-1" onClick={handleDeleteDeck}>
          Delete Deck
        </button>
      </div>
      {Object.keys(deck).length
        ? deck.cards.map((card, index) => {
            if (!card.cards) {
              return (
                <div className="d-flex border mt-4 p-4" key={index}>
                  <div className="align-center mr-4 w-50">
                    <p>{card.front}</p>
                  </div>
                  <div className="column w-50">
                    <p>{card.back}</p>
                    <NavLink
                      className="badge-secondary rounded p-2 mr-2 text-decoration-none"
                      to={`/decks/${deck.id}/cards/${card.id}/edit`}
                    >
                      Edit
                    </NavLink>
                    <button
                      className="btn-danger rounded p-1"
                      onClick={async ()=>{
                          if(window.confirm("Delete this Card? You will not be able to recover it.")){
                            await deleteCard(card.id)
                            window.location.reload(true)
                          }
                      }}
                    >
                      Delete
                    </button>
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
