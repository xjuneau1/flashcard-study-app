import React, { useState } from "react";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";

import Breadcrumb from "./Breadcrumb";

function Study({ deck, pageName }) {
  const [card, setCard] = useState(0);
  const [side, setSide] = useState(true);
  const history = useHistory();
  const {path} = useRouteMatch()
  console.log(path)

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
          <h2>Not Enough Cards</h2>
          <p>
            You need at least 3 cards to study. There are {deck.cards.length} in
            this deck.
          </p>
          <NavLink to={`/decks/${deck.id}/cards/new`}>Add</NavLink>
        </div>
      );
    }

    return (
      <div>
        <Breadcrumb deck={deck} pageName={pageName} />
        <div>
          <div>Study: {deck.name}</div>
          <div>
            <div>
              Card {card + 1} of {deck.cards.length}
            </div>
            <div>{side ? deck.cards[card].front : deck.cards[card].back}</div>
            <button onClick={handleChangeSide}>Flip</button>
            {!side ? (
              <button
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
