import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { deleteDeck } from "../../utils/api";

function DeckList({decks, setDecks}) {

  const handleDeleteDeck = (event) => {
    if(window.confirm('Delete this deck? You will not be able to recover it.')){
      deleteDeck(event.target.parentNode.parentNode.id);
    }
  };

  return (
    <div>
      {decks.map((deck, index) => {
        return (
          <div className="card d-flex" key={index} id={deck.id}>
            <div className="card-body">
              <h3 className="card-title">{deck.name}</h3>
              <h6>{deck.cards.length} cards</h6>
              <p className="card-text">{deck.description}</p>
              <NavLink to={`/decks/${deck.id}`}>View</NavLink>
              <NavLink className='ml-4' to={`/decks/${deck.id}/study`}>Study</NavLink>
              <button className="btn-danger rounded ml-4" onClick={handleDeleteDeck}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeckList;
