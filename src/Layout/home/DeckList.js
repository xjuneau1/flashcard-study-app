import React from "react";
import { NavLink } from "react-router-dom";
import { deleteDeck } from "../../utils/api";

function DeckList({decks}) {

  const handleDeleteDeck = (event) => {
    if(window.confirm('Delete this deck? You will not be able to recover it.')){
      deleteDeck(event.target.parentNode.parentNode.id);
    }
  };

  return (
    <div>
      {decks.map((deck, index) => {
        return (
          <div className="card d-flex mt-3" key={index} id={deck.id}>
            <div className="card-body">
              <h3 className="card-title">{deck.name}</h3>
              <h6>{deck.cards.length} cards</h6>
              <p className="card-text">{deck.description}</p>
              <NavLink className="badge-secondary rounded p-2 text-decoration-none" to={`/decks/${deck.id}`}>View</NavLink>
              <NavLink className='badge-primary rounded p-2 ml-4 text-decoration-none' to={`/decks/${deck.id}/study`}>Study</NavLink>
              <button className="btn-danger rounded p-1 ml-4" onClick={handleDeleteDeck}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeckList;
