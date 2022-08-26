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
    if (deck.cards.length < 2) {
      return (
        <div>
          <Breadcrumb deck={deck} pageName="Study" />
          <div className="mt-3">
            <h2>Not Enough Cards</h2>
            <p className="mb-4">
              You need at least 2 cards to study. There are {deck.cards.length}{" "}
              cards in this deck.
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
        <h3 className="mt-2">{deck.name}: Study</h3>
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
              Flip{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-arrow-90deg-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"
                />
              </svg>
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
