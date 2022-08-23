import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Study({ deck }) {
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
    return (
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
    );
  } else {
    return null;
  }
}

export default Study;
