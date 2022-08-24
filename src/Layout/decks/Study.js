import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import Breadcrumb from "../Breadcrumb";

function Study({ deck, pageName }) {
  const [card, setCard] = useState(0);
  const [side, setSide] = useState(true);
  const history = useHistory();

  const handleChangeCard = () => {
    if (card === deck.cards.length - 1) {
      window.confirm("Reset Deck?\n\n Click 'cancel' to return home")
        ? setCard(0)
        : history.push("/");
    } else {
      setCard(card + 1);
      setSide(!side);
    }
  };
  const handleChangeSide = () => {
    setSide(!side);
  };

  if (Object.keys(deck).length) {
    if (deck.cards.length < 2 ) {
      return (
        <div>
          <Breadcrumb deck={deck} pageName="Study" />
          <div className="mt-3">
            <h2>Not Enough Cards</h2>
            <p className="mb-4">
              You need at least 2 cards to study. There are {deck.cards.length} cards
              in this deck.
            </p>
            <NavLink
              className="badge-primary rounded p-2 mt-3"
              to={`/decks/${deck.id}/cards/new`}
            >
              Add Cards
            </NavLink>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Breadcrumb deck={deck} pageName={pageName} />
        <h3 className="card-title">{deck.name}: Study</h3>
        <div className="card">
          <div className="card-body">
            <div className="card-subtitle">
              Card {card + 1} of {deck.cards.length}
            </div>
            <div className="card-text mt-3 mb-3">
              {side ? deck.cards[card].front : deck.cards[card].back}
            </div>
            <button
              className="btn-secondary rounded mr-3"
              onClick={handleChangeSide}
            >
              Flip
            </button>
            {!side ? (
              <button
                className="btn-primary rounded"
                onClick={() => {
                  handleChangeCard();
                  handleChangeSide();
                }}
              >
                Next
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Study;
